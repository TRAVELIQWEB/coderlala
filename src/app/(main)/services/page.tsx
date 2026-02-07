// app/services/page.tsx
import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";
import { FAQSchema } from "@/app/components/structured-data";

export const metadata: Metadata = {
  title: "CoderLala Services | Web, Mobile & AI Development",
  description: "Expert software development: web, mobile apps, SaaS platforms, AI/ML, cloud services, DevOps & enterprise solutions in Gurugram.",
  keywords: [
    "web development services",
    "mobile app development company",
    "SaaS development services",
    "AI ML development",
    "cloud solutions India",
    "DevOps services",
    "enterprise software development",
    "UI/UX design services",
    "custom software development",
    "backend development",
    "frontend development",
    "full stack development",
    "API development",
    "microservices architecture"
  ],
  openGraph: {
    title: "CoderLala Services | Web, Mobile & AI Development",
    description: "Expert software development: web, mobile apps, SaaS platforms, AI/ML, cloud services, DevOps & enterprise solutions in Gurugram.",
    url: "https://coderlala.com/services",
    siteName: "CoderLala Technologies",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/feature-images/og-images/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "CoderLala Technologies Services - Web, Mobile, Cloud & AI Solutions",
        type: "image/jpeg",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | CoderLala Technologies",
    description: "Expert software development: web, mobile apps, SaaS platforms, AI/ML, cloud services, DevOps & enterprise solutions in Gurugram.",
    images: ["/images/feature-images/og-images/og-services.jpg"],
    creator: "@coderlala",
    site: "@coderlala",
  },
  alternates: {
    canonical: "https://coderlala.com/services",
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

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Elements (unchanged) */}
      {/* <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-linear-to-br from-blue-500/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-orange-500/10 to-transparent blur-3xl rounded-full" />
      </div> */}

      {/* FAQ Schema for Services Page */}
      <FAQSchema
        data={{
          mainEntity: [
            {
              "@type": "Question",
              name: "What web development services do you offer?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We offer full-stack web development including React/Next.js applications, custom web platforms, e-commerce solutions, progressive web apps (PWAs), and SEO-optimized websites with modern performance standards."
              }
            },
            {
              "@type": "Question",
              name: "Do you develop both iOS and Android apps?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we develop cross-platform mobile applications using React Native that work seamlessly on both iOS and Android. We also offer native development when specific platform features are required."
              }
            },
            {
              "@type": "Question",
              name: "What does your SaaS development process include?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our SaaS development includes multi-tenant architecture, subscription billing integration, user management systems, analytics dashboards, API development, and scalable cloud infrastructure deployment."
              }
            },
            {
              "@type": "Question",
              name: "Can you help with cloud migration and DevOps?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely! We provide comprehensive cloud migration services, DevOps setup with CI/CD pipelines, containerization with Docker/Kubernetes, monitoring solutions, and infrastructure automation across AWS, Azure, and Google Cloud."
              }
            },
            {
              "@type": "Question",
              name: "What AI and machine learning services do you offer?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We offer AI/ML solutions including natural language processing, computer vision applications, predictive analytics, recommendation systems, automated data processing, and custom AI model development."
              }
            },
            {
              "@type": "Question",
              name: "Do you provide UI/UX design services?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, our UI/UX design services include user research, wireframing, interactive prototyping, visual design, design system creation, and usability testing to ensure exceptional user experiences."
              }
            }
          ]
        }}
      />

      <div className="max-w-7xl mx-auto px-4 py-20">
        <ServicesContent />
      </div>
    </div>
  );
}

