'use client'

import { ChefHat, Users, Package } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

export default function ServicesSection() {
  return (

      <ScrollAnimation>
        <section id="services" className="py-20 bg-gradient-to-b from-white to-[#f8d2c6]/20 ">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-gray-800 mb-4 lg:text-5xl">
                Mis <span className="text-[#b69d8f]">Servicios</span>
              </h2>
              <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[#f8d2c6] to-transparent mb-6" />
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Ofrezco una gama completa de servicios culinarios diseñados para satisfacer todas tus necesidades
                gastronómicas
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Catering Service */}
              <div className="group bg-gradient-to-br  from-[#f8d2c6]/20 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#b69d8f]/30 rounded-full mb-6 group-hover:bg-[#b69d8f]/60 transition-colors duration-300">
                  <Users className="h-8 w-8 text-[#b69d8f]" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-4">Catering Corporativo y Social </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Servicios especializados para eventos corporativos y sociales. Desde coffee breaks y lunch boxes hasta buffets completos, 
                  adaptamos nuestros menús a las necesidades específicas de cada ocasión.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Catering corporativo (Coffee break, Lunch Box)</li>
                  <li>• Catering social (Buffet personalizado)</li>
                  <li>• Canastas corporativas</li>
                  <li>• Eventos de cualquier tamaño</li>
                </ul>
                <button
                onClick={() => {
                  const section = document.getElementById('contact');
                  section?.scrollIntoView({ behavior: 'smooth' });
                }}
                 className="w-full bg-[#b69d8f] text-white py-3 rounded-full font-serif hover:bg-[#ad8a75] transition-colors duration-300">
                  Solicitar cotización
                </button>
              </div>

              {/* Consulting Service */}
              <div className="group bg-gradient-to-br from-[#f8d2c6]/20 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#b69d8f]/30 rounded-full mb-6 group-hover:bg-[#b69d8f]/60 transition-colors duration-300">
                  <ChefHat className="h-8 w-8 text-[#b69d8f]" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-4">Servicios Móviles</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Estaciones gastronómicas móviles que llevan la experiencia culinaria directamente a tu evento.
                   Opciones frescas y variadas que se adaptan a cualquier espacio y ocasión.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Areperas móviles</li>
                  <li>• Estaciones saludables</li>
                  <li>• Sushi en vivo</li>
                  <li>• Hot dogs y hamburguesas gourmet</li>
                </ul>
                <button 
                  onClick={() => {
                  const section = document.getElementById('contact');
                  section?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-[#b69d8f] text-white py-3 rounded-full font-serif hover:bg-[#ad8a75] transition-colors duration-300">
                  Agendar consulta
                </button>
              </div>

              {/* Food Production Service */}
              <div className="group bg-gradient-to-br from-[#f8d2c6]/20 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#b69d8f]/30 rounded-full mb-6 group-hover:bg-[#b69d8f]/60 transition-colors duration-300">
                  <Package className="h-8 w-8 text-[#b69d8f]" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-4">Asesoría y Producción</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Consultoría especializada para empresas de alimentos, restaurantes y comedores. 
                  Desarrollo de nuevos productos y producción para terceros con los más altos estándares de calidad.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Asesoría gastronómica integral</li>
                  <li>• Desarrollo de nuevos productos</li>
                  <li>• Producción para cafeterías y oficinas</li>
                  <li>• Implementación de plantas de alimentos</li>
                </ul>
                <button 
                onClick={() => {
                  const section = document.getElementById('contact');
                  section?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-[#b69d8f] text-white py-3 rounded-full font-serif hover:bg-[#ad8a75] transition-colors duration-300">
                  Ver productos
                </button>
              </div>
            </div>
          </div>
        </section>

    </ScrollAnimation>
  )
}
