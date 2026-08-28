import Image from "next/image";
import Button from "@/components/ui/Button";
import { SparkleIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/config/site";

type AboutIntroProps = { headingAs?: "h1" | "h2" };

const AboutIntro = ({ headingAs = "h2" }: AboutIntroProps) => {
  const Heading = headingAs;
  return (
    <div className="grid items-center gap-11 lg:grid-cols-[0.9fr_1.1fr] lg:gap-18">
      <div className="relative mx-auto w-full max-w-lg">
        <div className="grid grid-cols-2 gap-3">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] shadow-(--shadow-sm) sm:rounded-[2rem]">
            <Image src="/house_1_before.jpg" alt="House siding before professional exterior washing" fill sizes="(min-width: 1024px) 19vw, 48vw" className="object-cover" />
            <span className="absolute bottom-3 left-3 rounded-full bg-(--navy-deep) px-3 py-1 text-xs font-extrabold uppercase tracking-[0.12em] text-white">Before</span>
          </div>
          <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-[1.5rem] shadow-(--shadow-sm) sm:rounded-[2rem]">
            <Image src="/house_1_after.jpg" alt="Same house siding after professional exterior washing" fill sizes="(min-width: 1024px) 19vw, 48vw" className="object-cover" />
            <span className="absolute bottom-3 left-3 rounded-full bg-(--blue) px-3 py-1 text-xs font-extrabold uppercase tracking-[0.12em] text-(--navy-deep)">After</span>
          </div>
        </div>
        <span className="absolute -bottom-5 -right-3 flex size-14 items-center justify-center rounded-full bg-(--navy) text-(--blue-light) shadow-lg sm:right-2"><SparkleIcon className="size-6" /></span>
      </div>

      <div className="text-(--foreground)">
        <p className="eyebrow">A local, careful approach</p>
        <Heading className="mt-4 max-w-2xl font-heading text-[clamp(2.15rem,10vw,4.4rem)] font-extrabold leading-[1.03] tracking-[-0.035em] text-(--navy)">Exterior Cleaning Done With Care</Heading>
        <p className="mt-5 max-w-2xl text-lg font-semibold leading-7 text-(--foreground) sm:mt-6 sm:text-xl sm:leading-8">
          Squeaky Clean Services helps homeowners and businesses restore and protect the appearance of their properties through professional exterior cleaning.
        </p>
        <p className="mt-5 max-w-2xl leading-7 text-(--muted)">
          From first contact to the finished job, the focus stays on dependable communication, attention to detail, and respect for your property. The goal is a cleaner exterior, stronger curb appeal, and clear next steps from a local team.
        </p>
        <div className="mt-8 flex flex-col gap-3 min-[430px]:flex-row [&>*]:w-full min-[430px]:[&>*]:w-auto">
          <Button href="/about">Our Approach</Button>
          <Button href={siteConfig.contact.phoneHref} variant="secondary">Call {siteConfig.contact.phone}</Button>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
