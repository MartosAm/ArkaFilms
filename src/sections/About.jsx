import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full px-6 py-20 bg-principal text-texto-secondary overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-texto-primary">Sobre Mí</h2>
        <p className="text-lg leading-relaxed mx-auto max-w-3xl">
          ¡Hola! Soy Alejandro Vargas, un fotógrafo y videógrafo apasionado por contar historias a través de imágenes. Con una sólida formación en comunicación audiovisual y años de experiencia en el campo, he tenido el privilegio de trabajar en una variedad de proyectos que van desde retratos íntimos hasta producciones de video a gran escala.
        </p>
        <p className="text-lg leading-relaxed mt-4 mx-auto max-w-3xl">
          Mi enfoque se centra en capturar la esencia de cada momento, prestando atención a los detalles que hacen que cada historia sea única. Me esfuerzo por crear contenido visual que no solo sea estéticamente agradable, sino que también resuene con la audiencia a un nivel emocional.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
