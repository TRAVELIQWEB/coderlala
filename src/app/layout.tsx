import "../../styles/globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Footer from "./components/footer";
import GalaxyBackground from "./components/galaxy-background";
import NavbarClientWrapper from "./components/navbar-client-wrapper";
import GalaxyBackgroundNew from "./components/GalaxyBackgroundNew";

export const metadata = {
  metadataBase: new URL("https://coderlala.com"),
  title: "CoderLala Technologies Pvt. Ltd. | Next-Gen Digital Solutions",
  description:
    "Building next-generation web apps, mobile apps, SaaS platforms, AI-driven systems, and enterprise-grade cloud solutions with modern engineering excellence.",
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
    title: "CoderLala Technologies Pvt. Ltd.",
    description: "Building next-generation digital solutions.",
    url: "https://coderlala.com",
    siteName: "CoderLala Technologies",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CoderLala Technologies",
      },
    ],
  },
  alternates: {
    canonical: "https://coderlala.com",
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

        {/* JSON-LD Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CoderLala Technologies Pvt. Ltd.",
              url: "https://coderlala.com",
              logo: "https://coderlala.com/logo.png",
              description:
                "A modern tech company building SaaS platforms, mobile apps, cloud infrastructures, and AI-driven solutions.",
              sameAs: [
                "https://www.linkedin.com/company/coderlala",
                "https://github.com/coderlala",
              ],
            }),
          }}
        />

        {/* Breadcrumb Schema (Home Only) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://coderlala.com",
                },
              ],
            }),
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
