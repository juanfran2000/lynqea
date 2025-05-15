"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, PenTool, Globe, Sparkles } from "lucide-react";

export function ServicesPreview() {
  const services = [
    {
      icon: <Code2 size={24} />,
      title: "Desarrollo Web",
      description:
        "Sitios web personalizados construidos con tecnologías modernas para un rendimiento y experiencia de usuario óptimos.",
    },
    {
      icon: <PenTool size={24} />,
      title: "Diseño UI/UX",
      description:
        "Interfaces intuitivas diseñadas pensando en tus usuarios, equilibrando estética y funcionalidad.",
    },
    {
      icon: <Globe size={24} />,
      title: "Soluciones E-Commerce",
      description:
        "Tiendas en línea que impulsan las ventas con experiencias de compra fluidas y procesamiento seguro de pagos.",
    },
    {
      icon: <Sparkles size={24} />,
      title: "Aplicaciones Web",
      description:
        "Aplicaciones interactivas que resuelven problemas empresariales complejos con una elegante simplicidad.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Servicios Personalizados</h2>
          <p className="text-lg text-gray-600">
            Ofrecemos soluciones de desarrollo web adaptadas específicamente a
            tus necesidades empresariales únicas. Cada proyecto recibe atención
            personalizada para asegurar que el producto final se alinee
            perfectamente con tu visión.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors group"
          >
            Conoce más sobre nuestros servicios
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
