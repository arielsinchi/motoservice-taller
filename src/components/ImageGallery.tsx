import { useEffect, useState } from 'react'
import Lightbox from "yet-another-react-lightbox"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import "yet-another-react-lightbox/styles.css"
import { motion } from 'framer-motion'

const images = [
  "https://lh3.googleusercontent.com/p/AF1QipPA0PaiMjAf0yx6yK9fL7qzRxWH_KtwMapSvCyH=s3490-w3490-h1700-rw",
  "https://lh3.googleusercontent.com/p/AF1QipOGHn3LsxRX9_7y2wwLe1Oitvv2FhkR5bE7_9rg=s3490-w3490-h1700-rw",
  "https://lh3.googleusercontent.com/p/AF1QipN8da-E_0bRxnOnpjU3HiFlrixr8VjGGdd-IBLV=s3490-w3490-h1700-rw",
  "https://lh3.googleusercontent.com/p/AF1QipMPnpRefX91V7pAxkKnR08i_QBdS8gKVPbhk9HM=s3490-w3490-h1700-rw",
  "https://lh3.googleusercontent.com/p/AF1QipNOwwSxew1vYkkpPOujBG1lmGheJCPTin1qMINg=s3490-w3490-h1700-rw",
  "https://lh3.googleusercontent.com/p/AF1QipNPysx1oNaBc8FLx4I4u_SO0ie-LE6wqDtoMsOK=s3490-w3490-h1700-rw",
  "https://lh3.googleusercontent.com/p/AF1QipPp0lmot43lSDHp3Wp3IdJFkNhbw5-56cJLPmy1=s3490-w3490-h1700-rw",
  "https://lh3.googleusercontent.com/p/AF1QipMCyVmoclS8aDFNS_vgnmDD1VxzdiIn97AJSE_h=s3490-w3490-h1700-rw",
  "https://lh3.googleusercontent.com/p/AF1QipOhA49LwCHbmyo-I8vZov7H4GpZhEeulUrIEsgy=s3490-w3490-h1700-rw"
]

export const getRandomImages = (count: number) => {
  const shuffled = [...images].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

export function ImageGallery() {
  const [displayedImages, setDisplayedImages] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  useEffect(() => {
    setDisplayedImages(getRandomImages(6))
  }, [])

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {displayedImages.map((image, index) => (
          <motion.div
            key={index}
            className="aspect-square overflow-hidden rounded-lg cursor-pointer relative group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setPhotoIndex(index)
              setIsOpen(true)
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img
              src={image}
              alt={`Trabajo ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-sm md:text-base font-medium px-4 py-2 rounded-full glass-effect">
                Ver imagen
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={displayedImages.map(src => ({ src }))}
        plugins={[Zoom]}
        animation={{ fade: 300 }}
        carousel={{ finite: true }}
        render={{
          buttonPrev: displayedImages.length <= 1 ? () => null : undefined,
          buttonNext: displayedImages.length <= 1 ? () => null : undefined,
        }}
      />
    </>
  )
}