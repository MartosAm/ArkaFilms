import React from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Descargar CV (PDF) ', href: '#portfolio' },
  { name: 'Contacto', href: '#gallery' },
];

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 bg-principal bg-opacity-90 backdrop-blur-md shadow-md z-50"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-semibold text-secundario select-none">
          Asdrubal Vela Castrejon | Fotografía, Video, Edicion y Diseño
          
        </div>
        <ul className="flex space-x-8 text-secundario font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-acento transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
