// components/ServiceCard.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, Rocket, Clock } from "lucide-react";
import { Service } from "@/app/(main)/services/data/services/service";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <motion.div
      key={service.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative h-full"
    >
      {/* Gradient glow on hover */}
      <div
        className={`absolute -inset-0.5 bg-linear-to-r ${service.gradientColor} rounded-2xl sm:rounded-3xl blur opacity-0 group-hover:opacity-20 dark:group-hover:opacity-10 transition duration-500`}
      />

      <div className="glass-card h-full flex flex-col p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-border relative overflow-hidden">
        {/* Inner gradient overlay */}
        <div
          className={`absolute inset-0 bg-linear-to-br ${service.gradientColor} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500`}
        />

        {/* Icon(s) */}
        <div className="relative mb-2 z-10">
          {service.uiIcons ? (
            // Travel portal: multi-icon layout
            <div className="flex items-center gap-2">
              {service.uiIcons.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative inline-flex items-center justify-center p-3 sm:p-4 rounded-xl ${item.color} shadow-lg dark:shadow-black/30`}
                >
                  <item.icon className="size-7 text-white!" />
                </div>
              ))}
            </div>
          ) : (
            // All other services: single icon
            <div
              className={`relative inline-flex items-center justify-center p-3 sm:p-4 rounded-xl bg-linear-to-br ${service.gradientColor} shadow-lg dark:shadow-black/30`}
            >
              <service.iconComponent className="size-7 text-white!" />
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white my-2 relative z-10">
          {service.title}
        </h3>

        {/* Project & Delivery Stats */}
        <div className="flex items-center gap-4 mb-2 relative z-10">
          <div className="flex items-center gap-1.5 text-xs font-medium text-blue-400">
            <Rocket className="size-3.5" />
            <span>{service.projectCount} Projects</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-medium text-orange-400">
            <Clock className="size-3.5" />
            <span>{service.delivery}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-white/80 dark:text-gray-300 mb-2 leading-relaxed relative py-2 z-10">
          {service.description}
        </p>

        {/* Feature list – uses uiFeatures with icon components */}
        <div className="space-y-1.5 mb-6 relative">
          {service.uiFeatures.map((feature, idx) => {
            const FeatureIcon = feature.icon ?? Check;
            return (
              <div key={idx} className="flex items-center gap-2 sm:gap-3">
                <div
                  className={`shrink-0 size-5 sm:size-8 rounded-full flex items-center justify-center shadow-sm mt-0.5 bg-linear-to-br ${service.gradientColor}`}
                >
                  <FeatureIcon className="size-3 sm:size-4 text-white!" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-white/90 dark:text-gray-300">
                  {feature.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* CTA link restyled like Primary Button */}
        <Link
          href={`/services/${service.slug}`}
          className="group relative px-6 py-3 mt-auto sm:px-8 sm:py-4 rounded-xl text-white! font-semibold bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:via-blue-700 hover:to-blue-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl shadow-[0_10px_40px_-15px_rgba(37,99,235,0.5)] flex items-center justify-between gap-2 sm:gap-3 overflow-hidden"
        >
          {/* Button shine effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent" />

          <span className="relative text-white! text-sm sm:text-base font-bold">Learn more</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />

          {/* Glow effect */}
          <div className="absolute -inset-1 bg-linear-to-r from-blue-600/20 to-blue-800/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
        </Link>
      </div>
    </motion.div>
  );
};