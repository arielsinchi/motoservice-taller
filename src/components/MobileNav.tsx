import { Menu, X, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock } from './Clock'

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#opiniones", label: "Opiniones" },
    { href: "#trabajos", label: "Trabajos" },
    { href: "#servicios", label: "Servicios" },
    { href: "#contacto", label: "Contacto" }
  ]

  return (
    <div className="md:hidden">
      <div className="fixed top-0 left-0 right-0 z-50 glass-effect h-14 flex items-center justify-between px-4">
        <div className="flex-shrink-0 flex items-center space-x-2">
          <img 
            src="https://i.imgur.com/76mP7tq.png" 
            alt="MotoService Logo" 
            className="w-8 h-8"
          />
        </div>

        <Clock />

        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6 text-neon-orange" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 w-72 bg-dark glass-effect z-50 h-screen"
            >
              <div className="p-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-4 top-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-neon-orange" />
                </button>

                <div className="mt-12 flex flex-col space-y-2">
                  {menuItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-base font-medium text-white/90 hover:text-neon-orange transition-colors py-2 px-4 rounded-lg hover:bg-white/10"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                <button
                  onClick={() => {
                    window.open('https://api.whatsapp.com/send?phone=+543482415437&text=MotoService%2C+esta+disponible%3F', '_blank')
                    setIsOpen(false)
                  }}
                  className="mt-6 w-full py-3 bg-gradient-to-r from-neon-orange to-orange-600 rounded-lg text-white font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-['Montserrat']">Solicitar Turno</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}