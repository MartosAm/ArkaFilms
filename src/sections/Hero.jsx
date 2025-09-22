import React from 'react';
import { motion } from 'framer-motion';
import heroBackground from '../assets/background.png';

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
  </svg>
);

const Hero = () => {
  return (
    <motion.section
      id="home"
      style={{ backgroundImage: `url(${heroBackground})` }}
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat text-texto-claro p-6 pt-20"
    >
      {/* Capa de superposición para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-acento/80 z-0" />

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 bg-principal text-secundario rounded-full text-lg font-semibold shadow-lg">
              PRODUCCIÓN AUDIOVISUAL PROFESIONAL
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3">
            <span className="text-secundario">ARKA</span>
            <span className="text-principal">FILMS</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-secundario mb-8">
            Transformamos ideas en experiencias visuales cautivadoras
          </h2>
          <p className="text-lg leading-relaxed mb-10 text-secundario max-w-3xl mx-auto">
            Somos un estudio creativo especializado en producción de video, fotografía profesional y diseño gráfico. 
            Con experiencia a naviel nacional, creamos contenido visual que impulsa marcas y cautiva audiencias.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="#services"
              className="bg-principal text-secundario font-bold py-4 px-8 rounded-lg hover:bg-opacity-90 transition-all shadow-lg transform hover:-translate-y-1"
            >
              Nuestros Servicios
            </a>
            <a
              href="#contact"
              className="bg-secundario text-principal font-bold py-4 px-8 rounded-lg hover:bg-opacity-90 transition-all shadow-lg transform hover:-translate-y-1 flex items-center justify-center"
            >
              <PlayIcon /> Contactanos
            </a>
          </div>

          {/* Stats Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-10 text-secundario"
          >
            <div>
              <p className="text-4xl font-bold">Proyectos</p>
              <p className="text-sm opacity-80">40+</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-secundario/30"></div>
            <div>
              <p className="text-4xl font-bold">Multimedia</p>
              <p className="text-sm opacity-80"></p>
            </div>
            <div className="hidden md:block w-px h-16 bg-secundario/30"></div>
            <div>
              <p className="text-4xl font-bold">Satisfacción</p>
              <p className="text-sm opacity-80">98%</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;