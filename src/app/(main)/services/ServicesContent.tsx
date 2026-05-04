"use client";

// ─── ServicesContent ──────────────────────────────────────────────────────────
// All service data now comes from the single source of truth:
//   data/services/service.ts
// ─────────────────────────────────────────────────────────────────────────────

import { motion } from "framer-motion";
import {
  Layers,
  Rocket,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiMongodb,
  SiPostgresql,
  SiReact as SiReactNative,
  SiTailwindcss,
  SiPhp,
  SiBootstrap,
  SiWordpress,
  SiNestjs,
  SiJavascript,
  SiCss,
  SiGit,
  SiGithub,
  SiRedis,
  SiExpress,
  SiMysql,
  SiAngular,
  SiLaravel,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

import Link from "next/link";
import { useState, useRef } from "react";
import { FinalCTA } from "@/app/components/sections/cta";
import HeroTitle from "@/app/components/HeroTitle";
import { services } from "./data/services/service";
import { ServiceCard } from "@/app/components/services/ServiceCard";
import { FeaturedService } from "@/app/components/services/FeaturedService";

// ← single import – no more local duplicate
// import { services } from "@/data/services/service";

// ─── Tech stack (UI-only, stays here) ─────────────────────────────────────────
const techStack = [
  { name: "Next.js", icon: SiNextdotjs, color: "text-black! dark:text-white" },
  { name: "React", icon: SiReact, color: "text-blue-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "Python", icon: SiPython, color: "text-yellow-500" },
  { name: "AWS", icon: FaAws, color: "text-orange-500" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
  { name: "React Native", icon: SiReactNative, color: "text-cyan-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "PHP", icon: SiPhp, color: "text-indigo-500" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
  { name: "WordPress", icon: SiWordpress, color: "text-blue-700" },
  { name: "NestJS", icon: SiNestjs, color: "text-red-600" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "CSS3", icon: SiCss, color: "text-blue-500" },
  { name: "Git", icon: SiGit, color: "text-red-500" },
  { name: "GitHub", icon: SiGithub, color: "text-black! dark:text-white" },
  { name: "Redis", icon: SiRedis, color: "text-red-600" },
  { name: "Express", icon: SiExpress, color: "text-black! dark:text-white" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
  { name: "Angular", icon: SiAngular, color: "text-red-600" },
  { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
];

const process = [
  { step: "01", title: "Discovery", desc: "Understand requirements and define project scope" },
  { step: "02", title: "Planning", desc: "Create detailed roadmap and technology stack" },
  { step: "03", title: "Design", desc: "Wireframes, prototypes, and UI/UX design" },
  { step: "04", title: "Development", desc: "Agile development with regular updates" },
  { step: "05", title: "Testing", desc: "Comprehensive QA and performance testing" },
  { step: "06", title: "Launch", desc: "Deployment and post-launch support" },
];

const stats = [
  { value: "25+", label: "Projects Delivered", icon: Rocket, color: "text-blue-400" },
  { value: "25+", label: "Happy Clients", icon: Users, color: "text-orange-400" },
  { value: "99%", label: "Client Satisfaction", icon: Target, color: "text-purple-400" },
  { value: "100%", label: "On-Time Delivery", icon: Clock, color: "text-green-400" },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function ServicesContent() {
  const [activeService, setActiveService] = useState(0);
  const servicesScrollRef = useRef<HTMLDivElement | null>(null);
  const techScrollRef = useRef<HTMLDivElement | null>(null);

  const scrollServicesLeft = () =>
    servicesScrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  const scrollServicesRight = () =>
    servicesScrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  const scrollTechLeft = () =>
    techScrollRef.current?.scrollBy({ left: -150, behavior: "smooth" });
  const scrollTechRight = () =>
    techScrollRef.current?.scrollBy({ left: 150, behavior: "smooth" });

  // Convenience alias – pull from the unified data
  const active = services[activeService] || services[0];

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16 md:mb-20"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-linear-to-r from-blue-500/10 to-orange-500/10 backdrop-blur-sm border border-white/20 mb-4 sm:mb-6">
          <Layers className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300" />
          <span className="text-xs sm:text-sm font-medium">Our Services</span>
        </div>

        <HeroTitle title1="Comprehensive" title2="Digital Solutions" />
        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto px-4 sm:px-0">
          We deliver end-to-end technology services that transform ideas into scalable, high-performance digital
          products with exceptional user experiences.
        </p>
      </motion.div>

      {/* ── Stats Banner ─────────────────────────────────────────────────── */}
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

      {/* ── Featured Service ──────────────────────────────────────────────── */}
      <div className="container mx-auto">
        <FeaturedService services={services} />
      </div>

      {/* ── All Services Grid ─────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 sm:mb-20 md:mb-32 px-4 sm:px-0"
      >
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-transparent bg-clip-text bg-orange-500">All Our Services</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto px-4 sm:px-0">
            From concept to launch, we provide comprehensive solutions for every stage of your digital journey.
          </p>
        </div>

        {/* ── Service Cards ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </motion.div>

      {/* ── Development Process ───────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 sm:mb-20 md:mb-32 px-4 sm:px-0"
      >
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-transparent bg-clip-text bg-orange-500">Our Development Process</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto px-4 sm:px-0">
            A proven methodology that ensures quality, transparency, and timely delivery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {process.map((step, i) => (
            <div key={i} className="relative">
              <div className="glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-xl border border-white/10 h-full">
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-linear-to-br from-blue-500/20 to-orange-500/20 border border-white/10 mb-3 sm:mb-4">
                  <span className="text-base sm:text-lg font-bold text-white">{step.step}</span>
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">{step.title}</h4>
                <p className="text-xs sm:text-sm text-white/60">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Tech Stack ───────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 sm:mb-20 md:mb-32 px-4 sm:px-0"
      >
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-transparent bg-clip-text bg-orange-500">Technologies We Use</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto px-4 sm:px-0">
            We work with cutting-edge technologies to build modern, scalable solutions.
          </p>
        </div>

        {/* Mobile scroll controls */}
        <div className="lg:hidden mb-4">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-lg font-semibold text-white">Scroll to explore</h3>
            <div className="flex gap-2">
              <button
                onClick={scrollTechLeft}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={scrollTechRight}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl">
          {/* Desktop grid */}
          <div className="hidden lg:flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-8 px-2">
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
                  className="group relative"
                >
                  <div className="px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 rounded-xl glass-card backdrop-blur-sm hover:bg-white hover:border-white/30 transition-all duration-300 flex flex-col items-center justify-center min-w-20 sm:min-w-25 gap-1 sm:gap-2">
                    <Icon
                      className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 ${tech.color} group-hover:scale-110 transition-transform`}
                    />
                    <span className="text-xs sm:text-sm font-medium text-center">{tech.name}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile horizontal scroll */}
          <div className="lg:hidden">
            <div
              ref={techScrollRef}
              className="flex gap-3 pb-4 overflow-x-auto px-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {techStack.map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="shrink-0"
                  >
                    <div className="px-4 py-3 rounded-xl glass-card backdrop-blur-sm border border-white/10 transition-all duration-300 flex flex-col items-center justify-center w-32 gap-2">
                      <Icon className={`w-6 h-6 ${tech.color}`} />
                      <span className="text-xs font-medium text-center">{tech.name}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      <FinalCTA />
    </>
  );
}
