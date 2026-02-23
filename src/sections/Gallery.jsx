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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative w-full px-6 py-24 bg-[#141414] text-secundario overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-principal/5 to-transparent pointer-events-none" />
      <div className="absolute top-40 -left-32 w-96 h-96 bg-principal/10 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-principal font-bold tracking-widest uppercase text-sm mb-3 block">Portafolio</span>
          <motion.h2
            className="text-5xl md:text-6xl font-black mb-6 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Galería de <span className="text-transparent bg-clip-text bg-gradient-to-r from-principal to-red-500">Proyectos</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-principal to-transparent mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-secundario/70 max-w-2xl mx-auto">
            Explora nuestro portafolio de trabajos destacados
          </p>
        </div>

        {/* Proyecto destacado */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl mb-16 border border-white/5">
          <div className="grid md:grid-cols-2 gap-0 group">
            {/* Imagen del proyecto destacado */}
            <motion.div
              className="relative h-[450px] overflow-hidden"
              whileHover={{ scale: 1.0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                src={currentProjects[currentProjectIndex]?.coverImage}
                alt={currentProjects[currentProjectIndex]?.name}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent md:bg-gradient-to-r md:from-[#141414] md:via-[#141414]/80 md:to-transparent z-20" />
            </motion.div>

            {/* Detalles del proyecto */}
            <div className="p-10 md:p-14 flex flex-col justify-center relative z-30 -mt-20 md:mt-0 bg-gradient-to-t from-[#141414] to-transparent md:bg-none">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-principal font-bold tracking-widest uppercase text-xs mb-3">
                    {currentProjects[currentProjectIndex]?.year} • {currentProjects[currentProjectIndex]?.client}
                  </p>
                  <h3 className="text-4xl font-black text-secundario mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-secundario group-hover:to-principal transition-all duration-300">{currentProjects[currentProjectIndex]?.name}</h3>
                  <div className="w-12 h-1 bg-principal mb-6"></div>
                </div>
              </div>

              <p className="text-secundario/70 mb-10 text-lg leading-relaxed">
                {currentProjects[currentProjectIndex]?.fullDescription}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex space-x-4">
                  <button
                    onClick={prevProject}
                    className="w-12 h-12 rounded-full border border-secundario/20 flex items-center justify-center hover:bg-principal hover:border-principal hover:text-white transition-all duration-300"
                    aria-label="Proyecto anterior"
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    onClick={nextProject}
                    className="w-12 h-12 rounded-full border border-secundario/20 flex items-center justify-center hover:bg-principal hover:border-principal hover:text-white transition-all duration-300"
                    aria-label="Proyecto siguiente"
                  >
                    <FaArrowRight />
                  </button>
                </div>
                <button
                  onClick={() => setSelectedProject(currentProjects[currentProjectIndex])}
                  className="flex items-center bg-principal/10 border border-principal text-principal font-bold py-3 px-6 rounded-lg hover:bg-principal hover:text-secundario transition-colors duration-300"
                >
                  Ver detalles <FaExternalLinkAlt className="ml-3 border-l pl-3 border-current" />
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
                <img src={project.coverImage} alt={project.name} className="w-full h-48 object-cover" loading="lazy" />
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
                      loading="lazy"
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