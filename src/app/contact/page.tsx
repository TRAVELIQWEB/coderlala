import type { Metadata } from "next";
import ContactContent from "./ContactContent";
import { FAQSchema } from "../components/structured-data";

export const metadata: Metadata = {
  title: "Contact Us | CoderLala Technologies - Get Your Project Quote",
  description: "Get in touch with CoderLala Technologies for project inquiries, consultations, and support. We respond within 24 hours. Located in Gurugram, India. Contact us for web development, mobile apps, and SaaS solutions.",
  keywords: [
    "contact CoderLala Technologies",
    "software development quote",
    "project inquiry",
    "technical consultation",
    "web development contact",
    "mobile app development quote",
    "SaaS development contact",
    "IT consulting India",
    "software development support",
    "get project estimate",
    "CoderLala contact details",
    "Gurugram software company"
  ],
  authors: [{ name: "CoderLala Technologies" }],
  creator: "CoderLala Technologies",
  publisher: "CoderLala Technologies",
  openGraph: {
    title: "Contact Us | CoderLala Technologies - Get Your Project Quote",
    description: "Get in touch with CoderLala Technologies for project inquiries and consultations. We respond within 24 hours. Located in Gurugram, India.",
    url: "https://coderlala.com/contact",
    siteName: "CoderLala Technologies",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/feature-images/og-images/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact CoderLala Technologies - Get Your Project Quote",
        type: "image/jpeg",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact CoderLala Technologies",
    description: "Get your project quote from India's leading software development company. We respond within 24 hours.",
    images: ["/images/feature-images/og-images/og-contact.jpg"],
    creator: "@coderlala",
    site: "@coderlala",
  },
  alternates: {
    canonical: "https://coderlala.com/contact",
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

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Elements */}
      {/* <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 
          bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 
          bg-gradient-to-tl from-orange-500/10 to-transparent blur-3xl rounded-full" />
      </div> */}

      {/* FAQ Schema for Contact Page */}
      <FAQSchema
        data={{
          mainEntity: [
            {
              "@type": "Question",
              name: "What's your typical response time?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We respond to all business inquiries within 24 hours. For urgent matters, please call our support line."
              }
            },
            {
              "@type": "Question",
              name: "Do you offer free consultations?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we offer free 30-minute strategy sessions to discuss your project requirements and explore how we can help you achieve your goals."
              }
            },
            {
              "@type": "Question",
              name: "What industries do you serve?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We serve startups, SaaS companies, Fintech, Healthcare, E-commerce, Education, Real Estate, and various other industries with tailored digital solutions."
              }
            },
            {
              "@type": "Question",
              name: "How do I get a project quote?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You can get a project quote by filling out our contact form, scheduling a consultation call, or emailing us directly with your project details and requirements."
              }
            },
            {
              "@type": "Question",
              name: "Do you work with international clients?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we work with clients worldwide. Our team handles different time zones effectively and communicates in English. We can accommodate various project management methodologies."
              }
            },
            {
              "@type": "Question",
              name: "What information should I provide for a project inquiry?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Please provide your project goals, target audience, preferred technologies, timeline, budget range, and any specific requirements or challenges you're facing."
              }
            }
          ]
        }}
      />

      <div className="max-w-7xl mx-auto px-4 py-20">
        <ContactContent />
      </div>
    </div>
  );
}
