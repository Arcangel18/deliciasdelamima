'use client'

import { Mail, MessageCircle, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react"
import ScrollAnimation from "./scroll-animation"
import { useActionState, useEffect } from "react"
import { submitContactFormLocalhost } from "@/actions/contact-localhost"

export default function ContactSection() {
  const [state, formAction, isPending] = useActionState(submitContactFormLocalhost, null)

  // Limpiar el formulario después de envío exitoso
  useEffect(() => {
    if (state?.success) {
      const form = document.getElementById("contact-form") as HTMLFormElement
      if (form) {
        form.reset()
      }
    }
  }, [state?.success])
  


  return (


    <ScrollAnimation>
        <section id="contact" className="py-20 bg-gradient-to-b from-white to-[#f8d2c6]/20 text-white">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold mb-4 lg:text-5xl text-black">
                Hablemos de tu próximo <span className="text-[#b69d8f]">evento</span>
              </h2>
              <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[#b69d8f] to-transparent mb-6" />
              <p className="text-black max-w-2xl mx-auto text-lg">
                Con más de 20 años de experiencia y el respaldo de haber trabajado con las mejores marcas, 
                estoy aquí para hacer realidad tus sueños culinarios. Contáctanos y creemos juntos una 
                experiencia inolvidable.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-6 text-black ">Información de Contacto</h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#b69d8f] rounded-full flex items-center justify-center">
                        <MessageCircle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-black">WhatsApp</h4>
                        <p className=" mb-2 text-black">Respuesta inmediata para consultas</p>
                        <a 
                          href="https://wa.me/63392647"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors duration-300"
                        >
                          Enviar mensaje
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#b69d8f] rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-black">Email</h4>
                        <p className="text-black mb-2">Para consultas detalladas y cotizaciones</p>
                        <a
                          href="mailto:delamima.business@outlook.com"
                          className="inline-block bg-blue-400 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition-colors duration-300"
                        >
                          delamima.business@outlook.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#b69d8f] rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-black">Ubicación</h4>
                        <p className="text-black">Panamá, Panamá</p>
                        <p className="text-black">Servicio a toda el area nacional</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#b69d8f] rounded-full flex items-center justify-center">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-black">Horarios</h4>
                        <p className="text-black">Lunes a Viernes: 7:00 AM - 7:00 PM</p>
                        <p className="text-black">Sábados: 7:00 AM - 7:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white backdrop-blur-sm p-8 rounded-2xl shadow-lg">
                <h3 className="font-serif text-2xl font-semibold mb-6 text-black">Solicita tu cotización</h3>


                 {/* Status Messages */}
                  {state?.success && (
                    <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <p className="text-green-300">{state.message}</p>
                    </div>
                  )}

                  {state?.success === false && (
                    <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center space-x-3">
                      <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                      <p className="text-red-300">{state.message}</p>
                    </div>
                  )}


                <form  id='formulario' className="space-y-6" action={formAction}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-black">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        disabled={isPending}
                        className="w-full px-4 py-3 border border-black/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b69d8f] text-black placeholder-gray-400"
                        placeholder="Tu nombre"
                    
           
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className=" text-black block text-sm font-medium mb-2">
                        Teléfono
                      </label>
                      <input
                       type="tel"
                       id="phone"
                       name="phone"
                       required
                       disabled={isPending}
                        className="w-full px-4 py-3 border border-black/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b69d8f] text-black placeholder-gray-400"
                        placeholder="Tu teléfono"
                    
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className=" text-black block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                     type="email"
                    id="email"
                    name="email"
                    required
                    disabled={isPending}
                      className="w-full px-4 py-3 border border-black/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b69d8f] text-black placeholder-gray-400"
                      placeholder="tu@email.com"
                  
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className=" text-black block text-sm font-medium mb-2">
                      Tipo de servicio
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-3  text-black border border-black/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b69d8f]   "
                      name="service"
                      required
                      disabled={isPending}
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="catering">Catering Premium</option>
                      <option value="consulting">Consultoría Culinaria</option>
                      <option value="production">Producción Alimentaria</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className=" text-black block text-sm font-medium mb-2">
                      Mensaje
                    </label>
                    <textarea
                       id="message"
                        name="message"
                        rows={4}
                        required
                        disabled={isPending}
                      className="w-full px-4 py-3  border border-black/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b69d8f] text-black placeholder-gray-400"
                      placeholder="Cuéntame sobre tu evento o proyecto..."
                    ></textarea>
                  </div>
               
                  <button
                    type="submit"
                    className="w-full bg-[#b69d8f]/80  text-white font-bold py-3 rounded-full font-serif hover:bg-[#b69d8f]  transition-colors duration-300"
                   disabled={isPending}
                  >
                        {isPending ? (
                      <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                      </>
                    ) : (
                      <span>Enviar solicitud</span>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-16 pt-8 border-t border-white/20 text-center">
              <p className="text-black">© 2025 Delicias de la Mima - Cretty Degel. Todos los derechos reservados.</p>
            </div>
          </div>
        </section>

    </ScrollAnimation>
  )
}
