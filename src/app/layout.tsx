import { ContactFormProvider } from "@/context/ContactFormContext";
import "./globals.css";
import { ThemeProvider } from "@/app/components/theme-provider";
import GoogleAnalytics from "@/app/components/GoogleAnalytics";
import GoogleTagManager from "./components/GoogleTagManager";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider>
          <ContactFormProvider>
            <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
            {children}
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
          </ContactFormProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}