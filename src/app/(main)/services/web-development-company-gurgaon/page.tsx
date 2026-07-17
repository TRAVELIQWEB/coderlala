// app/services/web-development-company-gurgaon/page.tsx
import { Metadata, Viewport } from "next";
import WebDevelopmentClient from "./WebDevelopmentClient";
import { contactInfo, SITE_URL, CITY_SLUG } from "@/data/ContactInfo";


// Generate metadata for SEO
export const metadata: Metadata = {
  title: "Best Web Development Company in Gurgaon | CoderLala",
  description: "CoderLala is a leading web development company in Gurgaon offering custom web development, Next.js, React, and e-commerce solutions. Trusted by 500+ businesses.",
  keywords: "web development company Gurgaon, web development Gurgaon, custom web development, website development company Gurgaon, react development, next js development, ecommerce development Gurgaon, web developer Gurgaon, web design company Gurgaon, software development Gurgaon, IT services Gurgaon, digital agency Gurgaon",
  alternates: {
    canonical: `/services/web-development-company-${CITY_SLUG}`,
  },
  openGraph: {
    title: "Best Web Development Company in Gurgaon | CoderLala",
    description: "CoderLala is a leading web development company in Gurgaon offering custom web development, Next.js, React, and e-commerce solutions. Trusted by 500+ businesses.",
    url: `/services/web-development-company-${CITY_SLUG}`,
    siteName: "CoderLala",
    images: [
      {
        url: `${SITE_URL}/images/gurgaon-og/og-image-web-development-gurgaon.jpg`,
        width: 1200,
        height: 630,
        alt: "CoderLala - Best Web Development Company in Gurgaon",
      },
      {
        url: `${SITE_URL}/logo/CoderLalaLogoDark.svg`,
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
    title: "Best Web Development Company in Gurgaon | CoderLala",
    description: "CoderLala is a leading web development company in Gurgaon offering custom web development, Next.js, React, and e-commerce solutions.",
    images: [
      `${SITE_URL}/images/gurgaon-og/og-image-web-development-gurgaon.jpg`,
      `${SITE_URL}/logo/CoderLalaLogoDark.svg`,
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
export default function WebDevelopmentPage() {
  return <WebDevelopmentClient />;
}