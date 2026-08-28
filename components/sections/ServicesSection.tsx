import Image from "next/image";
import Button from "@/components/ui/Button";
import { ArrowIcon } from "@/components/ui/Icons";
import { services } from "@/data/services";

type ServicesSectionProps = { showAll?: boolean; headingAs?: "h1" | "h2" };

const displayedServices = [
  services[0],
  services[2],
  services[1],
  services[3],
  services[4],
  services[5],
  services[6],
] as const;

const tileLayouts = [
  "md:col-span-2 lg:col-span-7 lg:row-span-2",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-3",
] as const;

const ServicesSection = ({ showAll = false, headingAs = "h2" }: ServicesSectionProps) => {
  const Heading = headingAs;

  return (
    <div>
      <div className="grid gap-6 border-b-2 border-(--navy) pb-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
        <Heading className="max-w-3xl font-heading text-[clamp(3rem,5.5vw,5.2rem)] font-extrabold leading-[0.9] text-(--navy)">
          One Local Team. A Cleaner Property.
        </Heading>
        <p className="max-w-lg text-lg leading-8 text-(--muted) lg:justify-self-end">
          Practical exterior cleaning for homes, hard surfaces, windows,
          vehicles, and commercial fleets across Southeast Iowa.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[17rem]">
        {displayedServices.map((service, index) => {
          const featured = index < 3;
          return (
            <article
              key={service.title}
              className={`group relative min-h-64 overflow-hidden rounded-[10px] border border-(--border) bg-(--navy-deep) ${tileLayouts[index]}`}
            >
              <Image
                src={service.image}
                alt={service.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                sizes={
                  index === 0
                    ? "(max-width: 1023px) calc(100vw - 2rem), 700px"
                    : "(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) 50vw, 430px"
                }
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                <h3 className={`font-heading font-extrabold leading-none ${featured ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"}`}>
                  {service.title}
                </h3>
                {featured ? (
                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/85 sm:text-base">
                    {service.description}
                  </p>
                ) : (
                  <a
                    href="/contact"
                    className="mt-3 inline-flex min-h-10 items-center gap-2 font-heading text-base font-bold text-(--blue-light) hover:text-white"
                  >
                    Get an estimate <ArrowIcon className="size-4" />
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {!showAll && (
        <div className="mt-9">
          <Button href="/services" variant="secondary">Explore Our Services</Button>
        </div>
      )}
    </div>
  );
};

export default ServicesSection;
