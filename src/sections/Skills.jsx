import React from 'react';
import { motion } from 'framer-motion';
// Se mantienen los mismos íconos
import { FaCamera, FaVideo, FaLightbulb, FaUsers, FaPalette, FaCheckCircle, FaAward, FaGlobe } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobelightroom, SiAdobepremierepro, SiDavinciresolve, SiAdobeaftereffects, SiAdobeillustrator } from 'react-icons/si';
import { MdPhotoCamera, MdEdit, MdBusinessCenter, MdOutlineHighQuality, MdSpeed, MdOutlineDesignServices } from 'react-icons/md';

// --- 1. Datos centralizados y limpios ---
// Definimos los datos fuera del componente.
// Usamos la referencia al componente del ícono en lugar de JSX.
// Esto hace que los datos sean más puros y la lógica de renderizado esté en el componente.
const SKILLS_DATA = {
  'Tecnología Avanzada': {
    icon: MdOutlineHighQuality,
    items: [
      { name: 'Grabación en 8K', icon: FaVideo },
      { name: 'Fotografía de Alta Resolución', icon: FaCamera },
      { name: 'Fotografía Social', icon: FaUsers },
      { name: 'Foto de Producto', icon: FaCamera },
      { name: 'Estabilizadores de Última Generación', icon: FaLightbulb },
      { name: 'Iluminación Profesional', icon: FaLightbulb },
    ]
  },
  'Software Especializado': {
    icon: MdEdit,
    items: [
      { name: 'Adobe Photoshop', icon: SiAdobephotoshop },
      { name: 'Adobe Lightroom', icon: SiAdobelightroom },
      { name: 'Adobe Premiere Pro', icon: SiAdobepremierepro },
      { name: 'Premiere', icon: SiAdobepremierepro },
      { name: 'Adobe After Effects', icon: SiAdobeaftereffects },
      { name: 'After Effects', icon: SiAdobeaftereffects },
      { name: 'Adobe Illustrator', icon: SiAdobeillustrator },
      { name: 'Illustrator', icon: SiAdobeillustrator },
    ]
  },
  'Enfoque Profesional': {
    icon: MdBusinessCenter,
    items: [
      { name: 'Dirección Creativa', icon: FaPalette },
      { name: 'Gestión de Proyectos', icon: MdSpeed },
      { name: 'Servicios Personalizados', icon: MdOutlineDesignServices },
      { name: 'Atención Internacional', icon: FaGlobe },
      { name: 'Premios de Industria', icon: FaAward },
    ]
  },
};

// --- 2. Variantes de animación con Framer Motion ---
// Centralizar las animaciones las hace reutilizables y limpia el JSX.
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Anima los hijos (las tarjetas) con un desfase
    },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

// --- Componente para cada habilidad individual ---
const SkillItem = ({ icon: Icon, name }) => (
  <motion.li
    variants={cardVariants}
    className="flex items-center space-x-2 p-1 rounded-lg hover:bg-acento/5 transition-colors"
  >
    <Icon className="w-5 h-5 text-acento/80 flex-shrink-0" />
    <span className="text-texto-primary font-medium text-sm">{name}</span>
  </motion.li>
);


// --- Componente para cada tarjeta de categoría ---
const SkillCard = ({ icon: Icon, title, items }) => (
  <motion.div
    variants={cardVariants}
    className="group bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-8 border border-transparent hover:border-principal/20 hover:shadow-[0_10px_40px_rgba(211,0,0,0.08)] transition-all duration-300 relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-principal/5 rounded-bl-[100px] -z-0 transition-transform duration-500 group-hover:scale-110 group-hover:bg-principal/10" />

    <div className="flex flex-col items-center mb-8 relative z-10">
      <div className="p-4 bg-principal/10 rounded-2xl mb-4 group-hover:bg-principal group-hover:text-white text-principal transition-all duration-300 shadow-sm relative overflow-hidden">
        <Icon className="w-8 h-8 relative z-10" />
      </div>
      <h3 className="text-2xl font-bold text-acento">{title}</h3>
    </div>

    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="space-y-3 relative z-10"
    >
      {items.map((item) => (
        <SkillItem key={item.name} icon={item.icon} name={item.name} />
      ))}
    </motion.ul>
  </motion.div>
);


// --- Componente principal ---
const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full px-6 py-24 bg-secundario text-texto1 overflow-hidden relative"
    >
      {/* Subtle Gradient Backdrops */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-principal/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-principal/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-principal font-bold tracking-widest uppercase text-sm mb-3 block">Nuestras Capacidades</span>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-acento">
            Tecnología y <span className="text-transparent bg-clip-text bg-gradient-to-r from-principal to-red-500">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-principal to-transparent mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-acento/70 max-w-3xl mx-auto font-light">
            Combinamos equipos de última generación con profesionales experimentados para garantizar resultados excepcionales
          </p>
        </motion.div>

        {/* Grid de Habilidades */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {Object.entries(SKILLS_DATA).map(([category, data]) => (
            <SkillCard
              key={category}
              title={category}
              icon={data.icon}
              items={data.items}
            />
          ))}
        </motion.div>

        {/* Banner de Ventajas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center relative z-10"
        >
          <div className="flex flex-wrap justify-center gap-6">
            <div className="inline-flex items-center space-x-3 bg-white border border-principal/10 px-8 py-4 rounded-full shadow-sm hover:shadow-md hover:border-principal/30 transition-all hover:-translate-y-1">
              <FaCheckCircle className="text-principal text-xl" />
              <span className="text-acento font-bold">Equipo profesional certificado</span>
            </div>
            <div className="inline-flex items-center space-x-3 bg-white border border-principal/10 px-8 py-4 rounded-full shadow-sm hover:shadow-md hover:border-principal/30 transition-all hover:-translate-y-1">
              <FaCheckCircle className="text-principal text-xl" />
              <span className="text-acento font-bold">Resultados en tiempo récord</span>
            </div>
            <div className="inline-flex items-center space-x-3 bg-white border border-principal/10 px-8 py-4 rounded-full shadow-sm hover:shadow-md hover:border-principal/30 transition-all hover:-translate-y-1">
              <FaCheckCircle className="text-principal text-xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;