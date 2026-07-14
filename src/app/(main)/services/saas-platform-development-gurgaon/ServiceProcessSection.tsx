// app/saas-platform-development-gurgaon/ServiceProcessSection.tsx
'use client';
import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';

// Static services data
const servicesData = [
  {
    id: 1,
    name: "SaaS Platform Development",
    process: [
      {
        num: 1,
        title: "Discovery & Strategy",
        desc: "We dive deep into your SaaS idea, target market, competitive landscape, and business goals to create a strategic product roadmap for your platform's success.",
        icon: "Search",
        color: "indigo"
      },
      {
        num: 2,
        title: "Architecture & Design",
        desc: "Our architects design scalable, cloud-native architecture with microservices, multi-tenancy, and robust security to ensure your platform can grow with your business.",
        icon: "Cloud",
        color: "blue"
      },
      {
        num: 3,
        title: "Development & Testing",
        desc: "We build your SaaS platform using modern technologies with comprehensive testing, CI/CD pipelines, and rigorous quality assurance at every stage.",
        icon: "Code",
        color: "cyan"
      },
      {
        num: 4,
        title: "Deployment & Scaling",
        desc: "We handle the entire deployment process with cloud infrastructure setup, performance optimization, monitoring, and scalable architecture for growth.",
        icon: "Rocket",
        color: "teal"
      }
    ]
  },
  {
    id: 2,
    name: "B2B SaaS Development",
    process: [
      {
        num: 1,
        title: "Strategy & Planning",
        desc: "We define your B2B SaaS product's core features, target enterprise customers, and create a comprehensive development roadmap aligned with business needs.",
        icon: "Brain",
        color: "indigo"
      },
      {
        num: 2,
        title: "Enterprise Architecture",
        desc: "We design enterprise-grade architecture with role-based access, team collaboration, advanced analytics, and seamless integrations with existing systems.",
        icon: "Layers",
        color: "blue"
      },
      {
        num: 3,
        title: "Development & Integration",
        desc: "We build your B2B SaaS with clean code, comprehensive API development, third-party integrations, and enterprise-level security features.",
        icon: "Server",
        color: "cyan"
      },
      {
        num: 4,
        title: "Deployment & Enterprise Support",
        desc: "We handle enterprise deployment, provide white-glove support, and ensure smooth onboarding for your enterprise customers.",
        icon: "TrendingUp",
        color: "teal"
      }
    ]
  },
  {
    id: 3,
    name: "B2C SaaS Development",
    process: [
      {
        num: 1,
        title: "Product Discovery",
        desc: "We validate your B2C SaaS concept, define user personas, and create a feature roadmap that addresses consumer needs and market demands.",
        icon: "Lightbulb",
        color: "indigo"
      },
      {
        num: 2,
        title: "UX/UI Design",
        desc: "We design intuitive, consumer-focused interfaces with seamless onboarding, engaging user experiences, and conversion-optimized workflows.",
        icon: "Palette",
        color: "blue"
      },
      {
        num: 3,
        title: "Development & Optimization",
        desc: "We build your B2C SaaS with modern tech stacks, performance optimization, and engaging features that drive user adoption and retention.",
        icon: "AppWindow",
        color: "cyan"
      },
      {
        num: 4,
        title: "Launch & Growth",
        desc: "We handle product launch, monitor user adoption, and scale infrastructure based on user growth and engagement metrics.",
        icon: "TrendingUp",
        color: "teal"
      }
    ]
  }
];

// Color configuration
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

interface ServiceProcessSectionProps {
  serviceId?: number;
}

const ServiceProcessSection = ({ serviceId = 1 }: ServiceProcessSectionProps) => {
  const service = servicesData.find(s => s.id === serviceId) || servicesData[0] || { process: [] };
  return (
    <div className="space-y-6">
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
    </div>
  );
};

// Card component
function Card({ hex, step, idx, service, IconComponent }: any) {
  const [hovered, setHovered] = useState(false);
  const textClass = colorText[step.color] ?? colorText.indigo;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderColor: hovered ? hex : undefined,
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
        <p className="text-primary leading-relaxed text-sm md:text-base">
          {step.desc}
        </p>
      </div>

    </div>
  );
}

export default ServiceProcessSection;