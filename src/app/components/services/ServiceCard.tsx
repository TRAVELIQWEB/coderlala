// components/ServiceCard.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, Rocket, Clock, Globe } from "lucide-react";
import { Service } from "@/app/(main)/services/data/services/service";
import { useScrollToForm } from "@/hooks/useScrollToForm";
import { Button } from "@/app/(main)/services/component/location/Button";

interface ServiceCardProps {
  service: Service;
  index: number;
  location?: string; // dynamic city/region name, optional
  onQuoteClick?: () => void; // e.g. scrollToForm
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
      <div
        className={`absolute -inset-0.5 bg-linear-to-r ${service.gradientColor} rounded-2xl sm:rounded-3xl blur opacity-0 group-hover:opacity-20 dark:group-hover:opacity-10 transition duration-500`}
      />

      <div className="glass-card h-full flex flex-col p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-border relative overflow-hidden">
        <div
          className={`absolute inset-0 bg-linear-to-br ${service.gradientColor} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500`}
        />

        <div className="relative mb-2 z-10">
          {service.uiIcons ? (
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
            <div
              className={`relative inline-flex items-center justify-center p-3 sm:p-4 rounded-xl bg-linear-to-br ${service.gradientColor} shadow-lg dark:shadow-black/30`}
            >
              <service.iconComponent className="size-7 text-white!" />
            </div>
          )}
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white my-2 relative z-10">
          {service.title}
        </h3>

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

        <p className="text-sm sm:text-base text-white/80 dark:text-gray-300 mb-2 leading-relaxed relative py-2 z-10">
          {service.description}
        </p>

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

        <Link
          href={`/services/${service.slug}`}
          className="group relative px-6 py-3 mt-auto sm:px-8 sm:py-4 rounded-xl text-white! font-semibold bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:via-blue-700 hover:to-blue-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl shadow-[0_10px_40px_-15px_rgba(37,99,235,0.5)] flex items-center justify-between gap-2 sm:gap-3 overflow-hidden"
        >
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent" />
          <span className="relative text-white! text-sm sm:text-base font-bold">Learn more</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          <div className="absolute -inset-1 bg-linear-to-r from-blue-600/20 to-blue-800/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
        </Link>
      </div>
    </motion.div>
  );
};

/**
 * Location/city landing-page variant — now visually identical to
 * ServiceCard (glass-card, icon badge, stats row, feature list).
 * The only difference: the CTA is a location-aware "Get Free Quote"
 * button instead of the "Learn more" link, since city pages drive
 * to a lead form rather than a service detail page.
 * 
 * SEO Optimized with:
 * - Semantic HTML structure
 * - Proper heading hierarchy
 * - aria-label for interactive elements
 * - Location-specific content
 * - Optimized button text with location
 * - title attribute for better accessibility
 */
export function ServiceCardLocation({
  service,
  index,
  location,
  onQuoteClick
}: ServiceCardProps) {

  const { scrollToForm } = useScrollToForm({
    delay: 650,
    block: "start",
  });

  // Generate location-specific description for better SEO
  const getLocationDescription = () => {
    if (!location) return service.description;
    // Add location to description if it doesn't already contain it
    if (service.description.toLowerCase().includes(location.toLowerCase())) {
      return service.description;
    }
    return `${service.description} We provide this service to businesses in ${location} and surrounding areas.`;
  };

  // Generate location-specific features for better local SEO
  const getLocationFeatureText = (featureText: string) => {
    if (!location) return featureText;
    // Add location context to features
    const locationFeatures = {
      "Custom Development": `Custom Development in ${location}`,
      "Responsive Design": `Responsive Design for ${location} businesses`,
      "Performance Optimization": `Performance Optimization for ${location} clients`,
    };
    return locationFeatures[featureText as keyof typeof locationFeatures] || featureText;
  };

  // SEO-friendly service title with location
  const getServiceTitle = () => {
    if (!location) return service.title;
    // Check if title already has location
    if (service.title.toLowerCase().includes(location.toLowerCase())) {
      return service.title;
    }
    return `${service.title} in ${location}`;
  };

  // Generate SEO-friendly button text
  const getButtonText = () => {
    if (!location) return "Get Free Quote";
    return `Get Free Quote for ${service.title.replace(/^(Custom|Web|Mobile|E-commerce|API|CMS)\s*/, '').trim()} in ${location}`;
  };

  return (
    <motion.div
      key={service.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative h-full"
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* Hidden Schema Markup for SEO */}
      <meta itemProp="name" content={getServiceTitle()} />
      <meta itemProp="description" content={getLocationDescription()} />
      {location && (
        <meta itemProp="areaServed" content={location} />
      )}
      <meta itemProp="serviceType" content={service.title} />
      <meta itemProp="provider" content="CoderLala" />

      {/* Background Glow Effect */}
      <div
        className={`absolute -inset-0.5 bg-linear-to-r ${service.gradientColor} rounded-2xl sm:rounded-3xl blur opacity-0 group-hover:opacity-20 dark:group-hover:opacity-10 transition duration-500`}
        aria-hidden="true"
      />

      {/* Main Card Container */}
      <div
        className="glass-card h-full flex flex-col p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-border relative overflow-hidden"
        role="article"
        aria-label={`${getServiceTitle()} service card`}
      >
        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-linear-to-br ${service.gradientColor} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500`}
          aria-hidden="true"
        />

        {/* Icon Section */}
        <div className="relative mb-2 z-10">
          {service.uiIcons ? (
            <div className="flex items-center gap-2">
              {service.uiIcons.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative inline-flex items-center justify-center p-3 sm:p-4 rounded-xl ${item.color} shadow-lg dark:shadow-black/30`}
                  aria-hidden="true"
                >
                  <item.icon className="size-7 text-white!" />
                </div>
              ))}
            </div>
          ) : (
            <div
              className={`relative inline-flex items-center justify-center p-3 sm:p-4 rounded-xl bg-linear-to-br ${service.gradientColor} shadow-lg dark:shadow-black/30`}
              aria-hidden="true"
            >
              <service.iconComponent className="size-7 text-white!" />
            </div>
          )}
        </div>

        {/* Service Title - H3 for proper hierarchy */}
        <h3
          className="text-xl sm:text-2xl font-bold text-white dark:text-white my-2 relative z-10"
          itemProp="name"
        >
          {getServiceTitle()}
        </h3>

        {/* Stats Section */}
        <div className="flex items-center gap-4 mb-2 relative z-10">
          <div className="flex items-center gap-1.5 text-xs font-medium text-blue-400">
            <Rocket className="size-3.5" aria-hidden="true" />
            <span>{service.projectCount} Projects</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-medium text-orange-400">
            <Clock className="size-3.5" aria-hidden="true" />
            <span>{service.delivery}</span>
          </div>
        </div>

        {/* Description - SEO optimized with location */}
        <p
          className="text-sm sm:text-base text-white/80 dark:text-gray-300 mb-2 leading-relaxed relative py-2 z-10"
          itemProp="description"
        >
          {getLocationDescription()}
        </p>

        {/* Features List */}
        <div className="space-y-1.5 mb-6 relative" role="list">
          {service.uiFeatures.map((feature, idx) => {
            const FeatureIcon = feature.icon ?? Check;
            const featureText = location
              ? `${feature.text} in ${location}`
              : feature.text;

            return (
              <div
                key={idx}
                className="flex items-center gap-2 sm:gap-3"
                role="listitem"
              >
                <div
                  className={`shrink-0 size-5 sm:size-8 rounded-full flex items-center justify-center shadow-sm mt-0.5 bg-linear-to-br ${service.gradientColor}`}
                  aria-hidden="true"
                >
                  <FeatureIcon className="size-3 sm:size-4 text-white!" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-white/90 dark:text-gray-300">
                  {featureText}
                </span>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-2 justify-center mt-auto">
          {/* Call Now Button */}
          <Button
            href={`/services/${service.slug}`}
            icon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}
            variant="primary"
            iconPosition="right"
          >
            Know More
          </Button>

        </div>
      </div>
    </motion.div>
  );
}

