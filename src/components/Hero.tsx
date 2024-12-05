import { MapPin, Clock, MessageCircle, Instagram, ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'
import { getRandomImages } from './ImageGallery'
import { reviews } from '../data/reviews'
import { motion, AnimatePresence } from 'framer-motion'

export function Hero() {
  const [review, setReview] = useState(reviews[0])
  const [backgroundImage, setBackgroundImage] = useState('')

  useEffect(() => {
    const [randomImage] = getRandomImages(1)
    setBackgroundImage(randomImage)

    const getRandomReview = () => {
      let newReview
      do {
        newReview = reviews[Math.floor(Math.random() * reviews.length)]
      } while (newReview === review)
      return newReview
    }

    setReview(getRandomReview())

    const interval = setInterval(() => {
      setReview(getRandomReview())
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const scrollToReviews = () => {
    const reviewsSection = document.getElementById('opiniones')
    if (reviewsSection) {
      reviewsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-screen flex items-start md:items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          filter: 'blur(2px) brightness(0.3)',
        }}
      />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-10 bg-gradient-radial from-dark-50/50 via-dark/80 to-dark"
      />

      <div className="relative z-20 w-full py-8 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mt-16 md:mt-0">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center mb-4"
            >
              <img 
                src="https://i.imgur.com/76mP7tq.png" 
                alt="MotoService Logo" 
                className="w-32 h-32 mb-2"
              />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider gradient-text font-['Montserrat']">
                MOTOSERVICE
              </h1>
            </motion.div>
            <AnimatePresence mode="wait">
              <motion.div 
                key={review.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative mb-6 md:mb-8 glass-effect p-4 md:p-6 rounded-lg transform hover:scale-105 transition-transform duration-300"
              >
                <p className="text-base md:text-2xl text-orange-400 font-semibold italic">
                  "{review.text}"
                </p>
                <p className="text-xs md:text-sm text-gray-300 mt-2">- {review.name}</p>
              </motion.div>
            </AnimatePresence>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:justify-center md:gap-6"
            >
              {[
                { Icon: MapPin, text: "Reconquista, Santa Fe" },
                { Icon: Clock, text: "Lun-Sáb: 8:00-12:00, 16:00-20:00" },
                { 
                  Icon: MessageCircle, 
                  text: "WhatsApp: 3482-415437",
                  href: "https://api.whatsapp.com/send?phone=+543482415437&text=MotoService%2C+esta+disponible%3F"
                },
                { 
                  Icon: Instagram, 
                  text: "@motoservice.taller",
                  href: "https://www.instagram.com/motoservice.taller/"
                }
              ].map(({ Icon, text, href }, index) => (
                <motion.div
                  key={text}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className={`glass-effect px-4 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-white/10 transition-colors ${
                    href ? 'cursor-pointer' : ''
                  }`}
                  onClick={() => href && window.open(href, '_blank')}
                >
                  <Icon className="text-neon-orange w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-sm">{text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              onClick={() => window.open('https://api.whatsapp.com/send?phone=+543482415437&text=MotoService%2C+esta+disponible%3F', '_blank')}
              className="mx-auto mt-8 px-8 py-3 bg-gradient-to-r from-neon-orange to-orange-600 rounded-full text-white font-semibold tracking-wider uppercase shadow-lg hover:shadow-neon-orange/20 transform hover:scale-105 transition-all duration-300 animate-bounce flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-['Montserrat']">Solicitar Turno</span>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              onClick={scrollToReviews}
              className="mx-auto mt-8 p-2 glass-effect rounded-full text-neon-orange hover:text-orange-400 transition-colors group"
              aria-label="Scroll to reviews"
            >
              <ChevronDown className="w-6 h-6 transform group-hover:scale-110 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}