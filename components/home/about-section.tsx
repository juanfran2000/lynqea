"use client";

import { motion } from "framer-motion";
import { Code, Layout, Server } from "lucide-react";

export function AboutSection() {
  const skills = [
    {
      icon: <Layout size={24} />,
      title: "Desarrollo Frontend",
      description:
        "Creando interfaces responsivas e intuitivas con frameworks modernos y principios de diseño.",
    },
    {
      icon: <Server size={24} />,
      title: "Integración Backend",
      description:
        "Construyendo sistemas robustos con gestión eficiente de datos y arquitectura de API.",
    },
    {
      icon: <Code size={24} />,
      title: "Experiencia Full-Stack",
      description:
        "Combinando conocimientos de frontend y backend para un desarrollo de soluciones integral.",
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
          <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
          <p className="text-lg text-gray-600">
            Somos un equipo de desarrolladores web especializados en crear
            sitios web personalizados y de alto rendimiento utilizando Next.js,
            TypeScript y Tailwind CSS. Cada proyecto está cuidadosamente
            elaborado para satisfacer las necesidades específicas de nuestros
            clientes, enfocándome tanto en la estética como en la funcionalidad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-blue-600 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
