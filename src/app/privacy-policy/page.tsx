import React from 'react'
import PrivacyPolicyContent from './PrivacyPolicyContent'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | CoderLala Technologies",
  description: "Read CoderLala Technologies' privacy policy to understand how we collect, use, and protect your personal information.",
  keywords: [
    "privacy policy",
    "data protection",
    "personal information",
    "GDPR",
  ],
  openGraph: {
    title: "Privacy Policy | CoderLala Technologies",
    description: "Read CoderLala Technologies' privacy policy to understand how we collect, use, and protect your personal information.",
    url: "https://coderlala.com/privacy-policy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | CoderLala Technologies",
    description: "Read CoderLala Technologies' privacy policy to understand how we collect, use, and protect your personal information.",
  },
  alternates: {
    canonical: "https://coderlala.com/privacy-policy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <PrivacyPolicyContent />
      </div>
    </div>
  )
}