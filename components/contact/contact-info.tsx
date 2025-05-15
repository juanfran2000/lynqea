"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, MapPin, Phone, Clock, Github, Linkedin } from "lucide-react";

export function ContactInfo() {
  const contactDetails = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Correo Electrónico",
      value: "jortega.lynqea@gmail.com",
      link: "mailto:jortega.lynqea@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Teléfono",
      value: "+593 98-388-3197",
      link: "tel:+593983883197",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Quito, Ecuador",
      value: "Quito, Ecuador",
      link: null,
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Horario Laboral",
      value: "Lun-Vie: 10AM - 6PM (Ecu)",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      name: "GitHub",
      link: "https://github.com/juanfran2000",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/francisco-góngora-ortega/",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-lg shadow-sm"
    >
      <h3 className="text-xl font-semibold mb-6">Información de Contacto</h3>

      <div className="space-y-6 mb-8">
        {contactDetails.map((item, index) => (
          <div key={index} className="flex items-start">
            <div className="text-blue-600 mr-4 mt-1">{item.icon}</div>
            <div>
              <h4 className="font-medium">{item.title}</h4>
              {item.link ? (
                <Link
                  href={item.link}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item.value}
                </Link>
              ) : (
                <p className="text-gray-600">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 pt-6">
        <h3 className="text-xl font-semibold mb-4">Conectar</h3>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 hover:bg-blue-50 text-gray-600 hover:text-blue-600 p-3 rounded-full transition-colors"
              aria-label={social.name}
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h4 className="font-medium mb-2">Consulta de Proyecto</h4>
        <p className="text-gray-600 text-sm mb-4">
          ¿Buscas iniciar un nuevo proyecto? Actualmente estoy disponible para
          trabajos freelance.
        </p>
        <Link
          href="/projects"
          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          Ver mis trabajos anteriores →
        </Link>
      </div>
    </motion.div>
  );
}
