// app/portfolio/page.tsx
import type { Metadata } from "next";
import ProjectRequirementContents from "./projectRequirementContents";
import { FAQSchema } from "@/app/components/structured-data";


export const metadata: Metadata = {
  title: "Project Requirements | CoderLala Technologies - Get Your Project Started",
  description: "Share your project requirements with CoderLala Technologies. Get detailed project estimates, timelines, and technical specifications for web development, mobile apps, SaaS platforms, and AI solutions.",
  keywords: [
    "project requirements",
    "project estimation",
    "software development quote",
    "project scoping",
    "technical specifications",
    "project planning",
    "development timeline",
    "project cost estimation",
    "software project requirements",
    "web development requirements",
    "mobile app requirements",
    "SaaS project planning"
  ],
  openGraph: {
    title: "Project Requirements | CoderLala Technologies - Get Your Project Started",
    description: "Share your project requirements and get detailed estimates for web development, mobile apps, SaaS platforms, and AI solutions.",
    url: "https://coderlala.com/project-requirement",
    siteName: "CoderLala Technologies",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/feature-images/og-images/og-project-requirements.jpg",
        width: 1200,
        height: 630,
        alt: "Project Requirements - CoderLala Technologies",
        type: "image/jpeg",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Requirements | CoderLala Technologies",
    description: "Get detailed project estimates and timelines for your software development needs.",
    images: ["/images/feature-images/og-images/og-project-requirements.jpg"],
    creator: "@coderlala",
    site: "@coderlala",
  },
  alternates: {
    canonical: "https://coderlala.com/project-requirement",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function ProjectRequirementsPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Elements */}
      {/* <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 
          bg-linear-to-br from-blue-500/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 
          bg-gradient-to-tl from-orange-500/10 to-transparent blur-3xl rounded-full" />
      </div> */}

      {/* FAQ Schema for Project Requirements Page */}
      <FAQSchema
        data={{
          mainEntity: [
            {
              "@type": "Question",
              name: "What information should I include in my project requirements?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Include your project goals, target audience, preferred technologies, timeline, budget, existing systems to integrate with, specific features needed, and any technical constraints or challenges."
              }
            },
            {
              "@type": "Question",
              name: "How detailed should my project description be?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Be as detailed as possible about your vision, user flows, key features, and success metrics. Include examples of similar applications and what makes your project unique."
              }
            },
            {
              "@type": "Question",
              name: "Do you provide project estimation and timelines?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, after reviewing your requirements, we provide detailed project estimates, development timelines, milestone breakdowns, and resource allocation plans."
              }
            },
            {
              "@type": "Question",
              name: "What if I don't have technical specifications?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No problem! We can help you define technical requirements based on your business goals. Our team will work with you to create comprehensive project specifications."
              }
            },
            {
              "@type": "Question",
              name: "How do you handle project scoping and changes?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We start with a discovery phase to define project scope, then use agile methodology with regular check-ins. Change requests are evaluated for impact on timeline and budget."
              }
            }
          ]
        }}
      />

      <div className="max-w-7xl mx-auto px-4 py-20">
<ProjectRequirementContents/>
      </div>
    </div>
  );
}

