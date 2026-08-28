import type { Metadata } from "next";
import ContactCtaSection from "@/components/sections/ContactCtaSection";
import LocationSection from "@/components/sections/LocationSection";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Contact & Get a Free Estimate", description: "Request an estimate for exterior property, vehicle, or fleet cleaning from Squeaky Clean Services in Donnellson and Southeast Iowa." };

export default function ContactPage() {
  return <main><Section tone="cream" className="pt-12 sm:pt-16"><div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]"><div><p className="eyebrow">Contact Squeaky Clean</p><h1 className="mt-4 max-w-3xl font-heading text-[clamp(2.7rem,6vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-(--navy)">Let’s Talk About Your Property</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-(--muted)">Share what you need cleaned, the property or vehicle location, and any details that will help us review the job and prepare your estimate.</p></div><div className="flex min-w-60 flex-col gap-3 rounded-[1.5rem] border border-(--border) bg-white p-6 shadow-(--shadow-sm)"><p className="text-xs font-extrabold uppercase tracking-[0.14em] text-(--blue-hover)">Call or text</p><a href={siteConfig.contact.phoneHref} className="font-heading text-2xl font-bold text-(--navy)">{siteConfig.contact.phone}</a><Button href={siteConfig.contact.smsHref} variant="secondary">Text Squeaky Clean</Button></div></div></Section><Section tone="white"><ContactCtaSection /></Section><Section tone="blue"><LocationSection /></Section></main>;
}
