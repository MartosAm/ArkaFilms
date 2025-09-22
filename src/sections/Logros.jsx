import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaAward, FaStar, FaUsers, FaPlay, FaCamera, FaMedal } from 'react-icons/fa';
import { MdDateRange, MdTrendingUp, MdVideocam } from 'react-icons/md';
import logroIcon from '../assets/logro.svg';
import rally2024 from '../assets/1.jpg';
import rally2025 from '../assets/2.jpg';

// --- Datos de logros principales ---
const logrosData = [

  {
    year: '2024',
    title: 'Ganadores Rally Cinematográfico 2024',
    description: 'Primer triunfo histórico en el Rally Estatal Cinematográfico "48 Horas en Corto", marcando el inicio de una trayectoria ganadora que nos ha posicionado en los referentes de la producción audiovisual estatal.',
    icon: <FaTrophy />,
    achievement: '🏆 Campeones',
    category: 'Rally Cinematográfico',
    highlight: true,
    image: rally2024
  },
  {
    year: '2025',
    title: 'Campeones Rally Cinematográfico 2025',
    description: 'Victoria consecutiva en el Rally Estatal Cinematográfico "48 Horas en Corto", consolidando nuestra posición como productores audiovisuales de referencia en el estado. Un logro que ha permitido la proyección de nuestros filmes en toda la extensión del territorio estatal.',
    icon: <FaMedal />,
    achievement: '🥇 Bicampeones',
    category: 'Rally Cinematográfico',
    highlight: true,
    image: rally2025
  }
  
];

// Componente para cada elemento de logros
const LogroCard = ({ logro, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.3 }}
      className={`flex items-center justify-center mb-16 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
    >
      {/* Card Principal */}
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        className="w-full max-w-4xl mx-auto"
      >
        <div className="bg-gradient-to-br from-secundario/95 to-secundario/80 border-2 border-principal/20 shadow-2xl rounded-lg overflow-hidden backdrop-blur-sm">
          {/* Header de la ventana */}
          <div className="bg-gradient-to-r from-principal to-principal/80 text-secundario px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-2xl">{logro.icon}</div>
              <div>
                <div className="text-lg font-bold">{logro.title}</div>
                <div className="text-sm opacity-90">{logro.category}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-white/20 text-white text-sm font-bold px-3 py-1 rounded">
                {logro.year}
              </span>
            </div>
          </div>

          {/* Contenido */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Imagen */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`${isLeft ? 'lg:order-1' : 'lg:order-2'}`}
              >
                <div className="relative group">
                  <img
                    src={logro.image}
                    alt={`Logro ${logro.year}`}
                    className="w-full h-64 object-cover rounded-lg border-2 border-win95-dark-gray shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-lg font-bold">{logro.achievement}</div>
                  </div>
                </div>
              </motion.div>

              {/* Texto */}
              <div className={`${isLeft ? 'lg:order-2' : 'lg:order-1'} space-y-4`}>
                <div className="space-y-3">
                  <p className="text-acento/90 text-lg leading-relaxed">
                    {logro.description}
                  </p>
                </div>

                <div className="bg-principal/15 border-2 border-principal/30 rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{logro.achievement.split(' ')[0]}</div>
                    <div>
                      <div className="text-principal font-bold text-lg">
                        {logro.achievement}
                      </div>
                      <div className="text-acento/70 text-sm">
                        Rally Estatal Cinematográfico "48 Horas en Corto"
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Logros = () => {
  return (
    <motion.section
      id="logros"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full px-6 py-24 text-acento overflow-hidden relative"
      style={{
        background: `
          linear-gradient(180deg, 
            rgba(211, 0, 0, 0.8) 0%, 
            rgba(211, 0, 0, 0.6) 20%, 
            rgba(211, 0, 0, 0.4) 40%,
            rgba(245, 245, 240, 0.3) 70%,
            rgba(245, 245, 240, 0.6) 100%
          ),
          radial-gradient(circle at 20% 30%, rgba(211, 0, 0, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(245, 245, 240, 0.3) 0%, transparent 50%)
        `,
        backgroundSize: 'cover, 400px 400px, 300px 300px'
      }}
    >
      {/* Imagen de fondo decorativa */}
      <div className="absolute right-8 top-8 opacity-10 hidden lg:block">
        <img src={logroIcon} alt="Logros ARKAFilms" className="w-64 h-64" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <img src={logroIcon} alt="Logros" className="w-20 h-20" />
            <h2 className="text-5xl font-bold">
              Nuestros <span className="text-principal">Logros</span>
            </h2>
          </div>
          <p className="text-xl max-w-4xl mx-auto text-acento/80 leading-relaxed">
            Ganadores del Rally Estatal Cinematográfico "48 Horas en Corto" por <strong>dos años consecutivos</strong>, 
            un concurso que ha permitido la proyección de nuestros filmes en toda la extensión del Estado
          </p>
        </motion.div>

        {/* Logros Principales */}
        <div className="space-y-8">
          {logrosData.map((logro, index) => (
            <LogroCard 
              key={`${logro.year}-${index}`} 
              logro={logro} 
              index={index}
            />
          ))}
        </div>

        {/* Estadísticas destacadas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center p-8 bg-secundario/90 border-2 border-principal/30 shadow-xl rounded-lg backdrop-blur-sm">
            <FaTrophy className="w-16 h-16 text-principal mx-auto mb-6" />
            <h3 className="text-4xl font-bold text-principal mb-4">2</h3>
            <p className="text-acento/80 text-lg font-semibold">Años Consecutivos</p>
            <p className="text-acento/60 text-sm">Rally Cinematográfico</p>
          </div>

          <div className="text-center p-8 bg-secundario/90 border-2 border-principal/30 shadow-xl rounded-lg backdrop-blur-sm">
            <FaMedal className="w-16 h-16 text-principal mx-auto mb-6" />
            <h3 className="text-4xl font-bold text-principal mb-4">🥇</h3>
            <p className="text-acento/80 text-lg font-semibold">Primer Lugar</p>
            <p className="text-acento/60 text-sm">48 Horas en Corto</p>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-20 text-center"
        >
          <div className="bg-secundario/95 border-2 border-principal/30 shadow-2xl rounded-lg p-10 max-w-4xl mx-auto backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-principal mb-6">
              ¿Listo para crear tu próximo proyecto cinematográfico?
            </h3>
            <p className="text-acento/80 mb-8 text-lg leading-relaxed">
              Con dos años consecutivos ganando el Rally Cinematográfico, hemos demostrado nuestra capacidad 
              para crear contenido audiovisual de calidad excepcional. Únete a nuestra historia de éxito.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-principal text-secundario px-10 py-4 text-lg font-semibold rounded-lg shadow-xl hover:bg-principal/90 transition-all duration-300 hover:scale-105"
            >
              Comenzar Mi Proyecto
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Logros;
