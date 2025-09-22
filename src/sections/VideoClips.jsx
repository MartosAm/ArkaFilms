import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand, FaMusic, FaEye, FaHeart, FaShareAlt, FaDownload } from 'react-icons/fa';
import { MdFeaturedVideo, MdMusicNote, MdPlayCircleFilled } from 'react-icons/md';

// --- Datos de videoclips musicales ---
const videoclipsData = [
  {
    id: 1,
    title: 'Fuego',
    artist: 'Bad Bunny',
    description: 'Videoclip con más de 50M de visualizaciones. Una producción que combina elementos urbanos con cinematografía de alta calidad.',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg', // Placeholder
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder
    duration: '3:42',
    views: '50M',
    genre: 'Reggaeton',
    year: '2024',
    featured: true,
    stats: {
      views: '50M',
      likes: '2.1M',
      shares: '850K'
    },
    production: {
      director: 'ARKAFilms Team',
      producer: 'ARKAFilms Studio',
      cinematographer: 'Director Creativo ARKAFilms'
    }
  },
  {
    id: 2,
    title: 'Corazón Roto',
    artist: 'Karol G',
    description: 'Balada emotiva filmada en locaciones exclusivas de Miami. Una narrativa visual que complementa perfectamente la melodía.',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '4:15',
    views: '28M',
    genre: 'Pop Latino',
    year: '2024',
    featured: true,
    stats: {
      views: '28M',
      likes: '1.5M',
      shares: '420K'
    },
    production: {
      director: 'ARKAFilms Team',
      producer: 'ARKAFilms Studio',
      cinematographer: 'Director de Fotografía ARKAFilms'
    }
  },
  {
    id: 3,
    title: 'Baila Conmigo',
    artist: 'Ozuna',
    description: 'Video de alta energía con coreografías espectaculares. Rodado en 4K con equipos de última generación.',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '3:28',
    views: '35M',
    genre: 'Reggaeton',
    year: '2023',
    featured: false,
    stats: {
      views: '35M',
      likes: '1.8M',
      shares: '650K'
    },
    production: {
      director: 'ARKAFilms Team',
      producer: 'ARKAFilms Studio',
      cinematographer: 'Equipo Técnico ARKAFilms'
    }
  },
  {
    id: 4,
    title: 'Noche de Estrellas',
    artist: 'J Balvin',
    description: 'Concepto visual futurista con efectos especiales de última generación. Un viaje audiovisual único.',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '3:56',
    views: '42M',
    genre: 'Urban Pop',
    year: '2023',
    featured: false,
    stats: {
      views: '42M',
      likes: '2.2M',
      shares: '780K'
    },
    production: {
      director: 'ARKAFilms Team',
      producer: 'ARKAFilms Studio',
      cinematographer: 'Director Visual ARKAFilms'
    }
  },
  {
    id: 5,
    title: 'Amor Prohibido',
    artist: 'Rosalía',
    description: 'Una obra cinematográfica que mezcla tradición y modernidad. Filmado en España con locaciones históricas.',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '4:33',
    views: '38M',
    genre: 'Flamenco Pop',
    year: '2023',
    featured: true,
    stats: {
      views: '38M',
      likes: '1.9M',
      shares: '520K'
    },
    production: {
      director: 'ARKAFilms Team',
      producer: 'ARKAFilms Studio',
      cinematographer: 'Director Artístico ARKAFilms'
    }
  },
  {
    id: 6,
    title: 'Verano Eterno',
    artist: 'Anitta',
    description: 'Videoclip veraniego lleno de colores vibrantes y energía tropical. Locaciones en Brasil y España.',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '3:21',
    views: '31M',
    genre: 'Pop Tropical',
    year: '2024',
    featured: false,
    stats: {
      views: '31M',
      likes: '1.6M',
      shares: '440K'
    },
    production: {
      director: 'ARKAFilms Team',
      producer: 'ARKAFilms Studio',
      cinematographer: 'Equipo Creativo ARKAFilms'
    }
  }
];

// Componente para tarjeta de videoclip
const VideoClipCard = ({ clip, onPlay, featured = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`group relative rounded-xl overflow-hidden shadow-xl ${
        featured ? 'col-span-2 row-span-2' : ''
      } bg-secundario/10 backdrop-blur-sm border border-acento/20 hover:border-principal/40 transition-all duration-300`}
    >
      {/* Thumbnail */}
      <div className="relative">
        <img 
          src={clip.thumbnail} 
          alt={clip.title}
          className={`w-full object-cover ${featured ? 'h-64' : 'h-48'} group-hover:scale-105 transition-transform duration-300`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Play button overlay */}
        <motion.button
          onClick={() => onPlay(clip)}
          className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-16 h-16 bg-principal rounded-full flex items-center justify-center shadow-lg">
            <FaPlay className="w-6 h-6 text-secundario ml-1" />
          </div>
        </motion.button>

        {/* Stats overlay */}
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1">
          <div className="flex items-center gap-2 text-secundario text-sm">
            <FaEye className="w-3 h-3" />
            <span>{clip.views}</span>
          </div>
        </div>

        {/* Duration */}
        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm rounded px-2 py-1 text-secundario text-xs">
          {clip.duration}
        </div>

        {/* Featured badge */}
        {featured && (
          <div className="absolute top-4 left-4 bg-principal rounded-full px-3 py-1">
            <span className="text-secundario text-xs font-bold">DESTACADO</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className={`font-bold text-acento ${featured ? 'text-xl' : 'text-lg'} mb-1`}>
              {clip.title}
            </h3>
            <p className="text-principal font-semibold text-sm mb-1">{clip.artist}</p>
            <p className="text-acento/60 text-xs">{clip.genre} • {clip.year}</p>
          </div>
          <FaMusic className="w-5 h-5 text-principal/60" />
        </div>
        
        <p className={`text-acento/80 ${featured ? 'text-sm' : 'text-xs'} mb-3 line-clamp-2`}>
          {clip.description}
        </p>

        {/* Action buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs text-acento/60">
            <div className="flex items-center gap-1">
              <FaHeart className="w-3 h-3" />
              <span>{clip.stats.likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaShareAlt className="w-3 h-3" />
              <span>{clip.stats.shares}</span>
            </div>
          </div>
          
          <motion.button
            onClick={() => window.open(clip.videoUrl, '_blank')}
            className="text-principal hover:text-principal/80 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaExpand className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// Componente principal
const VideoClips = () => {
  const [selectedClip, setSelectedClip] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const featuredClips = videoclipsData.filter(clip => clip.featured);
  const regularClips = videoclipsData.filter(clip => !clip.featured);

  const handlePlay = (clip) => {
    setSelectedClip(clip);
  };

  return (
    <motion.section
      id="videoclips"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full px-6 py-24 bg-gradient-to-br from-secundario via-secundario/95 to-secundario/90 text-acento overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <MdFeaturedVideo className="w-12 h-12 text-principal" />
            <h2 className="text-4xl font-bold">
              Video<span className="text-principal">Clips</span> Musicales
            </h2>
          </div>
          <p className="text-xl max-w-3xl mx-auto text-acento/80 mb-8">
            Nuestra especialidad: crear videoclips que no solo acompañan la música, sino que cuentan historias visuales memorables
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-principal">200M+</div>
              <div className="text-sm text-acento/60">Visualizaciones Totales</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-principal">25+</div>
              <div className="text-sm text-acento/60">Artistas Colaboradores</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-principal">50+</div>
              <div className="text-sm text-acento/60">Videoclips Producidos</div>
            </div>
          </div>
        </motion.div>

        {/* Featured section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-principal mb-6 flex items-center gap-3">
            <MdPlayCircleFilled className="w-8 h-8" />
            Proyectos Destacados
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredClips.map((clip) => (
              <VideoClipCard 
                key={clip.id} 
                clip={clip} 
                onPlay={handlePlay}
                featured={true}
              />
            ))}
          </div>
        </motion.div>

        {/* Regular clips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-principal mb-6 flex items-center gap-3">
            <MdMusicNote className="w-8 h-8" />
            Más Videoclips
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularClips.map((clip) => (
              <VideoClipCard 
                key={clip.id} 
                clip={clip} 
                onPlay={handlePlay}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-principal/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-principal/20">
            <MdFeaturedVideo className="w-16 h-16 text-principal mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-principal mb-4">
              ¿Listo para crear tu próximo videoclip?
            </h3>
            <p className="text-acento/80 mb-6 max-w-2xl mx-auto">
              Desde conceptualización hasta post-producción, creamos videoclips que destacan en todas las plataformas digitales. 
              Trabajamos con artistas emergentes y establecidos para dar vida a su visión musical.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-principal text-secundario px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-principal/90 transition-colors"
              >
                Solicitar Cotización
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-acento/20 text-acento px-8 py-3 rounded-full font-semibold hover:bg-acento/30 transition-colors"
              >
                Ver Portfolio Completo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal para reproducir video */}
      <AnimatePresence>
        {selectedClip && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedClip(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-secundario rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-acento">{selectedClip.title}</h3>
                    <p className="text-principal">{selectedClip.artist}</p>
                  </div>
                  <button
                    onClick={() => setSelectedClip(null)}
                    className="text-acento/60 hover:text-acento transition-colors"
                  >
                    ✕
                  </button>
                </div>
                
                {/* Video placeholder */}
                <div className="bg-acento/10 rounded-lg aspect-video flex items-center justify-center mb-4">
                  <div className="text-center">
                    <FaPlay className="w-16 h-16 text-principal mx-auto mb-4" />
                    <p className="text-acento/80">Video se abriría en YouTube</p>
                    <motion.button
                      onClick={() => window.open(selectedClip.videoUrl, '_blank')}
                      className="bg-principal text-secundario px-6 py-2 rounded-lg mt-4 font-semibold"
                      whileHover={{ scale: 1.05 }}
                    >
                      Ver en YouTube
                    </motion.button>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-acento mb-2">Descripción</h4>
                    <p className="text-acento/80 text-sm">{selectedClip.description}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-acento mb-2">Equipo de Producción</h4>
                    <div className="text-sm text-acento/80">
                      <p><strong>Director:</strong> {selectedClip.production.director}</p>
                      <p><strong>Productor:</strong> {selectedClip.production.producer}</p>
                      <p><strong>Fotografía:</strong> {selectedClip.production.cinematographer}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default VideoClips;
