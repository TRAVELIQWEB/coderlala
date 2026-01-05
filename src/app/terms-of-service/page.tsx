import { motion } from "framer-motion";
import TermsOfServiceContent from "./TermsOfServiceContent";
import type { Metadata } from "next";
import { FAQSchema } from "../components/structured-data";
// import { Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | CoderLala Technologies",
  description: "CoderLala Technologies' Terms of Service: clear legal agreements, user responsibilities & service terms for web, mobile & SaaS development.",
  keywords: [
    "terms of service CoderLala",
    "terms and conditions",
    "legal agreement",
    "service contract",
    "user terms",
    "software development terms",
    "service warranties",
    "liability terms",
    "intellectual property terms",
    "payment terms",
    "service agreement",
    "legal terms India"
  ],
  authors: [{ name: "CoderLala Technologies" }],
  creator: "CoderLala Technologies",
  publisher: "CoderLala Technologies",
  openGraph: {
    title: "Terms & Conditions | CoderLala Technologies",
    description: "CoderLala Technologies' Terms of Service: clear legal agreements, user responsibilities & service terms for web, mobile & SaaS development.",
    url: "https://coderlala.com/terms-of-service",
    siteName: "CoderLala Technologies",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/feature-images/og-images/og-terms.jpg",
        width: 1200,
        height: 630,
        alt: "Terms of Service - CoderLala Technologies",
        type: "image/jpeg",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | CoderLala Technologies",
    description: "CoderLala Technologies' Terms of Service: clear legal agreements, user responsibilities & service terms for web, mobile & SaaS development.",
    images: ["/images/feature-images/og-images/og-terms.jpg"],
    creator: "@coderlala",
    site: "@coderlala",
  },
  alternates: {
    canonical: "https://coderlala.com/terms-of-service",
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

export default function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen">
      {/* FAQ Schema for Terms of Service Page */}
      <FAQSchema
        data={{
          mainEntity: [
            {
              "@type": "Question",
              name: "What do these Terms of Service cover?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "These Terms of Service govern your use of CoderLala Technologies' website, services, and any interactions with our company. They establish the rules and guidelines for our professional relationship."
              }
            },
            {
              "@type": "Question",
              name: "What are my responsibilities when using CoderLala's services?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You agree to provide accurate information, respect intellectual property rights, use our services for lawful purposes, maintain confidentiality of proprietary information, and comply with all applicable laws and regulations."
              }
            },
            {
              "@type": "Question",
              name: "What are CoderLala's service warranties and limitations?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our services are provided 'as is' with no warranties of merchantability or fitness for particular purpose. We strive for quality but cannot guarantee uninterrupted service or error-free performance."
              }
            },
            {
              "@type": "Question",
              name: "How does CoderLala handle intellectual property?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Upon full payment, clients receive ownership of deliverables. CoderLala retains rights to reusable components, methodologies, and proprietary tools. Both parties agree to protect each other's confidential information."
              }
            },
            {
              "@type": "Question",
              name: "What is the payment structure for CoderLala's services?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Payment terms are specified in individual project agreements. Typically includes deposit, milestone payments, and final payment upon completion. Late payments may incur additional fees."
              }
            },
            {
              "@type": "Question",
              name: "What happens if a project needs to be terminated?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Either party may terminate with written notice. Client pays for work completed and reasonable termination costs. CoderLala will deliver completed work and assist with knowledge transfer."
              }
            },
            {
              "@type": "Question",
              name: "How does CoderLala handle data protection and confidentiality?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We implement industry-standard security measures and maintain strict confidentiality. Personal data is handled according to our Privacy Policy and applicable data protection laws."
              }
            },
            {
              "@type": "Question",
              name: "What dispute resolution process does CoderLala follow?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Disputes are resolved through good faith negotiation, followed by mediation if necessary. These Terms are governed by Indian law with exclusive jurisdiction in Gurugram courts."
              }
            }
          ]
        }}
      />

      <div className="max-w-7xl mx-auto px-4 py-20">
        <TermsOfServiceContent />
      </div>
    </div>
  )
}