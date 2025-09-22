import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const socialLinks = [
  {
    href: 'https://www.instagram.com/arkafilms75/',
    label: 'Instagram',
    icon: <FaInstagram className="w-6 h-6" />,
  }
];

const quickLinks = [
  { name: 'Inicio', href: '#home' },
  { name: 'Servicios', href: '#services' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Contacto', href: '#contact' },
  { name: 'Política de Privacidad', href: '#' },
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-br from-acento to-acento/90 text-secundario"
    >
      {/* Footer Principal */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo y Descripción */}
          <div>
            <h3 className="text-3xl font-bold mb-6">
              <span className="text-principal">ARKA</span>
              <span className="text-secundario">corp</span>
            </h3>
            <p className="text-secundario/80 mb-6 max-w-xs">
              Transformamos ideas en experiencias visuales memorables para marcas que buscan destacar en un mundo digital competitivo.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="bg-principal/20 hover:bg-principal p-3 rounded-full text-secundario transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Enlaces Rápidos */}
          <div>
            <h4 className="text-xl font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-secundario/80 hover:text-principal transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contacto */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contacto</h4>
            <address className="not-italic text-secundario/80 space-y-3">
              <p></p>
              <p>Durango,Dgo México C.P:34373</p>
              <p>Tel: +52 (618) 272 5856</p>
              <p>Email: arkafilms@gmail.com</p>
            </address>
          </div>
        </div>
        
        {/* Suscripción Newsletter */}
        <div className="mt-16 border-t border-secundario/20 pt-10">
          <div className="max-w-lg mx-auto text-center">
            <h4 className="text-2xl font-bold mb-3">Mantente Actualizado</h4>
            <p className="text-secundario/80 mb-6">Suscríbete a nuestro newsletter para recibir noticias y ofertas especiales.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="flex-grow px-5 py-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-principal"
                required 
              />
              <button 
                type="submit" 
                className="bg-principal text-secundario px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 shadow-lg hover:-translate-y-1 transform transition-all duration-300"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-principal/30 py-6 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-secundario/80 mb-3 md:mb-0">
              © {new Date().getFullYear()} ARKAFilms. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secundario/70 hover:text-principal text-sm">Términos de Servicio</a>
              <a href="#" className="text-secundario/70 hover:text-principal text-sm">Política de Privacidad</a>
              <a href="#" className="text-secundario/70 hover:text-principal text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;