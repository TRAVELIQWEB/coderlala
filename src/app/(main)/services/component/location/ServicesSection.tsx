// app/components/services/ServicesSection.tsx
'use client';

import { motion } from "framer-motion";
import {
  Code2,
  ShoppingCart,
  Smartphone,
  Server,
  Palette,
  Rocket,
  Sparkles,
  Send,
  Globe,
  Cloud,
  Cpu,
  Building,
  Workflow,
  Brain,
  Layout,
  Search,
  Zap,
  Users,
  Database,
  Shield,
  BarChart3,
} from "lucide-react";
import { HeadingTitle2 } from "@/app/components/HeroTitle";
// import { SectionBadge } from "@/app/components/services/SectionBadge";
// import { Button } from "@/app/components/services/Button";
import { services } from "@/app/(main)/services/data/services/service";
import { SectionBadge } from "./SectionBadge";
import { Button } from "./Button";

export interface ServicesSectionProps {
  city: string;
  scrollToForm: () => void;
  serviceSlug?: string; // Optional: to highlight specific service
}

// Map service slugs to icons
const serviceIconMap: Record<string, React.ReactNode> = {
  "web-development": <Code2 className="w-6 h-6" />,
  "web-development-company": <Code2 className="w-6 h-6" />,
  "mobile-app-development": <Smartphone className="w-6 h-6" />,
  "saas-platform-development": <Cloud className="w-6 h-6" />,
  "travel-portal-development": <Globe className="w-6 h-6" />,
  "ui-ux-design": <Palette className="w-6 h-6" />,
  "cloud-devops": <Cloud className="w-6 h-6" />,
  "ai-ml-solutions": <Brain className="w-6 h-6" />,
  "enterprise-software": <Building className="w-6 h-6" />,
  "backend-api-development": <Server className="w-6 h-6" />,
};

// Map service slugs to colors
const serviceColorMap: Record<string, { from: string; to: string; iconBg: string; text: string }> = {
  "web-development": {
    from: "from-blue-500",
    to: "to-indigo-600",
    iconBg: "bg-blue-500/10 text-blue-500",
    text: "text-blue-500"
  },
  "web-development-company": {
    from: "from-blue-500",
    to: "to-indigo-600",
    iconBg: "bg-blue-500/10 text-blue-500",
    text: "text-blue-500"
  },
  "mobile-app-development": {
    from: "from-purple-500",
    to: "to-pink-500",
    iconBg: "bg-purple-500/10 text-purple-500",
    text: "text-purple-500"
  },
  "saas-platform-development": {
    from: "from-orange-500",
    to: "to-red-500",
    iconBg: "bg-orange-500/10 text-orange-500",
    text: "text-orange-500"
  },
  "travel-portal-development": {
    from: "from-indigo-500",
    to: "to-blue-500",
    iconBg: "bg-indigo-500/10 text-indigo-500",
    text: "text-indigo-500"
  },
  "ui-ux-design": {
    from: "from-yellow-500",
    to: "to-amber-500",
    iconBg: "bg-yellow-500/10 text-yellow-500",
    text: "text-yellow-500"
  },
  "cloud-devops": {
    from: "from-indigo-500",
    to: "to-blue-500",
    iconBg: "bg-indigo-500/10 text-indigo-500",
    text: "text-indigo-500"
  },
  "ai-ml-solutions": {
    from: "from-cyan-500",
    to: "to-blue-500",
    iconBg: "bg-cyan-500/10 text-cyan-500",
    text: "text-cyan-500"
  },
  "enterprise-software": {
    from: "from-violet-500",
    to: "to-purple-500",
    iconBg: "bg-violet-500/10 text-violet-500",
    text: "text-violet-500"
  },
  "backend-api-development": {
    from: "from-green-500",
    to: "to-emerald-500",
    iconBg: "bg-green-500/10 text-green-500",
    text: "text-green-500"
  },
};

// Get service title based on slug
const getServiceTitle = (slug: string): string => {
  const service = services.find(s => s.slug === slug);
  return service?.title || "Web Development";
};

// Get service description based on slug
const getServiceDescription = (slug: string): string => {
  const service = services.find(s => s.slug === slug);
  return service?.description || "Modern, responsive websites that drive results";
};

// Get service long description based on slug
const getServiceLongDescription = (slug: string): string => {
  const service = services.find(s => s.slug === slug);
  return service?.longDescription || "";
};

export function ServicesSection({
  city,
  scrollToForm,
  serviceSlug = "web-development-company"
}: ServicesSectionProps) {

  // Get service-specific data
  const serviceTitle = getServiceTitle(serviceSlug);
  const serviceDesc = getServiceDescription(serviceSlug);
  const serviceLongDesc = getServiceLongDescription(serviceSlug);

  // Define service features based on the current service
  const getServiceFeatures = (): Array<{ icon: React.ReactNode; title: string; desc: string }> => {
    switch (serviceSlug) {
      case "web-development":
      case "web-development-company":
        return [
          {
            icon: <Code2 className="w-6 h-6" />,
            title: "Custom Web Development",
            desc: "Tailored web solutions using Next.js, React, and modern frameworks for optimal performance and user experience."
          },
          {
            icon: <ShoppingCart className="w-6 h-6" />,
            title: "E-Commerce Development",
            desc: "Feature-rich online stores with secure payment gateways, inventory management, and seamless checkout experiences."
          },
          {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Progressive Web Apps",
            desc: "Mobile-first web applications with offline capabilities, push notifications, and native-like performance."
          },
          {
            icon: <Server className="w-6 h-6" />,
            title: "Backend & API Development",
            desc: "Robust APIs and backend systems with Node.js, Python, and PostgreSQL for scalable, secure data management."
          },
          {
            icon: <Palette className="w-6 h-6" />,
            title: "UI/UX Design",
            desc: "User-centered design with intuitive interfaces, engaging experiences, and conversion-optimized workflows."
          },
          {
            icon: <Rocket className="w-6 h-6" />,
            title: "Cloud & DevOps",
            desc: "Scalable cloud infrastructure with CI/CD pipelines, containerization, and 99.9% uptime guarantee."
          }
        ];

      case "mobile-app-development":
        return [
          {
            icon: <Smartphone className="w-6 h-6" />,
            title: "iOS App Development",
            desc: "Native iOS applications with Swift and SwiftUI, optimized for Apple's ecosystem and user experience."
          },
          {
            icon: <Layout className="w-6 h-6" />,
            title: "Android App Development",
            desc: "Native Android applications with Kotlin and Java, optimized for performance across all Android devices."
          },
          {
            icon: <Globe className="w-6 h-6" />,
            title: "Cross-Platform Development",
            desc: "React Native and Flutter solutions delivering consistent, high-performance apps for both iOS and Android."
          },
          {
            icon: <ShoppingCart className="w-6 h-6" />,
            title: "E-Commerce Mobile Apps",
            desc: "Feature-rich shopping apps with secure payments, personalized recommendations, and real-time tracking."
          },
          {
            icon: <Server className="w-6 h-6" />,
            title: "App Backend Development",
            desc: "Scalable backend solutions with cloud infrastructure and APIs to power your mobile applications."
          },
          {
            icon: <Palette className="w-6 h-6" />,
            title: "Mobile UI/UX Design",
            desc: "User-centric mobile design with intuitive navigation, engaging interfaces, and delightful user experiences."
          }
        ];

      case "saas-platform-development":
        return [
          {
            icon: <Cloud className="w-6 h-6" />,
            title: "Custom SaaS Development",
            desc: "Scalable, multi-tenant SaaS platforms with subscription management and seamless user experiences."
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "B2B SaaS Solutions",
            desc: "Enterprise-grade B2B platforms with team collaboration, role-based access, and advanced analytics."
          },
          {
            icon: <Layout className="w-6 h-6" />,
            title: "B2C SaaS Products",
            desc: "Consumer-focused SaaS applications with intuitive interfaces and engaging user experiences."
          },
          {
            icon: <ShoppingCart className="w-6 h-6" />,
            title: "SaaS E-Commerce",
            desc: "Feature-rich SaaS e-commerce solutions with multi-vendor support and subscription billing."
          },
          {
            icon: <Server className="w-6 h-6" />,
            title: "API-First Architecture",
            desc: "Scalable API-first SaaS architectures with microservices and real-time data synchronization."
          },
          {
            icon: <Palette className="w-6 h-6" />,
            title: "SaaS UI/UX Design",
            desc: "User-centric SaaS design focused on intuitive workflows and delightful user experiences."
          }
        ];

      case "travel-portal-development":
        return [
          {
            icon: <Globe className="w-6 h-6" />,
            title: "Flight Booking System",
            desc: "Real-time flight booking engines with GDS integration and multi-airline support."
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "IRCTC Integration",
            desc: "Seamless railway booking with IRCTC API integration and real-time availability."
          },
          {
            icon: <Building className="w-6 h-6" />,
            title: "Hotel Booking System",
            desc: "Comprehensive hotel booking with real-time availability and multi-property management."
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "B2B & B2C Portals",
            desc: "Complete agent management with commissions, reporting, and multi-level access control."
          },
          {
            icon: <Database className="w-6 h-6" />,
            title: "Payment Integration",
            desc: "Secure payment gateways with multiple currency support and automated invoicing."
          },
          {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Analytics Dashboard",
            desc: "Comprehensive analytics with real-time data, revenue reports, and performance insights."
          }
        ];

      case "ui-ux-design":
        return [
          {
            icon: <Search className="w-6 h-6" />,
            title: "User Research",
            desc: "In-depth user interviews, surveys, and competitive analysis to understand your users deeply."
          },
          {
            icon: <Layout className="w-6 h-6" />,
            title: "Wireframing & Prototyping",
            desc: "Interactive prototypes and wireframes to visualize and test design concepts early."
          },
          {
            icon: <Palette className="w-6 h-6" />,
            title: "Design Systems",
            desc: "Comprehensive design systems with component libraries, style guides, and documentation."
          },
          {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Mobile App Design",
            desc: "Platform-native mobile interfaces following iOS and Android design guidelines."
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Usability Testing",
            desc: "Data-driven design decisions with user testing and iterative feedback loops."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Accessibility Design",
            desc: "WCAG 2.1 compliant designs ensuring your product is usable by people of all abilities."
          }
        ];

      case "cloud-devops":
        return [
          {
            icon: <Cloud className="w-6 h-6" />,
            title: "Multi-Cloud Deployment",
            desc: "AWS, Azure, and GCP deployment with best-in-class architecture and security."
          },
          {
            icon: <Cpu className="w-6 h-6" />,
            title: "Kubernetes Orchestration",
            desc: "Container orchestration with Kubernetes for scalable and resilient applications."
          },
          {
            icon: <Workflow className="w-6 h-6" />,
            title: "CI/CD Pipelines",
            desc: "Automated testing and deployment pipelines for consistent, reliable releases."
          },
          {
            icon: <Database className="w-6 h-6" />,
            title: "Infrastructure as Code",
            desc: "Version-controlled infrastructure with Terraform and CloudFormation."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Cloud Security",
            desc: "Comprehensive security measures including IAM, encryption, and regular audits."
          },
          {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Monitoring & Observability",
            desc: "Real-time monitoring, logging, and alerting with Prometheus, Grafana, and ELK Stack."
          }
        ];

      case "ai-ml-solutions":
        return [
          {
            icon: <Brain className="w-6 h-6" />,
            title: "Machine Learning Models",
            desc: "Custom ML models for classification, regression, and time series forecasting."
          },
          {
            icon: <Search className="w-6 h-6" />,
            title: "NLP Solutions",
            desc: "Natural language processing for sentiment analysis, chatbots, and document understanding."
          },
          {
            icon: <Layout className="w-6 h-6" />,
            title: "Computer Vision",
            desc: "Image classification, object detection, OCR, and facial recognition solutions."
          },
          {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Predictive Analytics",
            desc: "Demand forecasting, churn prediction, risk assessment, and fraud detection."
          },
          {
            icon: <Server className="w-6 h-6" />,
            title: "LLM Integration",
            desc: "Large Language Model integration for content generation and conversational AI."
          },
          {
            icon: <Database className="w-6 h-6" />,
            title: "MLOps Services",
            desc: "Model deployment, monitoring, versioning, and automated retraining pipelines."
          }
        ];

      case "enterprise-software":
        return [
          {
            icon: <Building className="w-6 h-6" />,
            title: "ERP Integration",
            desc: "Seamless integration with SAP, Oracle, and Microsoft Dynamics ERP systems."
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "CRM Solutions",
            desc: "Custom CRM integration with Salesforce and other enterprise CRM platforms."
          },
          {
            icon: <Workflow className="w-6 h-6" />,
            title: "Legacy Modernization",
            desc: "Phased approach to modernize legacy systems with minimal business disruption."
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Workflow Automation",
            desc: "Automated business processes with BPM tools and custom workflow solutions."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Enterprise Security",
            desc: "Role-based access, encryption, audits, and compliance with industry standards."
          },
          {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Analytics & Reporting",
            desc: "BI dashboards with real-time data visualization, KPI monitoring, and custom reports."
          }
        ];

      case "backend-api-development":
        return [
          {
            icon: <Server className="w-6 h-6" />,
            title: "RESTful APIs",
            desc: "Scalable, well-documented REST APIs with comprehensive testing and security."
          },
          {
            icon: <Database className="w-6 h-6" />,
            title: "GraphQL APIs",
            desc: "Flexible GraphQL APIs with efficient resolvers and data loader optimization."
          },
          {
            icon: <Workflow className="w-6 h-6" />,
            title: "Microservices",
            desc: "Independent, scalable microservices with Docker and Kubernetes orchestration."
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Real-Time Systems",
            desc: "WebSocket and SSE implementations for low-latency bidirectional communication."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "API Security",
            desc: "JWT, OAuth2, and RBAC implementation for secure API authentication and authorization."
          },
          {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Database Optimization",
            desc: "Efficient schemas, indexing strategies, caching, and query performance tuning."
          }
        ];

      default:
        return [
          {
            icon: <Code2 className="w-6 h-6" />,
            title: "Custom Development",
            desc: "Tailored solutions built with modern technologies for optimal performance."
          },
          {
            icon: <Rocket className="w-6 h-6" />,
            title: "Scalable Architecture",
            desc: "Future-proof architecture designed for growth and high availability."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Enterprise Security",
            desc: "Comprehensive security measures and compliance with industry standards."
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Performance Optimized",
            desc: "Lightning-fast performance with optimization at every layer."
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "User-Centered Design",
            desc: "Intuitive interfaces designed for exceptional user experiences."
          },
          {
            icon: <Database className="w-6 h-6" />,
            title: "Data Integration",
            desc: "Seamless integration with existing systems and third-party services."
          }
        ];
    }
  };

  const features = getServiceFeatures();

  // Get service title for display
  const displayTitle = serviceTitle.replace(" Company", "");

  return (
    <section id="services" className="relative pt-20 pb-20 lg:pt-28 lg:pb-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-linear-to-br from-blue-500/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-linear-to-tl from-orange-500/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-linear-to-br from-blue-500/5 via-purple-500/5 to-orange-500/5 blur-3xl rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-5xl mx-auto mb-14 space-y-3">
          <SectionBadge icon={<Sparkles className="w-4 h-4 text-yellow-400" />} text="CoderLala Services" />
          <HeadingTitle2 title1={`Expert ${displayTitle}`} title2={`Services in ${city}`} />
          <p className="text-muted-foreground text-md max-w-4xl mx-auto">
            {serviceLongDesc || `From ${displayTitle.toLowerCase()} solutions to comprehensive digital experiences, our <strong className="text-brand">${displayTitle} Company in ${city}</strong> delivers secure, scalable, and high-performance solutions for businesses of all sizes. <br /><br />
            We build modern websites, applications, and digital solutions using the latest technologies to ensure exceptional user experiences, long-term reliability, and future-ready digital solutions. Explore our comprehensive services below to discover how we can help bring your vision to life.`}
          </p>
        </div>

        {/* Feature Grid - 3x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-14">
          {features.map((feature, index) => {
            // Get color for this feature based on service slug
            const colors = serviceColorMap[serviceSlug] || serviceColorMap["web-development-company"];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative p-6 sm:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/60 hover:border-brand/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-linear-to-r from-transparent via-brand/5 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 -z-10" />

                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl ${colors.iconBg} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-2 transition-colors duration-300 group-hover:text-brand">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>

                {/* Hover underline */}
                <div className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-brand to-brand/50 w-0 group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mx-auto">
          <Button
            href="/services"
            icon={<Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />}
            variant="primary"
            className="min-w-50"
          >
            Explore All Services
          </Button>
          <Button
            onClick={scrollToForm}
            icon={<Send className="w-4 h-4 sm:w-5 sm:h-5" />}
            variant="secondary"
            className="min-w-50"
          >
            Get a Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
}