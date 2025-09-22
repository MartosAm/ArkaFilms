import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaUsers, FaRocket } from 'react-icons/fa';

const values = [
  {
    icon: <FaLightbulb className="h-10 w-10 text-principal" />,
    title: "Creatividad",
    description: "Pensamos fuera de la caja para ofrecer soluciones visuales innovadoras que destacan en un mundo saturado de contenido."
  },
  {
    icon: <FaUsers className="h-10 w-10 text-principal" />,
    title: "Colaboración",
    description: "Trabajamos estrechamente con nuestros clientes para asegurar que sus objetivos y visión se reflejen en cada proyecto."
  },
  {
    icon: <FaRocket className="h-10 w-10 text-principal" />,
    title: "Excelencia",
    description: "Nos comprometemos con los más altos estándares técnicos y creativos para entregar resultados excepcionales en cada proyecto."
  }
];

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full px-6 py-24 bg-secundario text-acento overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left Column */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-acento">
              Sobre <span className="text-principal">Nosotros</span>
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              ARKAFILMS es un estudio creativo especializado en producción audiovisual, fotografía profesional y diseño gráfico. Nos hemos convertido en un referente de calidad e innovación en la industria.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              Nuestro equipo está formado por profesionales apasionados con amplia experiencia en diferentes áreas creativas. Trabajamos con empresas de todos los tamaños, desde startups hasta corporaciones establecidas, ayudándoles a comunicar su mensaje de manera efectiva a través del poder de lo visual.
            </p>

            <div className="flex items-center mt-10">
              <div className="w-20 h-1 bg-principal mr-4"></div>
              <p className="text-xl font-semibold italic">"Convertimos ideas en impacto visual"</p>
            </div>
          </motion.div>
          
          {/* Right Column */}
          <motion.div 
            className="md:w-1/2 flex flex-col space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-principal">Nuestros Valores</h3>
            
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
              >
                <div className="bg-secundario p-3 rounded-full shadow-md mr-5 border-2 border-principal">
                  {value.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-principal mb-2">{value.title}</h4>
                  <p className="text-acento">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
