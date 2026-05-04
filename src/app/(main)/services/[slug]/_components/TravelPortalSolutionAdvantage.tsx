'use client'
import { useState } from "react";
import { Lightbulb, Workflow, Award } from "lucide-react";

const TravelPortalSolutionAdvantage = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "Expert Strategy",
          desc: "We begin with comprehensive discovery and strategic planning to ensure every decision aligns with your business goals and market realities.",
          icon: Lightbulb,
          color: "blue",
          shadow: "rgba(59,130,246,0.3)",
          gradient: "from-blue-500 to-indigo-600",
          borderHex: "#3b82f6"
        },
        {
          title: "Agile Execution",
          desc: "Using agile methodologies, we deliver results iteratively, ensuring flexibility, transparency, and rapid response to changing market demands.",
          icon: Workflow,
          color: "purple",
          shadow: "rgba(168,85,247,0.3)",
          gradient: "from-purple-500 to-pink-600",
          borderHex: "#a855f7"
        },
        {
          title: "Proven Excellence",
          desc: "Backed by 10+ years of industry experience and a portfolio of 500+ successful projects, we deliver consistently outstanding results.",
          icon: Award,
          color: "green",
          shadow: "rgba(34,197,94,0.3)",
          gradient: "from-green-500 to-emerald-600",
          borderHex: "#22c55e"
        }
      ].map((item, idx) => (
        <Card key={idx} item={item} />
      ))}
    </div>
  );
};

function Card({ item }: { item: any }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderColor: hovered ? `${item.borderHex}80` : undefined,
      }}
      className="group relative p-6 md:p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden bg-animatedbg border-2 border-border shadow-2xl"
    >
      {/* Floating particles */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className={`absolute top-4 right-4 w-1 h-1 rounded-full bg-linear-to-r ${item.gradient} animate-ping`} />
        <div className={`absolute top-8 right-8 w-1.5 h-1.5 rounded-full bg-linear-to-r ${item.gradient} animate-ping delay-150`} />
        <div className={`absolute top-12 right-2 w-0.5 h-0.5 rounded-full bg-linear-to-r ${item.gradient} animate-ping delay-300`} />
      </div>

      <div className="relative z-10">
        {/* Icon Section */}
        <div className="relative mb-6">
          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl">
            <div className={`absolute inset-0 bg-linear-to-br ${item.gradient}`} />
            <div className="relative w-full h-full flex items-center justify-center">
              <item.icon className="w-7 h-7 md:w-9 md:h-9 text-white! drop-shadow-lg" strokeWidth={1.5} />
            </div>
            <div className="absolute top-0 right-0 w-8 h-8 bg-linear-to-bl from-white/20 to-transparent rounded-bl-2xl" />
          </div>
        </div>

        {/* Title */}
        <h3 className={`relative text-xl md:text-2xl font-bold mb-3 text-foreground bg-linear-to-r ${item.gradient} bg-clip-text text-transparent! transition-all duration-300`}>
          {item.title}
        </h3>

        {/* Underline */}
        <div className={`relative h-0.5 rounded-full bg-linear-to-r ${item.gradient} w-12 mb-4 transition-all duration-500 group-hover:w-24`} />

        {/* Description */}
        <p className="relative text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default TravelPortalSolutionAdvantage;