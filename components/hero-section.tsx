'use client'

import { Instagram, Menu,X} from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"



export default function HeroSection() {

  


  
const [isMobileMenuOpen, setIsMobileMenuOpen]= useState(false)
const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }



  return (

  
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/fondo2.jpeg"
          alt="Kreti in her kitchen creating culinary masterpieces"
          
          className="object-cover object-center"
          priority
          fill
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Navigation */}
        <nav className="w-full px-6 py-6 lg:px-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-serif text-1xl font-bold  text-white lg:text-2xl">Delicias de la Mima</h1>
              <p className="font-serif text-sm text-[#f8d2c6]">Cretty Degel - Chef Profesional</p>
            </div>

            <div className="mr-50 hidden space-x-8   md:flex">
              <Link href="#about" className="font-serif text-white transition-all duration-300 hover:text-[#f8d2c6]">
                Acerca de
              </Link>
              <Link href="#services" className="font-serif text-white transition-all duration-300 hover:text-[#f8d2c6]">
                Servicios
              </Link>
              <Link href="#gallery" className="font-serif text-white transition-all duration-300 hover:text-[#f8d2c6]">
                Galería
              </Link>
              <Link href="#contact" className="font-serif text-white transition-all duration-300 hover:text-[#f8d2c6]">
                Contacto
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                href="https://www.instagram.com/delamimapty/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-white transition-all duration-300 hover:bg-white/20 hover:text-[#f8d2c6]"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <button onClick={toggleMobileMenu} className="md:hidden ">
                <Menu  className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </nav>



        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden   ">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeMobileMenu} />

            {/* Menu Content */}
            <div className="relative bg-white/95 backdrop-blur-md m-4 rounded-2xl shadow-2xl">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-1xl font-bold text-gray-800">Cretty Degel - Chef Profesional</h2>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    <X className="h-6 w-6 text-gray-800" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-4">
                  <Link
                    href="#about"
                    onClick={closeMobileMenu}
                    className="block py-3 px-4 font-serif text-lg text-gray-800 hover:text-pink-400 hover:bg-pink-50 rounded-lg transition-all duration-300"
                  >
                    Acerca de
                  </Link>
                  <Link
                    href="#services"
                    onClick={closeMobileMenu}
                    className="block py-3 px-4 font-serif text-lg text-gray-800 hover:text-pink-400 hover:bg-pink-50 rounded-lg transition-all duration-300"
                  >
                    Servicios
                  </Link>
                  <Link
                    href="#gallery"
                    onClick={closeMobileMenu}
                    className="block py-3 px-4 font-serif text-lg text-gray-800 hover:text-pink-400 hover:bg-pink-50 rounded-lg transition-all duration-300"
                  >
                    Galería
                  </Link>
                  <Link
                    href="#contact"
                    onClick={closeMobileMenu}
                    className="block py-3 px-4 font-serif text-lg text-gray-800 hover:text-pink-400 hover:bg-pink-50 rounded-lg transition-all duration-300"
                  >
                    Contacto
                  </Link>
                </nav>

                {/* Social Media */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-4">Sígueme en redes sociales</p>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-[#000000] hover:text-[#f8d2c6] transition-colors duration-300"
                  >
                    <Instagram className="h-5 w-5" />
                    
                    <span className="font-serif">Instagram</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Hero Content */}
        <div className="flex flex-1 items-center justify-center px-6 lg:px-12">
          <div className="text-center max-w-4xl">
             <h2 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl xl:text-7xl"> 
              Cocinamos para 
              <br />
              <span className="text-[#f8d2c6]">crear recuerdos</span>
              
            </h2>


            <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-[#f8d2c6] to-transparent opacity-60" />

            <p className="mx-auto mt-6 max-w-2xl font-serif text-lg text-white/90 md:text-xl leading-relaxed">
              Soy Cretty Degel, Química Tecnóloga en Alimentos y Profesional en Artes Culinarias. Con más de 20 años de experiencia desarrollando productos para grandes cadenas y asesorando restaurantes, transformo cada evento en una experiencia gastronómica memorable.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#services"
                className="inline-block rounded-full border-2 border-[#f8d2c6] bg-[#f8d2c6]/10 px-8 py-3 font-serif text-white backdrop-blur-sm transition-all duration-300 hover:bg-[#f8d2c6] hover:text-black hover:shadow-lg hover:shadow-pink-300/25"
              >
                Conoce mis servicios
              </Link>
              <Link
                href="#about"
                className="inline-block rounded-full border-2 border-white/30 bg-white/10 px-8 py-3 font-serif text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black hover:shadow-lg"
              >
                Mi historia
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}
