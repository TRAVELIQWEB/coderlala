import { Project } from "@/types/portfolios/types";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useState } from "react";
// import type { Project } from "../types";

interface PortfolioCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

function getScreenshotUrl(siteUrl: string) {
  return `https://image.thum.io/get/width/1280/crop/800/noanimate/${siteUrl}`;
}

export default function PortfolioCard({ project, onSelect }: PortfolioCardProps) {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const screenshotUrl = project.liveUrl ? getScreenshotUrl(project.liveUrl) : null;
  const Icon = project.icon;

  return (
    <button
      onClick={() => onSelect(project)}
      className="block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
    >
      <motion.div
        whileHover={{ y: -5, scale: 1.012 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer bg-white/5 border border-white/10 hover:border-blue-400/30 shadow-[0_4px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_50px_rgba(59,130,246,0.2)] transition-all duration-300 w-full"
      >
        {/* ── Browser Chrome ─────────────────────────────────────────────── */}
        <div className="bg-[#1a1a2e] border-b border-white/10">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 mx-2 flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/8 border border-white/10">
              <Globe className="w-3 h-3 text-white/40 shrink-0" />
              <span className="text-[11px] text-white/50 truncate font-mono">
                {project.liveUrl}
              </span>
            </div>
          </div>

          {/* ── Screenshot ──────────────────────────────────────────────── */}
          <div
            className="relative w-full overflow-hidden bg-[#0d0d1a]"
            style={{ aspectRatio: "16/9" }}
          >
            {/* Skeleton shimmer */}
            {!imgLoaded && !imgError && (
              <div className="absolute inset-0 animate-pulse">
                <div className="w-full h-full bg-gradient-to-br from-white/5 via-white/3 to-transparent" />
                <div className="absolute top-6 left-6 right-6 space-y-2">
                  <div className="h-5 w-2/3 rounded bg-white/8" />
                  <div className="h-3 w-full rounded bg-white/5" />
                  <div className="h-3 w-4/5 rounded bg-white/5" />
                  <div className="h-3 w-3/4 rounded bg-white/5" />
                </div>
                <div className="absolute top-28 left-6 right-6 grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-16 rounded-lg bg-white/5" />
                  ))}
                </div>
              </div>
            )}

            {/* Fallback icon */}
            {imgError && (
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br ${project.color} opacity-80`}
              >
                <Icon className="w-12 h-12 text-white/80 mb-2" />
                <span className="text-xs text-white/60 font-medium">{project.title}</span>
              </div>
            )}

            {/* Screenshot image */}
            {screenshotUrl && !imgError && (
              <img
                src={screenshotUrl}
                alt={`${project.title} preview`}
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgError(true)}
                className={`w-full h-full object-cover object-top pointer-events-none select-none transition-opacity duration-500 ${imgLoaded ? "opacity-100" : "opacity-0"
                  }`}
                loading="lazy"
                draggable={false}
              />
            )}

            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-[#1a1a2e] to-transparent pointer-events-none" />
          </div>
        </div>

        {/* ── Card Body ──────────────────────────────────────────────────── */}
        <div className="flex flex-col flex-1 p-5">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-base font-bold leading-snug text-white">
              {project.title}
            </h3>
            <span
              className={`shrink-0 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-gradient-to-r ${project.color} text-white! whitespace-nowrap`}
            >
              {project.stats}
            </span>
          </div>

          <p className="text-xs leading-relaxed mb-4 line-clamp-2">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.tech.slice(0, 5).map((t) => (
              <span
                key={t}
                className="text-[10px] px-2 py-0.5 rounded-md font-medium bg-blue-500/10 border opacity-50 border-blue-500/20 transition-colors group-hover:border-blue-400/30"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 5 && (
              <span className="text-[10px] px-2 py-0.5 rounded-md font-medium bg-white/5 border border-dashed border-white/10 text-white/50">
                +{project.tech.length - 5}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </button>
  );
}
