import { contactInfo } from "@/data/ContactInfo";

// app/mobile-app-development-gurgaon/faqs.ts
export interface FAQItem {
  q: string;
  a: string;
}

// Base FAQ template with dynamic location
export function generateFAQs(city: string): FAQItem[] {
  return [
    {
      q: `What makes CoderLala the best mobile app development company in ${city}?`,
      a: `CoderLala stands out as a premier mobile app development company in ${city} due to our expertise in cutting-edge technologies like React Native, Flutter, Swift, and Kotlin. We combine technical excellence with local presence, delivering enterprise-grade mobile solutions with personalized attention. Our prime location in JMD Megapolis, Sector 48, allows us to serve ${city} businesses with rapid response times and in-person consultations.`
    },
    {
      q: `How long does mobile app development take with your ${city} team?`,
      a: `A high-performance mobile application typically takes 12 to 20 weeks from discovery to deployment. We work in 2-week agile sprints with beta releases so you can test and provide feedback throughout the development process. As a local mobile app development company in ${city}, we offer faster turnaround times through close collaboration.`
    },
    {
      q: `What is the cost of mobile app development services in ${city}?`,
      a: `Pricing depends on platform selection (iOS, Android, or both), app complexity, features, and integrations. Standard mobile apps range between ₹3,00,000 to ₹8,00,000, while complex enterprise apps and platforms can range higher. We provide transparent quotes as a trusted mobile app development agency in ${city}. Contact us for a detailed, no-obligation estimate.`
    },
    {
      q: `Do you offer ongoing maintenance for mobile apps developed in ${city}?`,
      a: `Absolutely! Comprehensive post-launch SLA support including 24/7 server monitoring, performance audits, OS updates, weekly backups, and quick-turnaround feature updates. Our local team is always available for your business needs.`
    },
    {
      q: `Can we meet your mobile app development team in ${city}?`,
      a: `Yes! Our office is located at ${contactInfo.websiteAddress}. We welcome in-person discovery workshops, strategic planning meetings, and design review sessions at our office or your ${city} headquarters.`
    },
    {
      q: `What technologies do you use as a mobile app development company in ${city}?`,
      a: `We primarily use modern technologies like React Native, Flutter, Swift, Kotlin, and Node.js for robust and scalable mobile applications. We also work with Python, AWS, Firebase, MongoDB, and various other tools. Our tech stack ensures high-performance solutions for ${city} businesses.`
    },
    {
      q: `Do you develop e-commerce mobile apps for ${city} businesses?`,
      a: `Yes! We build secure and scalable e-commerce mobile apps with features like payment gateway integration, inventory management, order tracking, customer accounts, and personalized shopping experiences. We're a preferred e-commerce mobile app development company in ${city}.`
    },
    {
      q: `Can you integrate with our existing business systems?`,
      a: `Yes, we specialize in seamless integrations with existing systems and third-party platforms. Our team will work with your IT department to ensure smooth integration, minimal disruption, and complete data consistency.`
    },
    {
      q: `Do you provide UI/UX design services for mobile apps in ${city}?`,
      a: `Yes, we provide comprehensive UI/UX design services, focusing on creating intuitive, engaging, and user-friendly mobile interfaces. Our design process involves user research, wireframing, prototyping, and usability testing.`
    },
    {
      q: `What is your approach to mobile app security?`,
      a: `We implement a comprehensive security framework including HTTPS enforcement, data encryption, secure authentication, API security, and regular security audits. Security is embedded throughout our development lifecycle.`
    },
    {
      q: `Do you help with App Store and Play Store submissions?`,
      a: `Yes, we handle the entire app store submission process for both Apple App Store and Google Play Store. We ensure your app meets all store guidelines, prepare necessary assets, and manage the review process for a successful launch.`
    },
    {
      q: `What is your contact information for ${city}?`,
      a: `You can reach us at +91 ${contactInfo.salmanNizamPhone} or visit our office at ${contactInfo.websiteAddress}. Our business hours are typically ${contactInfo.businessHours.weekdays} on weekdays. For any inquiries, you can also contact us via email or through our website.`
    },
    {
      q: `Do you build native or cross-platform mobile apps?`,
      a: `We build both native and cross-platform mobile apps depending on your requirements. For projects needing maximum performance and platform-specific features, we recommend native development. For projects requiring faster time-to-market and code reuse, we recommend cross-platform development with React Native or Flutter.`
    },
    {
      q: `How do you handle API development and integration for mobile apps?`,
      a: `We design and develop robust RESTful and GraphQL APIs with comprehensive documentation, authentication, rate limiting, and error handling. Our APIs are built to scale and integrate smoothly with your mobile app, third-party services, and partner systems.`
    },
    {
      q: `Do you offer cloud hosting setup and optimization for mobile apps?`,
      a: `Yes, we provide cloud hosting setup and optimization on platforms like AWS, Google Cloud, and Firebase. We configure auto-scaling, load balancing, CDN integration, caching strategies, and environment management to ensure your app performs reliably.`
    },
    {
      q: `Can you build custom dashboards and admin panels for mobile apps?`,
      a: `Absolutely. We build custom admin dashboards with role-based access, real-time data visualization, user management, analytics tracking, and content moderation tools. Our dashboards are tailored to your business workflows, enabling efficient management of your ${city} operations. Our business hours are typically ${contactInfo.businessHours.weekdays} on weekdays.`
    },
    {
      q: `Do you provide code review and audit services for mobile apps?`,
      a: `Yes, we offer code review, performance audit, and security assessment services for existing mobile apps. Our team analyzes your codebase for best practices, security vulnerabilities, performance bottlenecks, and scalability issues, providing actionable recommendations and remediation support.`
    },
    {
      q: `Can you develop real-time mobile applications with WebSockets?`,
      a: `Yes, we build real-time mobile applications using WebSockets for use cases like live chat, notifications, collaborative tools, and live data feeds. We implement robust real-time architectures to ensure low-latency and reliable bidirectional communication.`
    },
    {
      q: `What is your approach to database design and optimization for mobile apps?`,
      a: `Our database design approach focuses on data integrity, query performance, and scalability. We use PostgreSQL, MySQL, MongoDB, and Redis strategically, implementing indexing, query optimization, connection pooling, and replication strategies to ensure your app performs optimally as it grows.`
    },
    {
      q: `Do you provide automated testing for mobile applications?`,
      a: `Yes, we implement comprehensive automated testing strategies including unit tests, integration tests, end-to-end tests, and visual regression testing. We use tools like Jest, Appium, and Detox to ensure your app is stable and bug-free before deployment.`
    },
    {
      q: `What is your CI/CD pipeline setup process for mobile apps?`,
      a: `We set up CI/CD pipelines using GitHub Actions, Bitrise, or Codemagic to automate the build, test, and deployment processes. This ensures consistent and reliable deployments, rapid rollbacks, and efficient app store submissions.`
    },
    {
      q: `Do you develop subscription-based and membership mobile apps?`,
      a: `Yes, we specialize in building subscription-based mobile apps with recurring billing, membership tiers, subscription management, payment gateway integration, and customer portal functionality. We support models like freemium, paid memberships, and usage-based billing.`
    },
    {
      q: `Can you build mobile apps with offline functionality?`,
      a: `Yes, we leverage local storage, SQLite, and data synchronization strategies to build mobile apps with offline functionality. This allows users in ${city} to access critical data and perform key actions even without an internet connection, with automatic synchronization when connectivity is restored.`
    },
    {
      q: `What is your approach to microservices architecture for mobile apps?`,
      a: `We design and develop microservices architectures using Docker, Kubernetes, and API gateways. Our approach ensures loose coupling, independent scaling, fault isolation, and technology diversity, enabling your ${city} business to evolve and scale specific services independently.`
    },
    {
      q: `Do you offer serverless application development for mobile apps?`,
      a: `Yes, we develop serverless applications using AWS Lambda, Firebase Cloud Functions, and Google Cloud Functions. Serverless architecture helps your ${city} business reduce operational overhead, scale automatically, and optimize costs.`
    },
    {
      q: `Can you implement payment gateway solutions in mobile apps?`,
      a: `Absolutely. We integrate with major payment gateways including Stripe, Razorpay, PayPal, and PayU. We handle secure payment processing, subscription billing, refund workflows, transaction notifications, and PCI compliance to ensure a safe and seamless checkout experience.`
    },
    {
      q: `Do you provide mobile app performance optimization services?`,
      a: `Yes, we optimize mobile app performance through code splitting, image optimization, lazy loading, efficient caching strategies, and native code optimization. We ensure your app delivers excellent performance and user experience.`
    },
    {
      q: `Can you develop custom booking and reservation mobile apps?`,
      a: `Yes, we build custom booking and reservation systems with features like availability calendars, real-time slot management, automated confirmations, reminder notifications, waitlist management, and payment processing. These systems are tailored for ${city} businesses in hospitality, healthcare, and service industries.`
    },
    {
      q: `What is your data migration and system upgrade process?`,
      a: `Our data migration and system upgrade process includes comprehensive planning, data mapping, validation, backup strategy, phased rollouts, and rollback procedures. We minimize downtime and data integrity risks, ensuring a smooth transition while maintaining business continuity.`
    },
    {
      q: `Do you offer consultation and technology advisory services?`,
      a: `Yes, we provide technology advisory services including architecture review, technology stack selection, scalability assessment, and digital transformation strategy. Our consultants help ${city} businesses make informed technology decisions that align with their long-term business goals.`
    },
    {
      q: `Can you build analytics dashboards and reporting tools for mobile apps?`,
      a: `Absolutely. We build custom analytics dashboards with real-time data visualization, KPI monitoring, custom reports, and interactive charts. Using tools like Chart.js and D3.js, we help ${city} businesses gain actionable insights from their data.`
    },
    {
      q: `Do you implement social login and OAuth authentication in mobile apps?`,
      a: `Yes, we implement social login and OAuth authentication using providers like Google, Facebook, LinkedIn, and GitHub. We also support enterprise authentication through SAML and LDAP, providing a secure and convenient user authentication experience.`
    },
    {
      q: `What is your approach to technical documentation?`,
      a: `We provide comprehensive technical documentation including API documentation, code comments, architecture diagrams, deployment guides, and end-user manuals. Our documentation follows industry standards, making it easy for your team to maintain and extend the application.`
    },
    {
      q: `Do you offer knowledge transfer and team training for mobile apps?`,
      a: `Yes, we provide thorough knowledge transfer sessions and team training as part of our delivery process. We conduct workshops, provide documentation, and work alongside your internal teams to ensure they are comfortable maintaining and evolving the app after launch.`
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