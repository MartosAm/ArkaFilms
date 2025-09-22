import React, { useState } from 'react';
import { FaPlay, FaExternalLinkAlt, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Componente optimizado para videos en GitHub Pages
const VideoEmbed = ({ 
  youtubeId,
  title,
  thumbnail,
  description,
  className = "",
  autoplay = false 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Función para extraer ID de YouTube de diferentes formatos de URL
  const extractYouTubeId = (url) => {
    if (!url) return null;
    
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : url;
  };

  const videoId = extractYouTubeId(youtubeId) || youtubeId;
  const thumbnailUrl = thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}${autoplay ? '?autoplay=1' : ''}`;

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const openInYouTube = () => {
    window.open(youtubeUrl, '_blank', 'noopener,noreferrer');
  };

  if (isPlaying) {
    return (
      <div className={`relative w-full ${className}`}>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src={embedUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-lg"
          />
        </div>
        <button
          onClick={() => setIsPlaying(false)}
          className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          ✕
        </button>
      </div>
    );
  }

  return (
    <div className={`relative group cursor-pointer ${className}`}>
      {/* Thumbnail */}
      <div className="relative w-full overflow-hidden rounded-lg">
        <img
          src={thumbnailUrl}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            // Fallback thumbnail si falla la carga
            e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
          }}
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Play button */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="bg-principal/90 hover:bg-principal text-secundario rounded-full p-4 shadow-lg backdrop-blur-sm transition-colors">
            <FaPlay className="w-6 h-6 ml-1" />
          </div>
        </motion.div>

        {/* YouTube badge */}
        <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
          <FaYoutube className="w-3 h-3" />
          YouTube
        </div>
      </div>

      {/* Action buttons */}
      <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
        <motion.button
          onClick={handlePlay}
          className="bg-principal text-secundario px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaPlay className="w-3 h-3" />
          Reproducir
        </motion.button>
        
        <motion.button
          onClick={openInYouTube}
          className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaExternalLinkAlt className="w-3 h-3" />
        </motion.button>
      </div>

      {/* Title overlay */}
      {title && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <h3 className="text-white font-semibold">{title}</h3>
          {description && (
            <p className="text-white/80 text-sm line-clamp-2">{description}</p>
          )}
        </div>
      )}
    </div>
  );
};

// Componente simplificado para thumbnails con enlace directo
export const VideoThumbnail = ({ 
  youtubeId, 
  title, 
  thumbnail, 
  className = "",
  showPlayButton = true 
}) => {
  const videoId = youtubeId?.includes('youtube.com') || youtubeId?.includes('youtu.be') 
    ? youtubeId.split(/[\/=]/).pop() 
    : youtubeId;
  
  const thumbnailUrl = thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

  const handleClick = () => {
    window.open(youtubeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      onClick={handleClick}
      className={`relative group cursor-pointer ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <img
        src={thumbnailUrl}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover rounded-lg"
        onError={(e) => {
          e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        }}
      />
      
      {showPlayButton && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
          <div className="bg-principal text-secundario rounded-full p-3">
            <FaPlay className="w-4 h-4 ml-1" />
          </div>
        </div>
      )}
      
      <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs">
        YouTube
      </div>
    </motion.div>
  );
};

export default VideoEmbed;
