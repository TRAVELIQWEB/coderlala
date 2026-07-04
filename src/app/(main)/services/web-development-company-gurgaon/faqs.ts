// app/config/faqs.ts

export interface FAQItem {
  q: string;
  a: string;
}

// Base FAQ template with dynamic location
export function generateFAQs(city: string): FAQItem[] {
  return [
    {
      q: `What makes CoderLala the best web development company in ${city}?`,
      a: `CoderLala stands out as a premier web development company in ${city} due to our expertise in cutting-edge technologies like Next.js, React, and Node.js. We combine technical excellence with local presence, delivering enterprise-grade solutions with personalized attention. Our prime location in JMD Megapolis, Sector 48, allows us to serve ${city} businesses with rapid response times and in-person consultations.`
    },
    {
      q: `How long does web development take with your ${city} team?`,
      a: `A high-performance custom web application typically takes 8 to 12 weeks from discovery to deployment. We work in 2-week agile sprints with staging URLs so you can watch your project come to life in real-time. As a local web development company in ${city}, we offer faster turnaround times through close collaboration.`
    },
    {
      q: `What is the cost of web development services in ${city}?`,
      a: `Pricing depends on project scope, features, and integrations. Standard professional business sites range between ₹2,00,000 to ₹5,00,000, while complex SaaS platforms and enterprise PWAs can range higher. We provide transparent quotes as a trusted web development agency in ${city}. Contact us for a detailed, no-obligation estimate.`
    },
    {
      q: `Do you offer ongoing maintenance for websites developed in ${city}?`,
      a: `Absolutely! Comprehensive post-launch SLA support including 24/7 server monitoring, performance audits, core updates, weekly backups, and quick-turnaround content changes. Our local team is always available for your business needs.`
    },
    {
      q: `Can we meet your web development team in ${city}?`,
      a: `Yes! Our office is located at Unit No. 712, 7th Floor, JMD Megapolis, Sector 48, Gurugram, Haryana 122018. We welcome in-person discovery workshops, strategic planning meetings, and design review sessions at our office or your ${city} headquarters.`
    },
    {
      q: `What technologies do you use as a web development company in ${city}?`,
      a: `We primarily use modern technologies like Next.js, React, Node.js, and PostgreSQL for robust and scalable web applications. We also work with Python, AWS, Docker, MongoDB, and various CMS platforms like WordPress and Strapi. Our tech stack ensures high-performance solutions for ${city} businesses.`
    },
    {
      q: `Do you develop e-commerce websites for ${city} businesses?`,
      a: `Yes! We build secure and scalable e-commerce solutions with features like payment gateway integration, inventory management, order tracking, customer accounts, and personalized shopping experiences. We're a preferred e-commerce web development company in ${city}.`
    },
    {
      q: `Can you integrate with our existing business systems?`,
      a: `Yes, we specialize in seamless integrations with existing systems and third-party platforms. Our team will work with your IT department to ensure smooth integration, minimal disruption, and complete data consistency.`
    },
    {
      q: `Do you provide responsive web design for ${city} clients?`,
      a: `Yes, all our websites are built with a mobile-first approach, ensuring they are fully responsive and provide an optimal viewing experience across all devices, from desktops to smartphones. This is standard practice for every web development company in ${city}.`
    },
    {
      q: `What is your approach to SEO for websites you develop?`,
      a: `We integrate technical SEO best practices from the ground up, including semantic HTML, fast loading times, mobile-friendliness, proper metadata, and structured data. Our focus is on building a solid technical foundation — we do not offer off-page SEO or digital marketing services, but we ensure your site is fully optimized for search engines to index and rank effectively.`
    },
    {
      q: `What is a Progressive Web App (PWA) and do you develop them?`,
      a: `A PWA is a web application that offers an experience similar to a native mobile app, including offline access, push notifications, and installability. Yes, we specialize in developing high-performance PWAs for ${city} businesses.`
    },
    {
      q: `How do you ensure data privacy and compliance for ${city} clients?`,
      a: `Data privacy and compliance (e.g., GDPR, HIPAA) are integral to our development process. We implement robust security measures, conduct regular audits, and adhere to industry best practices to protect sensitive data.`
    },
    {
      q: `Do you work with startups in ${city}?`,
      a: `Absolutely! We are passionate about helping startups and small businesses in ${city} bring their ideas to life with innovative and cost-effective web development solutions that drive growth and success.`
    },
    {
      q: `What makes CoderLala different from other web development companies in ${city}?`,
      a: `Our unique blend of cutting-edge technology expertise (Next.js, React, Node.js), agile development methodology, prime location in JMD Megapolis, Sector 48, and unwavering commitment to client success sets us apart. We focus on delivering measurable business outcomes for ${city} businesses.`
    },
    {
      q: `Do you offer UI/UX design services for ${city} clients?`,
      a: `Yes, we provide comprehensive UI/UX design services, focusing on creating intuitive, engaging, and user-friendly interfaces. Our design process involves user research, wireframing, prototyping, and usability testing.`
    },
    {
      q: `What is your contact information for ${city}?`,
      a: `You can reach us at +91 78308 36770 or visit our office at Unit No. 712, 7th Floor, JMD Megapolis, Sector 48, Gurugram, Haryana 122018. Our business hours are typically until 7:30 PM. For any inquiries, you can also contact us via email or through our website.`
    },
    {
      q: `Do you build mobile-first web applications for ${city} businesses?`,
      a: `Yes, we build mobile-first web applications with responsive design as our baseline standard. We prioritize touch-friendly navigation, optimized media delivery, and intuitive mobile interfaces that ensure your ${city} customers have a seamless experience on smartphones and tablets.`
    },
    {
      q: `How do you handle API development and integration?`,
      a: `We design and develop robust RESTful and GraphQL APIs with comprehensive documentation, authentication, rate limiting, and error handling. Our APIs are built to scale and integrate smoothly with your frontend, third-party services, and partner systems, ensuring future-ready connectivity.`
    },
    {
      q: `Do you offer cloud hosting setup and optimization?`,
      a: `Yes, we provide cloud hosting setup and optimization on platforms like AWS, Google Cloud, and Vercel. We configure auto-scaling, load balancing, CDN integration, caching strategies, and environment management to ensure your application runs fast and reliably under any traffic condition.`
    },
    {
      q: `Can you build custom dashboards and admin panels?`,
      a: `Absolutely. We build custom admin dashboards with role-based access, real-time data visualization, user management, analytics tracking, and content moderation tools. Our dashboards are tailored to your business workflows, enabling efficient management of your ${city} operations.`
    },
    {
      q: `Do you provide code review and audit services?`,
      a: `Yes, we offer code review, performance audit, and security assessment services for existing applications. Our team analyzes your codebase for best practices, security vulnerabilities, performance bottlenecks, and scalability issues, providing actionable recommendations and remediation support.`
    },
    {
      q: `Can you develop real-time applications with WebSockets?`,
      a: `Yes, we build real-time applications using WebSockets for use cases like live chat, notifications, collaborative tools, and live data feeds. We implement robust real-time architectures using Socket.io or native WebSocket protocols to ensure low-latency and reliable bidirectional communication.`
    },
    {
      q: `What is your approach to database design and optimization?`,
      a: `Our database design approach focuses on data integrity, query performance, and scalability. We use PostgreSQL, MySQL, MongoDB, and Redis strategically, implementing indexing, query optimization, connection pooling, and replication strategies to ensure your application performs optimally as it grows.`
    },
    {
      q: `Can you build multilingual websites for ${city} clients?`,
      a: `Yes, we build multilingual websites with internationalization (i18n) support, allowing your ${city} business to reach diverse audiences. We implement language switching, right-to-left (RTL) layout support, localized content management, and region-specific SEO for enhanced global reach.`
    },
    {
      q: `Do you provide automated testing for web applications?`,
      a: `Yes, we implement comprehensive automated testing strategies including unit tests, integration tests, end-to-end tests, and visual regression testing. We use tools like Jest, Playwright, Cypress, and Testing Library to ensure your application is stable and bug-free before deployment.`
    },
    {
      q: `What is your CI/CD pipeline setup process?`,
      a: `We set up CI/CD pipelines using GitHub Actions, GitLab CI, or Jenkins to automate the build, test, and deployment processes. This ensures consistent and reliable deployments, rapid rollbacks, staging environment validation, and zero-downtime production releases for your ${city} projects.`
    },
    {
      q: `Do you develop subscription-based and membership web applications?`,
      a: `Yes, we specialize in building subscription-based platforms with recurring billing, membership tiers, subscription management, payment gateway integration, and customer portal functionality. We support models like freemium, paid memberships, and usage-based billing for ${city} businesses.`
    },
    {
      q: `Can you build web applications with offline functionality?`,
      a: `Yes, we leverage Service Workers, IndexedDB, and Cache API to build web applications with offline functionality. This allows users in ${city} to access critical data and perform key actions even without an internet connection, with automatic synchronization when connectivity is restored.`
    },
    {
      q: `What is your approach to microservices architecture?`,
      a: `We design and develop microservices architectures using Docker, Kubernetes, and API gateways. Our approach ensures loose coupling, independent scaling, fault isolation, and technology diversity, enabling your ${city} business to evolve and scale specific services independently.`
    },
    {
      q: `Do you offer serverless application development?`,
      a: `Yes, we develop serverless applications using AWS Lambda, Vercel Functions, and Firebase Cloud Functions. Serverless architecture helps your ${city} business reduce operational overhead, scale automatically, and optimize costs by paying only for actual usage rather than provisioned servers.`
    },
    {
      q: `Can you implement payment gateway solutions?`,
      a: `Absolutely. We integrate with major payment gateways including Stripe, Razorpay, PayPal, and PayU. We handle secure payment processing, subscription billing, refund workflows, transaction notifications, and PCI compliance to ensure a safe and seamless checkout experience for your ${city} customers.`
    },
    {
      q: `What is your approach to application security?`,
      a: `We implement a comprehensive security framework including HTTPS enforcement, input validation, CSRF protection, XSS prevention, SQL injection prevention, rate limiting, secure session management, and regular dependency scanning. Security is embedded throughout our development lifecycle.`
    },
    {
      q: `Do you provide website performance optimization services?`,
      a: `Yes, we optimize website performance through code splitting, image optimization, lazy loading, script deferral, bundle analysis, server-side rendering (SSR), static site generation (SSG), and efficient caching strategies. We ensure your ${city} website achieves excellent Core Web Vitals scores.`
    },
    {
      q: `Can you develop custom booking and reservation systems?`,
      a: `Yes, we build custom booking and reservation systems with features like availability calendars, real-time slot management, automated confirmations, reminder notifications, waitlist management, and payment processing. These systems are tailored for ${city} businesses in hospitality, healthcare, and service industries.`
    },
    {
      q: `What is your data migration and system upgrade process?`,
      a: `Our data migration and system upgrade process includes comprehensive planning, data mapping, validation, backup strategy, phased rollouts, and rollback procedures. We minimize downtime and data integrity risks, ensuring a smooth transition while maintaining business continuity for your ${city} operations.`
    },
    {
      q: `Do you offer consultation and technology advisory services?`,
      a: `Yes, we provide technology advisory services including architecture review, technology stack selection, scalability assessment, and digital transformation strategy. Our consultants help ${city} businesses make informed technology decisions that align with their long-term business goals.`
    },
    {
      q: `Can you build analytics dashboards and reporting tools?`,
      a: `Absolutely. We build custom analytics dashboards with real-time data visualization, KPI monitoring, custom reports, and interactive charts. Using tools like Chart.js, D3.js, and Metabase, we help ${city} businesses gain actionable insights from their data to drive strategic decisions.`
    },
    {
      q: `Do you implement social login and OAuth authentication?`,
      a: `Yes, we implement social login and OAuth authentication using providers like Google, Facebook, LinkedIn, and GitHub. We also support enterprise authentication through SAML and LDAP, providing a secure and convenient user authentication experience for your ${city} applications.`
    },
    {
      q: `What is your approach to technical documentation?`,
      a: `We provide comprehensive technical documentation including API documentation, code comments, architecture diagrams, deployment guides, and end-user manuals. Our documentation follows industry standards like OpenAPI Specification (Swagger), making it easy for your team to maintain and extend the application.`
    },
    {
      q: `Do you offer knowledge transfer and team training?`,
      a: `Yes, we provide thorough knowledge transfer sessions and team training as part of our delivery process. We conduct workshops, provide documentation, and work alongside your internal teams to ensure they are comfortable maintaining and evolving the application after launch.`
    },
    {
      q: `How do you handle project communication and reporting?`,
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