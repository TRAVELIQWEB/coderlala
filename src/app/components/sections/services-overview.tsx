"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  Server, 
  Palette, 
  Cpu,
  Code2,
  Layers,
  Zap,
  Shield,
  Database,
  Workflow,
  ArrowRight
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Modern, responsive websites built with Next.js, React, and cutting-edge frameworks for optimal performance and SEO.",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    features: ["Next.js/React", "SEO Optimized", "PWA Support", "Web Performance"]
  },
  {
    title: "Mobile Apps",
    description: "Cross-platform mobile applications for iOS & Android using React Native and Flutter for maximum reach.",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    features: ["React Native", "iOS & Android", "App Store Ready", "Push Notifications"]
  },
  {
    title: "SaaS Platforms",
    description: "End-to-end SaaS solutions with subscription management, multi-tenancy, and scalable architecture.",
    icon: Cloud,
    color: "from-orange-500 to-red-500",
    features: ["Subscription Billing", "Multi-tenancy", "Analytics", "API Integration"]
  },
  {
    title: "Backend Engineering",
    description: "Robust backend systems with Node.js, Python, Go, and microservices architecture for enterprise needs.",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    features: ["Node.js/Python", "Microservices", "REST/GraphQL", "Database Design"]
  },
  {
    title: "UI/UX Design",
    description: "User-centric design with wireframing, prototyping, and design systems for exceptional user experiences.",
    icon: Palette,
    color: "from-yellow-500 to-amber-500",
    features: ["Figma/Adobe XD", "Design Systems", "User Research", "Prototyping"]
  },
  {
    title: "Cloud Infrastructure",
    description: "AWS, Azure, and Google Cloud deployment with CI/CD, containerization, and serverless architecture.",
    icon: Cpu,
    color: "from-indigo-500 to-blue-500",
    features: ["AWS/Azure/GCP", "Docker/K8s", "CI/CD Pipelines", "Serverless"]
  },
  {
    title: "AI & ML Solutions",
    description: "Intelligent systems with machine learning, natural language processing, and predictive analytics.",
    icon: Zap,
    color: "from-cyan-500 to-blue-500",
    features: ["Machine Learning", "NLP", "Computer Vision", "Predictive Analytics"]
  },
  {
    title: "DevOps & Security",
    description: "Secure development lifecycle with automated testing, monitoring, and compliance management.",
    icon: Shield,
    color: "from-red-500 to-orange-500",
    features: ["Security Audits", "Automated Testing", "Monitoring", "Compliance"]
  },
  {
    title: "Enterprise Software",
    description: "Custom enterprise solutions with ERP, CRM integration, and legacy system modernization.",
    icon: Workflow,
    color: "from-violet-500 to-purple-500",
    features: ["ERP/CRM Integration", "Legacy Migration", "Custom Solutions", "Enterprise Support"]
  }
];

export default function ServicesOverview() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-500/5 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Code2 className="w-4 h-4" />
            <span className="text-sm font-medium">Our Expertise</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-400">
              Comprehensive
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Digital Solutions
            </span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            We deliver end-to-end technology services that transform ideas into 
            scalable, high-performance digital products.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`} />
              
              {/* Main Card */}
              <div className="relative glass-card p-8 rounded-2xl backdrop-blur-xl border border-white/10 group-hover:border-white/20 transition-all duration-300">
                {/* Icon */}
                <div className={`mb-6 p-4 rounded-xl bg-gradient-to-br ${service.color} w-fit`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/70 mb-6">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Hover Indicator */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-2 rounded-full bg-white/10">
                    <Layers className="w-5 h-5 text-white/60" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 glass-card p-8 rounded-2xl backdrop-blur-xl border border-white/10"
        >
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understand your goals & requirements" },
              { step: "02", title: "Strategy", desc: "Plan architecture & technology stack" },
              { step: "03", title: "Development", desc: "Build with agile methodology" },
              { step: "04", title: "Launch & Scale", desc: "Deploy, monitor & optimize" }
            ].map((item, i) => (
              <div key={i} className="relative text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 mb-4">
                  <span className="text-xl font-bold text-white">{item.step}</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-white/60">{item.desc}</p>
                
                {/* Connector line */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-6 left-3/4 w-full h-px bg-gradient-to-r from-white/10 to-transparent" />
                )}
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-lg text-white/80 mb-6">
              Ready to transform your business with our expertise?
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Schedule Consultation
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 text-white/90">
            Technologies We Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Next.js", "React", "TypeScript", "Node.js", "Python", 
              "AWS", "Docker", "Kubernetes", "MongoDB", "PostgreSQL",
              "GraphQL", "React Native", "Flutter", "Figma", "Tailwind CSS"
            ].map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
              >
                <span className="text-sm font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}