import React from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Gallery from './sections/Gallery';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App = () => {
  return (
    <div className="font-body bg-background text-text-primary min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
