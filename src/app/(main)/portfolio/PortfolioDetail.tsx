import { Button } from "@/components/ui/button";
import { Project } from "@/types/portfolios/types";
import { motion, AnimatePresence } from "framer-motion";
import {
    X,
    Globe,
    ExternalLink,
    CheckCircle2,
    Lightbulb,
    Target,
    Trophy,
    ArrowUpRight,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface PortfolioDetailProps {
    project: Project | null;
    onClose: () => void;
}

function getScreenshotUrl(siteUrl: string) {
    return `https://image.thum.io/get/width/1280/crop/800/noanimate/${siteUrl}`;
}

export default function PortfolioDetail({ project, onClose }: PortfolioDetailProps) {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [imgError, setImgError] = useState(false);
    const router = useRouter();
    // Reset image state when project changes
    useEffect(() => {
        setImgLoaded(false);
        setImgError(false);
    }, [project?.title]);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (project) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [project]);

    // Close on Escape key
    useEffect(() => {
        if (!project) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [project, onClose]);

    const screenshotUrl = project?.liveUrl ? getScreenshotUrl(project.liveUrl) : null;
    const Icon = project?.icon;

    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6"
                >
                    {/* Backdrop — fixed, covers everything */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal container — fixed height, flex col */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="relative z-10 w-full max-w-3xl h-[90vh] sm:h-[85vh] rounded-xl sm:rounded-2xl bg-card border border-white/10 shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* ══════════════════ FIXED HEADER — Site Image Only ══════════════════ */}
                        <div className="shrink-0 relative w-full overflow-hidden bg-[#0d0d1a] border-b border-white/10" style={{ aspectRatio: "16/7" }}>
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
                            {imgError && Icon && (
                                <div className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br ${project.color} opacity-80`}>
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
                                    draggable={false}
                                />
                            )}

                            {/* Close button — top right on image */}
                            <Button
                                onClick={onClose}
                                variant="destructive"
                                size="icon"
                                className="absolute top-3 right-3 z-20 p-2 rounded-full text-white!"
                            >
                                <X className="w-5 h-5" />
                            </Button>

                            {/* Bottom gradient overlay with info */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0d0d1a] via-[#0d0d1a]/80 to-transparent pt-16 sm:pt-20 pb-3 sm:pb-4 px-4 sm:px-6">
                                <div className="flex items-end justify-between gap-3">
                                    <div className="min-w-0">
                                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 mb-2">
                                            <span className="text-[10px] font-semibold text-white! uppercase tracking-wider">
                                                {project.category}
                                            </span>
                                        </div>
                                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white! truncate">
                                            {project.title}
                                        </h2>
                                    </div>
                                    <div className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/15 backdrop-blur-sm border border-white/20">
                                        <Trophy className="w-3 h-3 text-yellow-300" />
                                        <span className="text-white! font-semibold text-xs">{project.stats}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ══════════════════ SCROLLABLE CONTENT ══════════════════ */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar">
                            <div className="p-5 sm:p-8 md:p-10 space-y-4 pb-4">
                                {/* Challenge & Solution */}
                                {project.challenge && project.solution && (
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {/* className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors" */}

                                        <div className="p-4 sm:p-5 rounded-xl bg-card-bg2 border border-white/10">
                                            <div className="flex items-center gap-2 mb-3">
                                                <Lightbulb className="w-5 h-5 text-yellow-400" />
                                                <h3 className="font-semibold text-white">Challenge</h3>
                                            </div>
                                            <p className="text-sm leading-relaxed">{project.challenge}</p>
                                        </div>
                                        <div className="p-4 sm:p-5 rounded-xl bg-card-bg2 border border-white/10">
                                            <div className="flex items-center gap-2 mb-3">
                                                <Target className="w-5 h-5 text-green-400" />
                                                <h3 className="font-semibold text-white">Solution</h3>
                                            </div>
                                            <p className="text-sm leading-relaxed">{project.solution}</p>
                                        </div>
                                    </div>
                                )}

                                {/* Result */}
                                {project.result && (
                                    <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Trophy className="w-5 h-5 text-green-400" />
                                            <h3 className="font-semibold text-white">Results</h3>
                                        </div>
                                        <p className="text-sm text-white/70 leading-relaxed">{project.result}</p>
                                    </div>
                                )}

                                {/* Features */}
                                {project.features && project.features.length > 0 && (
                                    <div>
                                        <h3 className="font-semibold text-white mb-4 text-lg">Key Features</h3>
                                        <div className="grid sm:grid-cols-2 gap-3">
                                            {project.features.map((feature, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-start gap-3 p-3 rounded-lg bg-card-bg2 border border-white/5 transition-colors"
                                                >
                                                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                                    <span className="text-sm text-white/70">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Tech Stack */}
                                <div>
                                    <h3 className="font-semibold mb-4 text-lg">Technology Stack</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="px-3 py-1 rounded-lg text-sm font-medium bg-blue-500/10 border border-blue-500/20 text-blue-300 hover:border-blue-400/30 transition-colors"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Full Description */}
                                {project.descFull && (
                                    <div>
                                        <h3 className="font-semibold text-white mb-3 text-lg">About This Project</h3>
                                        <p className="text-sm leading-relaxed">{project.descFull}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* ══════════════════ FIXED FOOTER ══════════════════ */}
                        <div className="shrink-0 border-t border-white/10 bg-animatedbg px-5 sm:px-8 md:px-10 py-2 sm:py-3">
                            <div className="flex flex-col sm:flex-row gap-3">
                                {project.liveUrl && (
                                    <Button
                                        onClick={() =>
                                            window.open(project.liveUrl, '_blank', 'noopener,noreferrer')
                                        }
                                        variant="destructive"
                                        className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-white!"
                                    >
                                        <Globe className="w-4 h-4" />
                                        <span>Visit Live Site</span>
                                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </Button>
                                )}
                                <Button
                                    onClick={() => router.push("/contact")}
                                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-blue-700 transition-all text-white! font-semibold text-sm shadow-[0_10px_40px_-15px_rgba(37,99,235,0.5)]"
                                >
                                    Start a Similar Project
                                    <ExternalLink className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
