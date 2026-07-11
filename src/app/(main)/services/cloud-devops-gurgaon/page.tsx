// app/cloud-devops-gurgaon/page.tsx
import { Metadata, Viewport } from "next";
import CloudDevOpsClient from "./CloudDevOpsClient";

export const metadata: Metadata = {
  title: "Best Cloud & DevOps Company in Gurgaon | CoderLala",
  description: "CoderLala is a leading cloud and DevOps company in Gurgaon offering AWS, Azure, GCP deployment, CI/CD pipelines, and Kubernetes orchestration. Trusted by 500+ businesses.",
  keywords: "cloud and devops company Gurgaon, cloud services Gurgaon, devops services Gurgaon, AWS deployment, Azure deployment, GCP deployment, CI/CD pipelines, Kubernetes, Docker, infrastructure as code, Terraform, IT services Gurgaon",
  alternates: {
    canonical: "https://coderlala.com/cloud-devops-gurgaon",
  },
  openGraph: {
    title: "Best Cloud & DevOps Company in Gurgaon | CoderLala",
    description: "CoderLala is a leading cloud and DevOps company in Gurgaon offering AWS, Azure, GCP deployment, CI/CD pipelines, and Kubernetes orchestration.",
    url: "https://coderlala.com/cloud-devops-gurgaon",
    siteName: "CoderLala",
    images: [
      {
        url: "/images/gurgaon-og/og-image-cloud-devops-gurgaon.jpg",
        width: 1200,
        height: 630,
        alt: "CoderLala - Best Cloud & DevOps Company in Gurgaon",
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
    title: "Best Cloud & DevOps Company in Gurgaon | CoderLala",
    description: "CoderLala is a leading cloud and DevOps company in Gurgaon offering AWS, Azure, GCP deployment, CI/CD pipelines, and Kubernetes orchestration.",
    images: ["/images/gurgaon-og/og-image-cloud-devops-gurgaon.jpg", "/logo/CoderLalaLogoDark.svg"],
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

export default function CloudDevOpsPage() {
  return <CloudDevOpsClient />;
}