import type { Metadata } from "next";
import AboutIntro from "@/components/sections/AboutIntro";
import ContactCtaSection from "@/components/sections/ContactCtaSection";
import Section from "@/components/ui/Section";
import { HeartIcon, MessageIcon, SparkleIcon } from "@/components/ui/Icons";

export const metadata: Metadata = { title: "About Squeaky Clean Services", description: "Learn about the dependable, detail-oriented exterior cleaning approach behind Squeaky Clean Services in Donnellson, Iowa." };

const values = [
  { title: "Direct communication", description: "Share the job details with a local team and receive clear, practical follow-up.", Icon: MessageIcon },
  { title: "Respect for property", description: "Every project starts with care for the surface, surroundings, and scope of work.", Icon: HeartIcon },
  { title: "Attention to detail", description: "From setup through cleanup, the small details are treated as part of the job.", Icon: SparkleIcon },
] as const;

export default function AboutPage() {
  return <main><Section tone="white" className="pt-12 sm:pt-16"><AboutIntro headingAs="h1" /></Section><Section tone="blue"><div className="mx-auto max-w-3xl text-center"><p className="eyebrow">What you can expect</p><h2 className="mt-4 font-heading text-[clamp(2.45rem,5vw,4.4rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-(--navy)">Professional Cleaning. Personal Service.</h2><p className="mx-auto mt-5 max-w-2xl leading-7 text-(--muted)">Squeaky Clean Services is built around dependable local service, clear expectations, and careful exterior cleaning for homes and businesses.</p></div><div className="mt-12 grid gap-5 md:grid-cols-3">{values.map(({ title, description, Icon }) => <article key={title} className="rounded-[1.5rem] border border-(--border) bg-white p-7 shadow-(--shadow-sm)"><span className="flex size-12 items-center justify-center rounded-full bg-(--surface-blue) text-(--blue-hover)"><Icon className="size-6" /></span><h3 className="mt-6 font-heading text-xl font-bold text-(--navy)">{title}</h3><p className="mt-3 leading-7 text-(--muted)">{description}</p></article>)}</div></Section><Section tone="white"><ContactCtaSection /></Section></main>;
}
