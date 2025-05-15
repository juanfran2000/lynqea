import { Metadata } from "next";
import { ProjectsGrid } from "@/components/projects/projects-grid";

export const metadata: Metadata = {
  title: "Proyectos | Lynqea",
  description:
    "Explora nuestros proyectos construidos con Next.js, TypeScript y Tailwind CSS",
};

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Nuestros Proyectos</h1>
          <p className="text-lg text-gray-600">
            Explora nuestra colección de proyectos web personalizados creados
            utilizando Next.js, TypeScript y Tailwind CSS. Cada proyecto está
            adaptado para satisfacer las necesidades específicas de nuestros
            clientes mientras mantenemos altos estándares de rendimiento y
            diseño.
          </p>
        </div>

        <ProjectsGrid />
      </div>
    </div>
  );
}
