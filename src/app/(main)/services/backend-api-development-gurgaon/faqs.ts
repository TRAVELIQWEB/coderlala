// app/backend-api-development-gurgaon/faqs.ts
import { contactInfo } from "@/data/ContactInfo";

export interface FAQItem {
  q: string;
  a: string;
}

export function generateFAQs(city: string): FAQItem[] {
  return [
    {
      q: `What makes CoderLala the best backend and API development company in ${city}?`,
      a: `CoderLala stands out as a premier backend and API company in ${city} due to our expertise in building scalable, high-performance systems with microservices architecture. We combine technical excellence with local presence, delivering robust solutions with personalized attention. Our prime location in JMD Megapolis, Sector 48, allows us to serve ${city} businesses with rapid response times and in-person consultations.`
    },
    {
      q: `How long does backend and API development take with your ${city} team?`,
      a: `Backend and API development typically takes 6 to 10 weeks depending on complexity, feature requirements, and integration needs. We follow an agile methodology with regular deliverables. As a local backend company in ${city}, we offer faster turnaround times through close collaboration.`
    },
    {
      q: `What is the cost of backend and API development in ${city}?`,
      a: `Pricing depends on project complexity, architecture requirements, and scale. Standard backend projects range between ₹3,00,000 to ₹20,00,000+. We provide transparent quotes as a trusted backend agency in ${city}. Contact us for a detailed, no-obligation estimate.`
    },
    {
      q: `Should we choose REST or GraphQL?`,
      a: `We recommend GraphQL for complex, rapidly evolving APIs and REST for simple, stable APIs. We help you choose based on your specific needs, data requirements, and client capabilities. GraphQL offers flexibility, while REST provides simplicity and caching benefits.`
    },
    {
      q: `What technologies do you use?`,
      a: `We use Node.js, Python, Go, PostgreSQL, MongoDB, Redis, and various other technologies. We choose the best tools for your specific requirements, considering factors like performance, scalability, and team expertise.`
    },
    {
      q: `How do you handle database optimization?`,
      a: `We design efficient schemas, use proper indexing, implement caching strategies, and continuously monitor and optimize query performance. We also use database profiling and query analysis tools to identify and resolve bottlenecks.`
    },
    {
      q: `Can we meet your backend team in ${city}?`,
      a: `Yes! Our office is located at ${contactInfo.websiteAddress}. We welcome in-person consultations, architecture reviews, and strategy sessions at our office or your ${city} headquarters.`
    },
    {
      q: `What is your contact information for ${city}?`,
      a: `You can reach us at +91 ${contactInfo.salmanNizamPhone} or visit our office at ${contactInfo.websiteAddress}. Our business hours are typically ${contactInfo.businessHours.weekdays} on weekdays. For any inquiries, you can also contact us via email or through our website.`
    },
    {
      q: `Do you build microservices architecture?`,
      a: `Yes, we specialize in designing and implementing microservices architectures using Docker, Kubernetes, and API gateways. This approach enables independent scaling, deployment, and development of services, improving overall system resilience.`
    },
    {
      q: `What is your approach to API security?`,
      a: `We implement comprehensive API security including authentication (JWT, OAuth2), authorization (RBAC), rate limiting, input validation, encryption, and API key management. We also conduct regular security audits and penetration testing.`
    },
    {
      q: `Do you provide API documentation?`,
      a: `Yes, we provide comprehensive API documentation using OpenAPI/Swagger, Postman collections, and interactive documentation tools. Our documentation includes endpoint descriptions, request/response examples, authentication details, and error codes.`
    },
    {
      q: `What is your approach to API versioning?`,
      a: `We implement API versioning strategies including URL versioning, header versioning, or query parameter versioning. This ensures backward compatibility and smooth transitions when APIs evolve.`
    },
    {
      q: `How do you handle real-time APIs?`,
      a: `We build real-time APIs using WebSockets, Server-Sent Events (SSE), and WebRTC for use cases like live chat, notifications, real-time dashboards, and collaborative applications. We ensure low latency and reliable bidirectional communication.`
    },
    {
      q: `Do you provide API integration services?`,
      a: `Yes, we provide comprehensive API integration services including third-party API integration, payment gateway integration, social media APIs, and custom API development for your partners and clients.`
    },
    {
      q: `What is your approach to caching?`,
      a: `We implement multi-level caching strategies including Redis caching, CDN caching, and application-level caching. This significantly improves response times and reduces database load, achieving sub-100ms response times.`
    },
    {
      q: `How do you handle high traffic and scalability?`,
      a: `We design systems for scalability using horizontal scaling, load balancing, auto-scaling groups, and message queues. Our architecture can handle millions of requests per day with 99.99% uptime.`
    },
    {
      q: `Do you provide database design services?`,
      a: `Yes, we provide comprehensive database design services including schema design, normalization, indexing strategies, migration planning, and performance optimization for both SQL and NoSQL databases.`
    },
    {
      q: `What is your approach to error handling?`,
      a: `We implement comprehensive error handling including custom error codes, meaningful error messages, logging, monitoring, and graceful degradation. We ensure your API provides clear error responses for better client-side handling.`
    },
    {
      q: `Do you provide logging and monitoring?`,
      a: `Yes, we implement comprehensive logging and monitoring solutions using tools like ELK Stack, Prometheus, Grafana, and Datadog. This provides real-time visibility into API performance, errors, and usage patterns.`
    },
    {
      q: `What is your experience with Node.js?`,
      a: `We have extensive experience with Node.js including Express, NestJS, Fastify, and other frameworks. We build high-performance Node.js applications with async/await, event-driven architecture, and clustering for multi-core utilization.`
    },
    {
      q: `Do you use Python for backend development?`,
      a: `Yes, we use Python with frameworks like Django, Flask, and FastAPI for building robust, scalable backend systems. Python is particularly well-suited for data-intensive applications and AI/ML integrations.`
    },
    {
      q: `What is your experience with Go?`,
      a: `We use Go (Golang) for building high-performance microservices and API gateways. Go's concurrency model and performance make it ideal for handling large volumes of concurrent requests.`
    },
    {
      q: `Do you provide API testing?`,
      a: `Yes, we provide comprehensive API testing including unit testing, integration testing, load testing, and security testing. We use tools like Jest, Mocha, Postman, JMeter, and custom test suites.`
    },
    {
      q: `How do you handle data migration?`,
      a: `We implement safe data migration strategies including database migrations, data transformation, validation, and rollback plans. We ensure data integrity and minimal downtime during migrations.`
    },
    {
      q: `Do you provide CI/CD for backend projects?`,
      a: `Yes, we set up CI/CD pipelines for backend projects using GitHub Actions, GitLab CI, or Jenkins. This includes automated testing, building, and deployment to staging and production environments.`
    },
    {
      q: `What is your approach to API performance optimization?`,
      a: `We optimize API performance through response compression, pagination, filtering, caching, database query optimization, and monitoring. We aim for < 100ms response times and efficient resource utilization.`
    },
    {
      q: `Do you provide GraphQL API development?`,
      a: `Yes, we specialize in GraphQL API development using Apollo Server, GraphQL Yoga, and other tools. We design efficient GraphQL schemas, resolvers, and implement data loaders for N+1 query optimization.`
    },
    {
      q: `How do you handle authentication and authorization?`,
      a: `We implement secure authentication and authorization using JWT, OAuth2, OpenID Connect, and role-based access control (RBAC). We also support social login (Google, Facebook, etc.) and enterprise SSO.`
    },
    {
      q: `Do you provide WebSocket development?`,
      a: `Yes, we build real-time WebSocket applications using Socket.io, ws library, and other tools. This enables real-time features like chat, notifications, live updates, and collaborative editing.`
    },
    {
      q: `What is your experience with PostgreSQL?`,
      a: `We have extensive experience with PostgreSQL including advanced features like JSON support, full-text search, replication, partitioning, and extensions. We design optimized schemas and perform query tuning for high performance.`
    },
    {
      q: `Do you provide serverless backend development?`,
      a: `Yes, we develop serverless backends using AWS Lambda, Azure Functions, and Google Cloud Functions. Serverless architecture reduces operational overhead and scales automatically based on demand.`
    },
    {
      q: `How do you handle background jobs and queues?`,
      a: `We implement background job processing using Redis queues, Bull, Celery, AWS SQS, and RabbitMQ. This handles asynchronous tasks, email sending, data processing, and scheduled jobs efficiently.`
    },
    {
      q: `Do you provide legacy system migration?`,
      a: `Yes, we help modernize legacy systems by migrating to modern backend architectures, APIs, and cloud platforms. We ensure minimal disruption while improving performance, maintainability, and scalability.`
    },
    {
      q: `What is your contact information for ${city}?`,
      a: `You can reach us at +91 ${contactInfo.salmanNizamPhone} or visit our office at ${contactInfo.websiteAddress}. Our business hours are ${contactInfo.businessHours.weekdays} on weekdays. For any inquiries, you can also contact us via email or through our website.`
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