// app/ai-ml-solutions-gurgaon/page.tsx
import { Metadata, Viewport } from "next";
import AIMLSolutionsClient from "./AIMLSolutionsClient";

import { contactInfo } from "@/data/ContactInfo";
export const metadata: Metadata = {
  title: "Best AI & ML Solutions Company in Gurgaon | CoderLala",
  description: "CoderLala is a leading AI and ML solutions company in Gurgaon offering custom machine learning models, NLP, computer vision, and predictive analytics. Trusted by 500+ businesses.",
  keywords: "AI ML solutions company Gurgaon, artificial intelligence Gurgaon, machine learning Gurgaon, NLP solutions, computer vision, predictive analytics, custom ML models, AI development, data science, IT services Gurgaon",
  alternates: {
    canonical: "/services/ai-ml-solutions-gurgaon",
  },
  openGraph: {
    title: "Best AI & ML Solutions Company in Gurgaon | CoderLala",
    description: "CoderLala is a leading AI and ML solutions company in Gurgaon offering custom machine learning models, NLP, computer vision, and predictive analytics.",
    url: "/services/ai-ml-solutions-gurgaon",
    siteName: "CoderLala",
    images: [
      {
        url: "/images/gurgaon-og/og-image-ai-ml-solutions-gurgaon.jpg",
        width: 1200,
        height: 630,
        alt: "CoderLala - Best AI & ML Solutions Company in Gurgaon",
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
    title: "Best AI & ML Solutions Company in Gurgaon | CoderLala",
    description: "CoderLala is a leading AI and ML solutions company in Gurgaon offering custom machine learning models, NLP, computer vision, and predictive analytics.",
    images: ["/images/gurgaon-og/og-image-ai-ml-solutions-gurgaon.jpg", "/logo/CoderLalaLogoDark.svg"],
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

export default function AIMLSolutionsPage() {
  return <AIMLSolutionsClient />;
}