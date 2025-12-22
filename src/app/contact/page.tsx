import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | CoderLala Technologies",
  description:
    "Get in touch with CoderLala Technologies for project inquiries, consultations, meetings, and technical support. We respond to all business inquiries within 24 hours.",
  keywords: [
    "contact CoderLala",
    "get quote",
    "project inquiry",
    "technical support",
    "consultation",
  ],
  openGraph: {
    title: "Contact Us | CoderLala Technologies",
    description:
      "Get in touch with CoderLala Technologies for project inquiries, consultations, meetings, and technical support. We respond to all business inquiries within 24 hours.",
    url: "https://coderlala.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | CoderLala Technologies",
    description:
      "Get in touch with CoderLala Technologies for project inquiries, consultations, meetings, and technical support. We respond to all business inquiries within 24 hours.",
  },
  alternates: {
    canonical: "https://coderlala.com/contact",
  },
  robots: {
    index: true,
    follow: true,
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

      <div className="max-w-7xl mx-auto px-4 py-20">
        <ContactContent />
      </div>
    </div>
  );
}
