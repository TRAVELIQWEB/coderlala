'use client';
import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { services } from '../../data/services/service';

// Map your color names to actual hex values (or Tailwind CSS vars)
const colorHex: Record<string, string> = {
  indigo: '#6366f1',
  blue: '#3b82f6',
  cyan: '#06b6d4',
  teal: '#14b8a6',
};

const colorText: Record<string, string> = {
  indigo: 'text-indigo-600 dark:text-indigo-400',
  blue: 'text-blue-600 dark:text-blue-400',
  cyan: 'text-cyan-600 dark:text-cyan-400',
  teal: 'text-teal-600 dark:text-teal-400',
};

const ServiceProcessSection = ({ serviceId = 0 }) => {
  const service = services.find(s => s.id === serviceId);
  if (!service) return null;

  return (
    <div className="grid md:grid-cols-4 gap-4">
      {service.process.map((step, idx) => {
        const hex = colorHex[step.color] ?? colorHex.indigo;
        const IconComponent =
          (step.icon && (LucideIcons as any)[step.icon]) || LucideIcons.Zap;

        return (
          <Card key={idx} hex={hex} step={step} idx={idx} service={service} IconComponent={IconComponent} />
        );
      })}
    </div>
  );
};

// Separate component so hover state is per-card
function Card({ hex, step, idx, service, IconComponent }: any) {
  const [hovered, setHovered] = useState(false);
  const textClass = colorText[step.color] ?? colorText.indigo;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderColor: hovered ? hex : undefined,
        // Optional: subtle background tint on hover
        ['--accent' as string]: hex,
      }}
      className="group relative p-8 rounded-xl transition-all duration-500 hover:-translate-y-3 overflow-hidden bg-animatedbg! border-2 border-border"
    >
      {/* Floating particles */}
      <div className="absolute -top-4 -right-4 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div
          className="absolute top-4 right-4 w-1 h-1 rounded-full animate-ping"
          style={{ backgroundColor: hex }}
        />
        <div
          className="absolute top-8 right-8 w-1.5 h-1.5 rounded-full animate-ping delay-150"
          style={{ backgroundColor: hex }}
        />
      </div>

      {/* Inner glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
        style={{ background: `linear-gradient(to bottom right, ${hex}33, transparent)` }}
      />

      <div className="relative z-10">
        {/* Step number badge */}
        <div className="flex items-start justify-between mb-6">
          <div
            className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg flex items-center justify-center"
            style={{ backgroundColor: hex }}
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative text-white! font-black text-2xl md:text-3xl drop-shadow-lg">
              {step.num}
            </span>
          </div>

          {/* Icon */}
          <div className="relative p-2">
            <IconComponent
              className="relative size-7 transition-all duration-500 group-hover:scale-110"
              style={{ color: hex }}
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Title */}
        <h3 className={`text-xl font-bold mb-3 transition-all duration-300 ${textClass}`}>
          {step.title}
        </h3>

        {/* Animated underline */}
        <div
          className="h-0.5 rounded-full w-10 mb-4 transition-all duration-500 group-hover:w-20"
          style={{ backgroundColor: hex }}
        />

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
          {step.desc}
        </p>
      </div>

    </div>
  );
}

export default ServiceProcessSection;