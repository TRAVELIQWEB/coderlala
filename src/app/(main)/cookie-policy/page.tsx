import CookiePolicyContent from './CookiePolicyContent'
import type { Metadata } from "next";
import { FAQSchema } from "@/app/components/structured-data";

export const metadata: Metadata = {
  title: "Cookie Policy | CoderLala Technologies",
  description: "Learn how CoderLala Technologies uses cookies to enhance browsing, personalize content & analyze usage. Manage your cookie preferences anytime.",
  keywords: [
    "cookie policy CoderLala",
    "cookie usage policy",
    "privacy settings",
    "cookie consent",
    "tracking cookies",
    "website cookies",
    "cookie preferences",
    "data privacy cookies",
    "cookie management",
    "browser cookies",
    "third party cookies",
    "cookie settings"
  ],
  openGraph: {
    title: "Cookie Policy | CoderLala Technologies",
    description: "Learn how CoderLala Technologies uses cookies to enhance browsing, personalize content & analyze usage. Manage your cookie preferences anytime.",
    url: "https://coderlala.com/cookie-policy",
    siteName: "CoderLala Technologies",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/feature-images/og-images/og-cookies.jpg",
        width: 1200,
        height: 630,
        alt: "Cookie Policy - CoderLala Technologies",
        type: "image/jpeg",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy | CoderLala Technologies",
    description: "Learn how CoderLala Technologies uses cookies to enhance browsing, personalize content & analyze usage. Manage your cookie preferences anytime.",
    images: ["/images/feature-images/og-images/og-cookies.jpg"],
    creator: "@coderlala",
    site: "@coderlala",
  },
  alternates: {
    canonical: "https://coderlala.com/cookie-policy",
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="relative min-h-screen">
      {/* FAQ Schema for Cookie Policy Page */}
      <FAQSchema
        data={{
          mainEntity: [
            {
              "@type": "Question",
              name: "What are cookies and how does CoderLala use them?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Cookies are small text files stored on your device. CoderLala uses cookies to enhance your browsing experience, remember your preferences, analyze site usage, and provide personalized content."
              }
            },
            {
              "@type": "Question",
              name: "What types of cookies does CoderLala use?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We use essential cookies for website functionality, analytics cookies to understand usage patterns, functional cookies to remember preferences, and marketing cookies to show relevant content and advertisements."
              }
            },
            {
              "@type": "Question",
              name: "How can I control or disable cookies?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You can control cookies through your browser settings, opt-out of non-essential cookies using our cookie preference center, or use browser extensions that block cookies. Note that disabling essential cookies may affect website functionality."
              }
            },
            {
              "@type": "Question",
              name: "Does CoderLala use third-party cookies?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we use third-party services like Google Analytics for website analytics and performance monitoring. These services have their own privacy policies and cookie practices."
              }
            },
            {
              "@type": "Question",
              name: "How long do cookies stay on my device?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Session cookies are deleted when you close your browser, while persistent cookies remain until they expire or are deleted. Essential cookies typically last longer to maintain your preferences and login status."
              }
            },
            {
              "@type": "Question",
              name: "Can I withdraw my consent for non-essential cookies?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, you can withdraw consent at any time by adjusting your cookie preferences through our cookie banner, browser settings, or by contacting us. Withdrawing consent will not affect the lawfulness of processing before withdrawal."
              }
            },
            {
              "@type": "Question",
              name: "How does CoderLala protect my privacy with cookies?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We follow privacy-by-design principles, minimize data collection, use secure transmission methods, and comply with applicable privacy laws. Cookie data is used only for legitimate business purposes."
              }
            }
          ]
        }}
      />

      <div className="max-w-7xl mx-auto px-4 py-20">
        <CookiePolicyContent />
      </div>
    </div>
  )
}

