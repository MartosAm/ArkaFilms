import React, { Suspense, lazy } from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';

// Lazy load components
const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Gallery = lazy(() => import('./sections/Gallery'));
const Services = lazy(() => import('./sections/Services'));
const Process = lazy(() => import('./sections/Process'));
const Logros = lazy(() => import('./sections/Logros'));
const Contact = lazy(() => import('./sections/Contact'));
const Footer = lazy(() => import('./sections/Footer'));

// Full screen loader for suspense fallback
const SectionLoader = () => (
  <div className="w-full flex items-center justify-center p-20 min-h-[400px]">
    <div className="w-12 h-12 rounded-full border-4 border-secundario/20 border-t-principal animate-spin"></div>
  </div>
);
const App = () => {
  return (
    <div className="font-body bg-background text-text-primary min-h-screen">
      <Header />
      <div className="h-8" />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <About />
          <Services />
          <Gallery />
          <Process />
          <Logros />
          <Skills />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
