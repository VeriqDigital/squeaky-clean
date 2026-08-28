import type { Metadata } from "next";
import AboutIntro from "@/components/sections/AboutIntro";
import ContactCtaSection from "@/components/sections/ContactCtaSection";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "About Squeaky Clean Services",
  description:
    "Learn about the dependable, detail-oriented exterior cleaning approach behind Squeaky Clean Services in Donnellson, Iowa.",
};

const values = [
  {
    title: "Direct communication",
    description: "Share the job details with a local team and receive clear, practical follow-up.",
  },
  {
    title: "Respect for property",
    description: "Every project starts with care for the surface, surroundings, and scope of work.",
  },
  {
    title: "Attention to detail",
    description: "From setup through cleanup, the small details are treated as part of the job.",
  },
] as const;

export default function AboutPage() {
  return (
    <main>
      <Section tone="white" className="pt-12 sm:pt-16">
        <AboutIntro headingAs="h1" />
      </Section>
      <Section tone="blue" className="border-y border-(--border)">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <h2 className="font-heading text-[clamp(2.8rem,4vw,4.25rem)] font-extrabold leading-[0.92] text-(--navy)">
              Professional Cleaning. Personal Service.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-(--muted)">
              Squeaky Clean Services is built around dependable local service,
              clear expectations, and careful exterior cleaning for homes and businesses.
            </p>
          </div>
          <div className="grid border-y-2 border-(--navy) md:grid-cols-3">
            {values.map((value, index) => (
              <article
                key={value.title}
                className={`py-6 md:px-6 ${index > 0 ? "border-t border-(--border) md:border-l md:border-t-0" : ""}`}
              >
                <h3 className="font-heading text-2xl font-bold leading-none text-(--navy)">
                  {value.title}
                </h3>
                <p className="mt-4 leading-7 text-(--muted)">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>
      <Section tone="white"><ContactCtaSection /></Section>
    </main>
  );
}
