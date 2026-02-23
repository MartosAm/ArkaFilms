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
      className="relative w-full px-6 py-24 bg-acento text-secundario overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(211,0,0,0.1),transparent_50%)]" />
        <div className="w-full h-full absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(211,0,0,0.05),transparent_50%)]" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-principal font-bold tracking-widest uppercase text-sm mb-3 block">Cómo trabajamos</span>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">Nuestro Proceso <span className="text-transparent bg-clip-text bg-gradient-to-r from-principal to-red-500">Creativo</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-principal to-transparent mx-auto mb-8 rounded-full"></div>
          <p className="text-xl max-w-3xl mx-auto text-secundario/70 font-light">
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
                <div className="hidden lg:block absolute top-1/4 -right-8 w-16 border-t-[3px] border-dotted border-principal/30 z-0"></div>
              )}

              {/* Número de paso con círculo */}
              <div className="absolute -top-8 -left-6 bg-gradient-to-br from-principal to-red-700 text-secundario text-2xl font-black h-16 w-16 rounded-2xl flex items-center justify-center shadow-[0_4px_20px_rgba(211,0,0,0.4)] z-10 transform rotate-[-10deg] group-hover:rotate-0 transition-transform duration-300">
                {step.step}
              </div>

              {/* Contenido */}
              <div className="bg-secundario/5 backdrop-blur-xl p-8 pt-12 rounded-2xl border border-secundario/10 h-full group hover:bg-secundario/10 hover:border-principal/30 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(211,0,0,0.15)] relative overflow-hidden z-0">
                {/* Decorative background number */}
                <div className="absolute -right-4 -bottom-4 text-9xl font-black text-secundario/5 select-none transition-transform duration-500 group-hover:scale-110 group-hover:text-principal/5 pointer-events-none">
                  {step.step}
                </div>

                <div className="text-principal bg-principal/10 inline-block p-4 rounded-xl mb-6 shadow-sm group-hover:scale-110 group-hover:bg-principal group-hover:text-secundario transition-all duration-300 relative z-10">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-secundario group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-principal group-hover:to-red-400 transition-all z-10 relative">{step.title}</h3>
                <p className="text-secundario/70 leading-relaxed z-10 relative">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-28 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-block p-[2px] rounded-2xl bg-gradient-to-r from-principal to-red-500">
            <div className="bg-acento px-10 py-12 rounded-[14px]">
              <p className="text-2xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">
                En <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-principal to-red-400">ARKAFilms</span> personalizamos cada proyecto según las necesidades específicas de nuestros clientes.
              </p>
              <a
                href="#contact"
                className="inline-block bg-principal text-secundario font-bold py-4 px-10 rounded-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(211,0,0,0.4)] hover:shadow-[0_0_30px_rgba(211,0,0,0.6)]"
              >
                Comienza Tu Proyecto
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Process;
