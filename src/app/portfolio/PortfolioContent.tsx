"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Cloud,
  Cpu,
  Brain,
  Database,
  Smartphone,
  ShoppingCart,
  BarChart,
  Shield,
  Zap,
  Eye,
  ExternalLink,
  Github,
  Filter,
  Award,
  TrendingUp,
  Users,
  Lock,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState, useRef, useMemo } from "react";
import Link from "next/link";

type CategoryId =
  | "all"
  | "enterprise"
  | "saas"
  | "ai"
  | "mobile"
  | "devops";

interface Project {
  title: string;
  category: Exclude<CategoryId, "all">;
  desc: string;
  tech: string[];
  icon: React.ElementType;
  color: string;
  stats: string;
  liveUrl?: string | null;
  githubUrl?: string | null;
}

interface Category {
  id: CategoryId;
  label: string;
  icon: React.ElementType;
}


const projects: Project[] = [
  {
    title: "TravelTech Enterprise Platform",
    category: "enterprise",
    desc:
      "A comprehensive bus, rail, and air booking ecosystem handling 50,000+ daily transactions.",
    tech: ["Next.js", "NestJS", "MongoDB", "Redis", "Docker", "AWS"],
    icon: Globe,
    color: "bg-blue-500",
    stats: "350% Revenue Growth",
  },
  {
    title: "SaaS Billing & Subscription Engine",
    category: "saas",
    desc:
      "Scalable multi-tenant billing system with automated invoicing and usage-based pricing.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe", "WebSockets"],
    icon: BarChart,
    color: "bg-orange-500",
    stats: "Zero Downtime",
    liveUrl: "https://wallet.saarthii.co.in",
  },
  {
    title: "Cloud Deployment Automation",
    category: "devops",
    desc:
      "Full CI/CD pipeline with zero-downtime deployments and auto-scaling.",
    tech: ["AWS", "Docker", "Kubernetes", "Terraform"],
    icon: Cloud,
    color: "bg-purple-500",
    stats: "80% Faster Deployments",
  },
  {
    title: "AI Document Intelligence System",
    category: "ai",
    desc:
      "OCR + NLP pipeline extracting structured data with 99.5% accuracy.",
    tech: ["Python", "OpenCV", "TensorFlow", "FastAPI"],
    icon: Brain,
    color: "bg-green-500",
    stats: "99.5% Accuracy",
  },
  {
    title: "E-commerce Mobile Platform",
    category: "mobile",
    desc:
      "High-performance mobile shopping platform for 100K+ users.",
    tech: ["React Native", "Node.js", "MongoDB"],
    icon: ShoppingCart,
    color: "bg-red-500",
    stats: "100K+ Monthly Users",
  },
  {
    title: "Fintech Security Platform",
    category: "enterprise",
    desc:
      "Bank-grade security platform with real-time fraud detection.",
    tech: ["Next.js", "Python", "PostgreSQL"],
    icon: Shield,
    color: "bg-indigo-500",
    stats: "Bank-Grade Security",
  },
  {
    title: "Healthcare Telemedicine System",
    category: "enterprise",
    desc:
      "HIPAA-compliant telemedicine platform with video consultations.",
    tech: ["React", "Node.js", "PostgreSQL", "WebRTC"],
    icon: Users,
    color: "bg-cyan-500",
    stats: "10K+ Daily Consultations",
  },
  {
    title: "Real-time Analytics Dashboard",
    category: "saas",
    desc:
      "Enterprise analytics platform with real-time data visualization.",
    tech: ["React", "Node.js", "MongoDB", "D3.js"],
    icon: TrendingUp,
    color: "bg-yellow-500",
    stats: "Real-time Insights",
  },
];


const categories: Category[] = [
  { id: "all", label: "All Projects", icon: Zap },
  { id: "enterprise", label: "Enterprise", icon: Database },
  { id: "saas", label: "SaaS", icon: Cloud },
  { id: "ai", label: "AI/ML", icon: Brain },
  { id: "mobile", label: "Mobile", icon: Smartphone },
  { id: "devops", label: "DevOps", icon: Cpu },
];



const stats = [
  { value: "25+", label: "Projects Completed", icon: Award, color: "text-blue-400" },
  { value: "99%", label: "Client Satisfaction", icon: TrendingUp, color: "text-orange-400" },
  { value: "5M+", label: "Users Impacted", icon: Users, color: "text-purple-400" },
  { value: "100%", label: "On-Time Delivery", icon: Shield, color: "text-green-400" },
];

export default function PortfolioContent() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const categoryScrollRef = useRef<HTMLDivElement | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Calculate project counts per category

  /* Dynamic counts */
  const categoryCounts = useMemo<Record<CategoryId, number>>(() => {
    const counts = {
      all: projects.length,
      enterprise: 0,
      saas: 0,
      ai: 0,
      mobile: 0,
      devops: 0,
    };

    for (const project of projects) {
      counts[project.category]++;
    }

    return counts;
  }, []);

  /* Filtered projects */
  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const scrollLeft = () =>
    categoryScrollRef.current?.scrollBy({ left: -240, behavior: "smooth" });

  const scrollRight = () =>
    categoryScrollRef.current?.scrollBy({ left: 240, behavior: "smooth" });


  return (
    <>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16 md:mb-20"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-linear-to-r from-blue-500/10 to-orange-500/10 backdrop-blur-sm border border-white/20 mb-4 sm:mb-6">
          <Award className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300" />
          <span className="text-xs sm:text-sm font-medium">Software Development Portfolio</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6">
          <span className="text-transparent bg-clip-text bg-blue-500">
            Web & Mobile App
          </span>
          <span className="block text-transparent bg-clip-text bg-orange-500">
            Development Portfolio
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto px-4 sm:px-0">
          Explore our custom software development portfolio showcasing web development, mobile app development, and SaaS development projects that drive digital transformation for businesses.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-white/10 mb-12 sm:mb-16 md:mb-20 mx-4 sm:mx-0"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <div key={i} className="text-center p-3 sm:p-4">
                <div className={`inline-flex p-2 sm:p-3 rounded-xl bg-white/5 mb-3 sm:mb-4 ${stat.color}`}>
                  <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/70">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Category Filters */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 sm:mb-16 px-4 sm:px-0"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-0">
            <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300" />
            <h3 className="text-xl sm:text-2xl font-bold text-white">Filter Technology Solutions Portfolio</h3>
          </div>
          <div className="text-sm text-white/70">
            {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""} found
          </div>
        </div>

        {/* Mobile: HORIZONTAL SCROLLABLE CATEGORY SELECTOR (LIKE CAREERS PAGE) */}
        <div className="lg:hidden mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Select Category</h3>
            <div className="flex gap-2">
              <button
                onClick={scrollLeft}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={scrollRight}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div
              ref={categoryScrollRef}
              className="flex gap-3 pb-4 overflow-x-auto scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`shrink-0 w-48 p-4 rounded-xl border transition-all ${activeCategory === category.id
                      ? "bg-linear-to-r from-blue-600 to-indigo-600 border-white/30 shadow-lg"
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                      }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-white/10">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-white mb-1 line-clamp-1">{category.label}</div>
                        <div className="text-xs text-white">
                          {categoryCounts[category.id] || 0} projects
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
            <style jsx>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>
        </div>

        {/* Desktop: Original category buttons */}
        <div className="hidden lg:flex flex-wrap gap-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group flex items-center gap-3 px-6 py-3 rounded-xl transition-all ${activeCategory === category.id
                  ? "bg-linear-to-r from-blue-500 to-indigo-600 text-white!"
                  : "bg-white/5 hover:bg-white/10 border border-white/10"
                  }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{category.label}</span>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${activeCategory === category.id ? "bg-white/20" : "bg-white/5"
                    }`}
                >
                  {categoryCounts[category.id] || 0}
                </span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-20 md:mb-32 px-4 sm:px-0">
        {filteredProjects.map((project, index) => {
          const IconComponent = project.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="relative group"
            >
              {/* Glow */}
              <div
                className={`absolute -inset-0.5  ${project.color} rounded-2xl sm:rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500`}
              />

              {/* Card */}
              <div className="relative flex flex-col justify-between glass-card p-4 sm:p-6 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-white/10 h-full">
                <div className="grid">
                  {/* Icon + Category */}
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <div className={`p-3 sm:p-4 rounded-xl ${project.color}`}>
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white!" />
                    </div>
                    <div className="text-xs px-2 sm:px-3 py-1 rounded-full bg-white/10 border border-white/10 capitalize">
                      {project.category}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-sm sm:text-base mb-4 sm:mb-6">{project.desc}</p>

                  {/* Tech */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
                {/* Footer */}
                <div className="grid gap-2">
                  {/* <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                    <p className="text-xs sm:text-sm font-medium bg-linear-to-r bg-clip-text text-transparent">
                      {project.stats}
                    </p>

                    <div className="flex gap-1 sm:gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 sm:p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                          title="View Live Demo"
                        >
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 sm:p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                          title="View Source Code"
                        >
                          <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                        </a>
                      )}

                      {!project.liveUrl && !project.githubUrl && (
                        <div
                          className="p-1.5 sm:p-2 rounded-lg bg-white/5 border border-white/10 cursor-not-allowed"
                          title="Private Project"
                        >
                          <Lock className="w-3 h-3 sm:w-4 sm:h-4 text-white/40" />
                        </div>
                      )}
                    </div>
                  </div> */}
                  <Link
                    href="/contact"
                    className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white! font-semibold 
                bg-linear-to-r from-blue-500 to-indigo-600
                hover:from-blue-600 hover:to-blue-700
                transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
                shadow-[0_10px_40px_-15px_rgba(37,99,235,0.5)]
                flex items-center justify-center gap-2 sm:gap-3 overflow-hidden text-sm sm:text-base"
                  >
                    <span className="relative text-white!">Build Similar Project</span>
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Development Process */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 sm:mb-20 md:mb-32 px-4 sm:px-0"
      >
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-transparent bg-clip-text bg-orange-500">Software Development Process</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto px-4 sm:px-0">
            Every custom software development project follows our proven methodology to ensure quality, timeliness, and client satisfaction in our web development portfolio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {[
            { step: "01", title: "Discovery & Planning", desc: "Understand requirements and create detailed roadmap" },
            { step: "02", title: "Design & Prototyping", desc: "Create wireframes, prototypes, and design systems" },
            { step: "03", title: "Development & Testing", desc: "Build with agile methodology and continuous testing" },
            { step: "04", title: "Launch & Support", desc: "Deploy, monitor, and provide ongoing support" },
          ].map((item, i) => (
            <div key={i} className="relative text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-linear-to-br from-blue-500/20 to-orange-500/20 border border-white/10 mb-4 sm:mb-6">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">{item.step}</span>
              </div>
              <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">{item.title}</h4>
              <p className="text-xs sm:text-sm ">{item.desc}</p>

              {i < 3 && (
                <div className="hidden lg:block absolute top-6 sm:top-8 left-3/4 w-full h-px bg-linear-to-r from-blue-500/20 via-orange-500/20 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center px-4 sm:px-0"
      >
        <div className="glass-card p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-white/10 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-orange-400">
              Ready to Join Our Portfolio?
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
            Let's discuss how we can add your digital transformation project to our software development portfolio. Share your vision and we'll create a custom solution.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/contact"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white! font-semibold 
                bg-linear-to-r from-blue-500 to-indigo-600
                hover:from-blue-600 hover:to-blue-700
                transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
                shadow-[0_10px_40px_-15px_rgba(37,99,235,0.5)]
                flex items-center justify-center gap-2 sm:gap-3 overflow-hidden text-sm sm:text-base"
            >
              <span className="relative text-white!">Start Your Custom Software Project</span>
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/services"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white! font-semibold 
                bg-linear-to-r from-orange-500 to-orange-600
                hover:from-orange-600 hover:to-orange-700
                transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
                shadow-[0_10px_40px_-15px_rgba(234,88,12,0.5)]
                flex items-center justify-center gap-2 sm:gap-3 overflow-hidden text-sm sm:text-base"
            >
              <span className="relative text-white!">Explore Technology Solutions</span>
              <Eye className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}