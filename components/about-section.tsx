"use client";

import Image from "next/image"; // ✅ Importar Image de Next.js
import { Heart, Target, Eye } from "lucide-react";
import ScrollAnimation from "./scroll-animation";

export default function AboutSection() {
  return (
    <ScrollAnimation>
      <section
        id="about"
        className="py-20 bg-gradient-to-b from-white to-[#f8d2c6]/20"
      >
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-800 mb-4 lg:text-5xl">
              Conoce a <span className="text-[#b69d8f]">Cretty</span>
            </h2>
            <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[#f8d2c6] to-transparent" />
          </div>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-semibold text-gray-800">
                Mi Historia
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Soy Cretty Degel, Química Tecnóloga en Alimentos y Profesional
                en Artes Culinarias, con especialidad en Formulación de
                Embutidos y Productos Cárnicos. Mi trayectoria profesional
                incluye el desarrollo de productos para grandes cadenas como
                McDonald&apos;s, Subway, Pizza Hut, Domino&apos;s Pizza y muchas más.
              </p>
              <p className="text-gray-600 leading-relaxed">
                &quot;Delicias de la Mima&quot; nació en 2004 como una idea
                familiar, elaborando caterings para pequeños eventos. El nombre
                surge en honor a mi madre, a quien su primer nieto llamaba
                &quot;Mima&quot; desde muy pequeño. Ella es mi inspiración en
                todo este proyecto. Después de años de crecimiento gradual,
                decidimos dejar atrás otros proyectos profesionales para
                dedicarnos completamente a este sueño.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Me describo como una persona entregada, responsable,
                disciplinada, ordenada, apasionada, puntual y exigente. Mi
                motivación es poder poner en práctica todos mis conocimientos y
                experiencias adquiridas, creando experiencias culinarias que
                perduren en el corazón de nuestros clientes.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Cretty-1.jpg"
                  alt="Cretty en su cocina"
                  width={600}
                  height={800}
                  className="w-full h-120 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#b69d8f]/30 rounded-full mb-6">
                <Heart className="h-8 w-8 text-[#b69d8f]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-gray-800 mb-4">
                Misión
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ofrecer amabilidad, confort, calidad y atención personalizada a
                través de comidas sanas y deliciosas, brindando soluciones
                completas para eventos corporativos, sociales y domésticos.
                Brindar a cada cliente una experiencia culinaria única,
                manteniendo la calidad en cada ingrediente y poniendo en
                práctica la innovación y creatividad.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#b69d8f]/30 rounded-full mb-6">
                <Eye className="h-8 w-8 text-[#b69d8f]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-gray-800 mb-4">
                Visión
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Hacernos presentes en el mercado nacional e internacional
                brindando opciones de menú y servicios innovadores, manteniendo
                estándares de calidad en cada producto y asesoría. Nos
                esforzamos por un crecimiento continuo, siendo una opción líder
                para eventos sociales, corporativos y domésticos.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#b69d8f]/30 rounded-full mb-6">
                <Target className="h-8 w-8 text-[#b69d8f]" />
              </div>
              <h3 className="font-serif  text-xl font-semibold text-gray-800 mb-4">
                Valores
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ética, responsabilidad, puntualidad, innovación, integridad,
                respeto, honestidad y servicio personalizado. Dejamos un impacto
                de atención y calidad en cada experiencia, manteniendo siempre
                los más altos estándares profesionales.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
}