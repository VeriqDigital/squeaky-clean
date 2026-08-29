import type { Metadata } from "next";
import ContactCtaSection from "@/components/sections/ContactCtaSection";
import LocationSection from "@/components/sections/LocationSection";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact & Get a Free Estimate",
  description:
    "Request an estimate for exterior property, vehicle, or fleet cleaning from Squeaky Clean Services in Donnellson and Southeast Iowa.",
};

export default function ContactPage() {
  return (
    <main>
      <Section tone="cream" className="pt-12 sm:pt-16">
        <div className="grid items-end gap-10 border-b-2 border-(--navy) pb-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="border-l-4 border-(--blue) pl-3 font-heading text-sm font-bold uppercase tracking-[0.12em] text-(--navy)">
              Contact Squeaky Clean
            </p>
            <h1 className="mt-6 max-w-3xl font-heading text-[clamp(3.6rem,6vw,5.8rem)] font-extrabold leading-[0.88] text-(--navy)">
              Let’s Talk About Your Property.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-(--muted)">
              Share what you need cleaned, the property or vehicle location,
              and any details that will help us review the job and prepare your estimate.
            </p>
          </div>
          <div className="min-w-64 border-l-4 border-(--blue) pl-6">
            <p className="font-heading text-lg font-bold text-(--navy)">Call or text</p>
            <a href={siteConfig.contact.phoneHref} className="mt-2 block font-heading text-3xl font-extrabold text-(--navy) hover:text-(--blue-hover)">
              {siteConfig.contact.phone}
            </a>
            <div className="mt-5"><Button href={siteConfig.contact.smsHref} variant="secondary">Text Squeaky Clean</Button></div>
          </div>
        </div>
      </Section>
      <Section tone="white"><ContactCtaSection /></Section>
      <Section tone="blue"><LocationSection /></Section>
    </main>
  );
}
