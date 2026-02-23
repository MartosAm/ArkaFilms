import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

// --- Iconos SVG ---
const WhatsAppIcon = () => (
  <svg className="w-12 h-12 text-principal" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.687-1.475L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.89-5.451 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.919 6.066l-1.225 4.429 4.52-1.226z" /></svg>
);

const MailIcon = () => (
  <svg className="w-12 h-12 text-principal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);

const InstagramIcon = () => (
  <svg className="w-12 h-12 text-principal" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const contactMethods = [
  {
    name: 'WhatsApp Empresarial',
    icon: <WhatsAppIcon />,
    handle: '+52 1 618 272 5856',
    cta: 'Contactar Ahora',
    link: 'https://wa.me/526182725856', // Reemplaza con número de la empresa
  },
  {
    name: 'Correo de Negocios',
    icon: <MailIcon />,
    handle: 'arkafilms@gmail.com',
    cta: 'Enviar Email',
    link: 'mailto:arkafilms@gmail.com', // Reemplaza con email de la empresa
  },
  {
    name: 'Instagram',
    icon: <InstagramIcon />,
    handle: '@arkafilms75',
    cta: 'Seguir',
    link: 'https://www.instagram.com/arkafilms75/',
  },
];

const ContactCard = ({ method, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, delay: index * 0.2, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="bg-[#1a1a1a] rounded-2xl shadow-xl p-8 text-center flex flex-col items-center border border-[#333]/50 transform transition-all duration-300 hover:shadow-[0_10px_30px_rgba(211,0,0,0.15)] hover:border-principal/40 hover:-translate-y-2 group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-principal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      <div className="rounded-full bg-principal/10 p-4 mb-4 group-hover:bg-principal/20 group-hover:scale-110 transition-all duration-300 relative z-10">
        {method.icon}
      </div>
      <h3 className="text-2xl font-bold mt-2 mb-2 text-secundario relative z-10">{method.name}</h3>
      <p className="text-secundario/60 mb-8 h-10 font-medium relative z-10">{method.handle}</p>
      <a
        href={method.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block w-full px-6 py-4 bg-[#2a2a2a] text-secundario font-bold rounded-xl hover:bg-principal hover:text-white transition-all duration-300 relative z-10 hover:shadow-[0_5px_15px_rgba(211,0,0,0.4)]"
      >
        {method.cta}
      </a>
    </motion.div>
  );
};

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSent(false);
    setError(false);
    emailjs.sendForm('TU_SERVICE_ID', 'TU_TEMPLATE_ID', form.current, 'TU_PUBLIC_KEY')
      .then(() => setSent(true))
      .catch(() => setError(true));
  };

  return (
    <motion.section
      id="contact"
      className="w-full px-6 py-24 bg-[#0a0a0a] text-secundario overflow-hidden relative"
    >
      {/* Elementos de fondo decorativos */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-principal/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_bottom_left,rgba(211,0,0,0.1),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-principal font-bold tracking-widest uppercase text-sm mb-3 block">¿Listo para crear algo increíble?</span>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Contáctanos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-principal to-transparent mx-auto mb-8 rounded-full"></div>
          <p className="text-xl max-w-3xl mx-auto text-secundario/70 font-light">
            En ARKAFilms estamos listos para llevar tus ideas al siguiente nivel con soluciones creativas y personalizadas.
          </p>
        </motion.div>

        {/* Formulario y Tarjetas de Contacto */}
        <div className="grid md:grid-cols-5 gap-10 mb-20">
          {/* Formulario - 3 columnas */}
          <motion.div
            className="md:col-span-3 bg-[#111] backdrop-blur-xl p-10 rounded-2xl shadow-2xl border border-[#333]/50"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-10 w-1.5 bg-principal rounded-full shadow-[0_0_10px_rgba(211,0,0,0.5)]"></div>
              <h3 className="text-3xl font-bold text-secundario">Solicitar Presupuesto</h3>
            </div>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-secundario/80">Nombre completo</label>
                  <input name="user_name" type="text" required className="w-full p-4 border border-[#333] rounded-xl bg-[#1a1a1a] text-secundario focus:outline-none focus:ring-2 focus:ring-principal focus:border-principal transition-all" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-secundario/80">Email</label>
                  <input name="user_email" type="email" required className="w-full p-4 border border-[#333] rounded-xl bg-[#1a1a1a] text-secundario focus:outline-none focus:ring-2 focus:ring-principal focus:border-principal transition-all" placeholder="correo@ejemplo.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-secundario/80">Empresa / Organización</label>
                <input name="user_company" type="text" className="w-full p-4 border border-[#333] rounded-xl bg-[#1a1a1a] text-secundario focus:outline-none focus:ring-2 focus:ring-principal focus:border-principal transition-all" placeholder="Nombre de tu empresa" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-secundario/80">Servicios de Interés</label>
                <select name="user_service" className="w-full p-4 border border-[#333] rounded-xl bg-[#1a1a1a] text-secundario focus:outline-none focus:ring-2 focus:ring-principal focus:border-principal transition-all appearance-none cursor-pointer">
                  <option value="">Selecciona un servicio</option>
                  <option>Video Corporativo</option>
                  <option>Fotografía de Producto</option>
                  <option>Diseño de Marca</option>
                  <option>Marketing de Contenidos</option>
                  <option>Otro (especificar)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-secundario/80">Mensaje</label>
                <textarea name="message" rows="5" required className="w-full p-4 border border-[#333] rounded-xl bg-[#1a1a1a] text-secundario focus:outline-none focus:ring-2 focus:ring-principal focus:border-principal transition-all resize-none" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
              </div>
              <button type="submit" className="w-full py-5 bg-principal text-secundario text-lg font-bold rounded-xl shadow-[0_0_20px_rgba(211,0,0,0.3)] hover:shadow-[0_0_30px_rgba(211,0,0,0.5)] hover:bg-principal/90 transition-all duration-300 transform hover:-translate-y-1">
                Enviar Solicitud
              </button>
              {sent && <p className="text-green-500 text-center font-medium mt-4 bg-green-500/10 p-4 rounded-lg border border-green-500/20">¡Mensaje enviado correctamente!</p>}
              {error && <p className="text-red-500 text-center font-medium mt-4 bg-red-500/10 p-4 rounded-lg border border-red-500/20">Ocurrió un error, intenta de nuevo.</p>}
              <p className="text-xs text-center text-secundario/50 mt-4">Al enviar este formulario, aceptas nuestra política de privacidad.</p>
            </form>
          </motion.div>

          {/* Tarjetas de Contacto - 2 columnas */}
          <div className="md:col-span-2 grid grid-cols-1 gap-6">
            {contactMethods.map((method, index) => (
              <ContactCard key={index} method={method} index={index} />
            ))}

            {/* Tarjeta adicional con mapa */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
              className="bg-[#1a1a1a] rounded-2xl shadow-xl overflow-hidden border border-[#333]/50 h-64 group transform transition-all duration-300 hover:shadow-[0_10px_30px_rgba(211,0,0,0.15)] hover:border-principal/40 hover:-translate-y-2 relative"
            >
              {/* Aquí iría un mapa embebido, por ahora un placeholder */}
              <div className="absolute inset-0 bg-principal/5 group-hover:bg-principal/10 transition-colors duration-500"></div>
              <div className="w-full h-full flex items-center justify-center relative z-10">
                <div className="text-center p-6 bg-[#111]/80 backdrop-blur-md rounded-xl border border-[#333]/50 m-4 group-hover:border-principal/30 transition-colors">
                  <FaMapMarkerAlt className="w-10 h-10 text-principal mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold mb-2 text-secundario">Nuestra Ubicación</h3>
                  <p className="text-sm text-secundario/60">Haz clic para ver en Google Maps</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Información adicional */}
        <motion.div
          className="grid md:grid-cols-3 gap-10 text-center mt-16 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col items-center group bg-[#111] p-8 rounded-2xl border border-[#333]/30 hover:border-principal/30 transition-colors">
            <div className="p-5 bg-[#1a1a1a] rounded-2xl mb-6 shadow-inner group-hover:shadow-[0_0_15px_rgba(211,0,0,0.2)] transition-shadow duration-300">
              <FaMapMarkerAlt className="w-8 h-8 text-principal group-hover:scale-110 transition-transform" />
            </div>
            <h4 className="text-2xl font-bold mb-3 text-secundario">Dirección</h4>
            <p className="text-secundario/60 font-medium">Victoria de Durango<br />Durango, Dgo. México C.P: 34373</p>
          </div>

          <div className="flex flex-col items-center group bg-[#111] p-8 rounded-2xl border border-[#333]/30 hover:border-principal/30 transition-colors">
            <div className="p-5 bg-[#1a1a1a] rounded-2xl mb-6 shadow-inner group-hover:shadow-[0_0_15px_rgba(211,0,0,0.2)] transition-shadow duration-300">
              <FaPhoneAlt className="w-8 h-8 text-principal group-hover:scale-110 transition-transform" />
            </div>
            <h4 className="text-2xl font-bold mb-3 text-secundario">Teléfono</h4>
            <p className="text-secundario/60 font-medium">+52 (618) 272 5856<br />Lunes a Domingo</p>
            <p className="text-secundario/40 text-sm mt-3">Tiempo de espera maximo 3 horas</p>
          </div>

          <div className="flex flex-col items-center group bg-[#111] p-8 rounded-2xl border border-[#333]/30 hover:border-principal/30 transition-colors">
            <div className="p-5 bg-[#1a1a1a] rounded-2xl mb-6 shadow-inner group-hover:shadow-[0_0_15px_rgba(211,0,0,0.2)] transition-shadow duration-300">
              <FaClock className="w-8 h-8 text-principal group-hover:scale-110 transition-transform" />
            </div>
            <h4 className="text-2xl font-bold mb-3 text-secundario">Horario</h4>
            <p className="text-secundario/60 font-medium">Lunes a Viernes: 9am - 6pm<br />Sábados: 10am - 2pm (con cita)</p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center mt-20 pt-10 border-t border-acento/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-principal mb-2">ARKAFilms</h3>
          <p className="text-acento/70 mb-6">Soluciones creativas para tu marca</p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-principal hover:text-acento transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="text-principal hover:text-acento transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="#" className="text-principal hover:text-acento transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" className="text-principal hover:text-acento transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
          <p className="text-sm text-acento/50">&copy; {new Date().getFullYear()} ARKAFilms. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;