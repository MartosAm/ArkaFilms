import React from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiLayout, FiCamera, FiEdit, FiCheckSquare, FiThumbsUp } from 'react-icons/fi';

const processSteps = [
  {
    icon: <FiFileText className="w-8 h-8" />,
    step: "01",
    title: "Consulta y Planificación",
    description: "Comenzamos con una reunión detallada para entender sus objetivos, público objetivo y visión. Definimos alcance, cronograma y presupuesto.",
  },
  {
    icon: <FiLayout className="w-8 h-8" />,
    step: "02",
    title: "Conceptualización",
    description: "Desarrollamos conceptos creativos alineados con su marca y objetivos. Presentamos bocetos, storyboards o propuestas según el proyecto.",
  },
  {
    icon: <FiCamera className="w-8 h-8" />,
    step: "03",
    title: "Producción",
    description: "Ejecutamos el proyecto con equipo profesional y técnicas avanzadas, ya sea filmación, sesión fotográfica o diseño gráfico.",
  },
  {
    icon: <FiEdit className="w-8 h-8" />,
    step: "04",
    title: "Post-producción",
    description: "Realizamos edición, retoque, animación y finalización para dar vida a su proyecto con los más altos estándares de calidad.",
  },
  {
    icon: <FiCheckSquare className="w-8 h-8" />,
    step: "05",
    title: "Revisión y Ajustes",
    description: "Presentamos el resultado para su revisión, realizando los ajustes necesarios hasta lograr su completa satisfacción.",
  },
  {
    icon: <FiThumbsUp className="w-8 h-8" />,
    step: "06",
    title: "Entrega y Soporte",
    description: "Entregamos el proyecto finalizado en todos los formatos requeridos y brindamos soporte posterior para garantizar su éxito.",
  },
];

const Process = () => {
  return (
    <motion.section
      id="process"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative w-full px-6 py-24 text-secundario overflow-hidden"
    >
      {/* Fondo difuminado con overlay negro */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-principal/90 via-acento/80 to-principal/80" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-acento font-semibold mb-2 inline-block">ARKAFilms</span>
          <h2 className="text-5xl font-bold mb-6">Nuestro Proceso Creativo</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-acento to-acento/50 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl max-w-3xl mx-auto text-secundario/80">
            Metodología refinada para transformar ideas en resultados excepcionales
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Línea conectora entre tarjetas (visible en desktop) */}
              {index < processSteps.length - 1 && (index + 1) % 3 !== 0 && (
                <div className="hidden lg:block absolute top-1/4 -right-5 w-10 border-t-2 border-dashed border-acento/30"></div>
              )}
              
              {/* Número de paso con círculo */}
              <div className="absolute -top-10 -left-6 bg-gradient-to-br from-acento to-acento/80 text-secundario text-2xl font-bold h-16 w-16 rounded-full flex items-center justify-center border-4 border-secundario/20 shadow-lg shadow-acento/20 z-10">
                {step.step}
              </div>
              
              {/* Contenido */}
              <div className="bg-secundario/10 backdrop-blur-md p-8 pt-14 rounded-xl border border-secundario/20 h-full group hover:bg-secundario/15 transition-all duration-300 shadow-lg shadow-principal/5">
                <div className="text-principal bg-secundario inline-block p-3 rounded-lg mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-acento transition-colors">{step.title}</h3>
                <p className="text-secundario/80">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-28 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xl font-medium mb-8 max-w-3xl mx-auto">
            En <span className="text-acento font-bold">ARKAFilms</span> personalizamos cada proyecto según las necesidades específicas de nuestros clientes.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-gradient-to-r from-acento to-acento/80 text-secundario font-bold py-4 px-10 rounded-lg transition-all transform hover:-translate-y-1 hover:shadow-xl shadow-md shadow-acento/20"
          >
            Comienza Tu Proyecto
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Process;
