import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/",],
      // disallow: "/private/",
      // Example disallows if needed:
      disallow: ["/private"],
    },
    sitemap: "https://coderlala.com/sitemap.xml",
  };
}