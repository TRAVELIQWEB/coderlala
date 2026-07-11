// app/saas-platform-development-gurgaon/page.tsx
import { Metadata, Viewport } from "next";
import SaaSPlatformDevelopmentClient from "./SaaSPlatformDevelopmentClient";
// import SaaSPlatformDevelopmentClient from "./SaaSPlatformDevelopmentClient";

// Generate metadata for SEO
export const metadata: Metadata = {
  title: "Best SaaS Platform Development Company in Gurgaon | CoderLala",
  description: "CoderLala is a leading SaaS platform development company in Gurgaon offering custom SaaS solutions, cloud-based applications, and enterprise software development. Trusted by 500+ businesses.",
  keywords: "SaaS platform development company Gurgaon, SaaS development Gurgaon, custom SaaS solutions, cloud application development, enterprise software development, B2B SaaS development, software as a service development, SaaS product development, cloud platform development, IT services Gurgaon, digital agency Gurgaon",
  alternates: {
    canonical: "https://coderlala.com/saas-platform-development-gurgaon",
  },
  openGraph: {
    title: "Best SaaS Platform Development Company in Gurgaon | CoderLala",
    description: "CoderLala is a leading SaaS platform development company in Gurgaon offering custom SaaS solutions, cloud-based applications, and enterprise software development. Trusted by 500+ businesses.",
    url: "https://coderlala.com/saas-platform-development-gurgaon",
    siteName: "CoderLala",
    images: [
      {
        url: "/images/gurgaon-og/og-image-saas-platform-development-gurgaon.jpg",
        width: 1200,
        height: 630,
        alt: "CoderLala - Best SaaS Platform Development Company in Gurgaon",
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
    title: "Best SaaS Platform Development Company in Gurgaon | CoderLala",
    description: "CoderLala is a leading SaaS platform development company in Gurgaon offering custom SaaS solutions, cloud-based applications, and enterprise software development.",
    images: [
      "/images/gurgaon-og/og-image-saas-platform-development-gurgaon.jpg",
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
    "geo.position": "28.4595;77.0266",
    "ICBM": "28.4595, 77.0266",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2563eb",
};

// Server component that wraps the client component
export default function SaaSPlatformDevelopmentPage() {
  return <SaaSPlatformDevelopmentClient />;
}