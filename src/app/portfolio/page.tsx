// app/portfolio/page.tsx
import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "CoderLala Portfolio - Innovative Solutions in Tech",
  description:
    "Discover CoderLala’s innovative portfolio showcasing cutting-edge technology solutions across various domains including SaaS, AI/ML, and DevOps.",
  keywords: [
    "portfolio",
    "case studies",
    "technology solutions",
    "SaaS",
    "AI ML",
    "DevOps",
    "innovation",
  ],
  openGraph: {
    title: "CoderLala Portfolio - Innovative Solutions in Tech",
    description:
      "Discover CoderLala’s innovative portfolio showcasing cutting-edge technology solutions across various domains including SaaS, AI/ML, and DevOps.",
    url: "https://coderlala.com/portfolio",
    images: [
      {
        url: "/images/feature-images/og-images/og-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio - CoderLala Technologies"
      }
    ],
    type: "website",
  },

  alternates: {
    canonical: "https://coderlala.com/portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Elements */}
      {/* <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 
          bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 
          bg-gradient-to-tl from-orange-500/10 to-transparent blur-3xl rounded-full" />
      </div> */}

      <div className="max-w-7xl mx-auto px-4 py-20">
        <PortfolioContent />
      </div>
    </div>
  );
}
