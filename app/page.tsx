import AboutIntro from "@/components/sections/AboutIntro";
import ContactCtaSection from "@/components/sections/ContactCtaSection";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import LocationSection from "@/components/sections/LocationSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import ServicesSection from "@/components/sections/ServicesSection";
import TrustStrip from "@/components/sections/TrustStrip";
import Section from "@/components/ui/Section";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <Section id="about" tone="white">
        <AboutIntro homepage={true} />
      </Section>
      <Section id="services" tone="cream">
        <ServicesSection />
      </Section>
      <Section tone="white" className="border-t border-(--border)">
        <ProjectShowcase />
      </Section>
      <Section id="process" tone="white" className="border-y border-(--border)">
        <ProcessSection />
      </Section>
      <Section tone="cream">
        <ContactCtaSection />
      </Section>
      <Section id="service-area" tone="white">
        <LocationSection />
      </Section>
      <Section id="faq" tone="blue">
        <FAQ />
      </Section>
    </main>
  );
}
