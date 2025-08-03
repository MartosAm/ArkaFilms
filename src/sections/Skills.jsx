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
      className="max-w-6xl mx-auto px-6 py-16 bg-secundario text-principal"
    >
      <h2 className="text-3xl font-semibold mb-10 border-b border-gray-400 pb-2">Habilidades y Herramientas</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div 
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 text-acento">{category}</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
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
    </motion.section>
  );
};

export default Skills;
