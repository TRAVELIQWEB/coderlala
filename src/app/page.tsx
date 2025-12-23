import Hero from "./components/sections/hero";
import ServicesOverview from "./components/sections/services-overview";
import Testimonials from "./components/sections/testimonials";
import CTA from "./components/sections/cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CoderLala Technologies Pvt. Ltd. | Next-Gen Digital Solutions",
  description: "Building next-generation web apps, mobile apps, SaaS platforms, AI-driven systems, and enterprise-grade cloud solutions with modern engineering excellence.",
  keywords: [
    "web development",
    "app development",
    "SaaS",
    "cloud solutions",
    "AI systems",
    "digital transformation",
  ],
  openGraph: {
    title: "CoderLala Technologies Pvt. Ltd.",
    description: "Building next-generation digital solutions.",
    url: "https://coderlala.com",
    siteName: "CoderLala Technologies",
    type: "website",
    images: [
      {
        url: "/images/feature-images/og-images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "CoderLala Technologies",
      },
    ],
  },
  alternates: {
    canonical: "https://coderlala.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Testimonials />
      <CTA />
    </>
  );
}
