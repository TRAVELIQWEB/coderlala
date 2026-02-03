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
  ChevronRight,
  Zap,
  Shield,
  Workflow,
  ArrowRight,
  Check
} from "lucide-react";
import Link from "next/link";

// Tech stack icons - FIXED IMPORTS
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiAmazon,        // AWS
  SiDocker,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiReact as SiReactNative,
  SiFlutter,
  SiTailwindcss,
  SiPhp,
  SiBootstrap,
  SiWordpress,
  SiNestjs,
  SiJavascript,
  SiGo,
  SiCplusplus,
  SiRuby,
  SiSwift,
  SiKotlin,
  SiRust,
  SiDart,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiFirebase,
  SiRedis,
  SiExpress,
  SiMysql,
  SiPostman,
  SiFigma,
  SiAdobexd,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiNuxtdotjs,
  SiVite,
  SiWebpack,
  SiEslint,
  SiPrettier,
  SiJest,
  SiCypress,
  SiStorybook,
  SiLaravel
} from "react-icons/si";

const services = [
  {
    slug: "web-development",
    title: "Web Development",
    description: "Build modern, responsive websites optimized for speed, SEO, and user experience.",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    features: ["Next.js / React Development", "SEO Optimization for Higher Visibility", "Progressive Web App (PWA) Support", "High-Performance Web Solutions"]
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description: "Cross-platform mobile solutions for iOS and Android with seamless performance and security.",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    features: ["React Native Development", "iOS & Android Compatible", "App Store Ready Applications", "Push Notifications & Engagement"]
  },
  {
    slug: "saas-platform-development",
    title: "SaaS Platform Development",
    description: "End-to-end SaaS solutions with subscription management and scalable architecture.",
    icon: Cloud,
    color: "from-orange-500 to-red-500",
    features: ["Subscription Billing Systems", "Multi-Tenancy Architecture", "Analytics & Reporting", "API Integration"]
  },
  {
    slug: "backend-api-development",
    title: "Backend & API Development",
    description: "Robust backend systems for enterprise-grade performance and scalability.",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    features: ["Node.js / Python / Go Development", "Microservices Architecture", "REST / GraphQL APIs", "Database Design & Management"]
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description: "User-centered design with wireframing, prototyping, and design systems",
    icon: Palette,
    color: "from-yellow-500 to-amber-500",
    features: ["Figma / Adobe XD Design", "Comprehensive Design Systems", "User Research & Testing", "Rapid Prototyping"]
  },
  {
    slug: "cloud-devops",
    title: "Cloud Infrastructure",
    description: "Deploy and manage applications on cloud platforms efficiently and securely.",
    icon: Cpu,
    color: "from-indigo-500 to-blue-500",
    features: ["AWS / Azure / Google Cloud Deployment", "Containerization with Docker & Kubernetes", "CI/CD Pipelines & Automation", "Serverless Architecture"]
  },
  {
    slug: "ai-ml-solutions",
    title: "AI & ML Solutions",
    description: "Intelligent systems leveraging machine learning, NLP, and predictive analytics..",
    icon: Zap,
    color: "from-cyan-500 to-blue-500",
    features: ["Machine Learning Models", "Natural Language Processing (NLP)", "Computer Vision Applications", "Predictive Analytics Solutions"]
  },
  // {
  //   title: "DevOps & Security",
  //   description: "Secure, automated development lifecycle for reliable software delivery.",
  //   icon: Shield,
  //   color: "from-red-500 to-orange-500",
  //   features: ["Security Audits & Compliance", "Automated Testing & CI/CD", "Monitoring & Incident Management", "Governance & Risk Management"]
  // },
  {
    slug: "enterprise-software",
    title: "Enterprise Software",
    description: "Custom enterprise solutions with ERP, CRM integration.",
    icon: Workflow,
    color: "from-violet-500 to-purple-500",
    features: ["ERP / CRM Integration", "Legacy System Migration", "Custom Enterprise Solutions", "Dedicated Enterprise Support"]
  }
];

// Tech stack data with icons and colors - FIXED
const techStack = [
  { name: "Next.js", icon: SiNextdotjs, color: "!text-black dark:text-white" },
  { name: "React", icon: SiReact, color: "text-blue-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "Python", icon: SiPython, color: "text-yellow-500" },
  { name: "AWS", icon: SiAmazon, color: "text-orange-500" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400" },

  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },

  { name: "React Native", icon: SiReactNative, color: "text-cyan-500" },

  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },

  /* ----  NEW ICONS  ---- */
  { name: "PHP", icon: SiPhp, color: "text-indigo-500" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
  { name: "WordPress", icon: SiWordpress, color: "text-blue-700" },
  { name: "NestJS", icon: SiNestjs, color: "text-red-600" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },








  { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
  { name: "Git", icon: SiGit, color: "text-red-500" },
  { name: "GitHub", icon: SiGithub, color: "!text-black dark:text-white" },

  { name: "Redis", icon: SiRedis, color: "text-red-600" },
  { name: "Express", icon: SiExpress, color: "!text-black dark:text-white" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-600" },

  { name: "Angular", icon: SiAngular, color: "text-red-600" },


  { name: "Laravel", icon: SiLaravel, color: "text-red-500" }
];

export default function ServicesOverview() {
  return (
    <section className="relative overflow-hidden">

      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-linear-to-br from-blue-500/10 to-transparent blur-2xl sm:blur-3xl rounded-full dark:from-blue-500/5" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-linear-to-tl from-purple-500/10 to-transparent blur-2xl sm:blur-3xl rounded-full dark:from-purple-500/5" />
        <div className="absolute top-3/4 left-1/2 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-linear-to-r from-orange-500/10 to-transparent blur-2xl sm:blur-3xl rounded-full dark:from-orange-500/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 mb-4 sm:mb-6">
            <Code2 className="w-3 h-3 sm:w-4 sm:h-4 text-gray-800 dark:text-white" />
            <span className="text-xs sm:text-sm font-medium text-gray-800 dark:text-white">Comprehensive Technology Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">Expert Web Development &</span>
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400">Custom Software Solutions</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white dark:text-gray-300 max-w-3xl mx-auto px-2">
            We deliver comprehensive web development services, mobile app development services, and SaaS development services that drive digital transformation through innovative technology solutions and expert IT consulting.
          </p>
        </motion.div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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

              <div className={`absolute -inset-0.5 bg-linear-to-r ${service.color} rounded-2xl sm:rounded-3xl blur opacity-0 group-hover:opacity-20 dark:group-hover:opacity-10 transition duration-500`} />


              <div className="glass-card p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-white/10 relative overflow-hidden">


                <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500`} />


                <div className="relative mb-4 sm:mb-6 z-10">
                  <div className={`relative inline-flex items-center justify-center p-3 sm:p-4 rounded-xl bg-linear-to-br ${service.color} shadow-lg dark:shadow-black/30`}>
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white!" />
                  </div>
                </div>


                <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white mb-2 sm:mb-3 relative z-10">
                  {service.title}
                </h3>


                <p className="text-sm sm:text-base text-white/80 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed relative z-10">
                  {service.description}
                </p>


                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 relative z-10">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 sm:gap-3">
                      <div className={`shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-linear-to-br ${service.color} flex items-center justify-center shadow-sm mt-0.5`}>
                        <Check className="w-2 h-2 sm:w-3 sm:h-3 text-white!" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-white/90 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>


                <Link href={`/services/${service.slug}`} className="flex items-center justify-between pt-4 sm:pt-6 border-t border-white/50 dark:border-gray-700/50 relative z-10">
                  <span className="text-xs sm:text-sm font-semibold text-white/90 dark:text-gray-400">
                    Learn more
                  </span>
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-linear-to-br ${service.color} flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg transition-shadow`}>
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white!" />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>


        {/* Tech Stack with Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 sm:mt-20 md:mt-24 pt-8 sm:pt-10 md:pt-12 border-t border-white/20"
        >
          <h2 className="text-3xl text-center sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">Advanced Technologies for</span>
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400">Enterprise Software Development</span>
          </h2>
          <p className="text-base text-center mb-12 sm:text-lg md:text-xl text-white dark:text-gray-300 max-w-3xl mx-auto px-2">
            We deliver comprehensive web development services, mobile app development services, and SaaS development services that drive digital transformation through innovative technology solutions and expert IT consulting.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-2">
            {techStack.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group relative "
                >
                  <div className="px-4 py-3 sm:px-5 sm:py-4 rounded-xl glass-card backdrop-blur-sm hover:bg-white hover:border-white/30 transition-all duration-300 flex flex-col items-center justify-center min-w-[100px] sm:min-w-[120px] gap-2">
                    <Icon className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${tech.color} group-hover:scale-110 transition-transform`} />
                    <span className="text-xs sm:text-sm font-medium  text-center">{tech.name}</span>
                  </div>

                  {/* Subtle glow effect on hover */}
                  <div className={`absolute -inset-1 bg-linear-to-r ${tech.color.replace('text-', 'from-')} to-transparent rounded-xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`} />
                </motion.div>
              );
            })}
          </div>

          {/* FINAL CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8 sm:mt-10 md:mt-12"
          >
            <p className="text-sm sm:text-base md:text-lg text-white/80 mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
              Ready to transform your business with our custom software development services and cloud solutions?
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 text-white! font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Start Your Digital Transformation
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}