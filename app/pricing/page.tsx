import { Metadata } from "next";
import { PricingTables } from "@/components/pricing/pricing-tables";

export const metadata: Metadata = {
  title: "Precios | Lynqea",
  description: "Planes y precios para desarrollo web personalizado",
};

export default function PricingPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Planes y Precios</h1>
          <p className="text-lg text-gray-600">
            Soluciones web personalizadas adaptadas a tus necesidades. Cada plan
            incluye tecnología moderna y diseño profesional.
          </p>
        </div>

        <PricingTables />
      </div>
    </div>
  );
}
