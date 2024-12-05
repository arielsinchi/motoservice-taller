import { Phone, Mail, MapPin } from 'lucide-react'

export function Contact() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white py-12 md:py-16" id="contacto">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Contactanos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="bg-orange-100 p-3 rounded-full mb-4">
                <Phone className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Teléfono</h3>
              <p className="text-gray-600 text-sm md:text-base">3482-415437</p>
            </div>
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="bg-orange-100 p-3 rounded-full mb-4">
                <Mail className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600 text-sm md:text-base">motoservice.taller@gmail.com</p>
            </div>
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="bg-orange-100 p-3 rounded-full mb-4">
                <MapPin className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Dirección</h3>
              <p className="text-gray-600 text-sm md:text-base">Islas Malvinas 1536<br/>S3560 Reconquista, Santa Fe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}