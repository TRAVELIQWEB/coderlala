import { DefaultSeoProps } from "next-seo";

export const defaultSEO: DefaultSeoProps = {
  title: "CoderLala Technologies Pvt. Ltd.",
  description:
    "A modern software engineering company specializing in web apps, mobile apps, SaaS platforms, cloud deployments, and enterprise systems.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://coderlala.com",
    site_name: "CoderLala Technologies Pvt. Ltd.",
    images: [
      {
        url: "/images/og-banner.png",
        width: 1200,
        height: 630,
        alt: "CoderLala Technologies",
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
  },
};
