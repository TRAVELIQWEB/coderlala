"use client";

import { motion } from "framer-motion";
import {
  ShoppingCart,
  Shield,
  Zap,
  Eye,
  Award,
  TrendingUp,
  Users,
  Heart,
  Sparkles,
  Activity,
  Palette,
} from "lucide-react";
import Link from "next/link";
import HeroTitle from "@/app/components/HeroTitle";
import FilterablePortfolioGrid from "./FilterablePortfolioGrid";
import { useState } from "react";
import PortfolioDetail from "./PortfolioDetail";
import { projects, categories, portfolioStats as stats } from "./portfolioData";
import type { Project } from "@/types/portfolios/types";

export default function PortfolioContent() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
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

        <HeroTitle title1="Web & Mobile App" title2="Development Portfolio" />

        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto px-4 sm:px-0">
          Explore our custom software development portfolio showcasing web development, mobile app
          development, and SaaS projects that drive digital transformation for businesses.
        </p>
      </motion.div>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
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

      {/* ── Filterable Portfolio Grid ─────────────────────────────────────── */}
      <FilterablePortfolioGrid
        projects={projects}
        categories={categories}
        title="Filter Technology Solutions Portfolio"
        showViewAllButton={false}
        onSelectProject={setSelectedProject}
      />

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
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
              Software Development Process
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto px-4 sm:px-0">
            Every custom software development project follows our proven methodology to ensure
            quality, timeliness, and client satisfaction.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {[
            { step: "01", title: "Discovery & Planning", desc: "Understand requirements and create a detailed roadmap" },
            { step: "02", title: "Design & Prototyping", desc: "Create wireframes, prototypes, and design systems" },
            { step: "03", title: "Development & Testing", desc: "Build with agile methodology and continuous testing" },
            { step: "04", title: "Launch & Support", desc: "Deploy, monitor, and provide ongoing support" },
          ].map((item, i) => (
            <div key={i} className="relative text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-linear-to-br from-blue-500/20 to-orange-500/20 border border-white/10 mb-4 sm:mb-6">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">{item.step}</span>
              </div>
              <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">{item.title}</h4>
              <p className="text-xs sm:text-sm">{item.desc}</p>
              {i < 3 && (
                <div className="hidden lg:block absolute top-6 sm:top-8 left-3/4 w-full h-px bg-linear-to-r from-blue-500/20 via-orange-500/20 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
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
            Let's discuss how we can add your digital transformation project to our portfolio.
            Share your vision and we'll create a custom solution.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            {/* ✅ Primary CTA — hard navigate to /contact */}
            <Link
              href="/contact"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white! font-semibold bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl shadow-[0_10px_40px_-15px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 sm:gap-3 overflow-hidden text-sm sm:text-base"
            >
              <span className="relative text-white!">Start Your Custom Software Project</span>
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/services"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white! font-semibold bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl shadow-[0_10px_40px_-15px_rgba(234,88,12,0.5)] flex items-center justify-center gap-2 sm:gap-3 overflow-hidden text-sm sm:text-base"
            >
              <span className="relative text-white!">Explore Technology Solutions</span>
              <Eye className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* ── Portfolio Detail Modal ────────────────────────────────────────── */}
      <PortfolioDetail
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </>
  );
}