// app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Disallow sensitive/admin areas
      disallow: [
        "/api/",
        "/admin/",
        "/user/",
        "/_next/",
        "/private/",
        "/dashboard/",
        "/temp/",
        "/test/",
      ],
    },
    sitemap: "https://coderlala.com/sitemap.xml",
  };
}