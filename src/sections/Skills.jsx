import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  'Fotografía y Video': [
    'Fotografía de Retrato',
    'Fotografía de Producto',
    'Cinematografía',
    'Iluminación de Estudio',
    'Manejo de Drones',
  ],
  'Herramientas de Edición': [
    'Adobe Photoshop',
    'Adobe Lightroom',
    'Adobe Premiere Pro',
    'Final Cut Pro',
    'DaVinci Resolve',
  ],
  'Habilidades Profesionales': [
    'Dirección Creativa',
    'Gestión de Proyectos',
    'Comunicación con Clientes',
  ],
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full px-6 py-20 bg-principal  text-texto-primary overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-texto-primary">Habilidades y Herramientas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-secundario rounded-xl shadow-lg p-8 border border-acento/20"
            >
              <h3 className="text-xl font-bold mb-4 text-acento">{category}</h3>
              <ul className="list-disc list-inside space-y-2 text-texto-secondary">
                {items.map((skill, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
