import { Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Elegant buffet spread"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Transparent Navbar */}
        <nav className="w-full px-6 py-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Brand Name */}
            <div>
              <h1 className="font-serif text-2xl font-bold text-white lg:text-3xl">Delicias de la Mima</h1>
            </div>

            {/* Navigation Links - Hidden on mobile, shown on desktop */}
            <div className="hidden space-x-8 md:flex">
              <Link href="#inicio" className="font-serif text-white transition-all duration-300 hover:text-pink-300">
                Inicio
              </Link>
              <Link href="#nosotros" className="font-serif text-white transition-all duration-300 hover:text-pink-300">
                Nosotros
              </Link>
              <Link href="#menu" className="font-serif text-white transition-all duration-300 hover:text-pink-300">
                Menú
              </Link>
              <Link href="#contacto" className="font-serif text-white transition-all duration-300 hover:text-pink-300">
                Contacto
              </Link>
            </div>

            {/* Instagram Icon */}
            <div className="flex-1 flex justify-end">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-white transition-all duration-300 hover:bg-white/20 hover:text-pink-300"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Síguenos en Instagram</span>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className="mt-4 flex justify-center space-x-6 md:hidden">
            <Link
              href="#inicio"
              className="font-serif text-sm text-white transition-all duration-300 hover:text-pink-300"
            >
              Inicio
            </Link>
            <Link
              href="#nosotros"
              className="font-serif text-sm text-white transition-all duration-300 hover:text-pink-300"
            >
              Nosotros
            </Link>
            <Link
              href="#menu"
              className="font-serif text-sm text-white transition-all duration-300 hover:text-pink-300"
            >
              Menú
            </Link>
            <Link
              href="#contacto"
              className="font-serif text-sm text-white transition-all duration-300 hover:text-pink-300"
            >
              Contacto
            </Link>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex flex-1 items-center justify-center px-6 lg:px-12">
          <div className="text-center">
            <h2 className="font-serif text-4xl font-bold leading-tight text-white transition-all duration-500 hover:scale-105 md:text-5xl lg:text-6xl xl:text-7xl">
              Cocinamos para crear
              <br />
              <span className="text-pink-300">recuerdos memorables</span>
            </h2>

            {/* Decorative element */}
            <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-pink-300 to-transparent opacity-60" />

            {/* Subtitle */}
            <p className="mx-auto mt-6 max-w-2xl font-serif text-lg text-white/90 md:text-xl">
              Experiencias culinarias únicas que transforman cada evento en una celebración inolvidable
            </p>

            {/* Call to Action Button */}
            <div className="mt-10">
              <Link
                href="#contacto"
                className="inline-block rounded-full border-2 border-pink-300 bg-pink-300/10 px-8 py-3 font-serif text-white backdrop-blur-sm transition-all duration-300 hover:bg-pink-300 hover:text-black hover:shadow-lg hover:shadow-pink-300/25"
              >
                Descubre nuestros servicios
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade indicator */}
        <div className="flex justify-center pb-8">
          <div className="h-12 w-px bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </div>
    </div>
  )
}
