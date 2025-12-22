import CookiePolicyContent from './CookiePolicyContent'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | CoderLala Technologies",
  description: "Learn about how CoderLala Technologies uses cookies to enhance your browsing experience and provide personalized content.",
  keywords: [
    "cookie policy",
    "cookies",
    "privacy",
    "tracking",
  ],
  openGraph: {
    title: "Cookie Policy | CoderLala Technologies",
    description: "Learn about how CoderLala Technologies uses cookies to enhance your browsing experience and provide personalized content.",
    url: "https://coderlala.com/cookie-policy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy | CoderLala Technologies",
    description: "Learn about how CoderLala Technologies uses cookies to enhance your browsing experience and provide personalized content.",
  },
  alternates: {
    canonical: "https://coderlala.com/cookie-policy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <CookiePolicyContent />
      </div>
    </div>
  )
}