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
        whileHover={{ scale: 1.01, y: -5 }}
        className="w-full max-w-4xl mx-auto"
      >
        <div className="bg-[#1c1c1c]/90 border border-[#333]/50 shadow-2xl rounded-2xl overflow-hidden backdrop-blur-xl group">
          {/* Header de la ventana */}
          <div className="bg-[#111] border-b border-[#333]/50 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-2xl text-principal group-hover:scale-110 transition-transform duration-300">{logro.icon}</div>
              <div>
                <div className="text-xl font-bold text-secundario tracking-wide">{logro.title}</div>
                <div className="text-sm font-medium tracking-wider text-secundario/50 uppercase mt-1">{logro.category}</div>
              </div>
            </div>
            <div className="hidden sm:flex items-center">
              <span className="bg-principal/10 border border-principal/20 text-principal text-sm font-bold px-4 py-1.5 rounded-full shadow-[0_0_10px_rgba(211,0,0,0.2)]">
                {logro.year}
              </span>
            </div>
          </div>

          {/* Contenido */}
          <div className="p-8 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Imagen */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`${isLeft ? 'lg:order-1' : 'lg:order-2'}`}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={logro.image}
                    alt={`Logro ${logro.year}`}
                    className="w-full h-[300px] object-cover border border-[#333]/50 shadow-xl group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111]/90 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 text-white text-xl font-bold tracking-wide drop-shadow-md">
                    {logro.achievement}
                  </div>
                </div>
              </motion.div>

              {/* Texto */}
              <div className={`${isLeft ? 'lg:order-2' : 'lg:order-1'} space-y-8`}>
                <div className="space-y-4">
                  <p className="text-secundario/70 text-lg leading-relaxed font-light">
                    {logro.description}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-principal/10 to-transparent border-l-4 border-principal rounded-r-lg p-5">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl filter drop-shadow-[0_0_8px_rgba(211,0,0,0.4)]">{logro.achievement.split(' ')[0]}</div>
                    <div>
                      <div className="text-secundario font-bold text-xl mb-1">
                        {logro.achievement}
                      </div>
                      <div className="text-principal font-medium tracking-wide text-sm uppercase">
                        Rally Estatal "48 Horas en Corto"
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
      className="w-full px-6 py-24 text-secundario overflow-hidden relative bg-[#111]"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(211,0,0,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(211,0,0,0.15),transparent_40%)]" />
      </div>
      {/* Imagen de fondo decorativa */}
      <div className="absolute right-8 top-8 opacity-10 hidden lg:block">
        <img src={logroIcon} alt="Logros ARKAFilms" className="w-64 h-64" loading="lazy" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="text-principal font-bold tracking-widest uppercase text-sm mb-3 block">Reconocimientos</span>
          <div className="flex flex-col items-center justify-center mb-6">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-secundario">
              Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-principal to-red-500 drop-shadow-[0_0_15px_rgba(211,0,0,0.4)]">Logros</span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-principal to-transparent mx-auto mb-8 rounded-full"></div>
          <p className="text-xl max-w-4xl mx-auto text-secundario/70 leading-relaxed font-light">
            Ganadores del Rally Estatal Cinematográfico "48 Horas en Corto" por <strong className="text-principal">dos años consecutivos</strong>,
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
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center p-10 bg-[#1c1c1c]/80 border border-[#333]/50 shadow-xl rounded-2xl backdrop-blur-md transform transition-transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(211,0,0,0.1)] hover:border-principal/30">
            <div className="inline-block p-4 bg-principal/10 rounded-full mb-6 relative">
              <div className="absolute inset-0 rounded-full bg-principal animate-pulse-glow opacity-50 blur-md"></div>
              <FaTrophy className="w-12 h-12 text-principal relative z-10" />
            </div>
            <h3 className="text-5xl font-black text-secundario mb-4">2</h3>
            <p className="text-principal text-lg font-bold tracking-wide uppercase mb-1">Años Consecutivos</p>
            <p className="text-secundario/60 text-sm">Rally Cinematográfico</p>
          </div>

          <div className="text-center p-10 bg-[#1c1c1c]/80 border border-[#333]/50 shadow-xl rounded-2xl backdrop-blur-md transform transition-transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(211,0,0,0.1)] hover:border-principal/30">
            <div className="inline-block p-4 bg-principal/10 rounded-full mb-6 relative">
              <div className="absolute inset-0 rounded-full bg-principal animate-pulse-glow opacity-50 blur-md"></div>
              <FaMedal className="w-12 h-12 text-principal relative z-10" />
            </div>
            <h3 className="text-5xl font-black text-secundario mb-4">🥇</h3>
            <p className="text-principal text-lg font-bold tracking-wide uppercase mb-1">Primer Lugar</p>
            <p className="text-secundario/60 text-sm">48 Horas en Corto</p>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="bg-gradient-to-br from-principal to-red-600 shadow-[0_10px_40px_rgba(211,0,0,0.3)] rounded-2xl p-10 md:p-14 max-w-4xl mx-auto text-secundario relative overflow-hidden group hover:shadow-[0_15px_50px_rgba(211,0,0,0.4)] transition-shadow duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-[50px] transform translate-x-1/2 -translate-y-1/2"></div>
            <h3 className="text-4xl font-black mb-6 relative z-10 tracking-tight">
              ¿Listo para crear tu próximo proyecto cinematográfico?
            </h3>
            <p className="text-white/80 mb-10 text-xl leading-relaxed max-w-2xl mx-auto relative z-10 font-medium">
              Con dos años consecutivos ganando el Rally Cinematográfico, hemos demostrado nuestra capacidad
              para crear contenido audiovisual de calidad excepcional. Únete a nuestra historia de éxito.
            </p>
            <a href="#contact" className="inline-block text-principal bg-secundario px-12 py-5 text-xl font-black rounded-xl shadow-lg hover:bg-white transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_5px_20px_rgba(255,255,255,0.3)] relative z-10">
              Comenzar Mi Proyecto
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Logros;
