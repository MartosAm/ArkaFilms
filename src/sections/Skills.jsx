import React from 'react';
import { motion } from 'framer-motion';
// Se mantienen los mismos íconos
import { FaCamera, FaVideo, FaLightbulb, FaUsers, FaPalette, FaCheckCircle } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobelightroom, SiAdobepremierepro, SiDavinciresolve } from 'react-icons/si';
import { MdPhotoCamera, MdEdit, MdBusinessCenter } from 'react-icons/md';

// --- 1. Datos centralizados y limpios ---
// Definimos los datos fuera del componente.
// Usamos la referencia al componente del ícono en lugar de JSX.
// Esto hace que los datos sean más puros y la lógica de renderizado esté en el componente.
const SKILLS_DATA = {
  'Fotografía y Video': {
    icon: MdPhotoCamera,
    items: [
      { name: 'Fotografía de Retrato', icon: FaCamera },
      { name: 'Fotografía de Producto', icon: FaCamera },
      { name: 'Cinematografía', icon: FaVideo },
      { name: 'Iluminación de Estudio', icon: FaLightbulb },
      { name: 'Manejo de Drones', icon: FaVideo },
    ]
  },
  'Herramientas de Edición': {
    icon: MdEdit,
    items: [
      { name: 'Adobe Photoshop', icon: SiAdobephotoshop },
      { name: 'Adobe Lightroom', icon: SiAdobelightroom },
      { name: 'Adobe Premiere Pro', icon: SiAdobepremierepro },
      { name: 'Final Cut Pro', icon: FaVideo },
      { name: 'DaVinci Resolve', icon: SiDavinciresolve },
    ]
  },
  'Habilidades Profesionales': {
    icon: MdBusinessCenter,
    items: [
      { name: 'Dirección Creativa', icon: FaPalette },
      { name: 'Gestión de Proyectos', icon: FaUsers },
      { name: 'Comunicación con Clientes', icon: FaUsers },
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
    variants={cardVariants} // Reutilizamos la variante para un efecto similar
    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-acento/5 transition-colors"
  >
    <Icon className="w-5 h-5 text-acento/80 flex-shrink-0" />
    <span className="text-texto-primary font-medium">{name}</span>
  </motion.li>
);


// --- Componente para cada tarjeta de categoría ---
const SkillCard = ({ icon: Icon, title, items }) => (
  <motion.div
    variants={cardVariants}
    className="group bg-secundario/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-acento/20 hover:border-acento/40 transition-all duration-300 hover:shadow-2xl hover:shadow-acento/10 hover:-translate-y-2"
  >
    <div className="flex items-center mb-6">
      <div className="p-3 bg-acento/10 rounded-xl mr-4 group-hover:bg-acento/20 transition-colors">
        <Icon className="w-8 h-8 text-acento" />
      </div>
      <h3 className="text-2xl font-bold text-acento">{title}</h3>
    </div>

    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="space-y-3"
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
      className="w-full px-6 py-20 bg-gradient-to-br from-principal via-principal/95 to-secundario/10 text-texto-primary overflow-hidden"
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
          {/* Título cambiado a color blanco sólido */}
          <h2 className="text-5xl font-bold mb-4 text-white">
            Habilidades y Herramientas
          </h2>
          <p className="text-xl text-texto-secondary max-w-2xl mx-auto">
            Dominio técnico y creativo en fotografía, edición y dirección de proyectos visuales
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
        
        {/* Banner de Experiencia (opcional, se puede mantener o simplificar) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-4 bg-acento/10 px-6 py-3 rounded-full">
            <span className="text-acento font-semibold">+5 años de experiencia</span>
            <span className="text-texto-secondary">•</span>
            <span className="text-acento font-semibold">100+ proyectos completados</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;