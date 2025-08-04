import React from 'react';
import { motion } from 'framer-motion';
import image3D from '../assets/3D.webp'; // Importar la imagen

const educationData = [
  {
    degree: 'Licenciatura en Comunicación Audiovisual',
    institution: 'Universidad de las Artes Digitales',
    period: '2016 - 2020',
    description: 'Formación integral en producción de video, guionismo, y dirección de fotografía, sentando las bases de mi carrera creativa.',
  },
  {
    degree: 'Edición y Postproducción Avanzada',
    institution: 'Academia de Creatividad Digital',
    period: '2021',
    description: 'Especialización en software de edición como Adobe Premiere Pro y DaVinci Resolve, con enfoque en corrección de color y montaje narrativo.',
  },
  {
    degree: 'Fotografía de Retrato e Iluminación',
    institution: 'Estudio Luz Creativa',
    period: '2022',
    description: 'Curso intensivo sobre técnicas de iluminación de estudio y en exteriores para fotografía de retrato, dominando la luz para crear atmósferas únicas.',
  },
];

const Education = () => {
  return (
    <motion.section
      id="education"
      className="w-full px-6 py-20 bg-principal text-texto-secondary overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-texto-primary"
        >
          Educación y Formación
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Columna de la Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="hidden md:flex justify-center items-center"
          >
            <img 
              src={image3D} 
              alt="Representación 3D abstracta" 
              className="rounded-2xl object-cover w-full h-full max-h-[500px] shadow-2xl"
            />
          </motion.div>

          {/* Columna de la Línea de Tiempo */}
          <div className="relative border-l-2 border-acento/30 pl-8">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="mb-12 relative"
              >
                {/* Círculo en la línea de tiempo */}
                <div className="absolute -left-[38px] top-1 w-4 h-4 bg-acento rounded-full border-4 border-principal" />
                
                <p className="text-sm text-acento font-semibold mb-1">{item.period}</p>
                <h3 className="text-2xl font-bold text-texto-primary mb-2">{item.degree}</h3>
                <p className="text-lg text-texto-secondary font-medium mb-3">{item.institution}</p>
                <p className="text-base leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;