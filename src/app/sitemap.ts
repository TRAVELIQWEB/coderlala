import type { MetadataRoute } from "next";

const baseUrl = "https://coderlala.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Main pages
    {
      url: baseUrl,
      lastModified: new Date("2026-08-08"),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-08-08"),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date("2026-08-08"),
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date("2026-08-08"),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2026-08-08"),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-08-08"),
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date("2026-08-08"),
    },

    // Service pages
    {
      url: `${baseUrl}/services/web-development-company-gurgaon`,
      lastModified: new Date("2026-08-08"),
    },
    {
      url: `${baseUrl}/services/ai-ml-solutions-gurgaon`,
      lastModified: new Date("2026-08-08"),
    },
    {
      url: `${baseUrl}/services/mobile-app-development-gurgaon`,
      lastModified: new Date("2026-08-08"),
    },
    {
      url: `${baseUrl}/services/saas-platform-development-gurgaon`,
      lastModified: new Date("2026-08-08"),
    },
    {
      url: `${baseUrl}/services/ui-ux-design-gurgaon`,
      lastModified: new Date("2026-08-08"),
    },
    {
      url: `${baseUrl}/services/cloud-devops-gurgaon`,
      lastModified: new Date("2026-08-08"),
    },
    {
      url: `${baseUrl}/services/backend-api-development-gurgaon`,
      lastModified: new Date("2026-08-08"),
    },
    {
      url: `${baseUrl}/services/enterprise-software-gurgaon`,
      lastModified: new Date("2026-08-08"),
    },
    {
      url: `${baseUrl}/services/travel-portal-development-gurgaon`,
      lastModified: new Date("2026-08-08"),
    },
  ];
}