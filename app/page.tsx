import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { ServicesPreview } from "@/components/home/services-preview";
import { ContactCta } from "@/components/home/contact-cta";

export default function Home() {
  return (
    <div className="pt-24">
      <HeroSection />
      <AboutSection />
      <FeaturedProjects />
      <ServicesPreview />
      <ContactCta />
    </div>
  );
}