import React from 'react';
import { motion } from 'framer-motion';

// --- Iconos SVG para Redes Sociales ---
const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.8V24h-5v-7.5c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 2-2.9 4v7.6h-5V8z" />
    </svg>
);

const BehanceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M22.5 7.5h-6v1.5h6v-1.5zm-6 3h5.25v1.5H16.5v-1.5zm-1.5 3h6v1.5h-6v-1.5zm-3-6h-6v12h6c3.3 0 6-2.7 6-6s-2.7-6-6-6zm-4.5 9v-6h4.5c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4.5z" />
    </svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.44c-3.117 0-3.483.01-4.71.068-2.76.126-3.953 1.318-4.08 4.08-.057 1.225-.067 1.58-.067 4.683s.01 3.458.067 4.683c.127 2.76 1.318 3.953 4.08 4.08 1.227.057 1.593.067 4.71.067s3.483-.01 4.71-.067c2.76-.126 3.953-1.318 4.08-4.08.057-1.225.067-1.58.067-4.683s-.01-3.458-.067-4.683c-.127-2.76-1.318-3.953-4.08-4.08-1.227-.057-1.593-.067-4.71-.067zm0 3.882c-2.61 0-4.72 2.11-4.72 4.72s2.11 4.72 4.72 4.72 4.72-2.11 4.72-4.72-2.11-4.72-4.72-4.72zm0 7.882c-1.744 0-3.16-1.416-3.16-3.16s1.416-3.16 3.16-3.16 3.16 1.416 3.16 3.16-1.416 3.16-3.16 3.16zm4.908-7.882c-.62 0-1.12.5-1.12 1.12s.5 1.12 1.12 1.12 1.12-.5 1.12-1.12-.5-1.12-1.12-1.12z" />
    </svg>
);

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/asdrubal-vela', // Reemplaza con tu perfil
    label: 'LinkedIn',
    icon: <LinkedInIcon />,
  },
  {
    href: 'https://www.behance.net/asdrubal-vela', // Reemplaza con tu perfil
    label: 'Behance',
    icon: <BehanceIcon />,
  },
  {
    href: 'https://www.instagram.com/asdrubal.vela', // Reemplaza con tu perfil
    label: 'Instagram',
    icon: <InstagramIcon />,
  },
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="bg-secundario border-t border-gray-700 py-6"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-principal">
        <p className="text-sm text-gray-400 mb-4 sm:mb-0">
          © {new Date().getFullYear()} Asdrubal Vela | Currículum Web
        </p>
        <div className="flex space-x-6">
          {socialLinks.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-400 hover:text-acento transition-colors duration-300"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;