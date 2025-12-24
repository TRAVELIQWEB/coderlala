import type { Metadata } from "next";
import AboutContent from "./AboutContent";
import { FAQSchema } from "../components/structured-data";

export const metadata: Metadata = {
  title: "About Us | CoderLala Technologies - Leading Software Development Company",
  description: "Learn about CoderLala Technologies, a premier software development company in India delivering enterprise digital solutions, SaaS platforms, mobile apps, AI/ML systems, and DevOps services since 2020.",
  keywords: [
    "about CoderLala Technologies",
    "software development company India",
    "enterprise digital solutions",
    "SaaS development company",
    "mobile app development India",
    "AI ML development company",
    "DevOps services India",
    "IT solutions company Gurugram",
    "custom software development",
    "technology consulting",
    "digital transformation company",
    "software engineering firm"
  ],
  authors: [{ name: "CoderLala Technologies" }],
  creator: "CoderLala Technologies",
  publisher: "CoderLala Technologies",
  openGraph: {
    title: "About Us | CoderLala Technologies - Leading Software Development Company",
    description: "Discover CoderLala Technologies—experts in enterprise software, SaaS platforms, mobile apps, AI/ML, and DevOps solutions. Based in Gurugram, India.",
    url: "https://coderlala.com/about",
    siteName: "CoderLala Technologies",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/feature-images/og-images/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About CoderLala Technologies - Leading Software Development Company",
        type: "image/jpeg",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About CoderLala Technologies",
    description: "Leading software development company in India specializing in web apps, mobile apps, SaaS platforms, and AI-driven systems.",
    images: ["/images/feature-images/og-images/og-about.jpg"],
    creator: "@coderlala",
    site: "@coderlala",
  },
  alternates: {
    canonical: "https://coderlala.com/about",
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

      {/* FAQ Schema for About Page */}
      <FAQSchema
        data={{
          mainEntity: [
            {
              "@type": "Question",
              name: "What is CoderLala Technologies?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "CoderLala Technologies is a modern software development company specializing in enterprise digital solutions, SaaS platforms, mobile applications, AI/ML systems, and DevOps services. We deliver cutting-edge technology solutions to help businesses transform digitally."
              }
            },
            {
              "@type": "Question",
              name: "When was CoderLala founded?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "CoderLala Technologies was founded with a vision to bridge the gap between innovative technology and business needs, bringing together expertise in modern development practices and enterprise-grade solutions."
              }
            },
            {
              "@type": "Question",
              name: "What industries does CoderLala serve?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We serve a wide range of industries including Fintech, Healthcare, E-commerce, Education, Real Estate, SaaS companies, Startups, and Enterprise organizations. Our solutions are tailored to meet industry-specific requirements and compliance standards."
              }
            },
            {
              "@type": "Question",
              name: "What is CoderLala's mission?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our mission is to empower businesses with next-generation digital solutions that drive growth, efficiency, and innovation. We believe in building technology that not only meets current needs but anticipates future challenges."
              }
            },
            {
              "@type": "Question",
              name: "What technologies does CoderLala specialize in?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We specialize in modern technologies including React, Next.js, Node.js, Python, TypeScript, AWS, Azure, Docker, Kubernetes, MongoDB, PostgreSQL, and various AI/ML frameworks. We stay updated with the latest industry trends and best practices."
              }
            },
            {
              "@type": "Question",
              name: "How does CoderLala ensure project quality?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We follow industry best practices including agile development, code reviews, automated testing, continuous integration/deployment, security audits, and regular performance monitoring to ensure high-quality, scalable solutions."
              }
            },
            {
              "@type": "Question",
              name: "Where is CoderLala located?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "CoderLala Technologies is based in Gurugram, Haryana, India. We serve clients globally and have experience working across different time zones and cultural contexts."
              }
            }
          ]
        }}
      />

      <div className="max-w-7xl mx-auto px-4 py-20">
        <AboutContent />
      </div>

    </div>
  );
}
