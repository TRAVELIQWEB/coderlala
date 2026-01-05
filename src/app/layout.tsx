import "../../styles/globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Footer from "./components/footer";
import GalaxyBackground from "./components/galaxy-background";
import NavbarClientWrapper from "./components/navbar-client-wrapper";
import GalaxyBackgroundNew from "./components/GalaxyBackgroundNew";
import {
  OrganizationSchema,
  WebSiteSchema,
  LocalBusinessSchema,
  ContactPointSchema,
  BreadcrumbSchema
} from "./components/structured-data";

export const metadata = {
  metadataBase: new URL("https://coderlala.com"),
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
  openGraph: {
    siteName: "CoderLala Technologies Private Limited",
    type: "website",
  },
  alternates: {
    canonical: './', // current pathname becomes canonical
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://coderlala.com" />

        {/* Structured Data Components */}

        <OrganizationSchema
          data={{
            "@id": "https://www.wikidata.org/wiki/Q137691754", // Coderlala Wikidata Q-code
            name: "CoderLala Technologies Pvt. Ltd.",
            url: "https://coderlala.com",
            logo: "https://www.coderlala.com/images/og-banner.png",
            description:
              "A modern tech company building SaaS platforms, mobile apps, cloud infrastructures, and AI-driven solutions.",
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
          }}
        />


        <WebSiteSchema
          data={{
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
          }}
        />

        <LocalBusinessSchema
          data={{
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
            email: "salman.nizam@coderlala.com",
            openingHours: "Mo-Fr 09:00-18:00, Sa 10:00-16:00"
          }}
        />

        <ContactPointSchema
          data={{
            contactType: "customer service",
            email: "salman.nizam@coderlala.com",
            availableLanguage: "English"
          }}
        />

        <BreadcrumbSchema
          data={{
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://coderlala.com",
              },
            ],
          }}
        />
      </head>

      <body className="transition-colors duration-300">
        <ThemeProvider>

          <div className="fixed inset-0 -z-20">
            <GalaxyBackground />
            {/* <GalaxyBackgroundNew /> */}
          </div>
          <NavbarClientWrapper />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
