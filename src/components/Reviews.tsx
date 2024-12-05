import { Quote } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import { StarRating } from './StarRating'
import { reviews } from '../data/reviews'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export function Reviews() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="py-12 md:py-16 bg-gradient-to-b from-dark-50 to-dark" id="opiniones">
      <div className="container mx-auto px-3 md:px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold text-center gradient-text mb-6 md:mb-12"
        >
          Opiniones de Clientes
        </motion.h2>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="!pb-16"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="glass-effect p-4 md:p-6 rounded-xl h-full hover:bg-white/10 transition-all">
                  <div className="flex items-start mb-3">
                    <Quote className="w-6 h-6 md:w-8 md:h-8 text-neon-orange flex-shrink-0" />
                    <div className="ml-3">
                      <h3 className="font-semibold text-sm md:text-base text-white">{review.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <StarRating rating={review.rating} />
                        <span className="text-xs md:text-sm text-gray-400">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-gray-300">{review.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <div className="text-center mt-6 md:mt-8">
          <a
            href="https://www.google.com/maps/place/MotoService/@-29.1602042,-59.659812,17z/data=!4m8!3m7!1s0x944eb1acd212bf23:0xb3e3a4073a8727fe!8m2!3d-29.1602042!4d-59.6572317!9m1!1b1!16s%2Fg%2F11tbf7pwgj?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm md:text-base text-neon-orange hover:text-orange-400 font-semibold glass-effect px-6 py-2 rounded-full hover:bg-white/10 transition-colors"
          >
            Ver todas las opiniones en Google Maps →
          </a>
        </div>
      </div>

      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: var(--neon-orange);
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          backdrop-filter: blur(4px);
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
        }

        .swiper-pagination-bullet-active {
          background: var(--neon-orange);
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px;
        }

        .swiper-pagination {
          bottom: 0 !important;
        }

        @media (max-width: 640px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}