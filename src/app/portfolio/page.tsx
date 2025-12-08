// app/portfolio/page.tsx
import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio | CoderLala Technologies - Enterprise, SaaS, AI/ML & DevOps Projects",
  description:
    "Explore CoderLala’s portfolio featuring enterprise platforms, SaaS solutions, AI/ML systems, DevOps automation, mobile apps, fintech security platforms, and real-time analytics dashboards.",
};

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 
          bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 
          bg-gradient-to-tl from-orange-500/10 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <PortfolioContent />
      </div>
    </div>
  );
}
