import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaArrowLeft, FaExternalLinkAlt, FaInstagram, FaTiktok, FaYoutube, FaBuilding } from 'react-icons/fa';
import { MdBusinessCenter, MdSocialDistance } from 'react-icons/md';

// Importaciones de imágenes
import pro1ima1 from '../assets/pecaminoso/pro1ima1.jpg';
import pro1ima2 from '../assets/pecaminoso/pro1ima2.jpg';
import pro1ima3 from '../assets/pecaminoso/pro1ima3.jpg';
import pro1ima4 from '../assets/pecaminoso/pro1ima4.jpg';
import pro2ima1 from '../assets/renovacion/pro2ima1.jpg';
import pro2ima2 from '../assets/renovacion/pro2ima2.jpg';
import pro2ima3 from '../assets/renovacion/pro2ima3.jpg';
import pro2ima4 from '../assets/renovacion/pro2ima4.jpg';
import pro3ima1 from '../assets/sesiones/pro3ima1.jpg';
import pro3ima2 from '../assets/sesiones/pro3ima2.jpg';
import pro3ima3 from '../assets/sesiones/pro3ima3.jpg';
import pro3ima4 from '../assets/sesiones/pro3ima4.jpg';

// --- Datos del Portfolio - Solo Portfolio General para GitHub Pages ---
const portfolioData = {
  general: [
    {
      name: 'Restaurant Pecaminoso',
      shortDescription: 'Fotografía Gastronómica',
      fullDescription: 'Proyecto de fotografía gastronómica y de ambiente para el restaurante "Pecaminoso". El objetivo fue capturar la esencia de sus platillos y la atmósfera del lugar, resultando en un aumento del 30% en reservaciones online y un engagement superior en redes sociales.',
      coverImage: pro1ima1,
      images: [pro1ima1, pro1ima2, pro1ima3, pro1ima4],
      driveLink: 'https://drive.google.com/drive/folders/14UG8INEpKSiRlsfaRxuX-7NaziMx4tO3',
      client: 'Restaurante Pecaminoso',
      year: '2023',
      category: 'general'
    },
    {
      name: 'Renovación de Imagen',
      shortDescription: 'Restauración Digital',
      fullDescription: 'Servicio de restauración y colorización de fotografías antiguas y dañadas. Utilizando software avanzado y técnicas de edición detalladas, se recuperaron recuerdos valiosos para clientes, preservando su herencia familiar con una calidad excepcional.',
      coverImage: pro2ima1,
      images: [pro2ima1, pro2ima2, pro2ima3, pro2ima4],
      driveLink: 'https://drive.google.com/drive/folders/1svZQQTa4LITc5uyftnAj3PBT--WcDCDb',
      client: 'Museo Nacional',
      year: '2022',
      category: 'general'
    },
    {
      name: 'Sesión de Eventos',
      shortDescription: 'Fotografía Social',
      fullDescription: 'Cobertura fotográfica de eventos sociales, capturando momentos espontáneos y significativos. Desde bodas hasta eventos corporativos, el enfoque es documentar la emoción y la atmósfera de cada ocasión de una manera natural y elegante.',
      coverImage: pro3ima1,
      images: [pro3ima1, pro3ima2, pro3ima3, pro3ima4],
      driveLink: 'https://drive.google.com/drive/folders/11TrKdHy_Iixq53yS4hVW-aqSwUWU0EVe',
      client: 'Eventos Premium',
      year: '2024',
      category: 'general'
    }
  ]
};

const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('general');
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Solo Portfolio General para GitHub Pages
  const categories = [
    { id: 'general', name: 'Portfolio General', icon: <FaExternalLinkAlt />, description: 'Nuestros trabajos destacados' }
  ];

  const currentProjects = portfolioData[activeCategory];

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => 
      prevIndex === currentProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) => 
      prevIndex === 0 ? currentProjects.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.section
      id="gallery"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative w-full px-6 py-24 text-texto-claro overflow-hidden"
    >
      {/* Fondo difuminado compartido con Process, menos intenso */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-principal/80 via-acento/60 to-principal/60" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1.5px]" />
      </div>
      <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-secundario">Galería de</span> <span className="text-acento">Proyectos</span>
          </motion.h2>
          <p className="text-xl text-secundario/80 max-w-2xl mx-auto mb-8">
            Explora nuestro portafolio de trabajos destacados
          </p>
        </div>

        {/* Proyecto destacado */}
        <div className="bg-acento/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl mb-12">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Imagen del proyecto destacado */}
            <motion.div 
              className="relative h-[400px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={currentProjects[currentProjectIndex]?.coverImage} 
                alt={currentProjects[currentProjectIndex]?.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-acento/80 via-transparent to-transparent md:bg-gradient-to-r" />
            </motion.div>
            
            {/* Detalles del proyecto */}
            <div className="p-8 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-secundario/60 text-sm mb-1">
                    {currentProjects[currentProjectIndex]?.year} • {currentProjects[currentProjectIndex]?.client}
                  </p>
                  <h3 className="text-3xl font-bold text-secundario mb-2">{currentProjects[currentProjectIndex]?.name}</h3>
                  <div className="w-16 h-1 bg-principal mb-4"></div>
                </div>
              </div>
              
              <p className="text-secundario/90 mb-8">
                {currentProjects[currentProjectIndex]?.fullDescription}
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <div className="flex space-x-3">
                  <button 
                    onClick={prevProject}
                    className="w-10 h-10 rounded-full bg-secundario/10 flex items-center justify-center hover:bg-secundario/30 transition-colors"
                    aria-label="Proyecto anterior"
                  >
                    <FaArrowLeft className="text-secundario" />
                  </button>
                  <button 
                    onClick={nextProject}
                    className="w-10 h-10 rounded-full bg-secundario/10 flex items-center justify-center hover:bg-secundario/30 transition-colors"
                    aria-label="Proyecto siguiente"
                  >
                    <FaArrowRight className="text-secundario" />
                  </button>
                </div>
                <button
                  onClick={() => setSelectedProject(currentProjects[currentProjectIndex])}
                  className="flex items-center bg-principal text-secundario py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Ver detalles <FaExternalLinkAlt className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de miniaturas de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.name}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={`bg-secundario/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg flex flex-col text-secundario border border-secundario/20 ${currentProjectIndex === index ? 'ring-2 ring-principal' : ''}`}
              onClick={() => {
                setCurrentProjectIndex(index);
                setSelectedProject(project);
              }}
            >
              <div className="relative cursor-pointer">
                <img src={project.coverImage} alt={project.name} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-acento/80 via-acento/20 to-transparent hover:opacity-75 transition-opacity" />
              </div>
              <div className="p-5">
                <p className="text-secundario/60 text-xs mb-1">{project.year}</p>
                <h3 className="text-lg font-semibold mb-2 text-secundario">{project.name}</h3>
                <p className="text-secundario/80 text-sm">{project.shortDescription}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              className="bg-secundario rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-acento mb-2">{selectedProject.name}</h3>
                    <p className="text-acento/60">{selectedProject.year} • {selectedProject.client}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-acento/60 hover:text-acento text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {selectedProject.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedProject.name} ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  ))}
                </div>
                
                <p className="text-acento/80 mb-6 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
                
                <div className="flex gap-4">
                  <a
                    href={selectedProject.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-principal text-secundario py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
                  >
                    Ver en Google Drive <FaExternalLinkAlt className="ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Gallery;