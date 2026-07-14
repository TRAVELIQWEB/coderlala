// app/cloud-devops-gurgaon/faqs.ts
import { contactInfo } from "@/data/ContactInfo";

export interface FAQItem {
  q: string;
  a: string;
}

export function generateFAQs(city: string): FAQItem[] {
  return [
    {
      q: `What makes CoderLala the best cloud and DevOps company in ${city}?`,
      a: `CoderLala stands out as a premier cloud and DevOps company in ${city} due to our deep expertise in multi-cloud environments, Kubernetes orchestration, and infrastructure as code. We combine technical excellence with local presence, delivering enterprise-grade cloud solutions with personalized attention. Our prime location in JMD Megapolis, Sector 48, allows us to serve ${city} businesses with rapid response times and in-person consultations.`
    },
    {
      q: `Which cloud platforms do you support?`,
      a: `We support all major cloud platforms including AWS, Microsoft Azure, and Google Cloud Platform. We help you choose the best platform based on your specific requirements, budget, and technical needs. Each platform has unique strengths, and we provide unbiased recommendations.`
    },
    {
      q: `How long does cloud migration take with your ${city} team?`,
      a: `Cloud migration typically takes 4 to 8 weeks depending on the complexity of your infrastructure. We follow a phased approach to ensure minimal disruption to your business operations. As a local cloud company in ${city}, we offer faster turnaround times through close collaboration.`
    },
    {
      q: `What is the cost of cloud and DevOps services in ${city}?`,
      a: `Pricing depends on project scope, infrastructure complexity, and service requirements. Standard cloud and DevOps projects range between ₹2,00,000 to ₹15,00,000+. We provide transparent quotes as a trusted cloud agency in ${city}. Contact us for a detailed, no-obligation estimate.`
    },
    {
      q: `Do you provide managed DevOps services?`,
      a: `Yes, we provide fully managed DevOps services including infrastructure management, CI/CD pipeline maintenance, monitoring, security updates, and 24/7 support. Our team handles all operational aspects so you can focus on building features.`
    },
    {
      q: `What is your approach to cloud security?`,
      a: `We implement comprehensive security measures including identity and access management (IAM), data encryption at rest and in transit, network security, regular security audits, and compliance with industry standards like GDPR, HIPAA, and SOC 2.`
    },
    {
      q: `What is your contact information for ${city}?`,
      a: `You can reach us at +91 ${contactInfo.salmanNizamPhone} or visit our office at ${contactInfo.websiteAddress}. Our business hours are typically ${contactInfo.businessHours.weekdays} on weekdays. For any inquiries, you can also contact us via email or through our website.`
    },
    {
      q: `Can we meet your cloud team in ${city}?`,
      a: `Yes! Our office is located at ${contactInfo.websiteAddress}. We welcome in-person consultations, strategy sessions, and architecture reviews at our office or your ${city} headquarters.`
    },
    {
      q: `What is Kubernetes and do you use it?`,
      a: `Kubernetes is an open-source container orchestration platform for automating deployment, scaling, and management of containerized applications. Yes, we are Kubernetes experts and use it extensively for production-grade container orchestration.`
    },
    {
      q: `What is infrastructure as code (IaC)?`,
      a: `Infrastructure as Code (IaC) is the practice of managing and provisioning infrastructure through code instead of manual processes. We use tools like Terraform and AWS CloudFormation to implement IaC, ensuring consistent, repeatable, and version-controlled infrastructure.`
    },
    {
      q: `Do you provide CI/CD pipeline setup?`,
      a: `Yes, we set up complete CI/CD (Continuous Integration/Continuous Deployment) pipelines using tools like Jenkins, GitHub Actions, GitLab CI, and Azure DevOps. This enables automated testing and deployment, reducing manual errors and accelerating delivery.`
    },
    {
      q: `What is containerization and why is it important?`,
      a: `Containerization packages applications and their dependencies into isolated containers, ensuring consistency across environments. We use Docker and Kubernetes to implement containerization, enabling portability, scalability, and efficient resource utilization.`
    },
    {
      q: `How do you handle cloud cost optimization?`,
      a: `We implement cloud cost optimization strategies including right-sizing resources, using reserved instances, implementing auto-scaling, and continuous monitoring of cloud spend. We help you reduce cloud costs by up to 40% while maintaining performance.`
    },
    {
      q: `Do you provide disaster recovery solutions?`,
      a: `Yes, we design and implement comprehensive disaster recovery solutions including backup strategies, multi-region replication, failover mechanisms, and recovery point objectives (RPO) and recovery time objectives (RTO) planning.`
    },
    {
      q: `What is your approach to monitoring and logging?`,
      a: `We implement comprehensive monitoring and logging solutions using tools like Prometheus, Grafana, ELK Stack, Datadog, and CloudWatch. This provides real-time visibility into application performance, system health, and security.`
    },
    {
      q: `Do you provide cloud architecture consulting?`,
      a: `Yes, we provide cloud architecture consulting services including infrastructure assessment, architecture design, technology selection, and best practices implementation. Our architects help you design scalable, secure, and cost-optimized cloud environments.`
    },
    {
      q: `What is serverless computing and do you use it?`,
      a: `Serverless computing allows you to run code without provisioning or managing servers. We use AWS Lambda, Azure Functions, and Google Cloud Functions for serverless workloads, enabling automatic scaling and pay-per-use pricing.`
    },
    {
      q: `How do you handle DevOps culture transformation?`,
      a: `We help organizations adopt DevOps culture through training, workshops, and implementation of best practices. This includes breaking down silos, fostering collaboration, and implementing the right tools and processes.`
    },
    {
      q: `Do you provide hybrid cloud solutions?`,
      a: `Yes, we design and implement hybrid cloud solutions that combine on-premises infrastructure with public cloud services. This provides flexibility, security, and the ability to leverage cloud benefits while maintaining legacy systems.`
    },
    {
      q: `What is your experience with microservices architecture?`,
      a: `We have extensive experience designing and implementing microservices architectures using Docker, Kubernetes, service meshes, and API gateways. This approach enables independent scaling, deployment, and development of services.`
    },
    {
      q: `How do you ensure high availability?`,
      a: `We implement high availability strategies including multi-AZ deployments, load balancing, auto-scaling, and disaster recovery. Our solutions are designed to achieve 99.9% to 99.99% uptime based on your business requirements.`
    },
    {
      q: `Do you provide DevOps training?`,
      a: `Yes, we provide comprehensive DevOps training including CI/CD pipelines, containerization, Kubernetes, monitoring, and infrastructure as code. We offer both hands-on workshops and structured training programs.`
    },
    {
      q: `What is GitOps and do you implement it?`,
      a: `GitOps is a DevOps practice that uses Git as the single source of truth for declarative infrastructure and applications. Yes, we implement GitOps using tools like ArgoCD and Flux to automate deployments and infrastructure management.`
    },
    {
      q: `How do you handle cloud vendor lock-in?`,
      a: `We design cloud-agnostic architectures using open-source tools, containerization, and infrastructure as code. This allows you to migrate between cloud providers with minimal effort if needed.`
    },
    {
      q: `Do you provide security audits for cloud infrastructure?`,
      a: `Yes, we conduct comprehensive security audits including vulnerability assessments, penetration testing, compliance checks, and security best practices reviews. We provide actionable recommendations and remediation support.`
    },
    {
      q: `What is your approach to scalability?`,
      a: `We design architectures that scale horizontally and vertically based on demand. Our solutions include auto-scaling, load balancing, caching strategies, and database optimization to handle traffic spikes seamlessly.`
    },
    {
      q: `Do you implement data backup and recovery?`,
      a: `Yes, we implement robust data backup and recovery strategies including automated backups, point-in-time recovery, cross-region replication, and regular restore testing to ensure data durability and availability.`
    },
    {
      q: `What is observability and do you provide it?`,
      a: `Observability goes beyond monitoring to include metrics, logging, and tracing. We implement comprehensive observability solutions using tools like Prometheus, Grafana, Jaeger, and OpenTelemetry for deep system insights.`
    },
    {
      q: `How do you handle regulatory compliance?`,
      a: `We ensure your cloud infrastructure meets regulatory requirements including GDPR, HIPAA, PCI-DSS, and SOC 2. We implement appropriate controls, conduct regular compliance assessments, and maintain necessary documentation.`
    },
    {
      q: `Do you provide 24/7 support?`,
      a: `Yes, we provide 24/7 support for our managed DevOps services. Our team is available to handle incidents, provide assistance, and ensure your systems run smoothly around the clock.`
    },
    {
      q: `What is your experience with AWS?`,
      a: `We have extensive experience with AWS services including EC2, S3, RDS, Lambda, ECS, EKS, VPC, IAM, CloudFormation, and many more. We are AWS-certified professionals with years of production experience.`
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