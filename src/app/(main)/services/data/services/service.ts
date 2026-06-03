// data/services/service.ts  ← single source of truth
// Used by: ServicesContent, ServicesOverview, ServiceDetailPage

import {
  Plane,
  Train,
  Bus,
  Workflow,
  Users,
  CreditCard,
  Globe,
  Code2,
  Search,
  Smartphone,
  Zap,
  Cloud,
  Server,
  BarChart3,
  Database,
  Palette,
  Layout,
  Cpu,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface UiFeature {
  text: string;
  icon: LucideIcon;
}

export interface Service {
  id: number;
  slug: string;

  // ── Detail page fields ──────────────────────────────────────────────────────
  title: string;
  headerHeading: string;
  tagline: string;
  description: string;
  longDescription: string;
  /** Lucide icon name string (used by ServiceDetailPage via dynamic lookup) */
  icon: string;
  color: string;
  features: string[];
  benefits: string[];
  technologies: string[];
  delivery: string;
  priceRange: string;
  projectCount: string;
  process: {
    num: string;
    title: string;
    icon?: string;
    desc: string;
    color: "indigo" | "blue" | "cyan" | "teal";
  }[];
  results: { stat: string; label: string }[];
  testimonials: {
    quote: string;
    author: string;
    role: string;
    rating: number;
    imageUrl?: string;
  }[];
  comparisonFeatures: { feature: string; us: boolean; comp: boolean }[];
  caseStudies?: { title: string; description: string; results: string[] }[];
  faqs?: { question: string; answer: string }[];
  seoTitle: string;
  seoDescription: string;

  // ── UI / listing page fields ─────────────────────────────────────────────
  /** Lucide component reference – used in ServicesContent & ServicesOverview */
  iconComponent: LucideIcon;
  /** Tailwind bg class, e.g. "bg-blue-500"  – used in ServicesContent */
  uiColor: string;
  /** Tailwind gradient, e.g. "from-blue-500 to-cyan-500" – used in ServicesOverview */
  gradientColor: string;
  /** Rich feature list with icon components – used in ServicesOverview */
  uiFeatures: UiFeature[];
  /** Optional multi-icon override (travel portal only) */
  uiIcons?: { icon: LucideIcon; color: string }[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const services: Service[] = [
  // ── 0. Travel Portal ────────────────────────────────────────────────────────
  {
    id: 0,
    slug: "travel-portal-development",
    title: "Travel Portal Solutions",
    headerHeading: "Advanced Travel Portal Engineering",
    tagline: "Complete booking systems for modern travel businesses",
    description:
      "Comprehensive booking engines for Air, Rail, and Bus travel with real-time availability and seamless integrations.",
    longDescription:
      "We build advanced travel portal solutions that empower travel agencies and businesses to manage bookings across flights, trains, buses, and hotels in one unified platform. Our systems include real-time inventory, seamless API integrations like IRCTC, and scalable B2B/B2C architectures. Designed for performance and reliability, our travel portals help you streamline operations, increase bookings, and deliver exceptional user experiences.",
    icon: "Globe",
    color: "indigo",
    projectCount: "5+",
    features: [
      "IRCTC API Integration",
      "B2B & B2C Booking Systems",
      "Railway Booking Software",
      "Flight Booking Engine",
      "Bus & Hotel Booking Integration",
      "Payment Gateway Integration",
      "Real-time Availability & Pricing",
      "Admin Dashboard & Reporting",
    ],
    benefits: [
      "Manage all travel bookings in one platform",
      "Increase revenue with real-time inventory",
      "Automate booking and ticketing processes",
      "Scale easily with modular architecture",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Amadeus API",
      "IRCTC API",
      "Stripe",
      "Docker",
    ],
    delivery: "10-16 Weeks",
    priceRange: "₹5,00,000 - ₹50,00,000+",
    process: [
      {
        num: "01",
        title: "Requirement Analysis",
        icon: "Search",
        desc: "Understand your travel business model, target users, and integration requirements like flights, rail, and bus systems.",
        color: "indigo",
      },
      {
        num: "02",
        title: "System Design & Integration Planning",
        icon: "Layout",
        desc: "Design scalable architecture and plan third-party integrations such as IRCTC, flight APIs, and payment gateways.",
        color: "blue",
      },
      {
        num: "03",
        title: "Development & Testing",
        icon: "Code",
        desc: "Develop booking engines, dashboards, and APIs with real-time functionality and rigorous testing.",
        color: "cyan",
      },
      {
        num: "04",
        title: "Deployment & Optimization",
        icon: "Rocket",
        desc: "Deploy the platform, optimize performance, and provide ongoing support and feature enhancements.",
        color: "teal",
      },
    ],
    results: [
      { stat: "200%", label: "Booking Growth" },
      { stat: "99.9%", label: "System Uptime" },
      { stat: "50%", label: "Operational Efficiency" },
      { stat: "24/7", label: "Availability" },
    ],
    testimonials: [
      {
        quote: "Our travel business scaled rapidly after launching this portal. Bookings doubled within months.",
        author: "Rohit Sharma",
        role: "Founder, TravelGo India",
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=rohit",
      },
      {
        quote: "IRCTC and flight API integration was seamless. The system is fast and reliable.",
        author: "Neeraj Gupta",
        role: "Director, SmartTravel",
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=neeraj",
      },
      {
        quote: "The B2B agent module is a game changer. Managing commissions and reports is now effortless.",
        author: "Vikram Malhotra",
        role: "CEO, Global Travels",
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=vikram",
      },
    ],
    comparisonFeatures: [
      { feature: "IRCTC Integration", us: true, comp: true },
      { feature: "Multi-service Booking", us: true, comp: true },
      { feature: "Real-time Inventory", us: true, comp: false },
      { feature: "Custom Admin Panel", us: true, comp: false },
      { feature: "B2B & B2C Support", us: true, comp: false },
      { feature: "Scalable Architecture", us: true, comp: false },
      { feature: "Payment Gateway", us: true, comp: true },
      { feature: "Analytics Dashboard", us: true, comp: false },
    ],
    caseStudies: [
      {
        title: "Travel Portal Launch",
        description: "Developed a full-scale travel booking platform integrating rail, flight, and hotel systems.",
        results: ["200% booking increase", "99.9% uptime", "50% faster booking process"],
      },
    ],
    faqs: [
      {
        question: "Do you provide IRCTC integration?",
        answer: "Yes, we provide IRCTC integration subject to eligibility and compliance requirements.",
      },
      {
        question: "Can I manage B2B agents?",
        answer: "Yes, the system includes a complete B2B agent management module with commissions and reporting.",
      },
    ],
    seoTitle: "Travel Portal Development | Flight, Rail & Bus Booking Software",
    seoDescription:
      "Build a powerful travel portal with flight, IRCTC rail, bus, and hotel booking integration. Scalable B2B & B2C solutions.",

    // UI fields
    iconComponent: Globe,
    uiColor: "bg-indigo-500",
    gradientColor: "from-indigo-500 to-blue-500",
    uiIcons: [
      { icon: Plane, color: "bg-orange-400" },
      { icon: Train, color: "bg-blue-400" },
      { icon: Bus, color: "bg-red-400" },
    ],
    uiFeatures: [
      { text: "IRCTC Software or API Integration", icon: Workflow },
      { text: "B2B & B2C Booking Software", icon: Users },
      { text: "Railway Booking Software", icon: Train },
      { text: "Flight Booking Software", icon: Plane },
      { text: "Bus & Hotel Booking Software", icon: Bus },
      { text: "Payment Gateway Integration", icon: CreditCard },
    ],
  },

  // ── 1. Web Development ───────────────────────────────────────────────────────
  {
    id: 1,
    slug: "web-development",
    title: "Web Development",
    headerHeading: "Full-Stack Web Engineering",
    tagline: "Modern, responsive websites that drive results",
    description:
      "Modern, responsive websites and web applications built with Next.js, React, and cutting-edge frameworks for optimal performance and SEO.",
    longDescription:
      "We create beautiful, high-performing websites that not only look great but also drive business results. Using the latest technologies like Next.js, React, and TypeScript, we build websites that are fast, SEO-friendly, and provide exceptional user experiences across all devices. Our team specializes in creating conversion-optimized web solutions that combine stunning design with powerful functionality.",
    icon: "Code",
    color: "blue",
    projectCount: "25+",
    features: [
      "Next.js/React with TypeScript",
      "SEO Optimization & Performance",
      "Responsive & Mobile-First Design",
      "Advanced Performance Optimization",
      "Headless CMS Integration",
      "E-commerce & Payment Integration",
      "Real-time Analytics & Tracking",
      "Security & SSL Implementation",
    ],
    benefits: [
      "Increase online visibility with SEO-optimized sites",
      "Convert more visitors with engaging user experiences",
      "Scale effortlessly with robust architecture",
      "Save time with easy-to-use content management",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GraphQL", "Vercel", "PostgreSQL"],
    delivery: "8-12 Weeks",
    priceRange: "₹4,00,000 - ₹40,00,000+",
    process: [
      {
        num: "01",
        title: "Discovery & Strategy",
        icon: "Search",
        desc: "We dive deep into understanding your business, market, and goals through comprehensive discovery sessions and competitive analysis.",
        color: "indigo",
      },
      {
        num: "02",
        title: "Design & Planning",
        icon: "Layout",
        desc: "Create detailed wireframes, prototypes, technical specifications, and architecture diagrams tailored to your needs.",
        color: "blue",
      },
      {
        num: "03",
        title: "Development & Testing",
        icon: "Code",
        desc: "Agile sprints with regular demos, continuous testing, and iterative improvements based on your feedback.",
        color: "cyan",
      },
      {
        num: "04",
        title: "Launch & Support",
        icon: "Rocket",
        desc: "Seamless deployment, optimization, training, and ongoing support to ensure smooth adoption and long-term success.",
        color: "teal",
      },
    ],
    results: [
      { stat: "300%", label: "Average ROI" },
      { stat: "250%", label: "Revenue Growth" },
      { stat: "60%", label: "Efficiency Gain" },
      { stat: "98%", label: "Client Satisfaction" },
    ],
    testimonials: [
      {
        quote: "Excellent work and fast delivery took our e-commerce store to new heights. Sales increased by 300%.",
        author: "Rajeev Kumar",
        role: "Founder, TechIndia E-commerce",
        rating: 4,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=rajiv",
      },
      {
        quote: "Exceptional team! They understood our startup's vision and built exactly what we needed. The website loads super fast and converts really well.",
        author: "Priya Sharma",
        role: "CEO, StartUp Delhi",
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya",
      },
      {
        quote: "The work was done professionally, and the support is also excellent. All our requirements were fulfilled on time.",
        author: "Amit Verma",
        role: "Business Director, Mumbai Tech",
        rating: 3,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=amit",
      },
    ],
    comparisonFeatures: [
      { feature: "Expert Team", us: true, comp: true },
      { feature: "24/7 Support", us: true, comp: false },
      { feature: "Transparent Pricing", us: true, comp: false },
      { feature: "Custom Solutions", us: true, comp: false },
      { feature: "Dedicated Account Manager", us: true, comp: false },
      { feature: "Post-Launch Training", us: true, comp: false },
      { feature: "Ongoing Optimization", us: true, comp: false },
      { feature: "Performance Guarantee", us: true, comp: false },
    ],
    caseStudies: [
      {
        title: "E-commerce Platform Revamp",
        description: "Redesigned and rebuilt an e-commerce platform resulting in 300% revenue growth.",
        results: ["300% revenue increase", "40% faster page loads", "50% higher conversion rate"],
      },
    ],
    faqs: [
      {
        question: "What's included in your web development package?",
        answer: "We provide end-to-end development including design, development, SEO setup, performance optimization, and post-launch support.",
      },
      {
        question: "Do you provide ongoing maintenance?",
        answer: "Yes, we offer monthly maintenance plans to keep your website secure, updated, and performing optimally.",
      },
    ],
    seoTitle: "Professional Web Development Services | Next.js & React Experts",
    seoDescription:
      "Get custom web development with Next.js, React, and TypeScript. SEO-optimized, responsive websites that drive business growth.",

    // UI fields
    iconComponent: Globe,
    uiColor: "bg-blue-500",
    gradientColor: "from-blue-500 to-cyan-500",
    uiFeatures: [
      { text: "Next.js / React Development", icon: Code2 },
      { text: "SEO Optimization", icon: Search },
      { text: "PWA Support", icon: Smartphone },
      { text: "High Performance", icon: Zap },
    ],
  },

  // ── 2. Mobile App Development ────────────────────────────────────────────────
  {
    id: 2,
    slug: "mobile-app-development",
    title: "Mobile App Development",
    headerHeading: "Cross-Platform Mobile Engineering",
    tagline: "Cross-platform apps that users love",
    description:
      "Cross-platform mobile applications for iOS & Android using React Native and Flutter for maximum reach and native performance.",
    longDescription:
      "Transform your idea into a stunning mobile app that works seamlessly on both iOS and Android. We use React Native and Flutter to build apps that feel native while saving time and cost. From concept to App Store deployment, we handle every step. Our expertise ensures your app delivers exceptional performance, intuitive UX, and strong user engagement across all devices.",
    icon: "Smartphone",
    color: "purple",
    projectCount: "2+",
    features: [
      "React Native & Flutter Development",
      "iOS & Android Native Compatibility",
      "App Store & Play Store Deployment",
      "Push Notifications & In-app Messaging",
      "Offline Functionality & Sync",
      "Third-party API Integration",
      "Firebase & Analytics Integration",
      "App Store Optimization (ASO)",
    ],
    benefits: [
      "Reach both iOS and Android users with one codebase",
      "Native-like performance without native development cost",
      "Faster time to market with cross-platform development",
      "Easy updates and maintenance",
    ],
    technologies: ["React Native", "Flutter", "Firebase", "GraphQL", "Redux", "Expo", "Native Modules"],
    delivery: "8-14 Weeks",
    priceRange: "₹3,00,000 - ₹25,00,000+",
    process: [
      {
        num: "01",
        title: "App Strategy & Planning",
        icon: "Search",
        desc: "Analyze market opportunity, define features, and create a roadmap for successful app launch.",
        color: "indigo",
      },
      {
        num: "02",
        title: "UI/UX Design",
        icon: "Layout",
        desc: "Design intuitive interfaces optimized for mobile with user research and iterative testing.",
        color: "blue",
      },
      {
        num: "03",
        title: "Development & Integration",
        icon: "Code",
        desc: "Build cross-platform app with secure API integration, backend connectivity, and native features.",
        color: "cyan",
      },
      {
        num: "04",
        title: "App Store Launch & Growth",
        icon: "Rocket",
        desc: "Handle submissions to both stores, optimize listings, and implement growth strategies.",
        color: "teal",
      },
    ],
    results: [
      { stat: "50,000+", label: "Average Downloads" },
      { stat: "4.8/5", label: "Average Rating" },
      { stat: "30%", label: "Monthly Growth" },
      { stat: "98%", label: "Uptime Guarantee" },
    ],
    testimonials: [
      {
        quote: "Excellent UX and fast delivery for our fitness app. Over 50,000 downloads in the very first month!",
        author: "Sumit Agarwal",
        role: "Founder, FitnessPro India",
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=sumit",
      },
      {
        quote: "Deep expertise in both React Native and Flutter. Our team benefited in both time and cost.",
        author: "Neha Mehta",
        role: "Product Head, HealthTech",
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=neha",
      },
      {
        quote: "Best in both user experience and performance. The app has a 4.8-star rating!",
        author: "Rahul Verma",
        role: "CEO, AppWorks India",
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=rahul",
      },
    ],
    comparisonFeatures: [
      { feature: "Cross-Platform Support", us: true, comp: true },
      { feature: "Native Performance", us: true, comp: false },
      { feature: "App Store Submission", us: true, comp: false },
      { feature: "Firebase Integration", us: true, comp: false },
      { feature: "Real-time Support", us: true, comp: false },
      { feature: "Post-Launch Marketing", us: true, comp: false },
      { feature: "Performance Optimization", us: true, comp: false },
      { feature: "Continuous Updates", us: true, comp: false },
    ],
    caseStudies: [
      {
        title: "Fitness App Launch",
        description: "Built a fitness tracking app with 50,000+ downloads in first 6 months.",
        results: ["50,000+ downloads", "4.8-star rating", "30% monthly user growth"],
      },
    ],
    faqs: [
      {
        question: "Should I choose React Native or Flutter?",
        answer:
          "We'll help you choose based on your specific needs. React Native has better native module support, while Flutter offers more consistent UI across platforms.",
      },
      {
        question: "Do you handle app store submissions?",
        answer: "Yes, we handle the entire submission process to both Apple App Store and Google Play Store.",
      },
    ],
    seoTitle: "Mobile App Development | Cross-Platform iOS & Android Apps",
    seoDescription:
      "Expert mobile app development using React Native & Flutter. Build once, deploy everywhere with native performance.",

    // UI fields
    iconComponent: Smartphone,
    uiColor: "bg-orange-500",
    gradientColor: "from-purple-500 to-pink-500",
    uiFeatures: [
      { text: "React Native Development", icon: Code2 },
      { text: "iOS & Android Compatible", icon: Smartphone },
      { text: "App Store Ready", icon: Layout },
      { text: "Push Notifications", icon: Zap },
    ],
  },

  // ── 3. SaaS Platform Development ────────────────────────────────────────────
  {
    id: 3,
    slug: "saas-platform-development",
    title: "SaaS Platform Development",
    headerHeading: "Scalable SaaS Product Engineering",
    tagline: "Scalable software that grows with your business",
    description:
      "End-to-end SaaS solutions with subscription management, multi-tenancy, analytics, and scalable architecture.",
    longDescription:
      "Launch your software business with a robust, scalable SaaS platform. We build complete solutions with subscription billing, user management, analytics dashboards, and enterprise-grade security. Focus on growing your business while we handle the technical complexities. Our SaaS expertise ensures your platform is built on proven architecture that scales seamlessly.",
    icon: "Cloud",
    color: "orange",
    projectCount: "1+",
    features: [
      "Subscription & Billing Systems",
      "Multi-tenant Architecture",
      "Advanced Analytics Dashboard",
      "User Management & RBAC",
      "RESTful & GraphQL APIs",
      "Real-time Collaboration Features",
      "Enterprise Security & Compliance",
      "Auto-scaling Infrastructure",
    ],
    benefits: [
      "Start generating recurring revenue quickly",
      "Scale from 10 to 10,000+ users seamlessly",
      "Comprehensive analytics to understand user behavior",
      "Reduce development costs with proven architecture",
    ],
    technologies: ["Node.js", "PostgreSQL", "Redis", "Stripe", "AWS", "Docker", "Kubernetes"],
    delivery: "12-36 Weeks",
    priceRange: "₹10,00,000 - ₹1,00,00,000+",
    process: [
      {
        num: "01",
        title: "Business & Product Strategy",
        icon: "Search",
        desc: "Define your SaaS business model, revenue strategy, and product roadmap for sustainable growth.",
        color: "indigo",
      },
      {
        num: "02",
        title: "Architecture & Technical Design",
        icon: "Layout",
        desc: "Design scalable multi-tenant architecture with security, compliance, and performance considerations.",
        color: "blue",
      },
      {
        num: "03",
        title: "Build & Iterate",
        icon: "Code",
        desc: "Develop MVP with essential features, then iteratively add capabilities based on user feedback.",
        color: "cyan",
      },
      {
        num: "04",
        title: "Scale & Optimize",
        icon: "Rocket",
        desc: "Deploy production infrastructure, implement monitoring, and optimize for growth and profitability.",
        color: "teal",
      },
    ],
    results: [
      { stat: "10-10K+", label: "User Scalability" },
      { stat: "$100K+", label: "First Year Revenue" },
      { stat: "99.9%", label: "Uptime SLA" },
      { stat: "24/7", label: "Support Available" },
    ],
    testimonials: [
      {
        quote: "Our SaaS platform is scalable and secure, and subscription management is easy. Fantastic team!",
        author: "Ankit Gupta",
        role: "Founder, CloudMetrics India",
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=ankit",
      },
      {
        quote: "Best SaaS architecture and support for Indian startups. Our customers are very happy.",
        author: "Sonali Singh",
        role: "CEO, DataVault Pro",
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=sonali",
      },
      {
        quote: "The dashboard and analytics helped us understand user behavior a lot.",
        author: "Ravi Patel",
        role: "COO, WorkflowAI",
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=ravi",
      },
    ],
    comparisonFeatures: [
      { feature: "Multi-tenant Architecture", us: true, comp: true },
      { feature: "Subscription Billing", us: true, comp: true },
      { feature: "Advanced Analytics", us: true, comp: false },
      { feature: "Real-time Features", us: true, comp: false },
      { feature: "Enterprise Security", us: true, comp: false },
      { feature: "Auto-scaling", us: true, comp: false },
      { feature: "Compliance Ready", us: true, comp: false },
      { feature: "Growth Support", us: true, comp: false },
    ],
    caseStudies: [
      {
        title: "CloudMetrics SaaS Launch",
        description: "Built a complete analytics SaaS platform with subscription billing and multi-tenant architecture.",
        results: ["1000+ users in 6 months", "$500K ARR", "99.95% uptime"],
      },
    ],
    faqs: [
      {
        question: "What's included in your SaaS development?",
        answer:
          "Complete SaaS solution including subscription billing, user management, analytics, API, and cloud infrastructure setup.",
      },
      {
        question: "How do you handle scaling?",
        answer:
          "We use Kubernetes and auto-scaling infrastructure that automatically adjusts resources based on demand, ensuring optimal performance.",
      },
    ],
    seoTitle: "SaaS Platform Development | Custom Software Solutions",
    seoDescription:
      "Build your SaaS business with custom platform development. Subscription management, analytics, and scalable architecture.",

    // UI fields
    iconComponent: Cloud,
    uiColor: "bg-purple-500",
    gradientColor: "from-orange-500 to-red-500",
    uiFeatures: [
      { text: "Subscription Billing", icon: CreditCard },
      { text: "Multi-Tenancy", icon: Workflow },
      { text: "Analytics & Reporting", icon: BarChart3 },
      { text: "API Integration", icon: Server },
    ],
  },

  // ── 4. UI/UX Design ──────────────────────────────────────────────────────────
  {
    id: 4,
    slug: "ui-ux-design",
    title: "UI/UX Design",
    headerHeading: "User Experience & Interface Strategy",
    tagline: "Designs that users love to use",
    description:
      "User-centric design with wireframing, prototyping, and design systems for exceptional user experiences.",
    longDescription:
      "Great design is more than just aesthetics - it's about creating experiences that users love. We combine user research, psychology, and modern design principles to create interfaces that are beautiful, intuitive, and drive business goals. Our design process focuses on solving real user problems and delivering measurable business impact through thoughtful design.",
    icon: "Palette",
    color: "yellow",
    projectCount: "20+",
    features: [
      "User Research & Discovery",
      "Figma & Adobe XD Prototyping",
      "Design Systems & Component Libraries",
      "Interactive Prototyping",
      "Brand Identity Design",
      "Accessibility Compliance (WCAG)",
      "Design-to-Development Handoff",
      "Usability Testing & Iteration",
    ],
    benefits: [
      "Increase conversions with user-friendly designs",
      "Build brand loyalty with consistent experiences",
      "Reduce development time with clear specifications",
      "Meet accessibility standards for wider reach",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Webflow", "Framer"],
    delivery: "4-8 Weeks",
    priceRange: "₹1,00,000 - ₹10,00,000+",
    process: [
      {
        num: "01",
        title: "Discovery & Research",
        icon: "Search",
        desc: "Conduct user interviews, competitive analysis, and market research to understand your users deeply.",
        color: "indigo",
      },
      {
        num: "02",
        title: "Strategy & Ideation",
        icon: "Layout",
        desc: "Create user personas, journey maps, and wireframes to establish the strategic direction.",
        color: "blue",
      },
      {
        num: "03",
        title: "Design & Prototyping",
        icon: "Palette",
        desc: "Develop high-fidelity designs, interactive prototypes, and design systems for consistency.",
        color: "cyan",
      },
      {
        num: "04",
        title: "Testing & Refinement",
        icon: "CheckCircle",
        desc: "Conduct usability testing, gather feedback, and iterate on designs for optimal user experience.",
        color: "teal",
      },
    ],
    results: [
      { stat: "45%", label: "Conversion Increase" },
      { stat: "60%", label: "Task Completion" },
      { stat: "4.2/5", label: "Usability Score" },
      { stat: "90%", label: "User Satisfaction" },
    ],
    testimonials: [
      {
        quote: "Our product's UI/UX has completely changed. Users are much happier now and conversions increased by 45%.",
        author: "Sakshi Sharma",
        role: "Product Manager, RetailTech",
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=sakshi",
      },
      {
        quote: "Best in both design thinking and systems. They created a custom design system for us.",
        author: "Arjun Mehta",
        role: "Design Director, InteractiveStudios",
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=arjun",
      },
      {
        quote: "Professional and collaborative team. The design system made development faster.",
        author: "Priyanka Patel",
        role: "CEO, StartupHub",
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=priyanka",
      },
    ],
    comparisonFeatures: [
      { feature: "User Research", us: true, comp: true },
      { feature: "Design Systems", us: true, comp: false },
      { feature: "Accessibility Focus", us: true, comp: false },
      { feature: "Usability Testing", us: true, comp: false },
      { feature: "Brand Strategy", us: true, comp: false },
      { feature: "Design Handoff", us: true, comp: false },
      { feature: "Continuous Support", us: true, comp: false },
      { feature: "Iteration & Refinement", us: true, comp: false },
    ],
    caseStudies: [
      {
        title: "E-commerce Platform Redesign",
        description: "Redesigned e-commerce UX resulting in improved conversion rates and user satisfaction.",
        results: ["45% conversion increase", "60% task completion rate", "90% user satisfaction"],
      },
    ],
    faqs: [
      {
        question: "What's your design process?",
        answer:
          "We follow a human-centered design process: research, strategy, design, testing, and refinement. This ensures we create designs that truly solve user problems.",
      },
      {
        question: "Do you provide a design system?",
        answer:
          "Yes, we create comprehensive design systems with component libraries that your development team can build from directly.",
      },
    ],
    seoTitle: "UI/UX Design Services | User-Centered Interface Design",
    seoDescription:
      "Professional UI/UX design services. Create beautiful, intuitive interfaces that drive user engagement and conversions.",

    // UI fields
    iconComponent: Palette,
    uiColor: "bg-yellow-500",
    gradientColor: "from-yellow-500 to-amber-500",
    uiFeatures: [
      { text: "Figma / Adobe XD", icon: Palette },
      { text: "Design Systems", icon: Layout },
      { text: "User Research", icon: Search },
      { text: "Rapid Prototyping", icon: Zap },
    ],
  },

  // ── 5. Cloud & DevOps ────────────────────────────────────────────────────────
  {
    id: 5,
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    headerHeading: "Cloud Infrastructure & Automation",
    tagline: "Deploy with confidence, scale with ease",
    description:
      "AWS, Azure, and Google Cloud deployment with CI/CD, containerization, and serverless architecture.",
    longDescription:
      "Ensure your applications are reliable, scalable, and secure with our cloud and DevOps expertise. We implement best practices for infrastructure, automated deployments, monitoring, and disaster recovery so you can focus on building features. Our DevOps solutions provide the foundation for continuous delivery and operational excellence.",
    icon: "Rocket",
    color: "indigo",
    projectCount: "2+",
    features: [
      "AWS, Azure, GCP Deployment",
      "Docker & Kubernetes Orchestration",
      "CI/CD Pipelines & Automation",
      "Infrastructure as Code (Terraform)",
      "Monitoring, Logging & Alerting",
      "Security & Compliance Implementation",
      "Auto-scaling & Load Balancing",
      "Disaster Recovery & Backup",
    ],
    benefits: [
      "Reduce downtime with reliable infrastructure",
      "Scale automatically during traffic spikes",
      "Speed up development with automated deployments",
      "Improve security with best-practice configurations",
    ],
    technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "GitLab CI", "Prometheus"],
    delivery: "4-8 Weeks",
    priceRange: "₹2,00,000 - ₹15,00,000+",
    process: [
      {
        num: "01",
        title: "Cloud Strategy & Assessment",
        icon: "Search",
        desc: "Evaluate your current infrastructure, business needs, and design optimal cloud architecture.",
        color: "indigo",
      },
      {
        num: "02",
        title: "Infrastructure & Automation",
        icon: "Settings",
        desc: "Build infrastructure as code, set up CI/CD pipelines, and containerize your applications.",
        color: "blue",
      },
      {
        num: "03",
        title: "Deployment & Monitoring",
        icon: "Rocket",
        desc: "Deploy applications, implement monitoring, logging, and establish alerting systems.",
        color: "cyan",
      },
      {
        num: "04",
        title: "Optimization & Support",
        icon: "Activity",
        desc: "Continuously monitor performance, optimize costs, and provide ongoing support and maintenance.",
        color: "teal",
      },
    ],
    results: [
      { stat: "99.9%", label: "Uptime Guarantee" },
      { stat: "40%", label: "Cost Reduction" },
      { stat: "70%", label: "Faster Deployments" },
      { stat: "24/7", label: "Monitoring" },
    ],
    testimonials: [
      {
        quote: "With DevOps and cloud migration, our uptime reached 99.9% and costs reduced by 40%.",
        author: "Ajay Singh",
        role: "Tech Lead, SaaS Company",
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=ajay",
      },
      {
        quote: "CI/CD pipeline made deployment very easy and fast. Now we can deploy multiple times a day.",
        author: "Ruchi Agarwal",
        role: "Engineering Manager, FinTech",
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=ruchi",
      },
      {
        quote: "Best in both infrastructure design and security. The team is very professional.",
        author: "Sandeep Mishra",
        role: "CTO, HealthTech",
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=sandeep",
      },
    ],
    comparisonFeatures: [
      { feature: "Multi-cloud Support", us: true, comp: true },
      { feature: "Kubernetes Expertise", us: true, comp: false },
      { feature: "Infrastructure as Code", us: true, comp: false },
      { feature: "CI/CD Automation", us: true, comp: false },
      { feature: "Security Hardening", us: true, comp: false },
      { feature: "Cost Optimization", us: true, comp: false },
      { feature: "24/7 Managed Support", us: true, comp: false },
      { feature: "Disaster Recovery", us: true, comp: false },
    ],
    caseStudies: [
      {
        title: "Cloud Migration & DevOps Setup",
        description: "Migrated legacy infrastructure to AWS with complete DevOps automation.",
        results: ["99.9% uptime", "40% cost reduction", "70% faster deployments"],
      },
    ],
    faqs: [
      {
        question: "Which cloud platform should we choose?",
        answer:
          "We help you evaluate AWS, Azure, and GCP based on your specific requirements, budget, and technical needs. Each has unique strengths.",
      },
      {
        question: "What does managed DevOps include?",
        answer:
          "Managed DevOps includes infrastructure management, CI/CD pipeline maintenance, monitoring, security updates, and 24/7 support.",
      },
    ],
    seoTitle: "Cloud & DevOps Services | AWS, Azure, GCP Experts",
    seoDescription:
      "Professional cloud infrastructure and DevOps services. Reliable, scalable, and secure deployment solutions.",

    // UI fields
    iconComponent: Cpu,
    uiColor: "bg-indigo-500",
    gradientColor: "from-indigo-500 to-blue-500",
    uiFeatures: [
      { text: "Cloud Deployment", icon: Cloud },
      { text: "Docker & Kubernetes", icon: Cpu },
      { text: "CI/CD Pipelines", icon: Workflow },
      { text: "Serverless", icon: Zap },
    ],
  },

  // ── 6. AI & ML Solutions ─────────────────────────────────────────────────────
  {
    id: 6,
    slug: "ai-ml-solutions",
    title: "AI & ML Solutions",
    headerHeading: "Intelligent AI Systems Engineering",
    tagline: "Transform data into intelligent insights",
    description:
      "Intelligent systems with machine learning, natural language processing, and predictive analytics.",
    longDescription:
      "Leverage the power of artificial intelligence to solve complex business problems. From predictive analytics to natural language processing, we build custom AI solutions that provide competitive advantages and automate decision-making. Our AI expertise helps you unlock hidden value in your data and create smarter, more responsive systems.",
    icon: "Brain",
    color: "cyan",
    projectCount: "0",
    features: [
      "Custom Machine Learning Models",
      "Natural Language Processing (NLP)",
      "Computer Vision & Image Recognition",
      "Predictive Analytics & Forecasting",
      "Chatbots & Virtual Assistants",
      "Recommendation Systems",
      "Data Pipeline & ETL",
      "Model Training & Optimization",
    ],
    benefits: [
      "Automate repetitive tasks and decision-making",
      "Gain insights from unstructured data",
      "Personalize user experiences at scale",
      "Improve accuracy with predictive models",
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "scikit-learn", "AWS ML"],
    delivery: "12-20 Weeks",
    priceRange: "₹5,00,000 - ₹50,00,000+",
    process: [
      {
        num: "01",
        title: "Problem Definition & Data Analysis",
        icon: "Search",
        desc: "Understand your business challenge, assess data quality, and define success metrics.",
        color: "indigo",
      },
      {
        num: "02",
        title: "Model Development & Training",
        icon: "Brain",
        desc: "Build and train machine learning models using best practices and your historical data.",
        color: "blue",
      },
      {
        num: "03",
        title: "Integration & Deployment",
        icon: "Cpu",
        desc: "Integrate AI models into your systems with proper APIs and ensure reliable performance.",
        color: "cyan",
      },
      {
        num: "04",
        title: "Monitoring & Improvement",
        icon: "LineChart",
        desc: "Monitor model performance, retrain with new data, and continuously improve accuracy.",
        color: "teal",
      },
    ],
    results: [
      { stat: "85%", label: "Accuracy Rate" },
      { stat: "10x", label: "Speed Improvement" },
      { stat: "$500K+", label: "Cost Savings" },
      { stat: "100%", label: "Automation" },
    ],
    testimonials: [
      {
        quote: "AI solutions brought tremendous improvement in our data analysis. Saved lakhs!",
        author: "Dr. Priya Mehta",
        role: "Chief Data Officer, Analytics Corp India",
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya",
      },
      {
        quote: "Machine learning models made our business decisions smarter.",
        author: "Rakesh Kumar",
        role: "CEO, InsurTech",
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=rakesh",
      },
      {
        quote: "With the NLP chatbot, 80% of support is now automated, and customer satisfaction is high!",
        author: "Suman Gupta",
        role: "VP Customer Success, SupportAI",
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=suman",
      },
    ],
    comparisonFeatures: [
      { feature: "Machine Learning Models", us: true, comp: true },
      { feature: "Custom Algorithms", us: true, comp: false },
      { feature: "NLP & Computer Vision", us: true, comp: false },
      { feature: "Production Ready", us: true, comp: false },
      { feature: "Continuous Improvement", us: true, comp: false },
      { feature: "Model Interpretability", us: true, comp: false },
      { feature: "Data Privacy", us: true, comp: false },
      { feature: "Scalable Infrastructure", us: true, comp: false },
    ],
    caseStudies: [
      {
        title: "Predictive Analytics Implementation",
        description: "Built machine learning models for demand forecasting resulting in significant cost savings.",
        results: ["85% forecast accuracy", "$500K annual savings", "10x faster analysis"],
      },
    ],
    faqs: [
      {
        question: "Do you have experience with our industry?",
        answer:
          "We've worked with various industries including finance, healthcare, e-commerce, and insurance. We can leverage domain knowledge to build effective AI solutions.",
      },
      {
        question: "How much data do we need?",
        answer:
          "Ideally 1000+ quality data points, but we can start with less and grow the model as you collect more data. Data quality matters more than quantity.",
      },
    ],
    seoTitle: "AI & ML Solutions | Custom Artificial Intelligence Development",
    seoDescription:
      "Custom AI and machine learning solutions. Predictive analytics, NLP, computer vision, and intelligent automation.",

    // UI fields
    iconComponent: Zap,
    uiColor: "bg-cyan-500",
    gradientColor: "from-cyan-500 to-blue-500",
    uiFeatures: [
      { text: "ML Models", icon: Cpu },
      { text: "NLP Systems", icon: Code2 },
      { text: "Computer Vision", icon: Search },
      { text: "Predictive Analytics", icon: BarChart3 },
    ],
  },

  // ── 7. Enterprise Software ───────────────────────────────────────────────────
  {
    id: 7,
    slug: "enterprise-software",
    title: "Enterprise Software",
    headerHeading: "Custom Business Systems Engineering",
    tagline: "Custom solutions for complex business needs",
    description:
      "Custom enterprise solutions with ERP, CRM integration, legacy system modernization, and workflow automation.",
    longDescription:
      "Streamline complex business operations with custom enterprise software. We build solutions that integrate with existing systems, automate workflows, and provide comprehensive analytics for data-driven decision making. Our enterprise expertise ensures your solution is built for reliability, scalability, and long-term maintainability.",
    icon: "Building",
    color: "violet",
    projectCount: "3+",
    features: [
      "ERP & CRM Integration",
      "Legacy System Modernization",
      "Workflow Automation & BPM",
      "Data Migration & ETL",
      "Enterprise Security & Compliance",
      "Reporting & BI Analytics",
      "Multi-system Integration",
      "Custom Reporting Dashboards",
    ],
    benefits: [
      "Streamline complex business operations",
      "Improve data accuracy and accessibility",
      "Reduce manual work with automation",
      "Ensure compliance with industry regulations",
    ],
    technologies: [".NET", "Java", "Oracle", "Salesforce", "SAP", "Microsoft Dynamics", "PostgreSQL"],
    delivery: "12-24 Weeks",
    priceRange: "₹15,00,000 - ₹2,00,00,000+",
    process: [
      {
        num: "01",
        title: "Enterprise Assessment",
        icon: "Search",
        desc: "Analyze current systems, workflows, pain points, and requirements for the new solution.",
        color: "indigo",
      },
      {
        num: "02",
        title: "System Design & Planning",
        icon: "Layout",
        desc: "Design enterprise architecture, data models, security, and integration strategy.",
        color: "blue",
      },
      {
        num: "03",
        title: "Development & Integration",
        icon: "Code",
        desc: "Build custom software and integrate with existing ERP, CRM, and legacy systems.",
        color: "cyan",
      },
      {
        num: "04",
        title: "Deployment & Training",
        icon: "Users",
        desc: "Migrate data, deploy system, train users, and provide ongoing support.",
        color: "teal",
      },
    ],
    results: [
      { stat: "80%", label: "Automation" },
      { stat: "50%", label: "Manual Work Reduced" },
      { stat: "99%", label: "Data Accuracy" },
      { stat: "24/7", label: "Support" },
    ],
    testimonials: [
      {
        quote: "They made our legacy system modern and integrated. Operations 50% more efficient.",
        author: "Abhishek Sharma",
        role: "CIO, Manufacturing Corp India",
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=abhishek",
      },
      {
        quote: "With the custom ERP solution, workflow is automated and data is accurate.",
        author: "Jyoti Singh",
        role: "Operations Director, Distribution Company",
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=jyoti",
      },
      {
        quote: "Best in both enterprise software and support. We got a scalable solution.",
        author: "Manish Gupta",
        role: "CEO, Financial Services",
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=manish",
      },
    ],
    comparisonFeatures: [
      { feature: "ERP Integration", us: true, comp: true },
      { feature: "Legacy Modernization", us: true, comp: false },
      { feature: "Workflow Automation", us: true, comp: false },
      { feature: "Custom Solutions", us: true, comp: false },
      { feature: "Enterprise Security", us: true, comp: false },
      { feature: "Compliance Ready", us: true, comp: false },
      { feature: "Dedicated Support", us: true, comp: false },
      { feature: "Scalable Architecture", us: true, comp: false },
    ],
    caseStudies: [
      {
        title: "Legacy System Modernization",
        description: "Modernized legacy enterprise systems and integrated with modern cloud infrastructure.",
        results: ["80% automation achieved", "50% reduction in manual work", "99% data accuracy"],
      },
    ],
    faqs: [
      {
        question: "Can you integrate with our existing ERP system?",
        answer:
          "Yes, we specialize in integrating with major ERP systems like SAP, Oracle, and Dynamics. We handle all data migration and system integration.",
      },
      {
        question: "How do you handle data migration?",
        answer:
          "We use proven ETL processes with thorough data validation, transformation, and reconciliation to ensure zero data loss.",
      },
    ],
    seoTitle: "Enterprise Software Development | Custom Business Solutions",
    seoDescription:
      "Custom enterprise software development. ERP/CRM integration, legacy modernization, and workflow automation.",

    // UI fields
    iconComponent: Workflow,
    uiColor: "bg-violet-500",
    gradientColor: "from-violet-500 to-purple-500",
    uiFeatures: [
      { text: "ERP / CRM Integration", icon: Database },
      { text: "Legacy Migration", icon: Workflow },
      { text: "Custom Solutions", icon: Code2 },
      { text: "Enterprise Support", icon: Zap },
    ],
  },

  // ── 8. Backend & API Development ─────────────────────────────────────────────
  {
    id: 8,
    slug: "backend-api-development",
    title: "Backend & API Development",
    headerHeading: "Server-Side Architecture & APIs",
    tagline: "Powerful engines for your applications",
    description:
      "Robust backend systems with Node.js, Python, Go, and microservices architecture for enterprise needs.",
    longDescription:
      "Build the powerful backend that drives your application's performance and reliability. We create scalable APIs, microservices architectures, and database systems that handle millions of requests while maintaining security and performance. Our backend expertise ensures your system is built for scale, reliability, and future growth.",
    icon: "Server",
    color: "green",
    projectCount: "30+",
    features: [
      "Node.js, Python, Go Backends",
      "REST & GraphQL API Development",
      "Microservices Architecture",
      "Database Design & Optimization",
      "Authentication & Authorization",
      "Real-time Communication (WebSockets)",
      "API Versioning & Documentation",
      "Performance & Security Optimization",
    ],
    benefits: [
      "Handle high traffic with scalable architecture",
      "Improve performance with optimized databases",
      "Enable third-party integrations with robust APIs",
      "Ensure data security with enterprise-grade practices",
    ],
    technologies: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "Docker"],
    delivery: "6-10 Weeks",
    priceRange: "₹3,00,000 - ₹20,00,000+",
    process: [
      {
        num: "01",
        title: "Requirements & Architecture",
        icon: "Search",
        desc: "Define API specifications, database schema, and system architecture for scalability.",
        color: "indigo",
      },
      {
        num: "02",
        title: "API & Backend Development",
        icon: "Server",
        desc: "Build robust APIs, implement business logic, and integrate with databases and services.",
        color: "blue",
      },
      {
        num: "03",
        title: "Testing & Security",
        icon: "ShieldCheck",
        desc: "Perform comprehensive testing, implement security measures, and optimize performance.",
        color: "cyan",
      },
      {
        num: "04",
        title: "Deployment & Monitoring",
        icon: "Rocket",
        desc: "Deploy to production, set up monitoring, logging, and provide ongoing support.",
        color: "teal",
      },
    ],
    results: [
      { stat: "1M+", label: "Requests/Day" },
      { stat: "99.99%", label: "Uptime" },
      { stat: "< 100ms", label: "Response Time" },
      { stat: "0", label: "Data Loss" },
    ],
    testimonials: [
      {
        quote: "They built scalable and fast APIs for our platform. Millions of requests are handled without any issues.",
        author: "Vikram Singh",
        role: "Lead Architect, FinTech India",
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=vikram",
      },
      {
        quote: "With microservices architecture, every component scales independently. Best solution for our platform.",
        author: "Sneha Kapoor",
        role: "VP Engineering, E-commerce India",
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=sneha",
      },
      {
        quote: "Professional backend development and API documentation. Integration was very smooth.",
        author: "Deepak Jain",
        role: "CTO, SaaS Company",
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=deepak",
      },
    ],
    comparisonFeatures: [
      { feature: "Microservices Design", us: true, comp: true },
      { feature: "GraphQL Support", us: true, comp: false },
      { feature: "Real-time APIs", us: true, comp: false },
      { feature: "Database Optimization", us: true, comp: false },
      { feature: "Security Hardening", us: true, comp: false },
      { feature: "API Documentation", us: true, comp: false },
      { feature: "Performance Guaranteed", us: true, comp: false },
      { feature: "Scalability Ready", us: true, comp: false },
    ],
    caseStudies: [
      {
        title: "High-Performance API Platform",
        description: "Built microservices backend handling 1M+ requests daily with 99.99% uptime.",
        results: ["1M+ daily requests", "99.99% uptime", "< 100ms response time"],
      },
    ],
    faqs: [
      {
        question: "Should we choose REST or GraphQL?",
        answer:
          "We recommend GraphQL for complex, rapidly evolving APIs and REST for simple, stable APIs. We can help you choose based on your needs.",
      },
      {
        question: "How do you handle database optimization?",
        answer:
          "We design efficient schemas, use proper indexing, implement caching strategies, and continuously monitor and optimize query performance.",
      },
    ],
    seoTitle: "Backend & API Development | Scalable Server Architecture",
    seoDescription:
      "Expert backend and API development. Build scalable, secure, and high-performance server-side solutions.",

    // UI fields
    iconComponent: Server,
    uiColor: "bg-green-500",
    gradientColor: "from-green-500 to-emerald-500",
    uiFeatures: [
      { text: "Node.js / Python / Go", icon: Code2 },
      { text: "Microservices", icon: Workflow },
      { text: "REST / GraphQL APIs", icon: Globe },
      { text: "Database Design", icon: Database },
    ],
  },
];