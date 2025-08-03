import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Proyecto 1: Pecaminoso
import pro1ima1 from '../assets/pecaminoso/pro1ima1.jpg';
import pro1ima2 from '../assets/pecaminoso/pro1ima2.jpg';
import pro1ima3 from '../assets/pecaminoso/pro1ima3.jpg';
import pro1ima4 from '../assets/pecaminoso/pro1ima4.jpg';

// Proyecto 2: Renovación de imagen
import pro2ima1 from '../assets/renovacion/pro2ima1.jpg';
import pro2ima2 from '../assets/renovacion/pro2ima2.jpg';
import pro2ima3 from '../assets/renovacion/pro2ima3.jpg';
import pro2ima4 from '../assets/renovacion/pro2ima4.jpg';

// Proyecto 3: Sesión de eventos
import pro3ima1 from '../assets/sesiones/pro3ima1.jpg';
import pro3ima2 from '../assets/sesiones/pro3ima2.jpg';
import pro3ima3 from '../assets/sesiones/pro3ima3.jpg';
import pro3ima4 from '../assets/sesiones/pro3ima4.jpg';

const projects = [
  {
    name: 'Pecaminoso',
    shortDescription: 'Fotografía de Restaurante',
    fullDescription: 'Proyecto de fotografía gastronómica y de ambiente para el restaurante "Pecaminoso". El objetivo fue capturar la esencia de sus platillos y la atmósfera del lugar, resultando en un aumento del 30% en reservaciones online y un engagement superior en redes sociales.',
    coverImage: pro1ima1,
    images: [pro1ima1, pro1ima2, pro1ima3, pro1ima4],
  },
  {
    name: 'Renovación de Imagen',
    shortDescription: 'Restauración Digital',
    fullDescription: 'Servicio de restauración y colorización de fotografías antiguas y dañadas. Utilizando software avanzado y técnicas de edición detalladas, se recuperaron recuerdos valiosos para clientes, preservando su herencia familiar con una calidad excepcional.',
    coverImage: pro2ima1,
    images: [pro2ima1, pro2ima2, pro2ima3, pro2ima4],
  },
  {
    name: 'Sesión de Eventos',
    shortDescription: 'Fotografía Social',
    fullDescription: 'Cobertura fotográfica de eventos sociales, capturando momentos espontáneos y significativos. Desde bodas hasta eventos corporativos, el enfoque es documentar la emoción y la atmósfera de cada ocasión de una manera natural y elegante.',
    coverImage: pro3ima1,
    images: [pro3ima1, pro3ima2, pro3ima3, pro3ima4],
  },
];

const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const mainSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '40px',
        },
      },
    ],
  };

  const modalSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <motion.section
      id="gallery"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="max-w-full mx-auto px-6 py-16 bg-secundario text-principal overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 border-b border-gray-400 pb-2">Galería de Proyectos</h2>
        <Slider {...mainSliderSettings}>
          {projects.map((project, index) => (
            <div key={index} className="px-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative cursor-pointer rounded-lg overflow-hidden shadow-lg group"
                onClick={() => setSelectedProject(project)}
              >
                <img src={project.coverImage} alt={project.name} className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-principal bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                  <p className="text-lg text-gray-200">{project.shortDescription}</p>
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
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden"
              onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del modal lo cierre
            >
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-secundario">
                 <h3 className="text-3xl font-bold mb-4 text-principal">{selectedProject.name}</h3>
                 <p className="text-principal leading-relaxed">{selectedProject.fullDescription}</p>
              </div>
              <div className="w-full md:w-1/2 p-4 bg-gray-200">
                <Slider {...modalSliderSettings}>
                  {selectedProject.images.map((image, idx) => (
                    <div key={idx}>
                      <img src={image} alt={`${selectedProject.name} - ${idx + 1}`} className="w-full h-full object-contain max-h-[75vh] rounded-md" />
                    </div>
                  ))}
                </Slider>
              </div>
            </motion.div>
             <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-acento transition-colors"
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