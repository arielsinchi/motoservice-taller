import { Settings, Wrench, Battery, Clipboard, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const services = [
  {
    icon: <Settings className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Mantenimiento General",
    description: "Servicio completo para mantener tu moto en óptimas condiciones",
    features: ["Cambio de aceite", "Filtros", "Ajustes generales"]
  },
  {
    icon: <Wrench className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Reparaciones",
    description: "Soluciones expertas para cualquier problema mecánico",
    features: ["Diagnóstico preciso", "Repuestos originales", "Garantía de servicio"]
  },
  {
    icon: <Battery className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Sistema Eléctrico",
    description: "Diagnóstico y reparación de todo el sistema eléctrico",
    features: ["Instalación de luces", "Batería", "Sistema de arranque"]
  },
  {
    icon: <Clipboard className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Diagnóstico",
    description: "Evaluación profesional del estado de tu motocicleta",
    features: ["Escaneo completo", "Informe detallado", "Recomendaciones"]
  }
]

export function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="py-12 md:py-16 bg-gradient-to-b from-dark to-dark-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold gradient-text mb-3 md:mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            Ofrecemos servicios profesionales para mantener tu moto en perfecto estado
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 }
                }
              }}
              className="glass-effect rounded-xl p-4 md:p-6 hover:bg-white/10 transition-colors group"
            >
              <div className="flex justify-center mb-3 md:mb-4">
                <div className="p-2 md:p-3 bg-neon-orange/10 rounded-lg text-neon-orange group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-400 mb-3 md:mb-4 text-center">
                {service.description}
              </p>
              <ul className="space-y-1 md:space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300 text-xs md:text-sm">
                    <ChevronRight className="w-4 h-4 text-neon-orange mr-1 md:mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}