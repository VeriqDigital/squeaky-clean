"use client";

import Button from "@/components/ui/Button";
import LeadModal from "@/components/layout/LeadModal";
import useLeadModal from "@/components/layout/useLeadModal";
import { primaryCta, siteConfig } from "@/config/site";

const ContactCtaSection = () => {
  const modal = useLeadModal();

  return (
    <div className="border-l-[6px] border-(--blue) bg-(--navy-deep) px-5 py-10 text-(--text-on-dark) sm:px-10 sm:py-12 lg:px-14">
      <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto] lg:gap-14">
        <div>
          <h2 className="max-w-3xl font-heading text-[clamp(2.9rem,5vw,5rem)] font-extrabold uppercase leading-[0.9] text-white">
            Ready to Refresh Your Property?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
            Tell us what needs cleaned and we’ll take it from there.
          </p>
        </div>
        <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
          <Button onClick={() => modal.openModal(primaryCta.modal)} variant="light">
            {primaryCta.label}
          </Button>
          <a
            href={siteConfig.contact.phoneHref}
            className="inline-flex min-h-12 items-center justify-center border-b border-white/45 font-heading text-lg font-bold text-white transition-colors hover:border-(--blue) hover:text-(--blue-light)"
          >
            Call {siteConfig.contact.phone}
          </a>
        </div>
      </div>

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
    </div>
  );
};

export default ContactCtaSection;
