// app/backend-api-development-gurgaon/page.tsx
import { Metadata, Viewport } from "next";
import BackendAPIDevelopmentClient from "./BackendAPIDevelopmentClient";

export const metadata: Metadata = {
  title: "Best Backend & API Development Company in Gurgaon | CoderLala",
  description: "CoderLala is a leading backend and API development company in Gurgaon offering Node.js, Python, Go, microservices, and GraphQL solutions. Trusted by 500+ businesses.",
  keywords: "backend development company Gurgaon, API development Gurgaon, Node.js development, Python backend, microservices architecture, GraphQL API, REST API, scalable backend, database design, IT services Gurgaon",
  alternates: {
    canonical: "/services/backend-api-development-gurgaon",
  },
  openGraph: {
    title: "Best Backend & API Development Company in Gurgaon | CoderLala",
    description: "CoderLala is a leading backend and API development company in Gurgaon offering Node.js, Python, Go, microservices, and GraphQL solutions.",
    url: "/services/backend-api-development-gurgaon",
    siteName: "CoderLala",
    images: [
      {
        url: "/images/gurgaon-og/og-image-backend-api-development-gurgaon.jpg",
        width: 1200,
        height: 630,
        alt: "CoderLala - Best Backend & API Development Company in Gurgaon",
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
    title: "Best Backend & API Development Company in Gurgaon | CoderLala",
    description: "CoderLala is a leading backend and API development company in Gurgaon offering Node.js, Python, Go, microservices, and GraphQL solutions.",
    images: ["/images/gurgaon-og/og-image-backend-api-development-gurgaon.jpg", "/logo/CoderLalaLogoDark.svg"],
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

export default function BackendAPIDevelopmentPage() {
  return <BackendAPIDevelopmentClient />;
}