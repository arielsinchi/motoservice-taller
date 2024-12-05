import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ImageGallery } from './ImageGallery'

export function Works() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="py-12 md:py-16 bg-gradient-to-b from-dark-50 to-dark">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold gradient-text mb-3 md:mb-4">
            Nuestros Trabajos
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            Conocé algunos de nuestros trabajos realizados con dedicación y profesionalismo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-effect rounded-xl p-4 md:p-6 hover:shadow-lg hover:shadow-neon-orange/10 transition-all duration-300"
        >
          <ImageGallery />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <a
            href="https://www.instagram.com/motoservice.taller/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass-effect rounded-full text-neon-orange hover:text-orange-400 hover:bg-white/10 transition-all duration-300 group"
          >
            <span className="text-sm md:text-base font-medium">Ver más trabajos en Instagram</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </div>
  )
}