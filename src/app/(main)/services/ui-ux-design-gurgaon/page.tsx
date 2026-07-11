// app/ui-ux-design-gurgaon/page.tsx
import { Metadata, Viewport } from "next";
import UIUXDesignClient from "./UIUXDesignClient";

export const metadata: Metadata = {
  title: "Best UI/UX Design Company in Gurgaon | CoderLala",
  description: "CoderLala is a leading UI/UX design company in Gurgaon offering user-centered design, wireframing, prototyping, and design systems. Trusted by 500+ businesses.",
  keywords: "UI/UX design company Gurgaon, UI design Gurgaon, UX design Gurgaon, product design, user experience design, interface design, design systems, Figma design, prototyping, wireframing, IT services Gurgaon",
  alternates: {
    canonical: "/services/ui-ux-design-gurgaon",
  },
  openGraph: {
    title: "Best UI/UX Design Company in Gurgaon | CoderLala",
    description: "CoderLala is a leading UI/UX design company in Gurgaon offering user-centered design, wireframing, prototyping, and design systems.",
    url: "/services/ui-ux-design-gurgaon",
    siteName: "CoderLala",
    images: [
      {
        url: "/images/gurgaon-og/og-image-ui-ux-design-gurgaon.jpg",
        width: 1200,
        height: 630,
        alt: "CoderLala - Best UI/UX Design Company in Gurgaon",
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
    title: "Best UI/UX Design Company in Gurgaon | CoderLala",
    description: "CoderLala is a leading UI/UX design company in Gurgaon offering user-centered design, wireframing, prototyping, and design systems.",
    images: ["/images/gurgaon-og/og-image-ui-ux-design-gurgaon.jpg", "/logo/CoderLalaLogoDark.svg"],
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

export default function UIUXDesignPage() {
  return <UIUXDesignClient />;
}