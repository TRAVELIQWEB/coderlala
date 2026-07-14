// app/enterprise-software-gurgaon/faqs.ts
import { contactInfo } from "../../../../data/ContactInfo";

export interface FAQItem {
  q: string;
  a: string;
}

export function generateFAQs(city: string): FAQItem[] {
  return [
    {
      q: `What makes CoderLala the best enterprise software development company in ${city}?`,
      a: `CoderLala stands out as a premier enterprise software company in ${city} due to our expertise in complex system integration, legacy modernization, and enterprise-grade security. We combine technical excellence with local presence, delivering robust solutions with personalized attention. Our prime location in JMD Megapolis, Sector 48, allows us to serve ${city} businesses with rapid response times and in-person consultations.`
    },
    {
      q: `How long does enterprise software development take with your ${city} team?`,
      a: `Enterprise software development typically takes 12 to 24 weeks depending on complexity, integration requirements, and organizational needs. We follow an agile methodology with regular demos and stakeholder reviews. As a local enterprise software company in ${city}, we offer faster turnaround times through close collaboration.`
    },
    {
      q: `What is the cost of enterprise software development in ${city}?`,
      a: `Pricing depends on project complexity, integration needs, and scale. Standard enterprise projects range between ₹15,00,000 to ₹2,00,00,000+. We provide transparent quotes as a trusted enterprise agency in ${city}. Contact us for a detailed, no-obligation estimate tailored to your specific requirements.`
    },
    {
      q: `Do you integrate with existing ERP systems?`,
      a: `Yes, we specialize in integrating with major ERP systems including SAP, Oracle, Microsoft Dynamics, and other enterprise platforms. Our team ensures seamless data flow and minimal disruption to your existing business processes.`
    },
    {
      q: `How do you handle legacy system modernization?`,
      a: `We use a phased approach to modernize legacy systems, ensuring minimal disruption to business operations while migrating to modern architectures. Our process includes assessment, planning, migration, testing, and validation to ensure data integrity and system reliability.`
    },
    {
      q: `What is your approach to enterprise security?`,
      a: `We implement comprehensive security measures including role-based access control, data encryption at rest and in transit, regular security audits, penetration testing, and compliance with industry standards like GDPR, HIPAA, and ISO 27001. Security is embedded throughout our development lifecycle.`
    },
    {
      q: `Can we meet your enterprise team in ${city}?`,
      a: `Yes! Our office is located at ${contactInfo.websiteAddress}. We welcome in-person consultations, strategy sessions, and discovery workshops at our office or your ${city} headquarters.`
    },
    {
      q: `What technologies do you use for enterprise software development?`,
      a: `We use a wide range of enterprise-grade technologies including .NET, Java, Python, Node.js, Oracle, PostgreSQL, Salesforce, SAP, and cloud platforms like AWS, Azure, and Google Cloud. We choose the best technology stack based on your specific requirements and existing infrastructure.`
    },
    {
      q: `Do you develop custom CRM solutions?`,
      a: `Yes, we develop custom CRM solutions tailored to your business processes. Whether you need to integrate with Salesforce, Microsoft Dynamics, or build a completely custom CRM, we can deliver a solution that streamlines your customer relationship management.`
    },
    {
      q: `How do you handle data migration?`,
      a: `We use proven ETL processes with thorough data validation, transformation, and reconciliation to ensure zero data loss. Our migration strategy includes comprehensive planning, testing, and rollback procedures to ensure a smooth transition.`
    },
    {
      q: `Do you provide ongoing maintenance and support?`,
      a: `Absolutely! Comprehensive post-launch SLA support including 24/7 server monitoring, performance optimization, security updates, bug fixes, and feature enhancements. Our local team is always available for your business needs.`
    },
    {
      q: `Can you build custom dashboards and analytics solutions?`,
      a: `Yes, we build custom BI and analytics dashboards with real-time data visualization, KPI monitoring, custom reports, and interactive charts. Using tools like Power BI, Tableau, and custom-built solutions, we help ${city} businesses gain actionable insights from their data.`
    },
    {
      q: `Do you offer digital transformation consulting?`,
      a: `Yes, we provide comprehensive digital transformation consulting services including technology assessment, roadmap creation, change management, and implementation strategy. Our consultants help ${city} businesses leverage technology to drive operational excellence.`
    },
    {
      q: `What is your approach to enterprise architecture?`,
      a: `We design enterprise architectures that are scalable, secure, and aligned with your business goals. Our approach includes domain-driven design, microservices architecture, API-first development, and cloud-native principles.`
    },
    {
      q: `Do you develop mobile enterprise applications?`,
      a: `Yes, we develop enterprise mobile applications for iOS and Android platforms. Our solutions include field force automation, mobile CRM, inventory management, and executive dashboards that enable your workforce to stay productive on the go.`
    },
    {
      q: `How do you ensure system reliability and uptime?`,
      a: `We implement robust infrastructure with redundancy, auto-scaling, load balancing, and disaster recovery. Our SLAs guarantee 99.9% uptime with proactive monitoring and alerting to ensure your business-critical systems are always available.`
    },
    {
      q: `Can you integrate with third-party APIs and services?`,
      a: `Yes, we specialize in seamless integration with third-party APIs, web services, and enterprise systems. Our team handles all aspects of API integration including authentication, data mapping, error handling, and monitoring.`
    },
    {
      q: `Do you provide staff augmentation services?`,
      a: `Yes, we provide skilled enterprise developers, architects, and consultants to augment your existing team. Our professionals can work on-site or remotely, helping you scale your development capacity for specific projects or long-term engagements.`
    },
    {
      q: `What is your quality assurance process?`,
      a: `We implement comprehensive QA processes including automated testing, manual testing, performance testing, security testing, and user acceptance testing. Our QA team ensures your enterprise software meets the highest quality standards before deployment.`
    },
    {
      q: `Do you develop workflow automation solutions?`,
      a: `Yes, we build custom workflow automation solutions using BPM tools and custom development. Our solutions automate repetitive tasks, streamline business processes, and improve operational efficiency across your organization.`
    },
    {
      q: `How do you handle compliance and regulatory requirements?`,
      a: `We ensure your enterprise software meets all relevant compliance and regulatory requirements including GDPR, HIPAA, SOC 2, and industry-specific regulations. Our compliance framework includes data privacy, audit trails, and security controls.`
    },
    {
      q: `Can you build multi-tenant enterprise applications?`,
      a: `Yes, we design and build multi-tenant enterprise applications that serve multiple business units or clients with isolated data, custom configurations, and scalable infrastructure. This approach reduces costs and simplifies management.`
    },
    {
      q: `Do you offer cloud migration services?`,
      a: `Yes, we provide comprehensive cloud migration services including assessment, planning, execution, and optimization. We help you migrate your enterprise applications and data to AWS, Azure, or Google Cloud with minimal disruption.`
    },
    {
      q: `What is your approach to change management?`,
      a: `We incorporate change management as a key part of our delivery process. This includes stakeholder communication, user training, documentation, and adoption support to ensure successful deployment and user acceptance.`
    },
    {
      q: `Can you build custom procurement and supply chain solutions?`,
      a: `Yes, we develop custom procurement, inventory management, and supply chain solutions that integrate with your existing systems. Our solutions include supplier management, purchase order automation, inventory tracking, and logistics optimization.`
    },
    {
      q: `Do you provide system integration services?`,
      a: `Yes, we provide comprehensive system integration services connecting disparate enterprise systems, applications, and data sources. Our integration solutions use APIs, ESB, and middleware to create a unified technology ecosystem.`
    },
    {
      q: `What is your project management approach?`,
      a: `We follow agile project management methodologies with daily standups, sprint planning, regular demos, and transparent reporting. Our approach ensures clear communication, stakeholder alignment, and timely delivery of enterprise solutions.`
    },
    {
      q: `Do you develop custom HR and payroll solutions?`,
      a: `Yes, we develop custom HR management and payroll solutions that automate employee management, attendance tracking, leave management, payroll processing, and compliance reporting. Our solutions integrate with existing HR systems.`
    },
    {
      q: `How do you handle data governance?`,
      a: `We implement comprehensive data governance frameworks including data quality management, master data management, data lineage, and data stewardship. This ensures your enterprise data is accurate, consistent, and secure.`
    },
    {
      q: `Can you build custom billing and invoicing systems?`,
      a: `Yes, we develop custom billing and invoicing systems with features like automated invoicing, payment processing, subscription management, revenue recognition, and financial reporting. Our solutions integrate with accounting systems like QuickBooks and SAP.`
    },
    {
      q: `Do you offer training and knowledge transfer?`,
      a: `Yes, we provide comprehensive training and knowledge transfer sessions for your IT and business teams. We conduct workshops, create documentation, and provide hands-on support to ensure your team can effectively manage and maintain the enterprise software.`
    },
    {
      q: `What is your contact information for ${city}?`,
      a: `You can reach at +91 ${contactInfo.salmanNizamPhone} or visit our office at ${contactInfo.websiteAddress}. Our business hours are ${contactInfo.businessHours.weekdays}. For any inquiries, you can also contact us via email at ${contactInfo.email} or through our website at ${contactInfo.website}.`
    }
  ];
}

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