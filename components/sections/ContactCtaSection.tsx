"use client";

import Button from "@/components/ui/Button";
import LeadModal from "@/components/layout/LeadModal";
import useLeadModal from "@/components/layout/useLeadModal";
import { SparkleIcon } from "@/components/ui/Icons";
import { primaryCta, siteConfig } from "@/config/site";

const ContactCtaSection = () => {
  const modal = useLeadModal();
  return (
    <div className="relative overflow-hidden rounded-[1.5rem] bg-(--navy-deep) px-5 py-10 text-(--text-on-dark) shadow-(--shadow-lg) sm:rounded-[2rem] sm:px-10 sm:py-14 lg:px-14">
      <div aria-hidden="true" className="absolute -right-20 -top-28 size-80 rounded-full bg-(--blue)/25 blur-3xl" />
      <div aria-hidden="true" className="absolute bottom-0 right-0 h-2 w-2/5 bg-linear-to-r from-(--blue) to-[#e94c75]" />
      <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
        <div>
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-(--blue-light)"><SparkleIcon className="size-4" /> Ready when you are</div>
          <h2 className="mt-4 max-w-3xl font-heading text-[clamp(2.1rem,10vw,4.3rem)] font-extrabold leading-[1.03] tracking-[-0.035em] text-(--text-on-dark)">Ready to Refresh Your Property?</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-(--muted-on-dark) sm:text-lg sm:leading-8">Whether you need your siding washed, driveway cleaned, roof refreshed, or fleet maintained, we’re ready to help.</p>
          <p className="mt-4 text-sm font-semibold text-(--subtle-on-dark)">Tell us what needs attention and we’ll confirm the next step.</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:max-w-sm lg:min-w-58 lg:max-w-none">
          <Button onClick={() => modal.openModal(primaryCta.modal)} variant="light">{primaryCta.label}</Button>
          <Button href={siteConfig.contact.phoneHref} variant="dark">Call {siteConfig.contact.phone}</Button>
        </div>
      </div>
      {modal.activeModal && <LeadModal activeModal={modal.activeModal} hasSubmitted={modal.hasSubmitted} isSubmitting={modal.isSubmitting} onClose={modal.closeModal} onSubmit={modal.handleFormSubmit} submitError={modal.submitError} />}
    </div>
  );
};

export default ContactCtaSection;
