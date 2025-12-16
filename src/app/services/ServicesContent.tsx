// app/services/ServicesContent.tsx
"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Cloud,
  Code2,
  Palette,
  Cpu,
  Server,
  Zap,
  Shield,
  Database,
  Workflow,
  Layers,
  Rocket,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Clock,
  Award,
} from "lucide-react";
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

import Link from "next/link";
import { useState } from "react";

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
const services = [
  {
    title: "Web Development",
    desc: "Modern, responsive websites and web applications built with Next.js, React, and cutting-edge frameworks for optimal performance and SEO.",
    icon: Globe,
    color: "bg-blue-500 ",
    features: [
      "Next.js/React",
      "TypeScript",
      "SEO Optimization",
      "PWA",
      "Performance Tuning",
    ],
    projects: "25+",
    delivery: "8-12 Weeks",
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform mobile applications for iOS & Android using React Native and Flutter for maximum reach and native performance.",
    icon: Smartphone,
    color: "bg-orange-500 ",
    features: [
      "React Native",
      "iOS & Android",
      "App Store Ready",
      "Push Notifications",
      "Offline Support",
    ],
    projects: "2+",
    delivery: "8-14 Weeks",
  },
  {
    title: "SaaS Platform Development",
    desc: "End-to-end SaaS solutions with subscription management, multi-tenancy, analytics, and scalable architecture.",
    icon: Cloud,

    color: "bg-purple-500 ",
    features: [
      "Subscription Billing",
      "Multi-tenancy",
      "Analytics Dashboard",
      "API Integration",
      "Scalable Infrastructure",
    ],
    projects: "1+",
    delivery: "12-36 Weeks",
  },
  {
    title: "Backend & API Development",
    desc: "Robust backend systems with Node.js, Python, Go, and microservices architecture for enterprise needs.",
    icon: Server,
    color: "bg-green-500 ",
    features: [
      "Node.js/Python",
      "Microservices",
      "REST/GraphQL",
      "Database Design",
      "Authentication",
    ],
    projects: "10+",
    delivery: "6-10 Weeks",
  },
  {
    title: "UI/UX Design",
    desc: "User-centric design with wireframing, prototyping, and design systems for exceptional user experiences.",
    icon: Palette,
    color: "bg-yellow-500 ",
    features: [
      "Figma/Adobe XD",
      "Design Systems",
      "User Research",
      "Prototyping",
      "Usability Testing",
    ],
    projects: "20+",
    delivery: "4-8 Weeks",
  },
  {
    title: "Cloud & DevOps",
    desc: "AWS, Azure, and Google Cloud deployment with CI/CD, containerization, and serverless architecture.",
    icon: Cpu,
    color: "bg-indigo-500 ",
    features: [
      "AWS/Azure/GCP",
      "Docker/K8s",
      "CI/CD Pipelines",
      "Serverless",
      "Monitoring",
    ],
    projects: "2+",
    delivery: "4-8 Weeks",
  },
  {
    title: "AI & ML Solutions",
    desc: "Intelligent systems with machine learning, natural language processing, and predictive analytics.",
    icon: Zap,
    color: "bg-red-500 ",
    features: [
      "Machine Learning",
      "NLP",
      "Computer Vision",
      "Predictive Analytics",
      "Chatbots",
    ],
    projects: "0",
    delivery: "12-20 Weeks",
  },
  {
    title: "Enterprise Software",
    desc: "Custom enterprise solutions with ERP, CRM integration, legacy system modernization, and workflow automation.",
    icon: Workflow,
    color: "bg-violet-500 ",
    features: [
      "ERP/CRM Integration",
      "Legacy Migration",
      "Workflow Automation",
      "Enterprise Security",
      "Custom Solutions",
    ],
    projects: "3+",
    delivery: "12-24 Weeks",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    desc: "Understand requirements and define project scope",
  },
  {
    step: "02",
    title: "Planning",
    desc: "Create detailed roadmap and technology stack",
  },
  {
    step: "03",
    title: "Design",
    desc: "Wireframes, prototypes, and UI/UX design",
  },
  {
    step: "04",
    title: "Development",
    desc: "Agile development with regular updates",
  },
  {
    step: "05",
    title: "Testing",
    desc: "Comprehensive QA and performance testing",
  },
  {
    step: "06",
    title: "Launch",
    desc: "Deployment and post-launch support",
  },
];

const stats = [
  {
    value: "25+",
    label: "Projects Delivered",
    icon: Rocket,
    color: "text-blue-400",
  },
  {
    value: "25+",
    label: "Happy Clients",
    icon: Users,
    color: "text-orange-400",
  },
  {
    value: "99%",
    label: "Client Satisfaction",
    icon: Target,
    color: "text-purple-400",
  },
  {
    value: "100%",
    label: "On-Time Delivery",
    icon: Clock,
    color: "text-green-400",
  },
];

export default function ServicesContent() {
  const [activeService, setActiveService] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-orange-500/10 backdrop-blur-sm border border-white/20 mb-6">
          <Layers className="w-4 h-4 text-blue-300" />
          <span className="text-sm font-medium">Our Services</span>
        </div>


        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-blue-500">
            Comprehensive
          </span>
          <span className="block text-transparent bg-clip-text bg-orange-500">
            Digital Solutions
          </span>
        </h1>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          We deliver end-to-end technology services that transform ideas into
          scalable, high-performance digital products with exceptional user
          experiences.
        </p>
      </motion.div>

      {/* Stats Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-8 rounded-3xl backdrop-blur-xl border border-white/10 mb-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <div key={i} className="text-center p-4">
                <div
                  className={`inline-flex p-3 rounded-xl bg-white/5 mb-4 ${stat.color}`}
                >
                  <IconComponent className="w-12 h-12" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Featured Service */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <div className="relative group">
          <div
            className={`absolute -inset-0.5 bg-gradient-to-r ${services[activeService].color} rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500`}
          />

          <div className="relative glass-card p-8 rounded-3xl backdrop-blur-xl border border-white/10">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-orange-500/10 mb-4">
                      {(() => {
                        const IconComponent = services[activeService].icon;
                        return (
                          <IconComponent className="w-8 h-8 text-blue-300" />
                        );
                      })()}
                    </div>
                    <h2 className="text-3xl font-bold mb-4">
                      {services[activeService].title}
                    </h2>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold">
                        {services[activeService].projects}
                      </div>
                      <div className="text-xs text-white/60">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">
                        {services[activeService].delivery}
                      </div>
                      <div className="text-xs text-white/60">Delivery</div>
                    </div>
                  </div>
                </div>

                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  {services[activeService].desc}
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                  <div className="space-y-3">
                    {services[activeService].features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link
                    href="/contact"
                    className="group relative px-8 py-4 rounded-xl !text-white font-semibold 
                               bg-gradient-to-r from-blue-500  to-indigo-600
                               hover:from-blue-600  hover:to-indigo-700
                               transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
                               shadow-[0_10px_40px_-15px_rgba(37,99,235,0.5)]
                               flex items-center justify-center gap-3 overflow-hidden"
                  >
                    <span className="relative !text-white">Get Started</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/portfolio"
                    className="group relative px-8 py-4 rounded-xl !text-white font-semibold 
                               bg-gradient-to-r from-orange-500  to-orange-600
                               hover:from-orange-600  hover:to-orange-700
                               transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
                               shadow-[0_10px_40px_-15px_rgba(234,88,12,0.5)]
                               flex items-center justify-center gap-3 overflow-hidden"
                  >
                    <span className="relative !text-white">View Examples</span>
                    <Award className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Service Navigation */}
              <div>
                <div className="glass-card p-6 rounded-2xl backdrop-blur-xl border border-white/10">
                  <h4 className="text-lg font-semibold mb-4">All Services</h4>
                  <div className="space-y-3">
                    {services.map((service, i) => {
                      const IconComponent = service.icon;
                      return (
                        <button
                          key={i}
                          onClick={() => setActiveService(i)}
                          className={`w-full text-left p-4 rounded-xl transition-all ${i === activeService
                              ? "bg-gray-500/15"
                              : "bg-gray-500/5 hover:bg-gray-500/10"
                            }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <IconComponent className="w-5 h-5" />
                              <div>
                                <div className="font-medium">
                                  {service.title}
                                </div>
                                <div className="text-xs mt-1">
                                  {service.projects} projects •{" "}
                                  {service.delivery}
                                </div>
                              </div>
                            </div>
                            {i === activeService && (
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-orange-500" />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-32"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-orange-500">
              All Our Services
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            From concept to launch, we provide comprehensive solutions for every
            stage of your digital journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => setActiveService(i)}
                className={`glass-card p-6 rounded-2xl backdrop-blur-xl border border-white/10 cursor-pointer transition-all ${i === activeService ? "ring-2 ring-blue-500/30" : ""
                  }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${service.color}/20`}>
                    <IconComponent className="w-6 h-6 !text-white" />
                  </div>
                  <div className="text-xs px-3 py-1 rounded-full bg-white/10">
                    {service.projects} projects
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-white/70 text-sm mb-4">{service.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs rounded-lg bg-white/5 border border-white/10"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">
                    Delivery: {service.delivery}
                  </span>
                  <ArrowRight className="w-4 h-4 text-blue-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Development Process */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-32"
      >
        <div className="text-center mb-12">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-orange-500">
              Our Development Process
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A proven methodology that ensures quality, transparency, and timely
            delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((step, i) => (
            <div key={i} className="relative">
              <div className="glass-card p-6 rounded-2xl backdrop-blur-xl border border-white/10 h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-orange-500/20 border border-white/10 mb-4">
                  <span className="text-xl font-bold text-white">
                    {step.step}
                  </span>
                </div>
                <h4 className="text-lg font-semibold mb-3">{step.title}</h4>
                <p className="text-sm text-white/60">{step.desc}</p>
              </div>

              {i < process.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-px bg-gradient-to-r from-blue-500/20 via-orange-500/20 to-transparent transform translate-x-1/2" />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-32"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-orange-500">
              Technologies We Use
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            We work with cutting-edge technologies to build modern, scalable
            solutions.
          </p>
        </div>

        <div className=" p-8 rounded-3xl">
          
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
                    <div className={`absolute -inset-1 bg-gradient-to-r ${tech.color.replace('text-', 'from-')} to-transparent rounded-xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`} />
                  </motion.div>
                );
              })}
            </div>

          
        </div>
      </motion.div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="glass-card p-12 rounded-3xl backdrop-blur-xl border border-white/10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
              Ready to Transform Your Business?
            </span>
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project requirements and create a custom solution
            tailored to your business goals and technical needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group relative px-8 py-4 rounded-xl !text-white font-semibold 
                         bg-gradient-to-r from-blue-500  to-indigo-600
                         hover:from-blue-600  hover:to-indigo-700
                         transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
                         shadow-[0_10px_40px_-15px_rgba(37,99,235,0.5)]
                         flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="relative !text-white">Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="group relative px-8 py-4 rounded-xl !text-white font-semibold 
                         bg-gradient-to-r from-orange-500  to-orange-600
                         hover:from-orange-600  hover:to-orange-700
                         transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
                         shadow-[0_10px_40px_-15px_rgba(234,88,12,0.5)]
                         flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="relative !text-white">Free Consultation</span>
              <Clock className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}
