import type { Metadata } from "next";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactCtaSection from "@/components/sections/ContactCtaSection";
import Section from "@/components/ui/Section";

export const metadata: Metadata = { title: "Exterior Cleaning Services", description: "Explore soft washing, roof washing, concrete and surface cleaning, gutter brightening, window cleaning, seasonal maintenance, car detailing, and fleet washing from Squeaky Clean Services in Southeast Iowa." };

export default function ServicesPage() {
  return <main><Section tone="blue" className="pt-12 sm:pt-16"><ServicesSection showAll headingAs="h1" /></Section><Section tone="white"><ContactCtaSection /></Section></main>;
}
