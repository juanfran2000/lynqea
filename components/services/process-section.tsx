"use client";

import { motion } from "framer-motion";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Descubrimiento",
      description:
        "Comenzamos comprendiendo tu negocio, objetivos y requisitos a través de discusiones detalladas.",
    },
    {
      number: "02",
      title: "Planificación",
      description:
        "Basándonos en nuestro descubrimiento, creamos un plan integral que describe el alcance del proyecto, el cronograma y los entregables.",
    },
    {
      number: "03",
      title: "Diseño",
      description:
        "Diseñamos la interfaz de usuario con un enfoque en la experiencia del usuario, asegurando que se alinee con tu marca y objetivos.",
    },
    {
      number: "04",
      title: "Desarrollo",
      description:
        "Utilizando tecnologías modernas, damos vida al diseño con código limpio y eficiente, optimizando el rendimiento.",
    },
    {
      number: "05",
      title: "Pruebas",
      description:
        "Pruebas rigurosas en diferentes dispositivos y navegadores aseguran que todo funcione perfectamente antes del lanzamiento.",
    },
    {
      number: "06",
      title: "Lanzamiento y Soporte",
      description:
        "Después de un lanzamiento exitoso, proporcionamos soporte y mantenimiento continuo para asegurar el éxito continuo.",
    },
  ];

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">Nuestro Proceso</h2>
        <p className="text-lg text-gray-600">
          Seguimos un enfoque estructurado para asegurar que cada proyecto se
          entregue con éxito, a tiempo y superando las expectativas.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-blue-600 text-4xl font-bold mb-4">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
