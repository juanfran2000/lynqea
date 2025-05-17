import { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Contacto | Lynqea",
  description: "Ponte en contacto para discutir tu proyecto de desarrollo web",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Ponte en Contacto</h1>
          <p className="text-lg text-gray-600">
            ¿Tienes un proyecto en mente o quieres saber más sobre nuestros
            servicios? Nos encantaría escucharte. Completa el formulario a
            continuación o utiliza la información de contacto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Suspense fallback={<div>Cargando formulario...</div>}>
            <ContactForm />
          </Suspense>
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
