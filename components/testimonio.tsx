
 import { Star, Quote } from "lucide-react"

export default function testimonio(){
    const testimonials = [
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
    ]

    return(

    <>
      {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-black mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-serif font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-[#b69d8f] text-sm">{testimonial.event}</p>
                </div>
              </div>
            ))}
          </div>
      
      </>
   )
  
}

