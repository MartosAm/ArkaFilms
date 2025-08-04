import React from 'react';
import { motion } from 'framer-motion';

// --- Iconos SVG para cada categoría ---
const CameraIcon = () => (
    <svg className="w-8 h-8 text-acento" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);

const VideoIcon = () => (
    <svg className="w-8 h-8 text-acento" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
);

const EditIcon = () => (
    <svg className="w-8 h-8 text-acento" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" /></svg>
);

const DesignIcon = () => (
    <svg className="w-8 h-8 text-acento" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 16v-2m8-8h2M4 12H2m15.364 6.364l1.414 1.414M4.222 4.222l1.414 1.414m12.728 0l-1.414 1.414M5.636 18.364l-1.414 1.414M12 16a4 4 0 110-8 4 4 0 010 8z" /></svg>
);

// --- Datos de los proyectos (REEMPLAZA CON TU INFORMACIÓN) ---
const projectsData = [
  {
    title: 'Fotografía de Producto',
    category: 'Fotografía',
    description: 'Sesión fotográfica para una marca de cosméticos, enfocada en resaltar la textura y calidad de los productos.',
    icon: <CameraIcon />,
    link: 'https://drive.google.com/open?id=14ZKCT4L46VUQQGgbvC-FkuHvCC2OZ3Nt',
  },
  {
    title: 'Video Corporativo',
    category: 'Video',
    description: 'Producción de un video institucional para una empresa de tecnología, mostrando su cultura y valores.',
    icon: <VideoIcon />,
    link: 'https://drive.google.com/open?id=1adVuxYckCClDEsWtWpR4vg8ASiEDbFcc',
  },
  {
    title: 'Diseño de Marca',
    category: 'Diseño',
    description: 'Creación de una identidad visual completa para una startup, incluyendo logo, paleta de colores y tipografía.',
    icon: <DesignIcon />,
    link: 'https://drive.google.com/open?id=125OqeYGZDGtSp4twkVPRNgIBJTRc-DWs',
  },
  {
    title: 'Edición de Cortometraje',
    category: 'Edición',
    description: 'Postproducción de un cortometraje de ficción, a cargo del montaje, corrección de color y diseño sonoro.',
    icon: <EditIcon />,
    link: 'https://drive.google.com/open?id=1xPxg2wt2zEiGYMKk8rf3GituB3yAMB7x',
  },
  {
    title: 'Fotografía de Eventos',
    category: 'Fotografía',
    description: 'Cobertura completa de una conferencia internacional, capturando ponentes, asistentes y momentos clave.',
    icon: <CameraIcon />,
    link: 'https://drive.google.com/open?id=18uxFq51gzoJE-XXVaLxlaSWQhR66RxPB',
  },
  {
    title: 'Video Documental',
    category: 'Video',
    description: 'Realización de un documental corto sobre artesanos locales, explorando sus técnicas y tradiciones.',
    icon: <VideoIcon />,
    link: 'https://drive.google.com/open?id=1_ZxAfNLEfiabEm2VeQR39VdTdOH7zFqJ',
  },
  {
    title: 'Diseño de Interfaz App',
    category: 'Diseño',
    description: 'Diseño de la interfaz de usuario (UI) para una aplicación móvil de fitness, enfocada en la usabilidad.',
    icon: <DesignIcon />,
    link: 'https://drive.google.com/open?id=1njPIQAtfh7GAVyeJ56xaC8WVAmuuHvZN',
  },
];

const ProjectCard = ({ project, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, delay: index * 0.1, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-secundario rounded-xl shadow-lg p-6 flex flex-col text-texto-primary h-full border border-acento/20"
    >
      <div className="flex items-center mb-4">
        {project.icon}
        <span className="ml-3 bg-principal/60 text-acento text-xs font-bold px-3 py-1 rounded-full">{project.category}</span>
      </div>
      <h3 className="text-xl font-bold mb-2 flex-grow text-acento">{project.title}</h3>
      <p className="text-black text-sm mb-6">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block text-center w-full px-4 py-2 border border-acento text-acento text-sm font-semibold rounded-lg hover:bg-acento hover:text-principal transition-colors"
      >
        Ver Proyecto
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="w-full px-6 py-20 bg-principal text-texto-primary overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-texto-primary"
        >
          Mis Proyectos
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projectsData.map((item, index) => (
            <ProjectCard key={index} project={item} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;