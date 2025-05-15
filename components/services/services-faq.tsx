"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ServicesFaq() {
  const faqs = [
    {
      question: "¿En qué tecnologías nos especializas?",
      answer:
        "Nos especializamos en tecnologías web modernas incluyendo Next.js, React, TypeScript y Tailwind CSS. Esta pila tecnológica nos permite crear sitios web rápidos, responsivos y visualmente atractivos con excelentes experiencias tanto para desarrolladores como para usuarios.",
    },
    {
      question: "¿Cuánto tiempo toma un proyecto típico?",
      answer:
        "Los tiempos de proyecto varían según la complejidad y el alcance. Un sitio web simple puede tomar 2-4 semanas, mientras que aplicaciones más complejas pueden tomar 2-3 meses. Durante nuestra consulta inicial, proporcionaré un cronograma más preciso basado en tus requisitos específicos.",
    },
    {
      question: "¿Cuál es nuestro proceso de diseño?",
      answer:
        "Nuestro proceso de diseño comienza con la comprensión de tus objetivos empresariales y audiencia objetivo. Creamos wireframes y maquetas para tu aprobación antes de pasar al desarrollo. Este enfoque colaborativo asegura que el producto final se alinee perfectamente con tu visión.",
    },
    {
      question: "¿Proporcionas mantenimiento continuo?",
      answer:
        "Sí, ofrecemos servicios de mantenimiento y soporte continuo para asegurar que tu sitio web siga funcionando de manera óptima. Esto incluye actualizaciones regulares, parches de seguridad, optimización de rendimiento y soporte técnico.",
    },
    {
      question: "¿Cómo manejamos la comunicación del proyecto?",
      answer:
        "Mantenemos una comunicación clara y consistente durante todo el proyecto. Tendremos reuniones regulares a través de tu método preferido (correo electrónico, videollamadas, herramientas de gestión de proyectos) y proporcionamos actualizaciones de progreso en hitos clave.",
    },
    {
      question: "¿Qué información necesitas para comenzar un proyecto?",
      answer:
        "Para comenzar, necesitamos entender tus objetivos empresariales, audiencia objetivo, preferencias de diseño, requisitos de funcionalidad y cronograma. Cuanta más información detallada puedas proporcionar, mejor podremos adaptar la solución a tus necesidades.",
    },
  ];

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
        <p className="text-lg text-gray-600">
          Encuentra respuestas a preguntas comunes sobre nuestros servicios y
          proceso.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
