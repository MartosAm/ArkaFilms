import React from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Gallery from './sections/Gallery';
import Services from './sections/Services';
import Process from './sections/Process';
import Logros from './sections/Logros';
// import VideoClips from './sections/VideoClips'; // Temporalmente deshabilitado
import Contact from './sections/Contact';
import Footer from './sections/Footer';


const App = () => {
  return (
    <div className="font-body bg-background text-text-primary min-h-screen">
      <Header />
      <div className="h-8" />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Process />
        <Logros />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
