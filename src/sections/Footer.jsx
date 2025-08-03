import React from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/alejandro-vargas',
    label: 'LinkedIn',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.8V24h-5v-7.5c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 2-2.9 4v7.6h-5V8z" />
      </svg>
    ),
  },
  {
    href: 'https://www.behance.net/alejandro-vargas',
    label: 'Behance',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M22.5 7.5h-6v1.5h6v-1.5zm-6 3h5.25v1.5H16.5v-1.5zm-1.5 3h6v1.5h-6v-1.5zm-3-6h-6v12h6c3.3 0 6-2.7 6-6s-2.7-6-6-6zm-4.5 9v-6h4.5c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4.5z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-secundario border-t border-gray-400 py-6 mt-12"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-principal">
        <p className="text-sm mb-4 md:mb-0">© 2025 Alejandro Vargas. Todos los derechos reservados.</p>
        <div className="flex space-x-6">
          {socialLinks.map(({ href, label, svg }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-principal hover:text-acento transition-colors duration-300"
            >
              {svg}
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

