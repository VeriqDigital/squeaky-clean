import type { Metadata } from "next";
import { headers } from "next/headers";
import { Barlow, Barlow_Condensed } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { siteConfig } from "@/config/site";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const defaultTitle = "Squeaky Clean Services | Exterior Cleaning in Donnellson, IA";

export async function generateMetadata(): Promise<Metadata> {
  const incomingHeaders = await headers();
  const host = incomingHeaders.get("x-forwarded-host") ?? incomingHeaders.get("host") ?? "localhost:3000";
  const protocol = incomingHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  return {
    title: { default: defaultTitle, template: `%s | ${siteConfig.name}` },
    description: siteConfig.description,
    applicationName: siteConfig.name,
    keywords: ["exterior cleaning Donnellson IA", "soft washing Southeast Iowa", "roof washing", "concrete cleaning", "gutter brightening", "window cleaning", "commercial exterior cleaning", "seasonal property maintenance", "car detailing", "fleet washing", "Lee County pressure washing", "Des Moines County exterior cleaning"],
    robots: { index: true, follow: true },
    openGraph: { title: defaultTitle, description: siteConfig.description, siteName: siteConfig.name, locale: siteConfig.locale, type: "website", images: [{ url: `${origin}/og.png`, width: 1733, height: 909, alt: "Squeaky Clean Services exterior cleaning in Donnellson and Southeast Iowa" }] },
    twitter: { card: "summary_large_image", title: defaultTitle, description: siteConfig.description, images: [`${origin}/og.png`] },
  };
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  alternateName: siteConfig.brandName,
  description: siteConfig.description,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: { "@type": "PostalAddress", streetAddress: siteConfig.location.address, addressLocality: siteConfig.location.businessCity, addressRegion: "IA", postalCode: siteConfig.location.postalCode, addressCountry: "US" },
  areaServed: ["Lee County, Iowa", "Des Moines County, Iowa", "Southeast Iowa"],
  makesOffer: ["House & Building Soft Washing", "Concrete & Surface Cleaning", "Roof Washing", "Gutter Cleaning & Brightening", "Window Cleaning", "Deck & Patio Cleaning", "Commercial Exterior Cleaning", "Seasonal Property Maintenance", "Car Detailing", "Fleet Washing"].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c") }} />
        <ScrollToTop /><Navbar />{children}<Footer />
      </body>
    </html>
  );
}
