// app/services/page.tsx
import type { Metadata } from "next";
import OurTeamContent from "./OurTeamContent";
import { FAQSchema } from "../components/structured-data";


export const metadata: Metadata = {
  title: "Our Team | Expert Developers CoderLala Gurugram",
  description: "CoderLala's Gurugram team: skilled developers, designers & engineers delivering web apps, mobile, SaaS platforms & AI solutions.",
  keywords: [
    "CoderLala team",
    "software developers India",
    "web developers Gurugram",
    "mobile app developers",
    "full stack developers",
    "DevOps engineers",
    "UI UX designers",
    "AI ML engineers",
    "software engineering team",
    "technology experts",
    "development team India",
    "skilled developers",
    "tech professionals Gurugram"
  ],
  authors: [{ name: "CoderLala Technologies" }],
  creator: "CoderLala Technologies",
  publisher: "CoderLala Technologies",
  openGraph: {
    title: "Our Team | Expert Developers CoderLala Gurugram",
    description: "CoderLala's Gurugram team: skilled developers, designers & engineers delivering web apps, mobile, SaaS platforms & AI solutions.",
    url: "https://coderlala.com/our-team",
    siteName: "CoderLala Technologies",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/feature-images/og-images/og-our-teams.jpg",
        width: 1200,
        height: 630,
        alt: "CoderLala Technologies Team - Expert Software Developers",
        type: "image/jpeg",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | Expert Developers CoderLala Gurugram",
    description: "CoderLala's Gurugram team: skilled developers, designers & engineers delivering web apps, mobile, SaaS platforms & AI solutions.",
    images: ["/images/team/coderlala-team.jpg"],
    creator: "@coderlala",
    site: "@coderlala",
  },
  alternates: {
    canonical: "https://coderlala.com/our-team",
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

export default function OurTeamPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Elements (unchanged) */}
      {/* <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-orange-500/10 to-transparent blur-3xl rounded-full" />
      </div> */}

      {/* FAQ Schema for Our Team Page */}
      <FAQSchema
        data={{
          mainEntity: [
            {
              "@type": "Question",
              name: "What roles are part of the CoderLala team?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our team includes Full-Stack Developers, Frontend/Backend Engineers, DevOps Engineers, UI/UX Designers, Mobile App Developers, AI/ML Engineers, Cloud Architects, Project Managers, and QA Specialists, all based in Gurugram, India."
              }
            },
            {
              "@type": "Question",
              name: "What is the average experience level of your team?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our team members have 3-8+ years of experience in their respective fields. We combine experienced professionals with talented newcomers to maintain innovation while ensuring project quality and delivery."
              }
            },
            {
              "@type": "Question",
              name: "What technologies does your team specialize in?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our team specializes in modern technologies including React, Next.js, Node.js, Python, TypeScript, AWS, Azure, Docker, Kubernetes, MongoDB, PostgreSQL, and various AI/ML frameworks. We continuously update our skills with industry trends."
              }
            },
            {
              "@type": "Question",
              name: "How does CoderLala ensure team collaboration?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We use modern collaboration tools, follow agile methodologies, maintain transparent communication, conduct regular team meetings, and foster a culture of knowledge sharing and continuous learning."
              }
            },
            {
              "@type": "Question",
              name: "Does your team have industry-specific experience?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, our team has experience across various industries including Fintech, Healthcare, E-commerce, Education, Real Estate, and SaaS. This diverse experience helps us understand and address industry-specific challenges."
              }
            },
            {
              "@type": "Question",
              name: "How does CoderLala handle project management?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We use agile project management methodologies with dedicated project managers, regular client communication, milestone tracking, and quality assurance processes to ensure timely and successful project delivery."
              }
            }
          ]
        }}
      />

      <div className="max-w-7xl mx-auto px-4 py-20">
        <OurTeamContent />
      </div>
    </div>
  );
}
