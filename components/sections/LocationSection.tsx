import Image from "next/image";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const LocationSection = () => (
  <div className="grid items-stretch gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
    <div className="flex flex-col justify-center">
      <h2 className="max-w-xl font-heading text-[clamp(3rem,5vw,4.8rem)] font-extrabold leading-[0.9] text-(--navy)">
        Proudly Serving Southeast Iowa.
      </h2>
      <p className="mt-6 max-w-xl text-lg leading-8 text-(--muted)">
        Based in Donnellson and serving homeowners and businesses throughout
        Lee County, Des Moines County, and surrounding areas.
      </p>

      <dl className="mt-8 border-y border-(--border)">
        <div className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr]">
          <dt className="font-heading text-lg font-bold text-(--navy)">Based in</dt>
          <dd className="text-(--muted)">
            {siteConfig.location.address}, {siteConfig.location.businessCity},{" "}
            {siteConfig.location.businessState} {siteConfig.location.postalCode}
          </dd>
        </div>
        <div className="grid gap-1 border-t border-(--border) py-4 sm:grid-cols-[9rem_1fr]">
          <dt className="font-heading text-lg font-bold text-(--navy)">Service area</dt>
          <dd className="text-(--muted)">Lee County · Des Moines County · Surrounding communities</dd>
        </div>
      </dl>

      <div className="mt-7">
        <Button href={siteConfig.contact.smsHref} variant="secondary">
          Confirm Service Availability
        </Button>
      </div>
    </div>

    <div className="relative min-h-80 overflow-hidden rounded-[10px] border border-(--border) sm:min-h-110 lg:min-h-full">
      <Image
        src="/truck_with_logo_3.jpg"
        alt="Squeaky Clean Services team member in the branded work truck in Southeast Iowa"
        fill
        className="object-cover object-[center_54%]"
        sizes="(max-width: 1023px) calc(100vw - 2rem), 680px"
      />
    </div>
  </div>
);

export default LocationSection;
