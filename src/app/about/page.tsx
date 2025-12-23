import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About CoderLala Technologies | Software Development Company",
  description:
    "Learn about CoderLala Technologies, a software development company delivering enterprise digital solutions, SaaS, mobile apps, AI/ML, and DevOps services.",

  keywords: [
    "About CoderLala Technologies",
    "software development company",
    "enterprise digital solutions",
    "SaaS and mobile app development",
    "AI ML and DevOps services",
    "IT solutions company in India"
  ],
  openGraph: {
    title: "About CoderLala Technologies",
    description:
      "Discover CoderLala Technologies—experts in enterprise software, SaaS platforms, mobile apps, AI/ML, and DevOps solutions.",
    url: "https://www.coderlala.com/about",
    siteName: "CoderLala Technologies",
    images: [
      {
        url: "/images/feature-images/og-images/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About - CoderLala Technologies"
      }
    ],
    type: "website"
  }
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">

      {/* Background */}
      {/* <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 
            bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 
            bg-gradient-to-tl from-orange-500/10 to-transparent blur-3xl rounded-full" />
      </div> */}

      <div className="max-w-7xl mx-auto px-4 py-20">
        <AboutContent />
      </div>

    </div>
  );
}
