import React from 'react';
import { motion } from 'framer-motion';
import heroBackground from '../assets/background.png';

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

const Hero = () => {
  return (
    <motion.section
      id="home"
      style={{ backgroundImage: `url(${heroBackground})` }}
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat text-texto-primary p-6"
    >
      {/* Capa de superposición para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-principal/80 z-0" />

      <div className="relative z-10 flex flex-col items-center" style={{ marginTop: '-38vh' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3">
            Asdrubal Vela
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-texto-secondary mb-5">
            Fotógrafo y Videógrafo Profesional
          </h2>
          <p className="text-lg leading-relaxed mb-8 text-texto-secondary">
            Apasionado por capturar momentos que cuentan historias. Con más de 2 años de experiencia, me especializo en fotografía de retrato y producción de cortometrajes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#gallery"
              className="bg-acento text-principal font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors text-center shadow-lg"
            >
              Ver Galería
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-acento text-acento font-bold py-3 px-8 rounded-lg hover:bg-acento hover:text-principal transition-colors text-center"
            >
              Contáctame
            </a>
          </div>

          {/* Email Display */}
          <div className="mt-10 text-center">
            <p className="text-texto-secondary flex items-center justify-center">
              <MailIcon />
              asdrubal.vela@gmail.com
            </p>
          </div>

        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;