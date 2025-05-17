"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Link from "next/link";

const features = [
  {
    name: "Páginas incluidas",
    pro: "Hasta 5 páginas",
    business: "Hasta 12 páginas",
  },
  {
    name: "Imágenes y contenido",
    pro: "Hasta 25 imágenes",
    business: "Hasta 200 imágenes",
  },
  {
    name: "Cambios mensuales",
    pro: "5 cambios",
    business: "10 cambios",
  },
  {
    name: "Diseño y personalización",
    pro: "Colores y estilo de marca",
    business: "Branding completo",
  },
  {
    name: "WhatsApp Business",
    pro: "Botón de ventas",
    business: "Carrito + Chat con asesores",
  },
  {
    name: "Redes sociales",
    pro: "Enlaces básicos",
    business: "Enlaces por asesor",
  },
];

const commonFeatures = [
  "Dominio .com o .ec",
  "Hosting incluido",
  "Diseño responsive",
  "Formulario de contacto",
  "Mapa de ubicación",
  "SEO básico optimizado",
];

export function PricingTables() {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {/* Plan Profesional */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-8"
      >
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">💼</div>
          <h3 className="text-2xl font-bold mb-2">Plan Profesional</h3>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-3xl font-bold">$35</span>
            <span className="text-gray-600">/mes</span>
          </div>
        </div>

        <div className="space-y-6">
          {/* Características principales */}
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">{feature.name}</p>
                  <p className="text-sm text-gray-600">{feature.pro}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Características comunes */}
          <div className="pt-4 border-t border-gray-100">
            <p className="text-sm font-medium text-gray-600 mb-3">
              También incluye:
            </p>
            <div className="grid grid-cols-2 gap-2">
              {commonFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <Check className="h-4 w-4 text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/contact?plan=profesional"
            className="block w-full py-3 px-6 text-center bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Empezar Ahora
          </Link>
        </div>
      </motion.div>

      {/* Plan Empresarial */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-8"
      >
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold mb-2">Plan Empresarial</h3>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-3xl font-bold">$45</span>
            <span className="text-gray-600">/mes</span>
          </div>
        </div>

        <div className="space-y-6">
          {/* Características principales */}
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">{feature.name}</p>
                  <p className="text-sm text-gray-600">{feature.business}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Características comunes */}
          <div className="pt-4 border-t border-gray-100">
            <p className="text-sm font-medium text-gray-600 mb-3">
              También incluye:
            </p>
            <div className="grid grid-cols-2 gap-2">
              {commonFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <Check className="h-4 w-4 text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/contact?plan=empresarial"
            className="block w-full py-3 px-6 text-center bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Empezar Ahora
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
