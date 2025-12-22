import { motion } from "framer-motion";
import TermsOfServiceContent from "./TermsOfServiceContent";
import type { Metadata } from "next";
// import { Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | CoderLala Technologies",
  description: "Review the terms of service for CoderLala Technologies. Understand the rules and guidelines for using our services.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "service agreement",
  ],
  openGraph: {
    title: "Terms of Service | CoderLala Technologies",
    description: "Review the terms of service for CoderLala Technologies. Understand the rules and guidelines for using our services.",
    url: "https://coderlala.com/terms-of-service",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | CoderLala Technologies",
    description: "Review the terms of service for CoderLala Technologies. Understand the rules and guidelines for using our services.",
  },
  alternates: {
    canonical: "https://coderlala.com/terms-of-service",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <TermsOfServiceContent />
      </div>
    </div>
  )
}