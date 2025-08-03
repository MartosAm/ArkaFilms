import React from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Gallery from './sections/Gallery';
import Footer from './sections/Footer';

const App = () => {
  return (
    <div className="font-sans bg-principal text-secundario min-h-screen pt-16">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;
