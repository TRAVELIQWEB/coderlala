// app/travel-portal-development-gurgaon/page.tsx
import { Metadata, Viewport } from "next";
import TravelPortalDevelopmentClient from "./TravelPortalDevelopmentClient";
import { contactInfo } from "@/data/ContactInfo";

// Generate metadata for SEO
export const metadata: Metadata = {
  title: "Best Travel Portal Development Company in Gurgaon | CoderLala",
  description: "CoderLala is a leading travel portal development company in Gurgaon offering flight, rail, bus, and hotel booking software with IRCTC API integration. Trusted by 500+ businesses.",
  keywords: "travel portal development company Gurgaon, travel portal development Gurgaon, IRCTC integration, flight booking software, railway booking system, bus booking software, hotel booking system, B2B travel portal, B2C travel portal, travel agency software, travel technology solutions, IT services Gurgaon",
  alternates: {
    canonical: "/services/travel-portal-development-gurgaon",
  },
  openGraph: {
    title: "Best Travel Portal Development Company in Gurgaon | CoderLala",
    description: "CoderLala is a leading travel portal development company in Gurgaon offering flight, rail, bus, and hotel booking software with IRCTC API integration.",
    url: "/services/travel-portal-development-gurgaon",
    siteName: "CoderLala",
    images: [
      {
        url: "/images/gurgaon-og/og-image-travel-portal-development-gurgaon.jpg",
        width: 1200,
        height: 630,
        alt: "CoderLala - Best Travel Portal Development Company in Gurgaon",
      },
      {
        url: "/logo/CoderLalaLogoDark.svg",
        width: 512,
        height: 512,
        alt: "CoderLala Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Travel Portal Development Company in Gurgaon | CoderLala",
    description: "CoderLala is a leading travel portal development company in Gurgaon offering flight, rail, bus, and hotel booking software with IRCTC API integration.",
    images: [
      "/images/gurgaon-og/og-image-travel-portal-development-gurgaon.jpg",
      "/logo/CoderLalaLogoDark.svg",
    ],
    site: "@coderlala",
    creator: "@coderlala",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-HR",
    "geo.placename": "Gurgaon",
    "geo.position": `${contactInfo.latitude};${contactInfo.longitude}`,
    "ICBM": `${contactInfo.latitude}, ${contactInfo.longitude}`,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2563eb",
};

// Server component that wraps the client component
export default function TravelPortalDevelopmentPage() {
  return <TravelPortalDevelopmentClient />;
}