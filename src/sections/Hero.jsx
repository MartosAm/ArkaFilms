import React from 'react';
import { motion } from 'framer-motion';
import heroBackground from '../assets/background.png';

const Hero = () => {
  return (
    <motion.section
      id="home"
      style={{ backgroundImage: `url(${heroBackground})` }}
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat text-texto-primary"
      aria-labelledby="hero-title"
    >
      {/* Capa de superposición para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-principal/80 z-0" aria-hidden="true" />

      <div className="relative container mx-auto px-6 md:px-12 z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="max-w-xl text-left"
        >
          <h1 id="hero-title" className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3">
            Asdrubal Vela
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-texto-secondary mb-5">
            Fotógrafo y Videógrafo Profesional
          </h2>
          <p className="text-lg leading-relaxed mb-8 text-texto-secondary">
            Apasionado por capturar momentos que cuentan historias. Con más de 8 años de experiencia, me especializo en fotografía de retrato y producción de cortometrajes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#gallery"
              className="bg-acento text-principal font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors text-center shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Galería
            </motion.a>
            <motion.a
              href="#contact"
              className="bg-transparent border-2 border-acento text-acento font-bold py-3 px-8 rounded-lg hover:bg-acento hover:text-principal transition-colors text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contáctame
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;