import { MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function Map() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="py-12 md:py-16 bg-gradient-to-b from-dark to-dark-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold gradient-text mb-3 md:mb-4">
            Ubicación
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-300">
            <MapPin className="w-5 h-5 text-neon-orange" />
            <p className="text-sm md:text-base">
              Islas Malvinas 1536, Reconquista, Santa Fe
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full glass-effect rounded-xl overflow-hidden shadow-lg neon-box"
          style={{ paddingBottom: '56.25%' }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.5764927493386!2d-59.65981419999999!3d-29.1602042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x944eb1acd212bf23%3A0xb3e3a4073a8727fe!2sMotoService!5e0!3m2!1ses!2sar!4v1711072125045!5m2!1ses!2sar"
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </div>
  )
}