"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ContactCta() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-blue-600 text-white rounded-2xl p-12 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para dar vida a tus ideas?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Hablemos sobre cómo podemos ayudarte a crear una solución web
            personalizada que se adapte perfectamente a las necesidades de tu
            negocio.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors group"
          >
            Ponte en contacto
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
