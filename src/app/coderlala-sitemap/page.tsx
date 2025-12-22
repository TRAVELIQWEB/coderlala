import React from 'react'
import type { Metadata } from "next";
import SitemapContent from './SitemapContent';

export const metadata: Metadata = {
  title: "Sitemap | CoderLala Technologies",
  description: "Browse all important pages of CoderLala Technologies Pvt. Ltd.",
  keywords: [
    "sitemap",
    "site navigation",
    "pages",
  ],
  openGraph: {
    title: "Sitemap | CoderLala Technologies",
    description: "Browse all important pages of CoderLala Technologies Pvt. Ltd.",
    url: "https://coderlala.com/sitemap",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitemap | CoderLala Technologies",
    description: "Browse all important pages of CoderLala Technologies Pvt. Ltd.",
  },
  alternates: {
    canonical: "https://coderlala.com/sitemap",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function SitemapPage() {
  return (
    <div className="relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <SitemapContent />
      </div>
    </div>
  )
}