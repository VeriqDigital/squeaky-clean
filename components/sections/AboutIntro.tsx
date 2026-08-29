import Image from "next/image";
import Button from "@/components/ui/Button";

type AboutIntroProps = { headingAs?: "h1" | "h2"; homepage?: boolean };

const AboutIntro = ({
  headingAs = "h2",
  homepage = false,
}: AboutIntroProps) => {
  const Heading = headingAs;

  return (
    <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-18">
      <div className="grid grid-cols-2 gap-2 sm:gap-4">
        <figure>
          <div className="relative aspect-[3/4] overflow-hidden rounded-[9px] border border-(--border)">
            <Image
              src="/NEW_SIDING_BEFORE.jpg"
              alt="House siding before professional exterior washing"
              fill
              sizes="(min-width: 1024px) 26vw, 48vw"
              className="object-cover"
              style={{ objectPosition: "center 50%" }}
            />
          </div>
          <figcaption className="mt-3 border-l-3 border-(--navy) pl-3 font-heading text-sm font-bold uppercase tracking-[0.08em] text-(--navy)">
            Before
          </figcaption>
        </figure>
        <figure className="mt-8 sm:mt-12">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[9px] border border-(--border)">
            <Image
              src="/NEW_SIDING_AFTER.jpg"
              alt="Same house siding after professional exterior washing"
              fill
              sizes="(min-width: 1024px) 26vw, 48vw"
              className="object-cover"
              style={{ objectPosition: "center 50%" }}
            />
          </div>
          <figcaption className="mt-3 border-l-3 border-(--blue) pl-3 font-heading text-sm font-bold uppercase tracking-[0.08em] text-(--navy)">
            After
          </figcaption>
        </figure>
      </div>

      <div>
        <Heading className="max-w-xl font-heading text-[clamp(2.9rem,5vw,4.75rem)] font-extrabold leading-[0.93] text-(--navy)">
          Exterior Cleaning Done Right.
        </Heading>
        <p className="mt-7 max-w-xl text-lg font-semibold leading-8 text-(--foreground)">
          Squeaky Clean Services helps homeowners and businesses restore and
          protect the appearance of their properties through professional
          exterior cleaning.
        </p>
        <p className="mt-4 max-w-xl leading-7 text-(--muted)">
          Expect dependable communication, attention to detail, and respect for
          your property from the first conversation through the finished job.
        </p>
        {homepage && (
          <div className="mt-8">
            <Button href="/about">Our Approach</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutIntro;
