// components/FeaturedService.tsx
"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Award, CheckCircle, Rocket, Clock } from "lucide-react";
import { Service } from "@/app/(main)/services/data/services/service";

interface FeaturedServiceProps {
  services: Service[];
}

export const FeaturedService = ({ services }: FeaturedServiceProps) => {
  const [activeService, setActiveService] = useState(0);
  const servicesScrollRef = useRef<HTMLDivElement>(null);

  const scrollServicesLeft = () => {
    if (servicesScrollRef.current) {
      servicesScrollRef.current.scrollBy({ left: -280, behavior: "smooth" });
    }
  };

  const scrollServicesRight = () => {
    if (servicesScrollRef.current) {
      servicesScrollRef.current.scrollBy({ left: 280, behavior: "smooth" });
    }
  };

  const getServiceIconData = (service: Service) => {
    const isTravelPortal = service.slug === "travel-portal-development";
    const icon = isTravelPortal && service.uiIcons?.[1]?.icon
      ? service.uiIcons[1].icon
      : service.iconComponent;
    const bgColor = service.uiColor;
    return { icon, bgColor };
  };

  const active = services[activeService];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12 sm:mb-16 md:mb-20 px-4 sm:px-0"
    >
      <div className="relative group">
        <div className="relative glass-card p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-white/10">
          {/* Mobile horizontal service selector */}
          <div className="lg:hidden mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Select a Service</h3>
              <div className="flex gap-2">
                <button
                  onClick={scrollServicesLeft}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={scrollServicesRight}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            <div
              ref={servicesScrollRef}
              className="flex gap-3 pb-4 overflow-x-auto"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {services.map((service, i) => {
                const { icon: DisplayIcon, bgColor: iconBgColor } = getServiceIconData(service);

                return (
                  <button
                    key={i}
                    onClick={() => setActiveService(i)}
                    className={`shrink-0 w-64 px-3 p-2 rounded-xl border transition-all ${i === activeService
                      ? "bg-white/10 border-white/30 shadow-lg"
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                      }`}
                  >
                    <div className="flex items-start gap-2">
                      <div className={`p-2 rounded-lg ${iconBgColor} bg-opacity-20 mt-1`}>
                        <DisplayIcon className="size-7 text-white!" />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-white mb-1 line-clamp-1">{service.title}</div>
                        <div className="text-xs text-white/70 flex items-center gap-1">
                          <span>{service.projectCount} projects</span>
                          <span className="text-white/50">•</span>
                          <span>{service.delivery}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {/* Left – active service details */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 md:mb-6">
                <div className="">
                  <div className={`inline-flex p-2 sm:p-6 rounded-xl ${active.uiColor} bg-opacity-20 mb-3 sm:mb-4`}>
                    {(() => {
                      const { icon: IconComponent } = getServiceIconData(active);
                      return <IconComponent className="size-10 text-white!" />;
                    })()}
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{active.title}</h2>
                </div>
              </div>
              {/* Project & Delivery Stats */}
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="flex items-center gap-1.5 text-xs font-medium text-blue-400">
                  <Rocket className="size-3.5" />
                  <span>{active.projectCount} Projects</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-orange-400">
                  <Clock className="size-3.5" />
                  <span>{active.delivery}</span>
                </div>
              </div>

              <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                {active.description}
              </p>

              <div className="mb-6 md:mb-8">
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Key Features</h4>
                <div className="space-y-2 sm:space-y-3">
                  {active.features.slice(0, 5).map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 shrink-0" />
                      <span className="text-white/80 text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href={`/services/${active.slug}`}
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white! font-semibold bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl shadow-[0_10px_40px_-15px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 sm:gap-3 overflow-hidden text-sm sm:text-base"
                >
                  <span className="relative text-white!">Get Started</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform shrink-0" />
                </Link>

                <Link
                  href="/portfolio"
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white! font-semibold bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl shadow-[0_10px_40px_-15px_rgba(234,88,12,0.5)] flex items-center justify-center gap-2 sm:gap-3 overflow-hidden text-sm sm:text-base"
                >
                  <span className="relative text-white!">View Portfolio</span>
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform shrink-0" />
                </Link>
              </div>
            </div>

            {/* Right – desktop service list navigator */}
            <div className="hidden lg:block">
              <div className="glass-card p-6 rounded-2xl backdrop-blur-xl border border-white/10 h-full">
                <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-blue-500 rounded-full" />
                  Explore Our Expertise
                </h4>
                <div className="space-y-1 max-h-125 overflow-y-auto ps-1 pr-2 custom-scrollbar">
                  {services.map((service, i) => {
                    const { icon: DisplayIcon, bgColor: iconBgColor } = getServiceIconData(service);

                    return (
                      <div
                        key={i}
                        onClick={() => setActiveService(i)}
                        className={`group/item flex cursor-pointer items-center justify-between w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ease-out border ${i === activeService
                          ? `${service.uiColor} text-white! shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] ring-1 ring-white/30 border-transparent`
                          : "bg-animatedbg hover:bg-animatedbg/70 hover:translate-x-2 border-gray-200 dark:border-transparent hover:border-blue-500/30 dark:hover:border-white/10 shadow-sm hover:shadow-md"
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg transition-all duration-300 ${i === activeService ? 'bg-white/20 scale-110' : `${iconBgColor} text-white!`
                            }`}>
                            <DisplayIcon className={`w-5 h-5 transition-transform duration-300 ${i === activeService ? 'rotate-3' : 'group-hover/item:scale-110'
                              }`} />
                          </div>
                          <div>
                            <div className="font-semibold text-sm sm:text-base">{service.title}</div>
                            <div className={`text-[10px] uppercase tracking-wider font-medium mt-0.5 ${i === activeService ? 'text-white/90!' : 'text-foreground/50'
                              }`}>
                              {service.projectCount} projects • {service.delivery}
                            </div>
                          </div>
                        </div>
                        {i === activeService && (
                          <motion.div
                            layoutId="active-indicator"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="flex items-center gap-1"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            <Link href={`/services/${service.slug}`}>
                              <ArrowRight className="w-4 h-4 text-white! hover:scale-125 transition-transform" />
                            </Link>
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};