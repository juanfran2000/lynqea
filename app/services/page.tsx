import { Metadata } from "next";
import { ServicesList } from "@/components/services/services-list";
import { ProcessSection } from "@/components/services/process-section";
import { TestimonialsSection } from "@/components/services/testimonials-section";
import { ServicesFaq } from "@/components/services/services-faq";

export const metadata: Metadata = {
  title: "Servicios | Lynqea",
  description:
    "Explora los servicios personalizados de desarrollo web que ofrecemos",
};

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-lg text-gray-600">
            Proporcionamos soluciones de desarrollo web adaptadas
            específicamente a tus necesidades empresariales únicas. Cada
            proyecto recibe atención personalizada para asegurar que el producto
            final se alinee perfectamente con tu visión.
          </p>
        </div>

        <ServicesList />
        <ProcessSection />
        <TestimonialsSection />
        <ServicesFaq />
      </div>
    </div>
  );
}
