import type { Metadata } from "next";
import CareersContent from "./CareersContent";

export const metadata: Metadata = {
  title: "Careers at CoderLala | Join Our Team of Innovators",
  description:
    "Explore open positions at CoderLala Technologies. Join a passionate team building cutting-edge apps, SaaS platforms, AI systems, and cloud infrastructure.",
  keywords: [
    "careers",
    "job openings",
    "join CoderLala",
    "software engineer jobs",
    "tech careers",
  ],
  openGraph: {
    title: "Careers at CoderLala | Join Our Team of Innovators",
    description:
      "Explore open positions at CoderLala Technologies. Join a passionate team building cutting-edge apps, SaaS platforms, AI systems, and cloud infrastructure.",
    url: "https://coderlala.com/careers",
    images: [
      {
        url: "/images/feature-images/og-images/og-careers.jpg",
        width: 1200,
        height: 630,
        alt: "Careers - CoderLala Technologies"
      }
    ],
    type: "website",
  },

  alternates: {
    canonical: "https://coderlala.com/careers",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CareersPage() {
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
        <CareersContent />
      </div>
    </div>
  );
}
