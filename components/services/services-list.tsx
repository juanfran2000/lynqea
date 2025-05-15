"use client";

import { motion } from "framer-motion";
import {
  Code2,
  PenTool,
  Globe,
  Sparkles,
  LineChart,
  Wrench,
} from "lucide-react";

export function ServicesList() {
  const services = [
    {
      icon: <Code2 size={32} />,
      title: "Desarrollo Web",
      description:
        "Sitios web personalizados construidos con tecnologías modernas para un rendimiento y experiencia de usuario óptimos. Utilizando Next.js, TypeScript y Tailwind CSS para crear sitios rápidos y responsivos que se ven geniales en cualquier dispositivo.",
    },
    {
      icon: <PenTool size={32} />,
      title: "Diseño UI/UX",
      description:
        "Interfaces intuitivas diseñadas pensando en tus usuarios, equilibrando estética y funcionalidad. Cada elemento de diseño es cuidadosamente considerado para crear una experiencia de usuario cohesiva y atractiva.",
    },
    {
      icon: <Globe size={32} />,
      title: "Soluciones E-Commerce",
      description:
        "Tiendas en línea que impulsan las ventas con experiencias de compra fluidas y procesamiento seguro de pagos. Desde catálogos de productos hasta procesos de pago, cada aspecto está optimizado para conversiones.",
    },
    {
      icon: <Sparkles size={32} />,
      title: "Aplicaciones Web",
      description:
        "Aplicaciones interactivas que resuelven problemas empresariales complejos con una elegante simplicidad. Paneles de control personalizados, sistemas de reservas, plataformas de contenido y más, adaptados a tus requisitos específicos.",
    },
    {
      icon: <LineChart size={32} />,
      title: "Integración de Analíticas",
      description:
        "Herramientas de visualización de datos e informes que proporcionan información accionable sobre el rendimiento de tu negocio. Rastrea el comportamiento de los usuarios, monitorea KPIs y toma decisiones informadas basadas en datos reales.",
    },
    {
      icon: <Wrench size={32} />,
      title: "Mantenimiento y Soporte",
      description:
        "Mantenimiento y soporte continuo para asegurar que tu sitio web siga funcionando de manera óptima. Actualizaciones regulares, optimización de rendimiento y soporte técnico cuando lo necesites.",
    },
  ];

  return (
    <section className="py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
