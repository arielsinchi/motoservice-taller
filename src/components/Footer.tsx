import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function Footer() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <footer className="bg-gradient-to-b from-dark to-black py-8 md:py-12">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm md:text-base text-gray-400">
            © 2024 MotoService - Reconquista, Santa Fe
          </p>
          <p className="gradient-text mt-2 text-xs md:text-sm font-medium neon-glow">
            "MotoService, pasión por lo que hacemos"
          </p>
        </motion.div>
      </div>
    </footer>
  )
}