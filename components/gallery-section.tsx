'use client'
import { Fullscreen } from "lucide-react";
//import { Star, Quote } from "lucide-react"
import ScrollAnimation from "./scroll-animation"
//import Testimonio from "./testimonio"
import Image from "next/image"; 


export default function GallerySection() {
 /* const testimonials = [
    {
      name: "María González",
      event: "Boda",
      text: "Kreti hizo de nuestra boda un evento inolvidable. Cada plato fue una obra de arte y nuestros invitados no paran de hablar de la comida.",
      rating: 5,
    },
    {
      name: "Carlos Mendoza",
      event: "Evento Corporativo",
      text: "Profesionalismo excepcional. La presentación y sabor de cada plato superó nuestras expectativas. Definitivamente la recomendamos.",
      rating: 5,
    },
    {
      name: "Ana Rodríguez",
      event: "Celebración Familiar",
      text: "Una experiencia gastronómica única. Kreti logró capturar perfectamente el espíritu de nuestra celebración familiar.",
      rating: 5,
    },
  ]*/

  return (

  <ScrollAnimation>
      <section id="gallery" className="py-20 bg-gradient-to-b from-white to-[#f8d2c6]/20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-800 mb-4 lg:text-5xl">
              Galería 
              {/*<span className="text-[#b69d8f] ">Testimonios</span>*/}
            </h2>
            <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[#b69d8f] to-transparent mb-6" />
           {/*
           <p className="text-gray-600 max-w-2xl mx-auto text-lg">
             eventos y mas
            </p>

           */} 


             {/*  y lo que dicen mis clientes*/}


             
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Image
                width={1600}
                height={256}
                src="/carne.jpg"
                alt="Plato gourmet elegante"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Image
               width={1600}
                height={256}
                src="/1000933790.jpg"
                alt="Mesa de buffet elegante"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Image
               width={1600}
                height={256}
                src="/1000932533.jpg"
                alt="Presentación de postres"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Image
               width={1600}
                height={256}
                src="/1000943407.jpg"
                alt="Evento de catering"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Image
               width={1600}
                height={256}
                src="/1000937852.jpg"
                alt="Preparación en cocina"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Image
                width={1600}
                height={256}
                src="/1000947664.jpg"
                alt="Platos artesanales"
                className="w-full h-64 object-cover"
              />
            </div>
           
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Image
               width={1600}
                height={256}
                src="/Rellenosfi.png"
                alt="Presentación de postres"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Image
               width={1600}
                height={256}
                src="/Familia.png"
                alt="Evento de catering"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Image
               width={1600}
                height={300}
                src="/picante.png"
                alt="Preparación en cocina"
                className="w-100% h-64 object-cover"
                
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Image
               width={1600}
                height={256}
                src="/ambiente.png"
                alt="Platos artesanales"
                className="w-full h-64 object-cover"
                   style={{ objectPosition: '50% 70%' }}  // Alinea la imagen al fondo
              />
            </div>
             <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Image
               width={1600}
                height={256}
                src="/picodegallo.png"
                alt="Platos artesanales"
                className="w-full h-64 object-cover"
              />
            </div>
             <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Image
               width={1600}
                height={256}
                src="/ambiente2.png"
                alt="Platos artesanales"
                className="w-full h-64 object-cover"
                style={{ objectPosition: '50% 70%' }}
              />
            </div>
             <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Image
               width={1600}
                height={256}
                src="/salsadeajo.png"
                alt="Platos artesanales"
                className="w-full h-64 object-cover"
                
              />
            </div>
             <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Image
               width={1600}
                height={256}
                src="/ambiente3.png"
                alt="Platos artesanales"
                className="w-full h-64 object-cover"
                style={{ objectPosition: '50% 70%' }}
              />
            </div>
          </div>



          {/* Testimonials */}
           {/* <Testimonio/> */}
        </div>
      </section>

    </ScrollAnimation>
  )
}
