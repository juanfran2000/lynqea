"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Trabajar con este desarrollador fue un cambio radical para nuestro negocio. El sitio web que creó capturó perfectamente nuestra marca mientras proporcionaba la funcionalidad que necesitábamos.",
      author: "Sarah Johnson",
      title: "CEO, DesignHub",
      avatarUrl:
        "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      quote:
        "La atención al detalle y la experiencia técnica fueron impresionantes. Nuestro sitio de comercio electrónico ha visto un aumento significativo en las conversiones desde el rediseño.",
      author: "Michael Chen",
      title: "Fundador, TechGear",
      avatarUrl:
        "https://images.pexels.com/photos/14866027/pexels-photo-14866027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      quote:
        "Aprecié el enfoque colaborativo durante todo el proceso. El producto final superó nuestras expectativas y ha recibido comentarios fantásticos de nuestros usuarios.",
      author: "Emma Rodriguez",
      title: "Directora de Marketing, CreativeSolutions",
      avatarUrl:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 rounded-xl">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Testimonios de Clientes</h2>
          <p className="text-lg text-gray-600">
            Escucha lo que los clientes tienen que decir sobre su experiencia
            trabajando con nosotros.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div className="absolute top-6 right-6 text-blue-100">
                <Quote size={32} />
              </div>
              <p className="text-gray-600 mb-6 relative z-10">
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatarUrl}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
