"use client";

// ─── ServicesOverview ─────────────────────────────────────────────────────────
// All service data now comes from the single source of truth:
//   data/services/service.ts
// ─────────────────────────────────────────────────────────────────────────────

import { motion } from "framer-motion";
import { Code2, ChevronRight, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

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
import { services } from "@/app/(main)/services/data/services/service";
import { ServiceCard } from "../services/ServiceCard";

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

// ─────────────────────────────────────────────────────────────────────────────

export default function ServicesOverview() {
  return (
    <section className="relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-linear-to-br from-blue-500/10 to-transparent blur-2xl sm:blur-3xl rounded-full dark:from-blue-500/5" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-linear-to-tl from-purple-500/10 to-transparent blur-2xl sm:blur-3xl rounded-full dark:from-purple-500/5" />
        <div className="absolute top-3/4 left-1/2 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-linear-to-r from-orange-500/10 to-transparent blur-2xl sm:blur-3xl rounded-full dark:from-orange-500/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">

        {/* ── Heading ────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 mb-4 sm:mb-6">
            <Code2 className="w-3 h-3 sm:w-4 sm:h-4 text-gray-800 dark:text-white" />
            <span className="text-xs sm:text-sm font-medium text-gray-800 dark:text-white">
              Comprehensive Technology Solutions
            </span>
          </div>

          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
              Expert Web Development &
            </span>
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400">
              Custom Software Solutions
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white dark:text-gray-300 max-w-3xl mx-auto px-2">
            We deliver comprehensive web development services, mobile app development services, and SaaS development
            services that drive digital transformation through innovative technology solutions and expert IT consulting.
          </p>
        </motion.div>

        {/* ── Service Cards ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* ── Tech Stack ─────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 sm:mt-20 md:mt-24 pt-8 sm:pt-10 md:pt-12 border-t border-white/20"
        >
          <h2 className="text-3xl text-center sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
              Advanced Technologies for
            </span>
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400">
              Enterprise Software Development
            </span>
          </h2>
          <p className="text-base text-center mb-12 sm:text-lg md:text-xl text-white dark:text-gray-300 max-w-3xl mx-auto px-2">
            We deliver comprehensive web development services, mobile app development services, and SaaS development
            services that drive digital transformation through innovative technology solutions and expert IT consulting.
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
                  className="group relative"
                >
                  <div className="px-4 py-3 sm:px-5 sm:py-4 rounded-xl glass-card backdrop-blur-sm hover:bg-white hover:border-white/30 transition-all duration-300 flex flex-col items-center justify-center min-w-25 sm:min-w-30 gap-2">
                    <Icon
                      className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${tech.color} group-hover:scale-110 transition-transform`}
                    />
                    <span className="text-xs sm:text-sm font-medium text-center">{tech.name}</span>
                  </div>
                  <div
                    className={`absolute -inset-1 bg-linear-to-r ${tech.color.replace("text-", "from-")} to-transparent rounded-xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Final CTA */}
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