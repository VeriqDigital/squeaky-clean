"use client";

import Image from "next/image";
import LeadModal from "@/components/layout/LeadModal";
import useLeadModal from "@/components/layout/useLeadModal";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { primaryCta, siteConfig } from "@/config/site";

const Hero = () => {
  const modal = useLeadModal();

  return (
    <section className="border-b border-(--border) bg-(--background) py-10 sm:py-14 lg:py-18">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
          <div className="max-w-2xl">
            <p className="border-l-4 border-(--blue) pl-3 font-heading text-sm font-bold uppercase tracking-[0.12em] text-(--navy)">
              Exterior cleaning in Southeast Iowa
            </p>
            <h1 className="mt-6 font-heading text-[clamp(3.65rem,7vw,6.35rem)] font-extrabold leading-[0.87] text-(--navy)">
              Bring Your Property Back to Life.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-(--muted) sm:text-xl">
              Professional house washing, concrete cleaning, roof washing,
              gutter cleaning, window cleaning, vehicle detailing, and fleet
              washing throughout Southeast Iowa.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-4 min-[430px]:flex-row min-[430px]:items-center">
              <Button onClick={() => modal.openModal(primaryCta.modal)}>
                {primaryCta.label}
              </Button>
              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex min-h-12 items-center justify-center border-b-2 border-(--navy) font-heading text-lg font-bold text-(--navy) transition-colors hover:border-(--blue) hover:text-(--blue-hover) min-[430px]:justify-start"
              >
                Call or Text {siteConfig.contact.phone}
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/4.6] overflow-hidden rounded-[11px] border border-(--border) bg-(--surface-soft) sm:aspect-[4/3] lg:aspect-[5/4.6]">
            <Image
              src="/truck_with_logo.jpg"
              alt="Roberts Revive Services work truck at a Southeast Iowa exterior cleaning job"
              fill
              className="object-cover object-[center_62%]"
              sizes="(max-width: 1023px) calc(100vw - 2rem), 680px"
              preload
            />
          </div>
        </div>
      </Container>

      {modal.activeModal && (
        <LeadModal
          activeModal={modal.activeModal}
          hasSubmitted={modal.hasSubmitted}
          isSubmitting={modal.isSubmitting}
          onClose={modal.closeModal}
          onSubmit={modal.handleFormSubmit}
          submitError={modal.submitError}
        />
      )}
    </section>
  );
};

export default Hero;
