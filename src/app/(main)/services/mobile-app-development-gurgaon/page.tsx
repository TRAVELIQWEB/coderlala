// app/mobile-app-development-gurgaon/page.tsx
import { Metadata, Viewport } from "next";
import MobileAppDevelopmentClient from "./MobileAppDevelopmentClient";

// Generate metadata for SEO
export const metadata: Metadata = {
  title: "Best Mobile App Development Company in Gurgaon | CoderLala",
  description: "CoderLala is a leading mobile app development company in Gurgaon offering custom iOS, Android, and cross-platform app development. Trusted by 500+ businesses.",
  keywords: "mobile app development company Gurgaon, mobile app development Gurgaon, custom app development, iOS app development Gurgaon, Android app development Gurgaon, cross platform app development, react native development, flutter development, app developer Gurgaon, software development Gurgaon, IT services Gurgaon, digital agency Gurgaon",
  alternates: {
    canonical: "/services/mobile-app-development-gurgaon",
  },
  openGraph: {
    title: "Best Mobile App Development Company in Gurgaon | CoderLala",
    description: "CoderLala is a leading mobile app development company in Gurgaon offering custom iOS, Android, and cross-platform app development. Trusted by 500+ businesses.",
    url: "/services/mobile-app-development-gurgaon",
    siteName: "CoderLala",
    images: [
      {
        url: "/images/gurgaon-og/og-image-mobile-app-development-gurgaon.jpg",
        width: 1200,
        height: 630,
        alt: "CoderLala - Best Mobile App Development Company in Gurgaon",
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
    title: "Best Mobile App Development Company in Gurgaon | CoderLala",
    description: "CoderLala is a leading mobile app development company in Gurgaon offering custom iOS, Android, and cross-platform app development.",
    images: [
      "/images/gurgaon-og/og-image-mobile-app-development-gurgaon.jpg",
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
export default function MobileAppDevelopmentPage() {
  return <MobileAppDevelopmentClient />;
}