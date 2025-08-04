import React from 'react';
import { motion } from 'framer-motion';

// --- Iconos SVG ---
const WhatsAppIcon = () => (
    <svg className="w-12 h-12 text-principal" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.687-1.475L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.89-5.451 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.919 6.066l-1.225 4.429 4.52-1.226z" /></svg>
);

const MailIcon = () => (
    <svg className="w-12 h-12 text-principal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);

const LinkedInIcon = () => (
    <svg className="w-12 h-12 text-principal" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.8V24h-5v-7.5c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 2-2.9 4v7.6h-5V8z" /></svg>
);

const contactMethods = [
  {
    name: 'WhatsApp',
    icon: <WhatsAppIcon />,
    handle: '+52 1 55 1234 5678',
    cta: 'Enviar Mensaje',
    link: 'https://wa.me/5215512345678', // Reemplaza con tu número
  },
  {
    name: 'Email',
    icon: <MailIcon />,
    handle: 'Asdrubal.Vela@gmail.com',
    cta: 'Enviar Correo',
    link: 'mailto:Asdrubal.Vela@gmail.com', // Reemplaza con tu email
  },
  {
    name: 'LinkedIn',
    icon: <LinkedInIcon />,
    handle: 'Asdrubal Vela',
    cta: 'Ver Perfil',
    link: 'https://www.linkedin.com/in/asdrubal-vela/', // Reemplaza con tu perfil
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
            className="bg-secundario rounded-xl shadow-lg p-8 text-center flex flex-col items-center text-texto-primary border border-acento/20"
        >
            {method.icon}
            <h3 className="text-2xl font-bold mt-4 mb-2 text-acento">{method.name}</h3>
            <p className="text-black mb-6 h-10">{method.handle}</p>
            <a
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block w-full px-6 py-3 bg-acento text-principal font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
            >
                {method.cta}
            </a>
        </motion.div>
    );
};

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="w-full px-6 py-20 bg-principal text-texto-primary overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-texto-primary"
        >
          Hablemos
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <ContactCard key={index} method={method} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;