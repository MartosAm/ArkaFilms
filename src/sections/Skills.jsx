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
    className="group bg-secundario/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-acento/20 hover:border-acento/40 transition-all duration-300 hover:shadow-2xl hover:shadow-acento/10 hover:-translate-y-2"
  >
    <div className="flex items-center mb-3">
      <div className="p-2 bg-acento/10 rounded-xl mr-2 group-hover:bg-acento/20 transition-colors">
        <Icon className="w-7 h-7 text-acento" />
      </div>
      <h3 className="text-xl font-bold text-acento">{title}</h3>
    </div>

    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="space-y-1"
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
      className="w-full px-6 py-24 bg-gradient-to-br from-secundario via-secundario/95 to-secundario/90 text-acento overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-acento">
            Tecnología y <span className="text-principal">Expertise</span>
          </h2>
          <p className="text-xl text-acento/80 max-w-3xl mx-auto">
            Combinamos equipos de última generación con profesionales experimentados para garantizar resultados excepcionales
          </p>
        </motion.div>

        {/* Grid de Habilidades */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // El contenedor empieza a animar cuando el 20% es visible
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center gap-6">
            <div className="inline-flex items-center space-x-2 bg-principal/10 px-6 py-3 rounded-full">
              <FaCheckCircle className="text-principal" />
              <span className="text-principal font-semibold">Equipo profesional certificado</span>
            </div>
            <div className="inline-flex items-center space-x-2 bg-principal/10 px-6 py-3 rounded-full">
              <FaCheckCircle className="text-principal" />
              <span className="text-principal font-semibold">Resultados en tiempo récord</span>
            </div>
            <div className="inline-flex items-center space-x-2 bg-principal/10 px-6 py-3 rounded-full">
              <FaCheckCircle className="text-principal" />
              <span className="text-principal font-semibold">Satisfacción garantizada</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;