import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://coderlala.com";
  const now = new Date().toISOString();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Service pages
    {
      url: `${baseUrl}/services/web-development-company-gurgaon`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/ai-ml-solutions-gurgaon`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/mobile-app-development-gurgaon`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/saas-platform-development-gurgaon`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/ui-ux-design-gurgaon`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/cloud-devops-gurgaon`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/backend-api-development-gurgaon`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/enterprise-software-gurgaon`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/travel-portal-development-gurgaon`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    
  ];
}
