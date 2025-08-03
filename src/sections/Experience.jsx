import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Fotógrafo Principal',
    company: 'Lumina Studios',
    dates: '2018 - Presente',
    achievements: [
      'Lideré proyectos de video para marcas nacionales, aumentando el engagement en un 40%.',
      'Dirigí sesiones de fotografía de producto que se publicaron en revistas de renombre.',
    ],
  },
  {
    role: 'Editor de Video Freelance',
    company: '',
    dates: '2016 - 2018',
    achievements: [
      'Edité más de 50 cortometrajes y videos musicales para clientes internacionales.',
      'Optimicé el flujo de trabajo de postproducción, reduciendo los tiempos de entrega en un 25%.',
    ],
  },
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="max-w-4xl mx-auto px-6 py-16 bg-principal text-secundario"
    >
      <h2 className="text-3xl font-semibold mb-10 border-b border-gray-600 pb-2">Experiencia</h2>
      <div className="space-y-10">
        {experiences.map(({ role, company, dates, achievements }, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-bold">
              {role} {company && <span className="text-acento">| {company}</span>}
            </h3>
            <p className="text-gray-400 italic mb-3">{dates}</p>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              {achievements.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;

