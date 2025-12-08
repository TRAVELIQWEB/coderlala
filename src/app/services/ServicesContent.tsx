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
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    title: "Web Development",
    desc: "Modern, responsive websites and web applications built with Next.js, React, and cutting-edge frameworks for optimal performance and SEO.",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    features: [
      "Next.js/React",
      "TypeScript",
      "SEO Optimization",
      "PWA",
      "Performance Tuning",
    ],
    projects: "150+",
    delivery: "4-8 Weeks",
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform mobile applications for iOS & Android using React Native and Flutter for maximum reach and native performance.",
    icon: Smartphone,
    color: "from-orange-500 to-amber-500",
    features: [
      "React Native",
      "iOS & Android",
      "App Store Ready",
      "Push Notifications",
      "Offline Support",
    ],
    projects: "80+",
    delivery: "6-12 Weeks",
  },
  {
    title: "SaaS Platform Development",
    desc: "End-to-end SaaS solutions with subscription management, multi-tenancy, analytics, and scalable architecture.",
    icon: Cloud,
    color: "from-purple-500 to-pink-500",
    features: [
      "Subscription Billing",
      "Multi-tenancy",
      "Analytics Dashboard",
      "API Integration",
      "Scalable Infrastructure",
    ],
    projects: "40+",
    delivery: "8-16 Weeks",
  },
  {
    title: "Backend & API Development",
    desc: "Robust backend systems with Node.js, Python, Go, and microservices architecture for enterprise needs.",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    features: [
      "Node.js/Python",
      "Microservices",
      "REST/GraphQL",
      "Database Design",
      "Authentication",
    ],
    projects: "120+",
    delivery: "6-10 Weeks",
  },
  {
    title: "UI/UX Design",
    desc: "User-centric design with wireframing, prototyping, and design systems for exceptional user experiences.",
    icon: Palette,
    color: "from-yellow-500 to-amber-500",
    features: [
      "Figma/Adobe XD",
      "Design Systems",
      "User Research",
      "Prototyping",
      "Usability Testing",
    ],
    projects: "90+",
    delivery: "2-4 Weeks",
  },
  {
    title: "Cloud & DevOps",
    desc: "AWS, Azure, and Google Cloud deployment with CI/CD, containerization, and serverless architecture.",
    icon: Cpu,
    color: "from-indigo-500 to-blue-500",
    features: [
      "AWS/Azure/GCP",
      "Docker/K8s",
      "CI/CD Pipelines",
      "Serverless",
      "Monitoring",
    ],
    projects: "60+",
    delivery: "2-6 Weeks",
  },
  {
    title: "AI & ML Solutions",
    desc: "Intelligent systems with machine learning, natural language processing, and predictive analytics.",
    icon: Zap,
    color: "from-red-500 to-orange-500",
    features: [
      "Machine Learning",
      "NLP",
      "Computer Vision",
      "Predictive Analytics",
      "Chatbots",
    ],
    projects: "25+",
    delivery: "8-20 Weeks",
  },
  {
    title: "Enterprise Software",
    desc: "Custom enterprise solutions with ERP, CRM integration, legacy system modernization, and workflow automation.",
    icon: Workflow,
    color: "from-violet-500 to-purple-500",
    features: [
      "ERP/CRM Integration",
      "Legacy Migration",
      "Workflow Automation",
      "Enterprise Security",
      "Custom Solutions",
    ],
    projects: "35+",
    delivery: "12-24 Weeks",
  },
  {
    title: "Quality Assurance & Testing",
    desc: "Comprehensive testing strategies including automated testing, performance testing, and security audits.",
    icon: Shield,
    color: "from-cyan-500 to-blue-500",
    features: [
      "Automated Testing",
      "Performance Testing",
      "Security Audits",
      "Manual Testing",
      "QA Strategy",
    ],
    projects: "100+",
    delivery: "2-4 Weeks",
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
    value: "150+",
    label: "Projects Delivered",
    icon: Rocket,
    color: "text-blue-400",
  },
  {
    value: "50+",
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
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">
            Comprehensive
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
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
                  <IconComponent className="w-6 h-6" />
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
                    className="group relative px-8 py-4 rounded-xl text-white font-semibold 
                               bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800
                               hover:from-blue-700 hover:via-blue-800 hover:to-blue-900
                               transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
                               shadow-[0_10px_40px_-15px_rgba(37,99,235,0.5)]
                               flex items-center justify-center gap-3 overflow-hidden"
                  >
                    <span className="relative">Get Started</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/portfolio"
                    className="group relative px-8 py-4 rounded-xl text-white font-semibold 
                               bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800
                               hover:from-orange-700 hover:via-orange-800 hover:to-orange-900
                               transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
                               shadow-[0_10px_40px_-15px_rgba(234,88,12,0.5)]
                               flex items-center justify-center gap-3 overflow-hidden"
                  >
                    <span className="relative">View Examples</span>
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
                          className={`w-full text-left p-4 rounded-xl transition-all ${
                            i === activeService
                              ? "bg-white/10"
                              : "bg-white/5 hover:bg-white/10"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <IconComponent className="w-5 h-5" />
                              <div>
                                <div className="font-medium">
                                  {service.title}
                                </div>
                                <div className="text-xs text-white/60 mt-1">
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
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
                className={`glass-card p-6 rounded-2xl backdrop-blur-xl border border-white/10 cursor-pointer transition-all ${
                  i === activeService ? "ring-2 ring-blue-500/30" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color}/20`}>
                    <IconComponent className="w-6 h-6" />
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
              Technologies We Use
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            We work with cutting-edge technologies to build modern, scalable
            solutions.
          </p>
        </div>

        <div className="glass-card p-8 rounded-3xl backdrop-blur-xl border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Node.js",
              "Python",
              "Go",
              "AWS",
              "Azure",
              "Docker",
              "Kubernetes",
              "MongoDB",
              "PostgreSQL",
              "Redis",
              "GraphQL",
              "React Native",
              "Flutter",
              "Figma",
              "Tailwind CSS",
              "TensorFlow",
              "FastAPI",
              "NestJS",
              "Prisma",
              "WebSocket",
              "GitHub Actions",
            ].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-center cursor-pointer"
              >
                <span className="text-sm font-medium">{tech}</span>
              </motion.div>
            ))}
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
              className="group relative px-8 py-4 rounded-xl text-white font-semibold 
                         bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800
                         hover:from-blue-700 hover:via-blue-800 hover:to-blue-900
                         transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
                         shadow-[0_10px_40px_-15px_rgba(37,99,235,0.5)]
                         flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="relative">Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="group relative px-8 py-4 rounded-xl text-white font-semibold 
                         bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800
                         hover:from-orange-700 hover:via-orange-800 hover:to-orange-900
                         transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
                         shadow-[0_10px_40px_-15px_rgba(234,88,12,0.5)]
                         flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="relative">Free Consultation</span>
              <Clock className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}
