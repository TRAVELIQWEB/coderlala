import React from 'react'
import type { Metadata } from "next";
import SitemapContent from './SitemapContent';
import { FAQSchema } from "../components/structured-data";

export const metadata: Metadata = {
  title: "Site Map | CoderLala All Pages",
  description: "CoderLala Technologies complete sitemap: discover services, projects, team, careers, contact & privacy pages in one organized guide.",
  keywords: [
    "CoderLala sitemap",
    "website navigation",
    "site structure",
    "page directory",
    "website map",
    "navigation guide",
    "CoderLala pages",
    "site index",
    "web navigation",
    "page finder",
    "website organization",
    "content structure"
  ],
  authors: [{ name: "CoderLala Technologies" }],
  creator: "CoderLala Technologies",
  publisher: "CoderLala Technologies",
  openGraph: {
    title: "Site Map | CoderLala All Pages",
    description: "CoderLala Technologies complete sitemap: discover services, projects, team, careers, contact & privacy pages in one organized guide.",
    url: "https://coderlala.com/coderlala-sitemap",
    siteName: "CoderLala Technologies",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/feature-images/og-images/og-sitemap.jpg",
        width: 1200,
        height: 630,
        alt: "Sitemap - CoderLala Technologies Website Navigation",
        type: "image/jpeg",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Site Map | CoderLala All Pages",
    description: "CoderLala Technologies complete sitemap: discover services, projects, team, careers, contact & privacy pages in one organized guide.",
    images: ["/images/feature-images/og-images/og-sitemap.jpg"],
    creator: "@coderlala",
    site: "@coderlala",
  },
  alternates: {
    canonical: "https://coderlala.com/coderlala-sitemap",
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

export default function SitemapPage() {
  return (
    <div className="relative min-h-screen">
      {/* FAQ Schema for Sitemap Page */}
      <FAQSchema
        data={{
          mainEntity: [
            {
              "@type": "Question",
              name: "What is the purpose of this sitemap?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "This sitemap provides an organized overview of all important pages on the CoderLala Technologies website, helping users and search engines navigate our content efficiently."
              }
            },
            {
              "@type": "Question",
              name: "How is the sitemap organized?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The sitemap is organized by main sections including Company Information, Services, Portfolio, Careers, Contact & Support, and Legal pages for easy navigation."
              }
            },
            {
              "@type": "Question",
              name: "What should I do if I can't find what I'm looking for?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "If you can't find specific information, try our search functionality, contact us directly, or use the main navigation menu. We're here to help with any questions about our services."
              }
            },
            {
              "@type": "Question",
              name: "Are all pages listed in the sitemap accessible?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, all pages listed in the sitemap are active and accessible. Some pages may require specific permissions or be part of our admin section, but all public pages are fully accessible."
              }
            },
            {
              "@type": "Question",
              name: "How often is the sitemap updated?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The sitemap is updated whenever new pages are added or existing pages are modified. It reflects the current structure of our website and ensures all important content is discoverable."
              }
            }
          ]
        }}
      />

      <div className="max-w-7xl mx-auto px-4 py-20">
        <SitemapContent />
      </div>
    </div>
  )
}