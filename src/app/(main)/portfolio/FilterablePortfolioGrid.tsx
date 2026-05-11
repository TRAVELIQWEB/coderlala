import { motion, AnimatePresence } from "framer-motion";
import { Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useMemo } from "react";
import PortfolioCard from "./PortfolioCard";
import { Category, Project } from "@/types/portfolios/types";

interface FilterablePortfolioGridProps {
  projects: Project[];
  categories: Category[];
  title?: string;
  subtitle?: string;
  showViewAllButton?: boolean;
  onSelectProject: (project: Project) => void;
}

export default function FilterablePortfolioGrid({
  projects,
  categories,
  title = "Filter Technology Solutions Portfolio",
  subtitle,
  showViewAllButton = false,
  onSelectProject,
}: FilterablePortfolioGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const categoryScrollRef = useRef<HTMLDivElement | null>(null);

  const categoryCounts = useMemo<Record<string, number>>(() => {
    const counts: Record<string, number> = { all: projects.length };
    for (const project of projects) {
      counts[project.category] = (counts[project.category] ?? 0) + 1;
    }
    return counts;
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory, projects]);

  const scrollLeft = () =>
    categoryScrollRef.current?.scrollBy({ left: -240, behavior: "smooth" });
  const scrollRight = () =>
    categoryScrollRef.current?.scrollBy({ left: 240, behavior: "smooth" });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12 sm:mb-16 px-4 sm:px-0"
    >
      {/* ── Header ──────────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-0">
          <Filter className="size-5 text-white" />
          <h3 className="text-xl sm:text-2xl font-bold text-white">{title}</h3>
        </div>
        <div className="text-sm text-white/70">
          {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""} found
        </div>
      </div>

      {/* ── Desktop: Pill Buttons ─────────────────────────────────────────── */}
      {/* <div className="hidden lg:flex flex-wrap gap-3 mb-2">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center gap-3 px-6 py-3 rounded-lg border transition-all ${isActive
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg border-transparent"
                  : "glass-card border-white/10 hover:bg-white/10 text-white/80"
                }`}
            >
              <Icon className="w-4 h-4" />
              <span className="font-medium">{category.label}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${isActive ? "bg-white/20" : "bg-white/5"
                  }`}
              >
                {categoryCounts[category.id] ?? 0}
              </span>
            </button>
          );
        })}
      </div> */}

      {/* ── Mobile: Horizontal Scroll ────────────────────────────────────── */}
      <div className="lg:hidden mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-white/70">Select Category</span>
          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={categoryScrollRef}
          className="flex gap-3 pb-4 overflow-x-auto hide-scrollbar"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`shrink-0 w-44 p-4 rounded-xl border transition-all ${isActive
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-white/30 shadow-lg"
                    : "bg-white/5 border-white/10 hover:bg-white/10 text-white/80"
                  }`}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/10">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold mb-1 line-clamp-1 text-sm">
                      {category.label}
                    </div>
                    <div className="text-xs text-white/60">
                      {categoryCounts[category.id] ?? 0} projects
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Desktop: Pill Buttons ─────────────────────────────────────────── */}
      <div className="hidden lg:flex flex-wrap gap-3 mb-2">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex  items-center gap-3 px-6 py-3 rounded-lg! border-none transition-all ${isActive
                ? "bg-linear-to-r! from-blue-500! to-indigo-600! text-white! shadow-lg"
                : "glass-card"
                }`}
            >
              <Icon className="w-4 h-4" />
              <span className="font-medium">{category.label}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${isActive ? "bg-white/20" : "bg-white/5"
                  }`}
              >
                {categoryCounts[category.id] ?? 0}
              </span>
            </button>
          );
        })}
      </div>

      {subtitle && (
        <p className="mt-2 mb-4 text-base text-white/70 text-center max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}

      {/* ── Projects Grid ───────────────────────────────────────────────── */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25, delay: index * 0.04 }}
            >
              <PortfolioCard project={project} onSelect={onSelectProject} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ── View All Button ───────────────────────────────────────────────── */}
      {showViewAllButton && filteredProjects.length > 6 && (
        <div className="text-center mt-8">
          <button className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-white font-semibold">
            View All Projects
          </button>
        </div>
      )}
    </motion.div>
  );
}
