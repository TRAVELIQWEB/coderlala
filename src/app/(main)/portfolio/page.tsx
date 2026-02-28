// app/portfolio/page.tsx
import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";
import { FAQSchema } from "@/app/components/structured-data";

export const metadata: Metadata = {
  title: "CoderLala Portfolio | SaaS AI Enterprise Projects",
  description: "View our work: enterprise software, mobile apps, fintech platforms, SaaS solutions, AI/ML development & DevOps services from Gurugram.",
  keywords: [
    "CoderLala portfolio",
    "software development case studies",
    "SaaS platform examples",
    "AI ML project portfolio",
    "enterprise software solutions",
    "mobile app development portfolio",
    "cloud infrastructure projects",
    "web application examples",
    "technology project showcase",
    "software development success stories",
    "digital transformation projects",
    "custom software portfolio"
  ],
  openGraph: {
    title: "CoderLala Portfolio | SaaS AI Enterprise Projects",
    description: "View our work: enterprise software, mobile apps, fintech platforms, SaaS solutions, AI/ML development & DevOps services from Gurugram.",
    url: "https://coderlala.com/portfolio",
    siteName: "CoderLala Technologies",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/feature-images/og-images/og-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "CoderLala Technologies Portfolio - Innovative Software Solutions",
        type: "image/jpeg",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CoderLala Portfolio | SaaS AI Enterprise Projects",
    description: "View our work: enterprise software, mobile apps, fintech platforms, SaaS solutions, AI/ML development & DevOps services from Gurugram.",
    images: ["/images/feature-images/og-images/og-portfolio.jpg"],
    creator: "@coderlala",
    site: "@coderlala",
  },
  alternates: {
    canonical: "https://coderlala.com/portfolio",
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

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Elements */}
      {/* <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 
          bg-linear-to-br from-blue-500/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 
          bg-linear-to-tl from-orange-500/10 to-transparent blur-3xl rounded-full" />
      </div> */}

      {/* FAQ Schema for Portfolio Page */}
      <FAQSchema
        data={{
          mainEntity: [
            {
              "@type": "Question",
              name: "What types of projects does CoderLala work on?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We work on diverse projects including SaaS platforms, mobile applications, enterprise software, AI/ML solutions, e-commerce platforms, fintech applications, healthcare systems, and cloud infrastructure projects across various industries."
              }
            },
            {
              "@type": "Question",
              name: "Can I see examples of your previous work?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, our portfolio showcases real projects we've completed for clients across different industries. Each case study includes project details, technologies used, challenges overcome, and results achieved."
              }
            },
            {
              "@type": "Question",
              name: "What industries has CoderLala served?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We have served clients in Fintech, Healthcare, E-commerce, Education, Real Estate, SaaS, Manufacturing, and various other industries. Our solutions are tailored to meet industry-specific requirements and compliance standards."
              }
            },
            {
              "@type": "Question",
              name: "How long does it take to complete a typical project?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Project timelines vary based on complexity and scope. Simple applications may take 4-8 weeks, while complex enterprise platforms can take 3-9 months. We provide detailed timelines during the project planning phase."
              }
            },
            {
              "@type": "Question",
              name: "What technologies does CoderLala commonly use?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We use modern technologies including React, Next.js, Node.js, Python, TypeScript, AWS, Azure, Docker, Kubernetes, MongoDB, PostgreSQL, and various AI/ML frameworks. Technology choices are based on project requirements."
              }
            },
            {
              "@type": "Question",
              name: "Do you work with startups and enterprises?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we work with both startups and large enterprises. We understand the different needs of each and tailor our approach accordingly, from MVP development for startups to complex enterprise-grade solutions."
              }
            },
            {
              "@type": "Question",
              name: "What makes CoderLala's projects successful?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our success comes from combining technical expertise with business understanding, following best practices, maintaining clear communication, delivering scalable solutions, and providing ongoing support to ensure long-term success."
              }
            }
          ]
        }}
      />

      <div className="max-w-7xl mx-auto px-4 py-20">
        <PortfolioContent />
      </div>
    </div>
  );
}

