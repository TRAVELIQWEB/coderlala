// app/services/page.tsx
import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services | CoderLala Technologies - Web, Mobile, Cloud & AI",
  description:
    "CoderLala Technologies provides web development, mobile apps, SaaS platforms, backend APIs, UI/UX design, cloud & DevOps, AI/ML solutions, enterprise software, and QA services.",
  keywords: [
    "web development services",
    "mobile app development",
    "SaaS development",
    "cloud solutions",
    "AI ML services",
    "DevOps",
    "enterprise software",
  ],
  openGraph: {
    title: "Services | CoderLala Technologies - Web, Mobile, Cloud & AI",
    description:
      "CoderLala Technologies provides web development, mobile apps, SaaS platforms, backend APIs, UI/UX design, cloud & DevOps, AI/ML solutions, enterprise software, and QA services.",
    url: "https://coderlala.com/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | CoderLala Technologies - Web, Mobile, Cloud & AI",
    description:
      "CoderLala Technologies provides web development, mobile apps, SaaS platforms, backend APIs, UI/UX design, cloud & DevOps, AI/ML solutions, enterprise software, and QA services.",
  },
  alternates: {
    canonical: "https://coderlala.com/services",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Elements (unchanged) */}
      {/* <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-orange-500/10 to-transparent blur-3xl rounded-full" />
      </div> */}

      <div className="max-w-7xl mx-auto px-4 py-20">
        <ServicesContent />
      </div>
    </div>
  );
}
