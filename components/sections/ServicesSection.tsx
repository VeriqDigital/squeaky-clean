import Image from "next/image";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";

type ServicesSectionProps = { showAll?: boolean; headingAs?: "h1" | "h2" };

const tileLayouts = [
  "md:col-span-2 lg:col-span-7 lg:row-span-2",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-6",
  "md:col-span-2 lg:col-span-6",
  "lg:col-span-6",
  "lg:col-span-6",
] as const;

const ServicesSection = ({ showAll = false, headingAs = "h2" }: ServicesSectionProps) => {
  const Heading = headingAs;
  const displayedServices = showAll ? services : services.slice(0, 8);

  return (
    <div>
      <div className="grid gap-6 border-b-2 border-(--navy) pb-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
        <Heading className="max-w-3xl font-heading text-[clamp(3rem,5.5vw,5.2rem)] font-extrabold leading-[0.9] text-(--navy)">
          One Local Team. A Cleaner Property.
        </Heading>
        <p className="max-w-lg text-lg leading-8 text-(--muted) lg:justify-self-end">
          Exterior cleaning for homes, buildings, hard surfaces, outdoor
          spaces, and commercial properties across Southeast Iowa.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[17rem]">
        {displayedServices.map((service, index) => {
          const featured = index < 3;
          const imageSizes = index === 0
            ? "(max-width: 1023px) calc(100vw - 2rem), 700px"
            : index === 7
              ? "(max-width: 1023px) calc(100vw - 2rem), 600px"
              : index >= 8
                ? "(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) 50vw, 600px"
                : "(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) 50vw, 430px";
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
                style={{ objectPosition: service.objectPosition }}
                sizes={imageSizes}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/35 to-black/5" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                <h3 className={`max-w-2xl font-heading font-extrabold leading-[0.95] ${index === 0 ? "text-3xl sm:text-5xl" : featured ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"}`}>
                  {service.title}
                </h3>
                <p className={`mt-3 text-sm leading-5 text-white/90 sm:leading-6 ${featured ? "max-w-2xl sm:text-base" : "line-clamp-3 max-w-sm"}`}>
                  {service.description}
                </p>
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
