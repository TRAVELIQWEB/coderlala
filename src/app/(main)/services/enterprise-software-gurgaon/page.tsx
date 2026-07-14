// app/enterprise-software-gurgaon/page.tsx
import { Metadata, Viewport } from "next";
import EnterpriseSoftwareClient from "./EnterpriseSoftwareClient";

export const metadata: Metadata = {
  title: "Best Enterprise Software Development Company in Gurgaon | CoderLala",
  description: "CoderLala is a leading enterprise software development company in Gurgaon offering ERP/CRM integration, legacy modernization, and workflow automation. Trusted by 500+ businesses.",
  keywords: "enterprise software development company Gurgaon, enterprise software Gurgaon, ERP integration, CRM integration, legacy modernization, workflow automation, custom enterprise solutions, business software, IT services Gurgaon",
  alternates: {
    canonical: "/services/enterprise-software-gurgaon",
  },
  openGraph: {
    title: "Best Enterprise Software Development Company in Gurgaon | CoderLala",
    description: "CoderLala is a leading enterprise software development company in Gurgaon offering ERP/CRM integration, legacy modernization, and workflow automation.",
    url: "/services/enterprise-software-gurgaon",
    siteName: "CoderLala",
    images: [
      {
        url: "/images/gurgaon-og/og-image-enterprise-software-gurgaon.jpg",
        width: 1200,
        height: 630,
        alt: "CoderLala - Best Enterprise Software Development Company in Gurgaon",
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
    title: "Best Enterprise Software Development Company in Gurgaon | CoderLala",
    description: "CoderLala is a leading enterprise software development company in Gurgaon offering ERP/CRM integration, legacy modernization, and workflow automation.",
    images: ["/images/gurgaon-og/og-image-enterprise-software-gurgaon.jpg", "/logo/CoderLalaLogoDark.svg"],
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

export default function EnterpriseSoftwarePage() {
  return <EnterpriseSoftwareClient />;
}