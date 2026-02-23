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
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-acento pt-20"
    >
      {/* Dynamic Background Image & Blur layer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-acento/95 via-acento/80 to-principal/20 z-0" />

      {/* Decorative Blob Animations for depth */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-principal/30 rounded-full mix-blend-screen filter blur-[80px] animate-blob z-0" />
      <div className="absolute top-40 -right-20 w-72 h-72 bg-red-600/20 rounded-full mix-blend-screen filter blur-[80px] animate-blob animation-delay-2000 z-0" />
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-principal/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000 z-0" />

      <div className="relative z-10 flex flex-col items-center px-4 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.1 }
            }
          }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { type: 'spring', bounce: 0.5 } }
            }}
            className="mb-8"
          >
            <span className="inline-block px-8 py-2.5 bg-principal/10 backdrop-blur-md border border-principal/30 text-principal rounded-full text-sm font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(211,0,0,0.3)]">
              PRODUCCIÓN AUDIOVISUAL PROFESIONAL
            </span>
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 tracking-tighter"
          >
            <span className="text-secundario inline-block">ARKA</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-principal to-red-500 inline-block drop-shadow-lg">FILMS</span>
          </motion.h1>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="text-2xl md:text-3xl font-light text-secundario/90 mb-8 max-w-2xl mx-auto"
          >
            Transformamos ideas en experiencias visuales cautivadoras
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8, delay: 0.6 } }
            }}
            className="text-lg md:text-xl leading-relaxed mb-12 text-secundario/70 max-w-3xl mx-auto"
          >
            Somos un estudio creativo especializado en producción de video, fotografía profesional y diseño gráfico.
            Con experiencia a nivel nacional, creamos contenido visual que impulsa marcas y cautiva audiencias.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.8 } }
            }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href="#services"
              className="group relative px-8 py-4 bg-principal text-secundario font-bold rounded-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(211,0,0,0.4)] hover:shadow-[0_0_30px_rgba(211,0,0,0.6)]"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10">Nuestros Servicios</span>
            </a>
            <a
              href="#contact"
              className="group px-8 py-4 bg-secundario/10 backdrop-blur-sm border border-secundario/20 text-secundario font-bold rounded-lg hover:bg-secundario hover:text-acento transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              <span className="group-hover:text-principal transition-colors mr-2"><PlayIcon /></span>
              <span>Contáctanos</span>
            </a>
          </motion.div>

          {/* Stats Banner */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1.2 } }
            }}
            className="mt-24 pt-10 border-t border-secundario/10 flex flex-wrap justify-center md:justify-around gap-10 text-secundario max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center">
              <p className="text-5xl font-black text-principal drop-shadow-md">40+</p>
              <p className="text-sm font-medium tracking-widest text-secundario/60 uppercase mt-2">Proyectos</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-secundario/30"></div>
            <div className="flex flex-col items-center">
              <p className="text-5xl font-black text-principal drop-shadow-md">200+</p>
              <p className="text-sm font-medium tracking-widest text-secundario/60 uppercase mt-2">Multimedia</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-secundario/30"></div>
            <div>
              <div className="flex flex-col items-center">
                <p className="text-5xl font-black text-principal drop-shadow-md">98%</p>
                <p className="text-sm font-medium tracking-widest text-secundario/60 uppercase mt-2">Satisfacción</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;