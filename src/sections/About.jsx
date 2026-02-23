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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative w-full px-6 py-24 bg-secundario text-texto1 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-principal/5 to-transparent pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-principal/10 rounded-full mix-blend-multiply filter blur-[80px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Left Column */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-acento tracking-tight">
              Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-principal to-red-500">Nosotros</span>
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-texto1/90 font-medium">
              ARKAFILMS es un estudio creativo especializado en producción audiovisual, fotografía profesional y diseño gráfico. Nos hemos convertido en un referente de calidad e innovación en la industria.
            </p>
            <p className="text-lg leading-relaxed mb-10 text-texto1/80">
              Nuestro equipo está formado por profesionales apasionados con amplia experiencia en diferentes áreas creativas. Trabajamos con empresas de todos los tamaños, desde startups hasta corporaciones establecidas, ayudándoles a comunicar su mensaje de manera efectiva a través del poder de lo visual.
            </p>

            <motion.div
              className="flex items-center mt-12 bg-white/50 p-6 rounded-2xl border border-principal/10 shadow-sm"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-1 bg-principal mr-6 flex-shrink-0 rounded-full"></div>
              <p className="text-2xl font-bold italic text-acento">"Convertimos ideas en <span className="text-principal">impacto visual</span>"</p>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="lg:w-1/2 flex flex-col space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-2">
              <span className="text-principal font-bold tracking-widest uppercase text-sm mb-2 block">Por qué elegirnos</span>
              <h3 className="text-3xl font-bold text-acento">Nuestros Valores</h3>
            </div>

            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group flex items-start bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-transparent hover:border-principal/20 hover:shadow-[0_8px_30px_rgba(211,0,0,0.08)] transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.15) }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-principal/5 group-hover:bg-principal text-principal group-hover:text-secundario p-4 rounded-xl mr-6 transition-colors duration-300">
                  {value.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-acento mb-2 group-hover:text-principal transition-colors">{value.title}</h4>
                  <p className="text-texto1/80 leading-relaxed">{value.description}</p>
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
