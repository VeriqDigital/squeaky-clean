import type { ModalType } from "@/components/layout/LeadModal";

export const siteConfig = {
  name: "Squeaky Clean Services",
  shortName: "Squeaky Clean",
  brandName: "Roberts Revive Services",
  tagline: "Bring Your Property Back to Life.",
  description:
    "Professional house washing, roof washing, concrete cleaning, gutter cleaning, window cleaning, vehicle detailing, and fleet washing serving Donnellson and Southeast Iowa.",
  locale: "en_US",
  location: {
    address: "1410 Highway 2",
    businessCity: "Donnellson",
    businessState: "Iowa",
    postalCode: "52627",
    serviceAreaLabel: "Serving Lee County, Des Moines County & Southeast Iowa",
  },
  contact: {
    phone: "(319) 371-7805",
    phoneHref: "tel:+13193717805",
    smsHref: "sms:+13193717805",
    email: "squeakycleanservices2023@gmail.com",
    emailHref: "mailto:squeakycleanservices2023@gmail.com",
  },
  forms: {
    recipientEmail: "squeakycleanservices2023@gmail.com",
    quoteSubject: "New estimate request for Squeaky Clean Services",
    contactSubject: "New website message for Squeaky Clean Services",
    deliveryConfigured: false,
  },
} as const;

export type NavItem =
  | { label: string; href: string }
  | { label: string; modal: ModalType };

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Service Area", href: "/#service-area" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Service Area", href: "/#service-area" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
  { label: "Get a Free Estimate", modal: "service" },
];

export const primaryCta = {
  label: "Get a Free Estimate",
  modal: "service",
} as const satisfies { label: string; modal: ModalType };
