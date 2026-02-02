import type { Metadata } from "next";
import CareersContent from "./CareersContent";
import { FAQSchema } from "../components/structured-data";

export const metadata: Metadata = {
  title: "Careers | CoderLala Technologies Gurugram Hiring",
  description: "Join CoderLala's team of innovators—designers, DevOps engineers, AI specialists. We're hiring developers for cutting-edge projects in Gurugram.",
  keywords: [
    "careers CoderLala Technologies",
    "software developer jobs India",
    "tech jobs Gurugram",
    "web developer careers",
    "mobile app developer jobs",
    "DevOps engineer positions",
    "AI ML engineer jobs",
    "UI UX designer careers",
    "software engineering jobs",
    "technology company careers",
    "startup jobs India",
    "remote tech jobs",
    "full stack developer jobs"
  ],
  openGraph: {
    title: "Careers | CoderLala Technologies Gurugram Hiring",
    description: "Join CoderLala's team of innovators—designers, DevOps engineers, AI specialists. We're hiring developers for cutting-edge projects in Gurugram.",
    url: "https://coderlala.com/careers",
    siteName: "CoderLala Technologies",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/feature-images/og-images/og-careers.jpg",
        width: 1200,
        height: 630,
        alt: "Careers at CoderLala Technologies - Join Our Tech Team",
        type: "image/jpeg",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | CoderLala Technologies Gurugram Hiring",
    description: "Join CoderLala's team of innovators—designers, DevOps engineers, AI specialists. We're hiring developers for cutting-edge projects in Gurugram.",
    images: ["/images/feature-images/og-images/og-careers.jpg"],
    creator: "@coderlala",
    site: "@coderlala",
  },
  alternates: {
    canonical: "https://coderlala.com/careers",
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

export default function CareersPage() {
  return (
    <div className="relative min-h-screen">

      {/* Background */}
      {/* <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 
            bg-linear-to-br from-blue-500/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 
            bg-gradient-to-tl from-orange-500/10 to-transparent blur-3xl rounded-full" />
      </div> */}

      {/* FAQ Schema for Careers Page */}
      <FAQSchema
        data={{
          mainEntity: [
            {
              "@type": "Question",
              name: "What positions are currently open at CoderLala?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We have openings for various technical roles including Full-Stack Developers, Frontend/Backend Engineers, DevOps Engineers, UI/UX Designers, Mobile App Developers, AI/ML Engineers, and Cloud Architects. Check our careers page for the latest openings."
              }
            },
            {
              "@type": "Question",
              name: "What is the work culture like at CoderLala?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We foster a collaborative, innovative culture where creativity and technical excellence are valued. Our team works on cutting-edge projects, enjoys work-life balance, continuous learning opportunities, and contributes to meaningful technological solutions."
              }
            },
            {
              "@type": "Question",
              name: "Do you offer remote work opportunities?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we offer flexible work arrangements including remote and hybrid options. Our team is distributed across different locations, and we use modern collaboration tools to ensure seamless communication and productivity."
              }
            },
            {
              "@type": "Question",
              name: "What technologies does CoderLala use?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We work with modern technologies including React, Next.js, Node.js, Python, TypeScript, AWS, Azure, Docker, Kubernetes, MongoDB, PostgreSQL, and various AI/ML frameworks. We encourage continuous learning and staying updated with industry trends."
              }
            },
            {
              "@type": "Question",
              name: "What benefits do you offer?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We offer competitive salaries, health benefits, professional development opportunities, flexible working hours, learning allowances, team outings, and a supportive work environment that promotes growth and innovation."
              }
            },
            {
              "@type": "Question",
              name: "How long does the hiring process take?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our hiring process typically takes 2-4 weeks and includes initial screening, technical interviews, coding assessments, and final discussions. We strive to provide timely feedback throughout the process."
              }
            },
            {
              "@type": "Question",
              name: "Do you hire fresh graduates?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we hire talented fresh graduates who demonstrate strong problem-solving skills, eagerness to learn, and passion for technology. We provide mentorship and training programs to help new team members grow."
              }
            },
            {
              "@type": "Question",
              name: "What opportunities for growth exist at CoderLala?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We offer career growth through challenging projects, skill development programs, conference attendance, certifications, leadership opportunities, and the chance to work on diverse technologies and industries."
              }
            }
          ]
        }}
      />

      <div className="max-w-7xl mx-auto px-4 py-20">
        <CareersContent />
      </div>
    </div>
  );
}
