"use client";

import type { FormEvent } from "react";
import { siteConfig } from "@/config/site";

export type ModalType = "service" | "contact";

const modalContent = {
  service: { label: "Free estimate", title: "Tell Us What Needs Cleaning", submitLabel: "Send Estimate Request" },
  contact: { label: "Get in touch", title: "Send Squeaky Clean a Message", submitLabel: "Send Message" },
} as const;

type LeadModalProps = {
  activeModal: ModalType;
  hasSubmitted: boolean;
  isSubmitting: boolean;
  onClose: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  submitError: string;
};

const Label = ({ children }: { children: React.ReactNode }) => <label className="block text-sm font-bold text-(--navy)">{children}</label>;

const LeadModal = ({ activeModal, hasSubmitted, isSubmitting, onClose, onSubmit, submitError }: LeadModalProps) => {
  const content = modalContent[activeModal];
  const isQuote = activeModal === "service";
  const successMessage = siteConfig.forms.deliveryConfigured
    ? "Thanks! Squeaky Clean Services received your request and will follow up after reviewing the details."
    : "Thanks! Your request details are ready, but online delivery is not connected in this preview.";

  return (
    <div className="fixed inset-0 z-70 flex items-center justify-center bg-(--navy-deep)/80 px-4 py-5 backdrop-blur-sm sm:py-8" role="presentation" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-labelledby={`${activeModal}-form-title`} className="max-h-[calc(100vh-2.5rem)] w-full max-w-3xl overflow-y-auto rounded-[12px] border border-(--border) bg-(--background) p-5 text-(--foreground) shadow-(--shadow-lg) sm:max-h-[calc(100vh-4rem)] sm:p-8" onClick={(event) => event.stopPropagation()}>
        <div className="mb-7 flex items-start justify-between gap-4">
          <div><p className="border-l-3 border-(--blue) pl-2 font-heading text-sm font-bold uppercase tracking-[0.1em] text-(--navy)">{content.label}</p><h2 id={`${activeModal}-form-title`} className="mt-3 font-heading text-4xl font-extrabold leading-none text-(--navy) sm:text-5xl">{content.title}</h2></div>
          <button type="button" onClick={onClose} autoFocus className="flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-(--border) bg-white text-2xl leading-none text-(--navy) transition hover:border-(--blue) hover:bg-(--surface-soft) hover:text-(--blue-hover)" aria-label={`Close ${content.title.toLowerCase()} form`}><span aria-hidden="true">×</span></button>
        </div>

        {hasSubmitted ? (
          <div className="rounded-2xl border border-(--border) bg-(--surface-soft) p-6 text-(--foreground)" aria-live="polite">
            <p className="font-heading text-xl font-bold text-(--navy)">{successMessage}</p>
            {!siteConfig.forms.deliveryConfigured && <p className="mt-3 leading-7 text-(--muted)">To make sure the team receives your request, call or text directly at {siteConfig.contact.phone}.</p>}
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-(--blue-hover)"><a href={siteConfig.contact.phoneHref} className="min-h-11 content-center underline decoration-2 underline-offset-4 hover:text-(--navy-deep)">Call {siteConfig.contact.phone}</a><a href={siteConfig.contact.smsHref} className="min-h-11 content-center underline decoration-2 underline-offset-4 hover:text-(--navy-deep)">Text Squeaky Clean</a></div>
          </div>
        ) : (
          <form className="space-y-5" onSubmit={onSubmit} data-email-subject={isQuote ? siteConfig.forms.quoteSubject : siteConfig.forms.contactSubject} data-recipient={siteConfig.forms.deliveryConfigured ? siteConfig.forms.recipientEmail : undefined}>
            {!siteConfig.forms.deliveryConfigured && (
              <div className="rounded-xl border border-(--border) bg-(--surface-soft) p-4 text-sm leading-6 text-(--muted)">
                <p className="font-bold text-(--navy)">Online delivery needs to be connected</p>
                <p className="mt-1">You can preview the form here. For immediate contact, call or text <a href={siteConfig.contact.phoneHref} className="font-bold text-(--blue-hover) underline decoration-2 underline-offset-2">{siteConfig.contact.phone}</a>.</p>
              </div>
            )}
            <div className="grid gap-5 sm:grid-cols-2">
              <Label>Name <span className="text-(--blue-hover)">*</span><input required name="name" autoComplete="name" className="field mt-2" placeholder="Your name" /></Label>
              <Label>Phone <span className="text-(--blue-hover)">*</span><input required name="phone" type="tel" autoComplete="tel" className="field mt-2" placeholder="Your phone number" /></Label>
              <Label>Email<input type="email" name="email" autoComplete="email" className="field mt-2" placeholder="you@example.com" /></Label>
              <Label>Preferred contact method<select name="preferredContactMethod" defaultValue="text" className="field mt-2"><option value="text">Text message</option><option value="call">Phone call</option><option value="email">Email</option></select></Label>
            </div>
            {isQuote && (
              <div className="grid gap-5 sm:grid-cols-2">
                <Label>Service needed <span className="text-(--blue-hover)">*</span><select required name="desiredService" defaultValue="" className="field mt-2"><option value="" disabled>Choose a service</option><option value="house-washing">House Washing</option><option value="roof-washing">Roof Washing</option><option value="concrete-cleaning">Concrete Cleaning</option><option value="gutter-cleaning">Gutter Cleaning</option><option value="window-cleaning">Window Cleaning</option><option value="car-detailing">Car Detailing</option><option value="fleet-washing">Fleet Washing</option><option value="other">Other</option></select></Label>
                <Label>Property / vehicle address<input name="generalLocation" autoComplete="street-address" className="field mt-2" placeholder="Street address or general location" /></Label>
              </div>
            )}
            <Label>{isQuote ? "Message or project details" : "Message"}<textarea name="cleaningDetails" rows={5} className="field mt-2 min-h-32 resize-y" placeholder={isQuote ? "Tell us what needs cleaning, its current condition, preferred timing, or anything else that will help us review the job." : "What would you like us to know?"} /></Label>
            <p className="text-xs leading-5 text-(--muted)">Fields marked with an asterisk are required. Service details and scheduling are confirmed directly with Squeaky Clean Services.</p>
            <div className="flex flex-col-reverse gap-3 pt-1 sm:flex-row sm:justify-end">
              <button type="button" onClick={onClose} disabled={isSubmitting} className="min-h-12 cursor-pointer rounded-[7px] border border-(--navy) bg-white px-6 font-heading text-base font-bold uppercase text-(--navy) transition hover:border-(--blue) hover:bg-(--surface-soft) disabled:cursor-not-allowed disabled:opacity-60">Cancel</button>
              <button type="submit" disabled={isSubmitting} className="min-h-12 cursor-pointer rounded-[7px] border border-(--blue) bg-(--blue) px-6 font-heading text-base font-bold uppercase text-(--navy-deep) transition hover:border-(--blue-hover) hover:bg-(--blue-hover) hover:text-white disabled:cursor-not-allowed disabled:bg-(--muted)">{isSubmitting ? "Sending…" : content.submitLabel}</button>
            </div>
            {submitError && <p className="text-sm font-semibold text-red-700" aria-live="polite">{submitError}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default LeadModal;
