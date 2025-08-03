import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import background from '../assets/background.webp';
import { FloatingHero } from './FloatingHero';

const iconClasses = "w-6 h-6 text-acento hover:text-secundario transition-colors duration-300";

const Hero = () => {

  return (
    <motion.section
      id="portfolio"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative min-h-screen flex flex-col justify-center text-secundario overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-2 text-white">Asdrubal Vela</h1>
            <h2 className="text-xl font-semibold mb-6 text-gray-300">
              Fotógrafo y Videógrafo Profesional | Lic. en Comunicación Audiovisual
            </h2>
            <p className="mb-8 max-w-3xl leading-relaxed text-gray-400">
              Apasionado por capturar momentos que cuentan historias. Con más de 8 años de experiencia, me especializo en fotografía de retrato y producción de cortometrajes, combinando técnica artística con equipo de última generación para entregar resultados que superan las expectativas.
            </p>
            <div className="flex space-x-6">
              <p className="mb-8 max-w-3xl leading-relaxed text-black-400">
                    Asdrubal.Vela@gmail.com
              </p>
              <a href="mailto:alejandro.vargas.photo@email.com" aria-label="Email" className="hover:text-secundario">
                <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m0 0l4-4m-4 4l4 4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/alejandro-vargas" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-secundario">
                <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.8V24h-5v-7.5c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 2-2.9 4v7.6h-5V8z" />
                </svg>
              </a>
              
            </div>
          </div>
          <div className="relative h-64 w-full">
            {/* 3D model removed due to missing .glb file */}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

