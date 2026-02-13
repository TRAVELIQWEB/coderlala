import { ThemeProvider } from "@/app/components/theme-provider";
import Footer from "@/app/components/footer";
import GalaxyBackground from "@/app/components/galaxy-background";
import NavbarClientWrapper from "@/app/components/navbar-client-wrapper";
import Script from "next/script";
import 'react-quill/dist/quill.snow.css';
import "./globals.css";


export const metadata = {
    metadataBase: new URL("https://coderlala.com"),
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
        manifest: "/manifest.json",
    },
    verification: {
        google: '7dJiKc0vNEpuoWpOB6GCNYcPbnF80X5msZ6KcJClyOA',
    },
    title: {
        default:
            "CoderLala Technologies Private Limited | Next-Gen Digital Solutions",
        template: "%s | CoderLala Technologies Private Limited"
    },
    description:
        "Building next-generation web apps, mobile apps, SaaS platforms, AI-driven systems, and enterprise-grade cloud solutions.",
    keywords: [
        "web development",
        "app development",
        "SaaS",
        "cloud solutions",
        "AI systems",
        "digital transformation",
    ],
    authors: [{ name: "CoderLala Technologies" }],
    creator: "CoderLala Technologies",
    publisher: "CoderLala Technologies",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        siteName: "CoderLala Technologies Private Limited",
        type: "website",
    },
    alternates: {
        canonical: 'https://coderlala.com',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true },
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
        streetAddress: "Unit No.712, 7th Floor, JMD Megapolis, sector-48",
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
        <ThemeProvider>
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
            <main className="min-h-screen">{children}</main>
            <Footer />
        </ThemeProvider>
    );
}


