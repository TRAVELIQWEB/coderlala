import React from 'react'
import PrivacyPolicyContent from './PrivacyPolicyContent'
import type { Metadata } from "next";
import { FAQSchema } from "../components/structured-data";

export const metadata: Metadata = {
  title: "Privacy Policy | CoderLala Data Protection",
  description: "Understand CoderLala's data privacy practices: collection, usage, sharing & protection compliant with GDPR and Indian data laws.",
  keywords: [
    "privacy policy CoderLala",
    "data protection policy",
    "personal information privacy",
    "GDPR compliance",
    "data privacy India",
    "cookie policy",
    "user data protection",
    "information security",
    "privacy rights",
    "data collection policy",
    "user privacy protection",
    "data processing policy"
  ],

  openGraph: {
    title: "Privacy Policy | CoderLala Data Protection",
    description: "Understand CoderLala's data privacy practices: collection, usage, sharing & protection compliant with GDPR and Indian data laws.",
    url: "https://coderlala.com/privacy-policy",
    siteName: "CoderLala Technologies",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/feature-images/og-images/og-privacy.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - CoderLala Technologies",
        type: "image/jpeg",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | CoderLala Data Protection",
    description: "Understand CoderLala's data privacy practices: collection, usage, sharing & protection compliant with GDPR and Indian data laws.",
    images: ["/images/feature-images/og-images/og-privacy.jpg"],
    creator: "@coderlala",
    site: "@coderlala",
  },
  alternates: {
    canonical: "https://coderlala.com/privacy-policy",
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen">
      {/* FAQ Schema for Privacy Policy Page */}
      <FAQSchema
        data={{
          mainEntity: [
            {
              "@type": "Question",
              name: "What personal information does CoderLala collect?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We collect information you provide directly (name, email, phone, company details), information from your use of our services, and automatically collected data (IP address, browser type, pages visited, and usage patterns)."
              }
            },
            {
              "@type": "Question",
              name: "How does CoderLala use my personal information?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We use your information to provide our services, communicate with you, improve our offerings, ensure security, comply with legal obligations, and send relevant updates about our services and industry insights."
              }
            },
            {
              "@type": "Question",
              name: "Does CoderLala share my personal information?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We do not sell, trade, or rent your personal information to third parties. We may share information only with service providers who help us operate our business, when required by law, or with your explicit consent."
              }
            },
            {
              "@type": "Question",
              name: "How long does CoderLala retain my data?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Contact data is typically retained for business relationship purposes."
              }
            },
            {
              "@type": "Question",
              name: "What are my rights regarding my personal data?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You have the right to access, correct, delete, or restrict processing of your personal data. You can also object to processing and request data portability. Contact us to exercise these rights."
              }
            },
            {
              "@type": "Question",
              name: "How does CoderLala protect my data?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We implement industry-standard security measures including encryption, secure servers, regular security audits, access controls, and employee training to protect your personal information from unauthorized access."
              }
            },
            {
              "@type": "Question",
              name: "Does CoderLala use cookies?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we use cookies and similar technologies to enhance your experience, analyze site usage, and provide personalized content. You can control cookie preferences through your browser settings."
              }
            },
            {
              "@type": "Question",
              name: "How can I contact CoderLala about privacy concerns?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You can contact us about privacy concerns by emailing info@coderlala.com or using the contact form on our website. We respond to all privacy inquiries within 24 hours."
              }
            }
          ]
        }}
      />

      <div className="max-w-7xl mx-auto px-4">
        <PrivacyPolicyContent />
      </div>
    </div>
  )
}