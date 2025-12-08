import "../../styles/globals.css"
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import GalaxyBackground from "./components/galaxy-background";

export const metadata = {
  title: "CoderLala Technologies Pvt. Ltd. | Next-Gen Digital Solutions",
  description: "Building next-generation web apps, mobile apps, SaaS platforms, AI-driven systems, and enterprise-grade cloud solutions with modern engineering excellence.",
  keywords: "web development, app development, SaaS, cloud solutions, AI systems, digital transformation",
  authors: [{ name: "CoderLala Technologies" }],
  openGraph: {
    title: "CoderLala Technologies Pvt. Ltd.",
    description: "Building next-generation digital solutions.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://coderlala.com" />
      </head>
      <body className="transition-colors duration-300">
        <ThemeProvider>
          {/* Enhanced Galaxy Starfield Background */}
          <GalaxyBackground />
          
          <Navbar />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}