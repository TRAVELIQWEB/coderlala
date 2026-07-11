import Footer from "@/app/components/footer";
import GalaxyBackground from "@/app/components/galaxy-background";
import NavbarClientWrapper from "@/app/components/navbar-client-wrapper";
import Script from "next/script";
import 'react-quill/dist/quill.snow.css';
import "./globals.css";
import "@/app/globals.css";
import { contactInfo } from "@/data/ContactInfo";
import WhatsAppButton from "@/components/WhatsAppButton";


export const metadata = {
    metadataBase: new URL("https://coderlala.com"),
    manifest: "/manifest.json",
    referrer: "origin-when-cross-origin",
    classification: "Software Development Company",
    category: "Technology",

    icons: {
        icon: [
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
            { url: "/favicon.svg", type: "image/svg+xml" }
        ],
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
        other: [
            {
                rel: "icon",
                url: "/favicon.svg",
                type: "image/svg+xml",
            },
        ],
    },
    verification: {
        google: '7dJiKc0vNEpuoWpOB6GCNYcPbnF80X5msZ6KcJClyOA',
    },
    title: {
        default:
            "CoderLala Technologies Private Limited | Next-Gen Digital Solutions",
        template: "%s | CoderLala Technologies Private Limited"
    },
    description: "Building next-generation web apps, mobile apps, SaaS platforms, AI-driven systems, and enterprise-grade cloud solutions.",
    applicationName: "CoderLala",
    keywords: [
        "CoderLala Technologies",
        "Software Development Company",
        "Custom Software Development",
        "Web Development Company",
        "Mobile App Development",
        "Enterprise Software Development",
        "SaaS Development Company",
        "AI Development Company",
        "Cloud Solutions",
        "Digital Transformation",
        "API Development",
        "UI UX Design",
        "Next.js Development",
        "React Development",
        "Node.js Development",
        "Full Stack Development",
        "Business Automation",
        "CRM Development",
        "ERP Development",
        "Technology Consulting",
    ],
    authors: [{
        name: "CoderLala Technologies", url: "https://coderlala.com",
    }],
    creator: "CoderLala Technologies",
    publisher: "CoderLala Technologies",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://coderlala.com",
        siteName: "CoderLala Technologies Private Limited",
        title: "CoderLala Technologies Private Limited",
        description:
            "Building next-generation web apps, mobile apps, SaaS platforms, AI-driven systems.",
        images: [
            {
                url: "/images/og-banner.png",
                width: 1200,
                height: 630,
                alt: "CoderLala Technologies Private Limited",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "CoderLala Technologies Private Limited",
        description:
            "Building next-generation web apps, mobile apps, SaaS platforms, AI-driven systems, and enterprise cloud solutions.",
        images: ["/images/og-banner.png"],
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

    appleWebApp: {
        capable: true,
        title: "CoderLala",
        statusBarStyle: "default",
    },
};

// Structured data for SEO
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.wikidata.org/wiki/Q137691754",
    name: "CoderLala Technologies Pvt. Ltd.",
    url: "https://coderlala.com",
    logo: "https://www.coderlala.com/images/og-banner.png",
    description: "A modern tech company building SaaS platforms, mobile apps, cloud infrastructures, and AI-driven solutions.",
    founder: {
        "@type": "Person",
        "@id": "https://www.wikidata.org/wiki/Q137691662",
        name: "Salman Nizam"
    },
    sameAs: [
        "https://www.wikidata.org/wiki/Q137691754",
        "https://www.linkedin.com/company/coderlala",
        "https://github.com/coderlala"
    ],
};

const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CoderLala Technologies Pvt. Ltd.",
    url: "https://coderlala.com",
    description: "Building next-generation digital solutions.",
    publisher: {
        "@type": "Organization",
        "@id": "https://www.wikidata.org/wiki/Q137691754",
        name: "CoderLala Technologies Pvt. Ltd."
    },
    potentialAction: {
        "@type": "SearchAction",
        target: "https://coderlala.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
    }
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "CoderLala Technologies Pvt. Ltd.",
    address: {
        "@type": "PostalAddress",
        streetAddress: contactInfo.streetAddress,
        addressLocality: "Gurgaon",
        addressRegion: "Haryana",
        postalCode: "122018",
        addressCountry: "IN"
    },
    url: "https://coderlala.com",
    email: "info@coderlala.com",
    openingHours: "Mo-Fr 09:00-18:00, Sa 10:00-16:00"
};

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* Structured Data Scripts */}
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <Script
                id="website-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <Script
                id="local-business-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />

            <div className="fixed inset-0 -z-20">
                <GalaxyBackground />
            </div>
            <NavbarClientWrapper />
            <main className="min-h-screen">{children}
                <WhatsAppButton
                    phoneNumber={`${contactInfo.salmanNizamPhone}`} // Replace with your actual phone number
                    message="Hi, I'm interested in your services!" // Optional custom message
                    position="bottom-right" // or "bottom-left"
                    showPopup={true}
                    popupMessage="Need help? Chat with us!" // Optional custom popup message
                />
            </main>
            <Footer />
        </>
    );
}


