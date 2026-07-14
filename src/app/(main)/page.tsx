import Hero from "@/app/components/sections/hero";
import ServicesOverview from "@/app/components/sections/services-overview";
import Testimonials from "@/app/components/sections/testimonials";
import CTA from "@/app/components/sections/cta";
import { ServiceSchema, FAQSchema } from "@/app/components/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CoderLala Technologies | Software Development Gurugram",
  description: "Leading Gurugram company for custom software, web/mobile apps, SaaS platforms, AI/ML & DevOps. Transform your business—get a quote today.",
  keywords: [
    "web development company",
    "mobile app development",
    "SaaS development",
    "AI ML solutions",
    "cloud solutions",
    "enterprise software",
    "digital transformation",
    "software development India",
    "custom software development",
    "DevOps services",
    "UI/UX design",
    "full stack development"
  ],
  openGraph: {
    title: "CoderLala Technologies | Software Development Gurugram",
    description: "Leading Gurugram company for custom software, web/mobile apps, SaaS platforms, AI/ML & DevOps. Transform your business—get a quote today.",
    url: "https://coderlala.com",
    siteName: "CoderLala Technologies",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/feature-images/og-images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "CoderLala Technologies | Software Development Gurugram",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CoderLala Technologies | Software Development Gurugram",
    description: "Leading Gurugram company for custom software, web/mobile apps, SaaS platforms, AI/ML & DevOps. Transform your business—get a quote today.",
    images: ["/images/feature-images/og-images/og-home.jpg"],
    creator: "@coderlala",
  },
  alternates: {
    canonical: '/',
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

export default function Home() {
  return (
    <>
      {/* Service Schemas for Home Page */}
      <ServiceSchema
        data={{
          name: "Web Development",
          description: "Build modern, responsive websites optimized for speed, SEO, and user experience.",
          provider: {
            "@type": "Organization",
            name: "CoderLala Technologies Pvt. Ltd."
          },
          serviceType: "Web Development",
          areaServed: "Worldwide",
        }}
      />

      <ServiceSchema
        data={{
          name: "Mobile App Development",
          description: "Cross-platform mobile solutions for iOS and Android with seamless performance and security.",
          provider: {
            "@type": "Organization",
            name: "CoderLala Technologies Pvt. Ltd."
          },
          serviceType: "Mobile Development",
          areaServed: "Worldwide",
        }}
      />

      <ServiceSchema
        data={{
          name: "SaaS Platform Development",
          description: "End-to-end SaaS solutions with subscription management and scalable architecture.",
          provider: {
            "@type": "Organization",
            name: "CoderLala Technologies Pvt. Ltd."
          },
          serviceType: "SaaS Development",
          areaServed: "Worldwide",
        }}
      />

      {/* FAQ Schema for Home Page */}
      <FAQSchema
        data={{
          mainEntity: [
            {
              "@type": "Question",
              name: "What services does CoderLala Technologies offer?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "CoderLala Technologies offers comprehensive digital solutions including web development, mobile app development, SaaS platforms, backend engineering, UI/UX design, cloud infrastructure, AI & ML solutions, and DevOps & security services."
              }
            },
            {
              "@type": "Question",
              name: "How long does it take to develop a web application?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The development timeline varies depending on project complexity, but typically ranges from 4-12 weeks for a standard web application. Simple websites may take 2-4 weeks, while complex SaaS platforms can take 3-6 months or more."
              }
            },
            {
              "@type": "Question",
              name: "Do you provide ongoing maintenance and support?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we offer comprehensive maintenance and support packages including bug fixes, security updates, performance optimization, and feature enhancements to ensure your application remains secure and up-to-date."
              }
            },
            {
              "@type": "Question",
              name: "What technologies do you specialize in?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We specialize in modern technologies including React, Next.js, Node.js, Python, TypeScript, AWS, Docker, Kubernetes, MongoDB, PostgreSQL, and various AI/ML frameworks. We stay updated with the latest industry trends and best practices."
              }
            },
            {
              "@type": "Question",
              name: "How do you ensure project quality and security?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We follow industry best practices including code reviews, automated testing, security audits, and compliance with standards. Our development process includes regular security assessments and performance monitoring to ensure high-quality, secure applications."
              }
            },
            {
              "@type": "Question",
              name: "Do you work with startups and enterprises?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we work with businesses of all sizes - from startups looking to build their first MVP to large enterprises needing complex, scalable solutions. We tailor our approach to meet your specific needs and budget."
              }
            },
            {
              "@type": "Question",
              name: "What is your development process?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our development process includes discovery, planning, design, development, testing, deployment, and maintenance phases. We use agile methodologies with regular client communication and iterative development to ensure the final product meets your requirements."
              }
            },
            {
              "@type": "Question",
              name: "Do you provide UI/UX design services?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we offer comprehensive UI/UX design services including user research, wireframing, prototyping, visual design, and design systems. Our design team creates intuitive, user-centered interfaces that enhance user experience and drive business results."
              }
            },
            {
              "@type": "Question",
              name: "Can you help with existing project maintenance?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely! We provide maintenance services for existing applications including code updates, performance optimization, security patches, feature additions, and technology migrations. We can work with any technology stack."
              }
            },
            {
              "@type": "Question",
              name: "What makes CoderLala different from other agencies?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We combine technical expertise with business understanding, offer end-to-end solutions, maintain transparent communication, and focus on long-term partnerships. Our team has experience across various industries and stays current with emerging technologies."
              }
            }
          ]
        }}
      />
      <div className=" grid gap-4">
        <Hero />
        <ServicesOverview />
        <Testimonials />
        <CTA />

      </div>
    </>
  );
}

