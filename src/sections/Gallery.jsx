import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Importaciones de imágenes (sin cambios)
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

const projects = [
  {
    name: 'Restaurant',
    shortDescription: 'Fotografía de Restaurante',
    fullDescription: 'Proyecto de fotografía gastronómica y de ambiente para el restaurante "Pecaminoso". El objetivo fue capturar la esencia de sus platillos y la atmósfera del lugar, resultando en un aumento del 30% en reservaciones online y un engagement superior en redes sociales.',
    coverImage: pro1ima1,
    images: [pro1ima1, pro1ima2, pro1ima3, pro1ima4],
    driveLink: 'https://drive.google.com/drive/folders/14UG8INEpKSiRlsfaRxuX-7NaziMx4tO3',
  },
  {
    name: 'Renovación de Imagen',
    shortDescription: 'Restauración Digital',
    fullDescription: 'Servicio de restauración y colorización de fotografías antiguas y dañadas. Utilizando software avanzado y técnicas de edición detalladas, se recuperaron recuerdos valiosos para clientes, preservando su herencia familiar con una calidad excepcional.',
    coverImage: pro2ima1,
    images: [pro2ima1, pro2ima2, pro2ima3, pro2ima4],
    driveLink: 'https://drive.google.com/drive/folders/1svZQQTa4LITc5uyftnAj3PBT--WcDCDb',
  },
  {
    name: 'Sesión de Eventos',
    shortDescription: 'Fotografía Social',
    fullDescription: 'Cobertura fotográfica de eventos sociales, capturando momentos espontáneos y significativos. Desde bodas hasta eventos corporativos, el enfoque es documentar la emoción y la atmósfera de cada ocasión de una manera natural y elegante.',
    coverImage: pro3ima1,
    images: [pro3ima1, pro3ima2, pro3ima3, pro3ima4],
    driveLink: 'https://drive.google.com/drive/folders/11TrKdHy_Iixq53yS4hVW-aqSwUWU0EVe',
  },
];

const DriveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.25 6.25H9.75L7.75 4.25H4.75C3.645 4.25 2.75 5.145 2.75 6.25V17.75C2.75 18.855 3.645 19.75 4.75 19.75H19.25C20.355 19.75 21.25 18.855 21.25 17.75V8.25C21.25 7.145 20.355 6.25 19.25 6.25Z" />
  </svg>
);

const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const mainSliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    cssEase: 'linear',
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <motion.section
      id="gallery"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full px-6 py-20 bg-principal text-texto-claro overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-acento">Galería de Proyectos</h2>
        <Slider {...mainSliderSettings}>
          {projects.map((project) => (
            <div key={project.name} className="px-4">
              <motion.div
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-secundario rounded-lg shadow-lg overflow-hidden h-full flex flex-col text-principal"
              >
                <div className="cursor-pointer" onClick={() => setSelectedProject(project)}>
                  <img src={project.coverImage} alt={project.name} className="w-full h-60 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-acento">{project.name}</h3>
                    <p className="text-gray-700 min-h-[40px]">{project.shortDescription}</p>
                  </div>
                </div>
                <div className="px-6 pb-4 mt-auto">
                  <a
                    href={project.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-texto-claro bg-acento hover:bg-opacity-90 transition-colors"
                  >
                    <DriveIcon />
                    Conoce más
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ ease: 'easeInOut', duration: 0.3 }}
              className="bg-secundario/90 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col overflow-hidden text-principal"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 md:p-8 flex-shrink-0">
                <h3 className="text-3xl font-bold mb-2 text-acento">{selectedProject.name}</h3>
                <p className="text-gray-700 leading-relaxed max-w-3xl">{selectedProject.fullDescription}</p>
              </div>
              <div className="p-6 md:p-8 pt-0 flex-grow overflow-y-auto">
                <h4 className="text-xl font-bold mb-4 text-acento">Imágenes Destacadas</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedProject.images.map((image, idx) => (
                    <motion.div
                      key={idx}
                      className="rounded-lg overflow-hidden shadow-md"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <img src={image} alt={`${selectedProject.name} - ${idx + 1}`} className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-texto-claro/80 text-5xl font-light hover:text-texto-claro transition-colors"
              aria-label="Cerrar modal"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Gallery;
