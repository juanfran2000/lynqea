import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "casate-conmigo",
    title: "Cásate Conmigo",
    description: "Joyería exclusiva con experiencia de compra personalizada y visualización dinámica de productos.",
    longDescription: "Plataforma de comercio electrónico especializada en joyería fina para bodas y compromisos. Implementamos un innovador sistema de visualización que permite a los usuarios ver cada pieza en diferentes metales y piedras preciosas, con actualización en tiempo real de precios. La integración con PayPhone garantiza transacciones seguras, mientras que la interfaz elegante refleja el lujo y exclusividad de los productos.",
    imageUrl: "/caratulas/casateconmigo.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PayPhone"],
    featured: true,
    link: "https://casateconmigo.ec"
  },
  {
    id: "veterinaria-amiga",
    title: "Veterinaria",
    description: "Portal veterinario con interfaz intuitiva y carrusel interactivo de mascotas.",
    longDescription: "Diseñamos una experiencia digital acogedora para una clínica veterinaria en Argentina. El sitio destaca por su hero section con un carrusel dinámico que muestra adorables mascotas en tratamiento, creando una conexión emocional inmediata con los visitantes. La interfaz simplifica la programación de citas y el acceso a servicios veterinarios, priorizando la facilidad de uso para los dueños de mascotas.",
    imageUrl: "/caratulas/vet.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
    link: "https://vet-nu.vercel.app/"
  },
  {
    id: "mc-homedoctors",
    title: "MC Home Doctors",
    description: "Plataforma médica multilingüe con traducción especializada para consultas internacionales.",
    longDescription: "Desarrollamos una plataforma de telemedicina para MC HomeDoctors en Ecuador, facilitando consultas médicas internacionales. Implementamos un sistema de traducción manual personalizado para garantizar la precisión en términos médicos y diagnósticos entre diferentes idiomas. La plataforma prioriza la claridad en la comunicación médica y la accesibilidad para pacientes de diversos países, manteniendo la precisión crítica en la terminología médica.",
    imageUrl: "/caratulas/homedoctors.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"],
    featured: true,
    link: "https://home-doctors-git-butons-lenguages-juanfran2000s-projects.vercel.app/es"
  }
];