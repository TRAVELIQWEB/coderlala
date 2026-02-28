// data/services.ts
export interface Service {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: string; // Lucide icon name
  color: string;
  features: string[];
  benefits: string[];
  technologies: string[];
  delivery: string;
  priceRange: string;
  projectCount: string; // Number of projects completed
  process: {
    num: string;
    title: string;
    desc: string;
  }[];
  results: {
    stat: string;
    label: string;
  }[];
  testimonials: {
    quote: string;
    author: string;
    role: string;
    rating: number;
    imageUrl?: string;
  }[];
  comparisonFeatures: {
    feature: string;
    us: boolean;
    comp: boolean;
  }[];
  caseStudies?: {
    title: string;
    description: string;
    results: string[];
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  seoTitle: string;
  seoDescription: string;
}

export const services: Service[] = [
  {
    id: 1,
    slug: "web-development",
    title: "Web Development",
    tagline: "Modern, responsive websites that drive results",
    description: "Modern, responsive websites and web applications built with Next.js, React, and cutting-edge frameworks for optimal performance and SEO.",
    longDescription: "We create beautiful, high-performing websites that not only look great but also drive business results. Using the latest technologies like Next.js, React, and TypeScript, we build websites that are fast, SEO-friendly, and provide exceptional user experiences across all devices. Our team specializes in creating conversion-optimized web solutions that combine stunning design with powerful functionality.",
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
      "Security & SSL Implementation"
    ],
    benefits: [
      "Increase online visibility with SEO-optimized sites",
      "Convert more visitors with engaging user experiences",
      "Scale effortlessly with robust architecture",
      "Save time with easy-to-use content management"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GraphQL", "Vercel", "PostgreSQL"],
    delivery: "8-12 Weeks",
    priceRange: "₹4,00,000 - ₹40,00,000+",
    process: [
      { num: "01", title: "Discovery & Strategy", desc: "We dive deep into understanding your business, market, and goals through comprehensive discovery sessions and competitive analysis." },
      { num: "02", title: "Design & Planning", desc: "Create detailed wireframes, prototypes, technical specifications, and architecture diagrams tailored to your needs." },
      { num: "03", title: "Development & Testing", desc: "Agile sprints with regular demos, continuous testing, and iterative improvements based on your feedback." },
      { num: "04", title: "Launch & Support", desc: "Seamless deployment, optimization, training, and ongoing support to ensure smooth adoption and long-term success." }
    ],
    results: [
      { stat: "300%", label: "Average ROI" },
      { stat: "250%", label: "Revenue Growth" },
      { stat: "60%", label: "Efficiency Gain" },
      { stat: "98%", label: "Client Satisfaction" }
    ],
    testimonials: [
      {
        quote: "Excellent work and fast delivery took our e-commerce store to new heights. Sales increased by 300%.",
        author: "Rajeev Kumar",
        role: "Founder, TechIndia E-commerce", // Changed from Hindi to English
        rating: 4,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=rajiv"
      },
      {
        quote: "Exceptional team! They understood our startup's vision and built exactly what we needed. The website loads super fast and converts really well.",
        author: "Priya Sharma",
        role: "CEO, StartUp Delhi", // Changed from Hindi to English
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya"
      },
      {
        quote: "The work was done professionally, and the support is also excellent. All our requirements were fulfilled on time.",
        author: "Amit Verma",
        role: "Business Director, Mumbai Tech", // Changed from Hindi to English
        rating: 3,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=amit"
      }
    ],
    comparisonFeatures: [
      { feature: "Expert Team", us: true, comp: true },
      { feature: "24/7 Support", us: true, comp: false },
      { feature: "Transparent Pricing", us: true, comp: false },
      { feature: "Custom Solutions", us: true, comp: false },
      { feature: "Dedicated Account Manager", us: true, comp: false },
      { feature: "Post-Launch Training", us: true, comp: false },
      { feature: "Ongoing Optimization", us: true, comp: false },
      { feature: "Performance Guarantee", us: true, comp: false }
    ],
    caseStudies: [
      {
        title: "E-commerce Platform Revamp",
        description: "Redesigned and rebuilt an e-commerce platform resulting in 300% revenue growth.",
        results: ["300% revenue increase", "40% faster page loads", "50% higher conversion rate"]
      }
    ],
    faqs: [
      {
        question: "What's included in your web development package?",
        answer: "We provide end-to-end development including design, development, SEO setup, performance optimization, and post-launch support."
      },
      {
        question: "Do you provide ongoing maintenance?",
        answer: "Yes, we offer monthly maintenance plans to keep your website secure, updated, and performing optimally."
      }
    ],
    seoTitle: "Professional Web Development Services | Next.js & React Experts",
    seoDescription: "Get custom web development with Next.js, React, and TypeScript. SEO-optimized, responsive websites that drive business growth."
  },
  {
    id: 2,
    slug: "mobile-app-development",
    title: "Mobile App Development",
    tagline: "Cross-platform apps that users love",
    description: "Cross-platform mobile applications for iOS & Android using React Native and Flutter for maximum reach and native performance.",
    longDescription: "Transform your idea into a stunning mobile app that works seamlessly on both iOS and Android. We use React Native and Flutter to build apps that feel native while saving time and cost. From concept to App Store deployment, we handle every step. Our expertise ensures your app delivers exceptional performance, intuitive UX, and strong user engagement across all devices.",
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
      "App Store Optimization (ASO)"
    ],
    benefits: [
      "Reach both iOS and Android users with one codebase",
      "Native-like performance without native development cost",
      "Faster time to market with cross-platform development",
      "Easy updates and maintenance"
    ],
    technologies: ["React Native", "Flutter", "Firebase", "GraphQL", "Redux", "Expo", "Native Modules"],
    delivery: "8-14 Weeks",
    priceRange: "₹3,00,000 - ₹25,00,000+",
    process: [
      { num: "01", title: "App Strategy & Planning", desc: "Analyze market opportunity, define features, and create a roadmap for successful app launch." },
      { num: "02", title: "UI/UX Design", desc: "Design intuitive interfaces optimized for mobile with user research and iterative testing." },
      { num: "03", title: "Development & Integration", desc: "Build cross-platform app with secure API integration, backend connectivity, and native features." },
      { num: "04", title: "App Store Launch & Growth", desc: "Handle submissions to both stores, optimize listings, and implement growth strategies." }
    ],
    results: [
      { stat: "50,000+", label: "Average Downloads" },
      { stat: "4.8/5", label: "Average Rating" },
      { stat: "30%", label: "Monthly Growth" },
      { stat: "98%", label: "Uptime Guarantee" }
    ],
    testimonials: [
      {
        quote: "Excellent UX and fast delivery for our fitness app. Over 50,000 downloads in the very first month!",
        author: "Sumit Agarwal",
        role: "Founder, FitnessPro India", // Changed from Hindi to English
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=sumit"
      },
      {
        quote: "Deep expertise in both React Native and Flutter. Our team benefited in both time and cost.",
        author: "Neha Mehta",
        role: "Product Head, HealthTech", // Changed from Hindi to English
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=neha"
      },
      {
        quote: "Best in both user experience and performance. The app has a 4.8-star rating!",
        author: "Rahul Verma",
        role: "CEO, AppWorks India", // Changed from Hindi to English
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=rahul"
      }
    ],
    comparisonFeatures: [
      { feature: "Cross-Platform Support", us: true, comp: true },
      { feature: "Native Performance", us: true, comp: false },
      { feature: "App Store Submission", us: true, comp: false },
      { feature: "Firebase Integration", us: true, comp: false },
      { feature: "Real-time Support", us: true, comp: false },
      { feature: "Post-Launch Marketing", us: true, comp: false },
      { feature: "Performance Optimization", us: true, comp: false },
      { feature: "Continuous Updates", us: true, comp: false }
    ],
    caseStudies: [
      {
        title: "Fitness App Launch",
        description: "Built a fitness tracking app with 50,000+ downloads in first 6 months.",
        results: ["50,000+ downloads", "4.8-star rating", "30% monthly user growth"]
      }
    ],
    faqs: [
      {
        question: "Should I choose React Native or Flutter?",
        answer: "We'll help you choose based on your specific needs. React Native has better native module support, while Flutter offers more consistent UI across platforms."
      },
      {
        question: "Do you handle app store submissions?",
        answer: "Yes, we handle the entire submission process to both Apple App Store and Google Play Store."
      }
    ],
    seoTitle: "Mobile App Development | Cross-Platform iOS & Android Apps",
    seoDescription: "Expert mobile app development using React Native & Flutter. Build once, deploy everywhere with native performance."
  },
  {
    id: 3,
    slug: "saas-platform-development",
    title: "SaaS Platform Development",
    tagline: "Scalable software that grows with your business",
    description: "End-to-end SaaS solutions with subscription management, multi-tenancy, analytics, and scalable architecture.",
    longDescription: "Launch your software business with a robust, scalable SaaS platform. We build complete solutions with subscription billing, user management, analytics dashboards, and enterprise-grade security. Focus on growing your business while we handle the technical complexities. Our SaaS expertise ensures your platform is built on proven architecture that scales seamlessly.",
    icon: "Cloud",
    color: "indigo",
    projectCount: "1+",
    features: [
      "Subscription & Billing Systems",
      "Multi-tenant Architecture",
      "Advanced Analytics Dashboard",
      "User Management & RBAC",
      "RESTful & GraphQL APIs",
      "Real-time Collaboration Features",
      "Enterprise Security & Compliance",
      "Auto-scaling Infrastructure"
    ],
    benefits: [
      "Start generating recurring revenue quickly",
      "Scale from 10 to 10,000+ users seamlessly",
      "Comprehensive analytics to understand user behavior",
      "Reduce development costs with proven architecture"
    ],
    technologies: ["Node.js", "PostgreSQL", "Redis", "Stripe", "AWS", "Docker", "Kubernetes"],
    delivery: "12-36 Weeks",
    priceRange: "₹10,00,000 - ₹1,00,00,000+",
    process: [
      { num: "01", title: "Business & Product Strategy", desc: "Define your SaaS business model, revenue strategy, and product roadmap for sustainable growth." },
      { num: "02", title: "Architecture & Technical Design", desc: "Design scalable multi-tenant architecture with security, compliance, and performance considerations." },
      { num: "03", title: "Build & Iterate", desc: "Develop MVP with essential features, then iteratively add capabilities based on user feedback." },
      { num: "04", title: "Scale & Optimize", desc: "Deploy production infrastructure, implement monitoring, and optimize for growth and profitability." }
    ],
    results: [
      { stat: "10-10K+", label: "User Scalability" },
      { stat: "$100K+", label: "First Year Revenue" },
      { stat: "99.9%", label: "Uptime SLA" },
      { stat: "24/7", label: "Support Available" }
    ],
    testimonials: [
      {
        quote: "Our SaaS platform is scalable and secure, and subscription management is easy. Fantastic team!",
        author: "Ankit Gupta",
        role: "Founder, CloudMetrics India", // Changed from Hindi to English
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=ankit"
      },
      {
        quote: "Best SaaS architecture and support for Indian startups. Our customers are very happy.",
        author: "Sonali Singh",
        role: "CEO, DataVault Pro", // Changed from Hindi to English
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=sonali"
      },
      {
        quote: "The dashboard and analytics helped us understand user behavior a lot.",
        author: "Ravi Patel",
        role: "COO, WorkflowAI", // Changed from Hindi to English
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=ravi"
      }
    ],
    comparisonFeatures: [
      { feature: "Multi-tenant Architecture", us: true, comp: true },
      { feature: "Subscription Billing", us: true, comp: true },
      { feature: "Advanced Analytics", us: true, comp: false },
      { feature: "Real-time Features", us: true, comp: false },
      { feature: "Enterprise Security", us: true, comp: false },
      { feature: "Auto-scaling", us: true, comp: false },
      { feature: "Compliance Ready", us: true, comp: false },
      { feature: "Growth Support", us: true, comp: false }
    ],
    caseStudies: [
      {
        title: "CloudMetrics SaaS Launch",
        description: "Built a complete analytics SaaS platform with subscription billing and multi-tenant architecture.",
        results: ["1000+ users in 6 months", "$500K ARR", "99.95% uptime"]
      }
    ],
    faqs: [
      {
        question: "What's included in your SaaS development?",
        answer: "Complete SaaS solution including subscription billing, user management, analytics, API, and cloud infrastructure setup."
      },
      {
        question: "How do you handle scaling?",
        answer: "We use Kubernetes and auto-scaling infrastructure that automatically adjusts resources based on demand, ensuring optimal performance."
      }
    ],
    seoTitle: "SaaS Platform Development | Custom Software Solutions",
    seoDescription: "Build your SaaS business with custom platform development. Subscription management, analytics, and scalable architecture."
  },
  {
    id: 4,
    slug: "ui-ux-design",
    title: "UI/UX Design",
    tagline: "Designs that users love to use",
    description: "User-centric design with wireframing, prototyping, and design systems for exceptional user experiences.",
    longDescription: "Great design is more than just aesthetics - it's about creating experiences that users love. We combine user research, psychology, and modern design principles to create interfaces that are beautiful, intuitive, and drive business goals. Our design process focuses on solving real user problems and delivering measurable business impact through thoughtful design.",
    icon: "Palette",
    color: "pink",
    projectCount: "20+",
    features: [
      "User Research & Discovery",
      "Figma & Adobe XD Prototyping",
      "Design Systems & Component Libraries",
      "Interactive Prototyping",
      "Brand Identity Design",
      "Accessibility Compliance (WCAG)",
      "Design-to-Development Handoff",
      "Usability Testing & Iteration"
    ],
    benefits: [
      "Increase conversions with user-friendly designs",
      "Build brand loyalty with consistent experiences",
      "Reduce development time with clear specifications",
      "Meet accessibility standards for wider reach"
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Webflow", "Framer"],
    delivery: "4-8 Weeks",
    priceRange: "₹1,00,000 - ₹10,00,000+",
    process: [
      { num: "01", title: "Discovery & Research", desc: "Conduct user interviews, competitive analysis, and market research to understand your users deeply." },
      { num: "02", title: "Strategy & Ideation", desc: "Create user personas, journey maps, and wireframes to establish the strategic direction." },
      { num: "03", title: "Design & Prototyping", desc: "Develop high-fidelity designs, interactive prototypes, and design systems for consistency." },
      { num: "04", title: "Testing & Refinement", desc: "Conduct usability testing, gather feedback, and iterate on designs for optimal user experience." }
    ],
    results: [
      { stat: "45%", label: "Conversion Increase" },
      { stat: "60%", label: "Task Completion" },
      { stat: "4.2/5", label: "Usability Score" },
      { stat: "90%", label: "User Satisfaction" }
    ],
    testimonials: [
      {
        quote: "Our product's UI/UX has completely changed. Users are much happier now and conversions increased by 45%.",
        author: "Sakshi Sharma",
        role: "Product Manager, RetailTech", // Changed from Hindi to English
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=sakshi"
      },
      {
        quote: "Best in both design thinking and systems. They created a custom design system for us.",
        author: "Arjun Mehta",
        role: "Design Director, InteractiveStudios", // Changed from Hindi to English
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=arjun"
      },
      {
        quote: "Professional and collaborative team. The design system made development faster.",
        author: "Priyanka Patel",
        role: "CEO, StartupHub", // Changed from Hindi to English
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=priyanka"
      }
    ],
    comparisonFeatures: [
      { feature: "User Research", us: true, comp: true },
      { feature: "Design Systems", us: true, comp: false },
      { feature: "Accessibility Focus", us: true, comp: false },
      { feature: "Usability Testing", us: true, comp: false },
      { feature: "Brand Strategy", us: true, comp: false },
      { feature: "Design Handoff", us: true, comp: false },
      { feature: "Continuous Support", us: true, comp: false },
      { feature: "Iteration & Refinement", us: true, comp: false }
    ],
    caseStudies: [
      {
        title: "E-commerce Platform Redesign",
        description: "Redesigned e-commerce UX resulting in improved conversion rates and user satisfaction.",
        results: ["45% conversion increase", "60% task completion rate", "90% user satisfaction"]
      }
    ],
    faqs: [
      {
        question: "What's your design process?",
        answer: "We follow a human-centered design process: research, strategy, design, testing, and refinement. This ensures we create designs that truly solve user problems."
      },
      {
        question: "Do you provide a design system?",
        answer: "Yes, we create comprehensive design systems with component libraries that your development team can build from directly."
      }
    ],
    seoTitle: "UI/UX Design Services | User-Centered Interface Design",
    seoDescription: "Professional UI/UX design services. Create beautiful, intuitive interfaces that drive user engagement and conversions."
  },
  {
    id: 5,
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    tagline: "Deploy with confidence, scale with ease",
    description: "AWS, Azure, and Google Cloud deployment with CI/CD, containerization, and serverless architecture.",
    longDescription: "Ensure your applications are reliable, scalable, and secure with our cloud and DevOps expertise. We implement best practices for infrastructure, automated deployments, monitoring, and disaster recovery so you can focus on building features. Our DevOps solutions provide the foundation for continuous delivery and operational excellence.",
    icon: "Rocket",
    color: "orange",
    projectCount: "2+",
    features: [
      "AWS, Azure, GCP Deployment",
      "Docker & Kubernetes Orchestration",
      "CI/CD Pipelines & Automation",
      "Infrastructure as Code (Terraform)",
      "Monitoring, Logging & Alerting",
      "Security & Compliance Implementation",
      "Auto-scaling & Load Balancing",
      "Disaster Recovery & Backup"
    ],
    benefits: [
      "Reduce downtime with reliable infrastructure",
      "Scale automatically during traffic spikes",
      "Speed up development with automated deployments",
      "Improve security with best-practice configurations"
    ],
    technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "GitLab CI", "Prometheus"],
    delivery: "4-8 Weeks",
    priceRange: "₹2,00,000 - ₹15,00,000+",
    process: [
      { num: "01", title: "Cloud Strategy & Assessment", desc: "Evaluate your current infrastructure, business needs, and design optimal cloud architecture." },
      { num: "02", title: "Infrastructure & Automation", desc: "Build infrastructure as code, set up CI/CD pipelines, and containerize your applications." },
      { num: "03", title: "Deployment & Monitoring", desc: "Deploy applications, implement monitoring, logging, and establish alerting systems." },
      { num: "04", title: "Optimization & Support", desc: "Continuously monitor performance, optimize costs, and provide ongoing support and maintenance." }
    ],
    results: [
      { stat: "99.9%", label: "Uptime Guarantee" },
      { stat: "40%", label: "Cost Reduction" },
      { stat: "70%", label: "Faster Deployments" },
      { stat: "24/7", label: "Monitoring" }
    ],
    testimonials: [
      {
        quote: "With DevOps and cloud migration, our uptime reached 99.9% and costs reduced by 40%.",
        author: "Ajay Singh",
        role: "Tech Lead, SaaS Company", // Changed from Hindi to English
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=ajay"
      },
      {
        quote: "CI/CD pipeline made deployment very easy and fast. Now we can deploy multiple times a day.",
        author: "Ruchi Agarwal",
        role: "Engineering Manager, FinTech", // Changed from Hindi to English
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=ruchi"
      },
      {
        quote: "Best in both infrastructure design and security. The team is very professional.",
        author: "Sandeep Mishra",
        role: "CTO, HealthTech", // Changed from Hindi to English
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=sandeep"
      }
    ],
    comparisonFeatures: [
      { feature: "Multi-cloud Support", us: true, comp: true },
      { feature: "Kubernetes Expertise", us: true, comp: false },
      { feature: "Infrastructure as Code", us: true, comp: false },
      { feature: "CI/CD Automation", us: true, comp: false },
      { feature: "Security Hardening", us: true, comp: false },
      { feature: "Cost Optimization", us: true, comp: false },
      { feature: "24/7 Managed Support", us: true, comp: false },
      { feature: "Disaster Recovery", us: true, comp: false }
    ],
    caseStudies: [
      {
        title: "Cloud Migration & DevOps Setup",
        description: "Migrated legacy infrastructure to AWS with complete DevOps automation.",
        results: ["99.9% uptime", "40% cost reduction", "70% faster deployments"]
      }
    ],
    faqs: [
      {
        question: "Which cloud platform should we choose?",
        answer: "We help you evaluate AWS, Azure, and GCP based on your specific requirements, budget, and technical needs. Each has unique strengths."
      },
      {
        question: "What does managed DevOps include?",
        answer: "Managed DevOps includes infrastructure management, CI/CD pipeline maintenance, monitoring, security updates, and 24/7 support."
      }
    ],
    seoTitle: "Cloud & DevOps Services | AWS, Azure, GCP Experts",
    seoDescription: "Professional cloud infrastructure and DevOps services. Reliable, scalable, and secure deployment solutions."
  },
  {
    id: 6,
    slug: "ai-ml-solutions",
    title: "AI & ML Solutions",
    tagline: "Transform data into intelligent insights",
    description: "Intelligent systems with machine learning, natural language processing, and predictive analytics.",
    longDescription: "Leverage the power of artificial intelligence to solve complex business problems. From predictive analytics to natural language processing, we build custom AI solutions that provide competitive advantages and automate decision-making. Our AI expertise helps you unlock hidden value in your data and create smarter, more responsive systems.",
    icon: "Brain",
    color: "green",
    projectCount: "0",
    features: [
      "Custom Machine Learning Models",
      "Natural Language Processing (NLP)",
      "Computer Vision & Image Recognition",
      "Predictive Analytics & Forecasting",
      "Chatbots & Virtual Assistants",
      "Recommendation Systems",
      "Data Pipeline & ETL",
      "Model Training & Optimization"
    ],
    benefits: [
      "Automate repetitive tasks and decision-making",
      "Gain insights from unstructured data",
      "Personalize user experiences at scale",
      "Improve accuracy with predictive models"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "scikit-learn", "AWS ML"],
    delivery: "12-20 Weeks",
    priceRange: "₹5,00,000 - ₹50,00,000+",
    process: [
      { num: "01", title: "Problem Definition & Data Analysis", desc: "Understand your business challenge, assess data quality, and define success metrics." },
      { num: "02", title: "Model Development & Training", desc: "Build and train machine learning models using best practices and your historical data." },
      { num: "03", title: "Integration & Deployment", desc: "Integrate AI models into your systems with proper APIs and ensure reliable performance." },
      { num: "04", title: "Monitoring & Improvement", desc: "Monitor model performance, retrain with new data, and continuously improve accuracy." }
    ],
    results: [
      { stat: "85%", label: "Accuracy Rate" },
      { stat: "10x", label: "Speed Improvement" },
      { stat: "$500K+", label: "Cost Savings" },
      { stat: "100%", label: "Automation" }
    ],
    testimonials: [
      {
        quote: "AI solutions brought tremendous improvement in our data analysis. Saved lakhs!",
        author: "Dr. Priya Mehta",
        role: "Chief Data Officer, Analytics Corp India", // Changed from Hindi to English
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya"
      },
      {
        quote: "Machine learning models made our business decisions smarter.",
        author: "Rakesh Kumar",
        role: "CEO, InsurTech", // Changed from Hindi to English
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=rakesh"
      },
      {
        quote: "With the NLP chatbot, 80% of support is now automated, and customer satisfaction is high!",
        author: "Suman Gupta",
        role: "VP Customer Success, SupportAI", // Changed from Hindi to English
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=suman"
      }
    ],
    comparisonFeatures: [
      { feature: "Machine Learning Models", us: true, comp: true },
      { feature: "Custom Algorithms", us: true, comp: false },
      { feature: "NLP & Computer Vision", us: true, comp: false },
      { feature: "Production Ready", us: true, comp: false },
      { feature: "Continuous Improvement", us: true, comp: false },
      { feature: "Model Interpretability", us: true, comp: false },
      { feature: "Data Privacy", us: true, comp: false },
      { feature: "Scalable Infrastructure", us: true, comp: false }
    ],
    caseStudies: [
      {
        title: "Predictive Analytics Implementation",
        description: "Built machine learning models for demand forecasting resulting in significant cost savings.",
        results: ["85% forecast accuracy", "$500K annual savings", "10x faster analysis"]
      }
    ],
    faqs: [
      {
        question: "Do you have experience with our industry?",
        answer: "We've worked with various industries including finance, healthcare, e-commerce, and insurance. We can leverage domain knowledge to build effective AI solutions."
      },
      {
        question: "How much data do we need?",
        answer: "Ideally 1000+ quality data points, but we can start with less and grow the model as you collect more data. Data quality matters more than quantity."
      }
    ],
    seoTitle: "AI & ML Solutions | Custom Artificial Intelligence Development",
    seoDescription: "Custom AI and machine learning solutions. Predictive analytics, NLP, computer vision, and intelligent automation."
  },
  {
    id: 7,
    slug: "enterprise-software",
    title: "Enterprise Software",
    tagline: "Custom solutions for complex business needs",
    description: "Custom enterprise solutions with ERP, CRM integration, legacy system modernization, and workflow automation.",
    longDescription: "Streamline complex business operations with custom enterprise software. We build solutions that integrate with existing systems, automate workflows, and provide comprehensive analytics for data-driven decision making. Our enterprise expertise ensures your solution is built for reliability, scalability, and long-term maintainability.",
    icon: "Building",
    color: "gray",
    projectCount: "3+",
    features: [
      "ERP & CRM Integration",
      "Legacy System Modernization",
      "Workflow Automation & BPM",
      "Data Migration & ETL",
      "Enterprise Security & Compliance",
      "Reporting & BI Analytics",
      "Multi-system Integration",
      "Custom Reporting Dashboards"
    ],
    benefits: [
      "Streamline complex business operations",
      "Improve data accuracy and accessibility",
      "Reduce manual work with automation",
      "Ensure compliance with industry regulations"
    ],
    technologies: [".NET", "Java", "Oracle", "Salesforce", "SAP", "Microsoft Dynamics", "PostgreSQL"],
    delivery: "12-24 Weeks",
    priceRange: "₹15,00,000 - ₹2,00,00,000+",
    process: [
      { num: "01", title: "Enterprise Assessment", desc: "Analyze current systems, workflows, pain points, and requirements for the new solution." },
      { num: "02", title: "System Design & Planning", desc: "Design enterprise architecture, data models, security, and integration strategy." },
      { num: "03", title: "Development & Integration", desc: "Build custom software and integrate with existing ERP, CRM, and legacy systems." },
      { num: "04", title: "Deployment & Training", desc: "Migrate data, deploy system, train users, and provide ongoing support." }
    ],
    results: [
      { stat: "80%", label: "Automation" },
      { stat: "50%", label: "Manual Work Reduced" },
      { stat: "99%", label: "Data Accuracy" },
      { stat: "24/7", label: "Support" }
    ],
    testimonials: [
      {
        quote: "They made our legacy system modern and integrated. Operations 50% more efficient.",
        author: "Abhishek Sharma",
        role: "CIO, Manufacturing Corp India", // Changed from Hindi to English
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=abhishek"
      },
      {
        quote: "With the custom ERP solution, workflow is automated and data is accurate.",
        author: "Jyoti Singh",
        role: "Operations Director, Distribution Company", // Changed from Hindi to English
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=jyoti"
      },
      {
        quote: "Best in both enterprise software and support. We got a scalable solution.",
        author: "Manish Gupta",
        role: "CEO, Financial Services", // Changed from Hindi to English
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=manish"
      }
    ],
    comparisonFeatures: [
      { feature: "ERP Integration", us: true, comp: true },
      { feature: "Legacy Modernization", us: true, comp: false },
      { feature: "Workflow Automation", us: true, comp: false },
      { feature: "Custom Solutions", us: true, comp: false },
      { feature: "Enterprise Security", us: true, comp: false },
      { feature: "Compliance Ready", us: true, comp: false },
      { feature: "Dedicated Support", us: true, comp: false },
      { feature: "Scalable Architecture", us: true, comp: false }
    ],
    caseStudies: [
      {
        title: "Legacy System Modernization",
        description: "Modernized legacy enterprise systems and integrated with modern cloud infrastructure.",
        results: ["80% automation achieved", "50% reduction in manual work", "99% data accuracy"]
      }
    ],
    faqs: [
      {
        question: "Can you integrate with our existing ERP system?",
        answer: "Yes, we specialize in integrating with major ERP systems like SAP, Oracle, and Dynamics. We handle all data migration and system integration."
      },
      {
        question: "How do you handle data migration?",
        answer: "We use proven ETL processes with thorough data validation, transformation, and reconciliation to ensure zero data loss."
      }
    ],
    seoTitle: "Enterprise Software Development | Custom Business Solutions",
    seoDescription: "Custom enterprise software development. ERP/CRM integration, legacy modernization, and workflow automation."
  },
  {
    id: 8,
    slug: "backend-api-development",
    title: "Backend & API Development",
    tagline: "Powerful engines for your applications",
    description: "Robust backend systems with Node.js, Python, Go, and microservices architecture for enterprise needs.",
    longDescription: "Build the powerful backend that drives your application's performance and reliability. We create scalable APIs, microservices architectures, and database systems that handle millions of requests while maintaining security and performance. Our backend expertise ensures your system is built for scale, reliability, and future growth.",
    icon: "Server",
    color: "teal",
    projectCount: "30+",
    features: [
      "Node.js, Python, Go Backends",
      "REST & GraphQL API Development",
      "Microservices Architecture",
      "Database Design & Optimization",
      "Authentication & Authorization",
      "Real-time Communication (WebSockets)",
      "API Versioning & Documentation",
      "Performance & Security Optimization"
    ],
    benefits: [
      "Handle high traffic with scalable architecture",
      "Improve performance with optimized databases",
      "Enable third-party integrations with robust APIs",
      "Ensure data security with enterprise-grade practices"
    ],
    technologies: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "Docker"],
    delivery: "6-10 Weeks",
    priceRange: "₹3,00,000 - ₹20,00,000+",
    process: [
      { num: "01", title: "Requirements & Architecture", desc: "Define API specifications, database schema, and system architecture for scalability." },
      { num: "02", title: "API & Backend Development", desc: "Build robust APIs, implement business logic, and integrate with databases and services." },
      { num: "03", title: "Testing & Security", desc: "Perform comprehensive testing, implement security measures, and optimize performance." },
      { num: "04", title: "Deployment & Monitoring", desc: "Deploy to production, set up monitoring, logging, and provide ongoing support." }
    ],
    results: [
      { stat: "1M+", label: "Requests/Day" },
      { stat: "99.99%", label: "Uptime" },
      { stat: "< 100ms", label: "Response Time" },
      { stat: "0", label: "Data Loss" }
    ],
    testimonials: [
      {
        quote: "They built scalable and fast APIs for our platform. Millions of requests are handled without any issues.",
        author: "Vikram Singh",
        role: "Lead Architect, FinTech India", // Changed from Hindi to English
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=vikram"
      },
      {
        quote: "With microservices architecture, every component scales independently. Best solution for our platform.",
        author: "Sneha Kapoor",
        role: "VP Engineering, E-commerce India", // Changed from Hindi to English
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=sneha"
      },
      {
        quote: "Professional backend development and API documentation. Integration was very smooth.",
        author: "Deepak Jain",
        role: "CTO, SaaS Company", // Changed from Hindi to English
        rating: 5,
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=deepak"
      }
    ],
    comparisonFeatures: [
      { feature: "Microservices Design", us: true, comp: true },
      { feature: "GraphQL Support", us: true, comp: false },
      { feature: "Real-time APIs", us: true, comp: false },
      { feature: "Database Optimization", us: true, comp: false },
      { feature: "Security Hardening", us: true, comp: false },
      { feature: "API Documentation", us: true, comp: false },
      { feature: "Performance Guaranteed", us: true, comp: false },
      { feature: "Scalability Ready", us: true, comp: false }
    ],
    caseStudies: [
      {
        title: "High-Performance API Platform",
        description: "Built microservices backend handling 1M+ requests daily with 99.99% uptime.",
        results: ["1M+ daily requests", "99.99% uptime", "< 100ms response time"]
      }
    ],
    faqs: [
      {
        question: "Should we choose REST or GraphQL?",
        answer: "We recommend GraphQL for complex, rapidly evolving APIs and REST for simple, stable APIs. We can help you choose based on your needs."
      },
      {
        question: "How do you handle database optimization?",
        answer: "We design efficient schemas, use proper indexing, implement caching strategies, and continuously monitor and optimize query performance."
      }
    ],
    seoTitle: "Backend & API Development | Scalable Server Architecture",
    seoDescription: "Expert backend and API development. Build scalable, secure, and high-performance server-side solutions."
  }
];
