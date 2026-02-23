import React, { useState } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Inicio', href: '#home' },
  { name: 'Servicios', href: '#services' },
  { name: 'Galería', href: '#gallery' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Contacto', href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 bg-secundario/90 backdrop-blur-xl border-b border-acento/10 shadow-sm z-50 transition-all duration-300"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center min-h-[5rem]">
        <div className="flex items-center gap-3 select-none hover:scale-105 transition-transform duration-300 cursor-pointer">
          <img src="public/arka.png" alt="Logo ARKAFilms" className="h-12 w-12 object-contain drop-shadow-md" />
          <div className="flex flex-col md:flex-row md:items-baseline md:gap-1">
            <span className="text-xl md:text-2xl font-black tracking-tight text-principal">ARKA</span>
            <span className="text-xl md:text-2xl font-medium tracking-wide text-acento">Films</span>
          </div>
          <span className="text-xl md:text-2xl font-bold text-acento">Films</span>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-acento font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative text-sm uppercase tracking-wider hover:text-principal transition-colors duration-300 before:absolute before:inset-x-0 before:-bottom-1.5 before:h-[2px] before:bg-principal before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-acento focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden bg-secundario/95 backdrop-blur-xl border-t border-acento/10"
        >
          <ul className="px-6 py-6 space-y-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-lg font-medium text-acento hover:text-principal transition-colors relative pl-4 border-l-2 border-transparent hover:border-principal"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
