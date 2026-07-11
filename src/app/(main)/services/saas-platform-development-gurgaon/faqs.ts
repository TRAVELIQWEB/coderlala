import { contactInfo } from "@/data/ContactInfo";

// app/saas-platform-development-gurgaon/faqs.ts
export interface FAQItem {
  q: string;
  a: string;
}

// Base FAQ template with dynamic location
export function generateFAQs(city: string): FAQItem[] {
  return [
    {
      q: `What makes CoderLala the best SaaS platform development company in ${city}?`,
      a: `CoderLala stands out as a premier SaaS platform development company in ${city} due to our expertise in cloud-native technologies, microservices architecture, and enterprise-grade security. We combine technical excellence with local presence, delivering scalable SaaS solutions with personalized attention. Our prime location in JMD Megapolis, Sector 48, allows us to serve ${city} businesses with rapid response times and in-person consultations.`
    },
    {
      q: `How long does SaaS platform development take with your ${city} team?`,
      a: `A high-performance SaaS platform typically takes 16 to 24 weeks from discovery to deployment. We work in 2-week agile sprints with regular demos and beta releases so you can test and provide feedback throughout the development process. As a local SaaS development company in ${city}, we offer faster turnaround times through close collaboration.`
    },
    {
      q: `What is the cost of SaaS platform development services in ${city}?`,
      a: `Pricing depends on platform complexity, features, user management, integrations, and scalability requirements. Standard SaaS platforms range between ₹5,00,000 to ₹15,00,000, while complex enterprise platforms with advanced features can range higher. We provide transparent quotes as a trusted SaaS development agency in ${city}. Contact us for a detailed, no-obligation estimate.`
    },
    {
      q: `Do you offer ongoing maintenance for SaaS platforms developed in ${city}?`,
      a: `Absolutely! Comprehensive post-launch SLA support including 24/7 server monitoring, performance optimization, security updates, feature enhancements, and scalability management. Our local team is always available for your business needs.`
    },
    {
      q: `Can we meet your SaaS development team in ${city}?`,
      a: `Yes! Our office is located at ${contactInfo.websiteAddress}. We welcome in-person discovery workshops, strategic planning meetings, and design review sessions at our office or your ${city} headquarters.`
    },
    {
      q: `What technologies do you use as a SaaS platform development company in ${city}?`,
      a: `We primarily use modern technologies like React, Node.js, Python, AWS, Kubernetes, Docker, and microservices architecture for robust and scalable SaaS platforms. We also work with PostgreSQL, MongoDB, Redis, and various other tools. Our tech stack ensures high-performance solutions for ${city} businesses.`
    },
    {
      q: `Do you develop B2B SaaS platforms for ${city} businesses?`,
      a: `Yes! We build secure and scalable B2B SaaS platforms with features like team collaboration, role-based access, advanced analytics, and integration with existing business systems. We're a preferred B2B SaaS development company in ${city}.`
    },
    {
      q: `Can you integrate with our existing business systems?`,
      a: `Yes, we specialize in seamless integrations with existing systems and third-party platforms through robust APIs and webhooks. Our team will work with your IT department to ensure smooth integration, minimal disruption, and complete data consistency.`
    },
    {
      q: `Do you provide UI/UX design services for SaaS platforms in ${city}?`,
      a: `Yes, we provide comprehensive UI/UX design services, focusing on creating intuitive, engaging, and user-friendly SaaS interfaces. Our design process involves user research, wireframing, prototyping, and usability testing.`
    },
    {
      q: `What is your approach to SaaS platform security?`,
      a: `We implement a comprehensive security framework including HTTPS enforcement, data encryption, secure authentication, API security, regular security audits, and compliance with industry standards. Security is embedded throughout our development lifecycle.`
    },
    {
      q: `What is your contact information for ${city}?`,
      a: `You can reach us at +91 ${contactInfo.salmanNizamPhone} or visit our office at ${contactInfo.websiteAddress}. Our business hours are typically until 7:30 PM. For any inquiries, you can also contact us via email or through our website.`
    },
    {
      q: `Do you build multi-tenant SaaS platforms?`,
      a: `Yes, we specialize in building multi-tenant SaaS platforms with isolated tenant environments, custom branding, and tenant-specific configurations. Our architecture ensures data isolation, scalability, and efficient resource utilization.`
    },
    {
      q: `How do you handle API development for SaaS platforms?`,
      a: `We design and develop robust RESTful and GraphQL APIs with comprehensive documentation, authentication, rate limiting, and error handling. Our APIs are built to scale and integrate smoothly with your frontend, third-party services, and partner systems.`
    },
    {
      q: `Do you offer cloud hosting setup and optimization for SaaS platforms?`,
      a: `Yes, we provide cloud hosting setup and optimization on platforms like AWS, Google Cloud, and Azure. We configure auto-scaling, load balancing, CDN integration, caching strategies, and environment management to ensure your platform performs reliably.`
    },
    {
      q: `Can you build custom dashboards and admin panels for SaaS platforms?`,
      a: `Absolutely. We build custom admin dashboards with role-based access, real-time data visualization, user management, analytics tracking, and content moderation tools. Our dashboards are tailored to your business workflows, enabling efficient management of your ${city} operations.`
    },
    {
      q: `Do you provide code review and audit services for SaaS platforms?`,
      a: `Yes, we offer code review, performance audit, and security assessment services for existing SaaS platforms. Our team analyzes your codebase for best practices, security vulnerabilities, performance bottlenecks, and scalability issues, providing actionable recommendations and remediation support.`
    },
    {
      q: `Can you develop real-time SaaS applications with WebSockets?`,
      a: `Yes, we build real-time SaaS applications using WebSockets for use cases like live chat, notifications, collaborative tools, and live data feeds. We implement robust real-time architectures to ensure low-latency and reliable bidirectional communication.`
    },
    {
      q: `What is your approach to database design for SaaS platforms?`,
      a: `Our database design approach focuses on data integrity, query performance, and scalability. We use PostgreSQL, MySQL, MongoDB, and Redis strategically, implementing indexing, query optimization, connection pooling, and replication strategies to ensure your platform performs optimally as it grows.`
    },
    {
      q: `Do you provide automated testing for SaaS platforms?`,
      a: `Yes, we implement comprehensive automated testing strategies including unit tests, integration tests, end-to-end tests, and visual regression testing. We use tools like Jest, Playwright, and Cypress to ensure your platform is stable and bug-free before deployment.`
    },
    {
      q: `What is your CI/CD pipeline setup process for SaaS platforms?`,
      a: `We set up CI/CD pipelines using GitHub Actions, GitLab CI, or Jenkins to automate the build, test, and deployment processes. This ensures consistent and reliable deployments, rapid rollbacks, and zero-downtime production releases.`
    },
    {
      q: `Do you develop subscription-based SaaS platforms with recurring billing?`,
      a: `Yes, we specialize in building subscription-based SaaS platforms with recurring billing, subscription management, payment gateway integration, and customer portal functionality. We support models like freemium, tiered pricing, and usage-based billing.`
    },
    {
      q: `Can you build SaaS platforms with offline functionality?`,
      a: `Yes, we leverage service workers, IndexedDB, and caching strategies to build SaaS platforms with offline functionality. This allows users in ${city} to access critical data and perform key actions even without an internet connection, with automatic synchronization when connectivity is restored.`
    },
    {
      q: `What is your approach to microservices architecture for SaaS platforms?`,
      a: `We design and develop microservices architectures using Docker, Kubernetes, and API gateways. Our approach ensures loose coupling, independent scaling, fault isolation, and technology diversity, enabling your ${city} business to evolve and scale specific services independently.`
    },
    {
      q: `Do you offer serverless application development for SaaS platforms?`,
      a: `Yes, we develop serverless applications using AWS Lambda, Google Cloud Functions, and Azure Functions. Serverless architecture helps your ${city} business reduce operational overhead, scale automatically, and optimize costs.`
    },
    {
      q: `Can you implement payment gateway solutions in SaaS platforms?`,
      a: `Absolutely. We integrate with major payment gateways including Stripe, Razorpay, PayPal, and PayU. We handle secure payment processing, subscription billing, refund workflows, transaction notifications, and PCI compliance to ensure a safe and seamless checkout experience.`
    },
    {
      q: `Do you provide SaaS platform performance optimization services?`,
      a: `Yes, we optimize SaaS platform performance through code splitting, image optimization, lazy loading, caching strategies, and database optimization. We ensure your platform delivers excellent performance and user experience.`
    },
    {
      q: `What is your data migration and system upgrade process for SaaS platforms?`,
      a: `Our data migration and system upgrade process includes comprehensive planning, data mapping, validation, backup strategy, phased rollouts, and rollback procedures. We minimize downtime and data integrity risks, ensuring a smooth transition while maintaining business continuity.`
    },
    {
      q: `Do you offer consultation and technology advisory services for SaaS platforms?`,
      a: `Yes, we provide technology advisory services including architecture review, technology stack selection, scalability assessment, and digital transformation strategy. Our consultants help ${city} businesses make informed technology decisions that align with their long-term business goals.`
    },
    {
      q: `Can you build analytics dashboards and reporting tools for SaaS platforms?`,
      a: `Absolutely. We build custom analytics dashboards with real-time data visualization, KPI monitoring, custom reports, and interactive charts. Using tools like Chart.js, D3.js, and Metabase, we help ${city} businesses gain actionable insights from their data.`
    },
    {
      q: `Do you implement social login and OAuth authentication in SaaS platforms?`,
      a: `Yes, we implement social login and OAuth authentication using providers like Google, Facebook, LinkedIn, and GitHub. We also support enterprise authentication through SAML and LDAP, providing a secure and convenient user authentication experience.`
    },
    {
      q: `What is your approach to technical documentation for SaaS platforms?`,
      a: `We provide comprehensive technical documentation including API documentation, code comments, architecture diagrams, deployment guides, and end-user manuals. Our documentation follows industry standards, making it easy for your team to maintain and extend the platform.`
    },
    {
      q: `Do you offer knowledge transfer and team training for SaaS platforms?`,
      a: `Yes, we provide thorough knowledge transfer sessions and team training as part of our delivery process. We conduct workshops, provide documentation, and work alongside your internal teams to ensure they are comfortable maintaining and evolving the platform after launch.`
    },
    {
      q: `How do you handle project communication and reporting for SaaS projects?`,
      a: `We maintain transparent communication through daily standups, weekly progress reports, sprint demos, and real-time project tracking tools. Our project management approach keeps you informed at every stage, with clear visibility into milestones, deliverables, and timelines.`
    }
  ];
}

// Helper function to generate FAQ Schema
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}