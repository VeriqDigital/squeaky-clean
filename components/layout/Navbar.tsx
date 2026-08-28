"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { navigation, primaryCta, siteConfig } from "@/config/site";
import LeadModal from "./LeadModal";
import useLeadModal from "./useLeadModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const modal = useLeadModal();

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnDesktop = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };
    window.addEventListener("resize", closeOnDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-(--border) bg-white text-sm text-(--foreground)">
      <div className="hidden bg-(--navy-deep) text-(--text-on-dark) lg:block">
        <div className="mx-auto flex h-9 max-w-(--container-width) items-center justify-between px-10 text-xs font-semibold">
          <p>{siteConfig.location.serviceAreaLabel}</p>
          <p className="text-(--blue-light)">Locally owned · Free estimates · Residential &amp; commercial</p>
        </div>
      </div>

      <div className="mx-auto hidden h-24 w-full max-w-(--container-width) items-center gap-6 px-10 lg:flex">
        <Link href="/" className="flex w-45 shrink-0 items-center" aria-label={`${siteConfig.name} home`}>
          <Image src="/logo.jpg" alt="Roberts Revive Services logo" width={1024} height={1024} className="size-21 object-contain" sizes="84px" preload />
        </Link>
        <nav aria-label="Primary navigation" className="ml-auto flex items-center gap-5 xl:gap-7">
          {navigation.map((item) =>
            "href" in item ? (
              <Link key={item.href} href={item.href} className="min-h-11 content-center whitespace-nowrap font-heading text-sm font-bold text-(--navy) transition hover:text-(--blue)">{item.label}</Link>
            ) : (
              <button key={item.label} type="button" onClick={() => modal.openModal(item.modal)} className="min-h-11 cursor-pointer font-heading text-sm font-bold text-(--navy) hover:text-(--blue)">{item.label}</button>
            ),
          )}
        </nav>
        <div className="flex shrink-0 items-center gap-4 border-l border-(--border) pl-5">
          <address className="not-italic leading-tight">
            <span className="block text-[0.68rem] font-bold uppercase tracking-[0.12em] text-(--muted)">Call or text</span>
            <a href={siteConfig.contact.phoneHref} className="mt-1 block font-heading text-base font-extrabold text-(--navy) hover:text-(--blue)">{siteConfig.contact.phone}</a>
          </address>
          <Button onClick={() => modal.openModal(primaryCta.modal)}>{primaryCta.label}</Button>
        </div>
      </div>

      <div className="mx-auto flex h-19 w-full items-center justify-between px-4 sm:px-6 lg:hidden">
        <Link href="/" className="flex items-center gap-2" aria-label={`${siteConfig.name} home`}>
          <Image src="/logo.jpg" alt="Roberts Revive Services logo" width={1024} height={1024} className="size-16 object-contain" sizes="64px" preload />
          <span className="hidden max-w-28 font-heading text-sm font-extrabold leading-tight text-(--navy) min-[390px]:block">Squeaky Clean<br />Services</span>
        </Link>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => modal.openModal(primaryCta.modal)} className="min-h-11 cursor-pointer rounded-[7px] border border-(--blue) bg-(--blue) px-4 font-heading text-sm font-bold uppercase text-(--navy-deep) transition hover:bg-(--blue-hover) hover:text-white sm:px-5">Estimate</button>
          <button type="button" className="flex size-11 items-center justify-center rounded-[7px] border border-(--border) text-(--navy)" aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isMenuOpen} aria-controls="mobile-navigation-menu" onClick={() => setIsMenuOpen((value) => !value)}>
            <span className="grid gap-1.5" aria-hidden="true">
              <span className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-current transition-opacity ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div id="mobile-navigation-menu" className="fixed inset-x-0 bottom-0 top-19 z-50 overflow-y-auto bg-(--navy-deep)/35 backdrop-blur-[2px] lg:hidden" onClick={() => setIsMenuOpen(false)}>
          <div className="border-t border-(--border) bg-white px-4 pb-6 pt-2 shadow-xl sm:px-6" onClick={(event) => event.stopPropagation()}>
            <nav aria-label="Mobile navigation" className="mx-auto grid max-w-xl">
              {navigation.map((item) =>
                "href" in item ? (
                  <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setIsMenuOpen(false)} className="min-h-12 content-center border-b border-(--border-warm) px-2 font-heading font-bold text-(--navy)">{item.label}</Link>
                ) : (
                  <button key={item.label} type="button" onClick={() => { setIsMenuOpen(false); modal.openModal(item.modal); }} className="min-h-12 cursor-pointer border-b border-(--border-warm) px-2 text-left font-heading font-bold text-(--navy)">{item.label}</button>
                ),
              )}
            </nav>
            <div className="mx-auto mt-4 grid max-w-xl gap-3 min-[390px]:grid-cols-2">
              <a href={siteConfig.contact.smsHref} className="min-h-12 content-center rounded-[7px] border border-(--navy) bg-white text-center font-heading text-base font-bold text-(--navy) hover:bg-(--surface-soft)">Text Squeaky Clean</a>
              <a href={siteConfig.contact.phoneHref} className="min-h-12 content-center rounded-[7px] border border-(--navy) text-center font-heading text-base font-bold text-(--navy)">Call {siteConfig.contact.phone}</a>
            </div>
          </div>
        </div>
      )}

      {modal.activeModal && <LeadModal activeModal={modal.activeModal} hasSubmitted={modal.hasSubmitted} isSubmitting={modal.isSubmitting} onClose={modal.closeModal} onSubmit={modal.handleFormSubmit} submitError={modal.submitError} />}
    </header>
  );
};

export default Navbar;
