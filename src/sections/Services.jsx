import React from 'react';
import { motion } from 'framer-motion';
import { MdVideocam, MdPhotoCamera, MdDesignServices, MdAnimation, MdOndemandVideo, MdBrandingWatermark } from 'react-icons/md';

const servicesData = [
  {
    icon: <MdVideocam className="w-12 h-12" />,
    title: "Producción de Video",
    description: "Creamos videos corporativos, comerciales, documentales y contenido para redes sociales con alto impacto visual.",
    features: ["Guionización", "Filmación 4K", "Dirección creativa", "Postproducción completa"]
  },
  {
    icon: <MdPhotoCamera className="w-12 h-12" />,
    title: "Fotografía Profesional",
    description: "Desde fotografía de producto hasta sesiones corporativas, capturamos la esencia de su marca con imágenes de alta calidad.",
    features: ["Fotografía de producto", "Retratos corporativos", "Eventos", "Fotografía publicitaria"]
  },
  {
    icon: <MdDesignServices className="w-12 h-12" />,
    title: "Diseño Gráfico",
    description: "Desarrollamos identidades visuales coherentes y materiales gráficos que comunican eficazmente el mensaje de su marca.",
    features: ["Identidad corporativa", "Diseño editorial", "Materiales promocionales", "Contenido para redes sociales"]
  },
  {
    icon: <MdBrandingWatermark className="w-12 h-12" />,
    title: "Branding",
    description: "Creamos y revitalizamos identidades de marca con estrategias visuales efectivas que conectan con su audiencia.",
    features: ["Desarrollo de logotipos", "Guías de estilo", "Estrategia de marca", "Aplicaciones de identidad"]
  },
  {
    icon: <MdOndemandVideo className="w-12 h-12" />,
    title: "Marketing de Contenidos",
    description: "Generamos contenido visual estratégico que fortalece su presencia digital y aumenta el engagement.",
    features: ["Calendarios editoriales", "Contenido para redes", "Narrativas de marca", "Optimización SEO"]
  },
  {
    icon: <MdAnimation className="w-12 h-12" />,
    title: "Animación y Motion Graphics",
    description: "Damos vida a sus ideas con animaciones atractivas que explican conceptos complejos de forma sencilla.",
    features: ["Animación 2D y 3D", "Infografías animadas", "Intros corporativas", "Efectos visuales"]
  }
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div 
      className="bg-secundario rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="p-8">
        <div className="flex items-center mb-5">
          <div className="p-3 bg-principal/10 rounded-lg text-principal group-hover:bg-principal group-hover:text-secundario transition-all duration-300">
            {service.icon}
          </div>
          <h3 className="ml-4 text-2xl font-bold text-principal">{service.title}</h3>
        </div>
        <p className="text-acento mb-6">{service.description}</p>
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center">
              <svg className="w-5 h-5 text-principal mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span className="text-acento">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-8 py-4 bg-principal text-secundario text-center font-medium">
        <a href="#contact" className="block w-full hover:text-white transition-colors">Solicitar Servicio</a>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <motion.section
      id="services"
      className="w-full px-6 py-24 bg-acento text-secundario overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Nuestros <span className="text-principal">Servicios</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Ofrecemos soluciones visuales integrales para potenciar su marca y comunicar su mensaje de manera efectiva
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
        
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg mb-8">
            ¿No encuentra exactamente lo que busca? Ofrecemos soluciones personalizadas adaptadas a sus necesidades específicas.
          </p>
          <a href="#contact" className="inline-block bg-principal text-secundario font-bold py-4 px-10 rounded-lg hover:bg-opacity-90 transition-all shadow-lg">
            Contáctenos para una Consulta
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
