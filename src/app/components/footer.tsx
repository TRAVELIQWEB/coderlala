"use client";

import Link from "next/link"; // Keep this import
import { Star } from "lucide-react";
import { useState, useEffect } from "react";
import { FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { services } from "../(main)/services/data/services/service";
import { contactInfo } from "@/data/ContactInfo";


export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    checkTheme();

    // Observe theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="p-4">
      <div className="glass-card p-4">
        <div className="max-w-6xl mt-3 sm:mt-8 mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">

            {/* Branding Column - Full width on mobile */}
            <div className="sm:col-span-2 lg:col-span-1 space-y-4 md:space-y-5 text-center sm:text-left">
              <div>
                <Link href="/" className="inline-block">
                  <div className="relative w-38 h-18 sm:w-46 sm:h-10 md:w-37.5 md:h-11.25 lg:w-50 lg:h-15">
                    <img
                      src={isDarkMode ? "/logo/CoderLalaLogoDark.svg" : "/logo/CoderLalaLogoLight.svg"}
                      alt="CoderLala Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </Link>
                <p className="mt-2 text-white/70 opacity-70 text-sm md:text-base leading-relaxed max-w-md">
                  Building next-generation digital products with modern engineering and cutting-edge technology.
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="pt-2">
                <h4 className="uppercase underline underline-offset-6 font-bold text-base md:text-xl">Follow Us</h4>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-normal sm:gap-3 mt-4 md:gap-4">
                  {[
                    { icon: FaLinkedin, href: contactInfo.linkedIn, label: "LinkedIn", color: "hover:text-blue-400" },
                    // { icon: FaGithub, href: "https://in.linkedin.com/company/coderlala", label: "GitHub", color: "hover:text-gray-300" },
                    // { icon: FaTwitter, href: "https://in.linkedin.com/company/coderlala", label: "Twitter", color: "hover:text-blue-300" },
                    { icon: FaInstagram, href: contactInfo.instagram, label: "Instagram", color: "hover:text-pink-400" },
                    // { icon: FaFacebook, href: "https://in.linkedin.com/company/coderlala", label: "Hashnode", color: "hover:text-blue-500" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all group"
                      aria-label={social.label}
                    >
                      <social.icon className={`w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white/70 group-hover:text-white ${social.color} transition-colors`} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Review Us Section */}
              <div className="pt-2 flex justify-center sm:justify-normal">
                <a
                  href={contactInfo.googleReview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#e38239] text-white! font-semibold
                    transition-colors duration-300 shadow-md hover:shadow-lg
                    group"
                  aria-label="Review us on Google"
                >
                  <Star className="w-4 h-4 text-white! transition-colors" />
                  <span className="text-sm text-white!">Review Us</span>
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="space-y-3 md:space-y-5 text-center sm:text-left">
              <h4 className="uppercase underline underline-offset-6 font-bold text-base md:text-xl">Quick Links</h4>
              <ul className="space-y-1">
                {[
                  { label: "About", href: "/about" },
                  { label: "Services", href: "/services" },
                  { label: "Portfolio", href: "/portfolio" },
                  { label: "Our Team", href: "/our-team" },
                  { label: "Careers", href: "/careers" },
                  { label: "Contact", href: "/contact" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="hover:underline inline-block opacity-70 underline-offset-4 text-sm md:text-base transition-all duration-500 group"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div className="space-y-3 md:space-y-5 text-center sm:text-left">
              <h4 className="uppercase underline underline-offset-6 font-bold text-base md:text-xl relative ">Services</h4>
              <ul className="space-y-1">
                {services.slice(0, 6).map((service, i) => (
                  <li key={i}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="hover:underline inline-block opacity-70 underline-offset-4 text-sm md:text-base transition-all duration-500"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="space-y-3 md:space-y-5 sm:col-span-2 lg:col-span-1 text-center sm:text-left">
              <h4 className="uppercase underline underline-offset-6 font-bold text-base md:text-xl relative">Get in Touch</h4>
              <div className="space-y-3 md:space-y-4">
                <div className="flex justify-around md:flex-col gap-4 sm:justify-start">
                  <div
                    // href="mailto:info@coderlala.com"
                    className="flex items-start sm:items-center gap-3 text-white/70 hover:text-white transition-colors group"
                  >
                    <div className="shrink-0 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/20 group-hover:bg-white/10 transition-all">
                      <FaPhone className="rotate-90 w-4 h-4 sm:w-5 sm:h-5 text-white/70 group-hover:text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-sm md:text-base">Phone</p>
                      <a href={`tel:${contactInfo.salmanNizamPhone}`} className="block text-xs md:text-sm opacity-70 break-all sm:break-normal">{contactInfo.salmanNizamPhone}</a>
                      <a href={`tel:${contactInfo.achalSinghPhone}`} className="md:block text-xs md:text-sm opacity-70 break-all sm:break-normal hidden">{contactInfo.achalSinghPhone}</a>
                    </div>
                  </div>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-start sm:items-center gap-3 text-white/70 hover:text-white transition-colors group"
                  >
                    <div className="shrink-0 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/20 group-hover:bg-white/10 transition-all">
                      <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 group-hover:text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-sm md:text-base">Email us</p>
                      <p className="text-xs md:text-sm opacity-70 break-all sm:break-normal">{contactInfo.email}</p>
                    </div>
                  </a>
                </div>
                <a
                  href={contactInfo.mapLocationLink} target="_blank"
                  className="flex w-full sm:justify-start justify-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  {/* Removed the icon div to align with the original structure, if an icon is desired, it should be added here */}
                  <div>
                    <p className="font-medium text-sm md:text-base">Address</p>
                    <p className="text-xs md:text-sm opacity-70 break-all sm:break-normal">{contactInfo.websiteAddress}</p>
                  </div>
                </a>

                <div className="pt-1">
                  <h5 className="font-medium text-white/80 mb-1.5 md:mb-2 text-sm md:text-base">Office Hours</h5>
                  <p className="text-white/70 text-xs md:text-sm">Monday - Saturday: {contactInfo.businessHours.weekdays}</p>
                  <p className="text-white/70 text-xs md:text-sm">Sunday: {contactInfo.businessHours.sunday}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 my-3"></div>

          {/* Copyright & Legal */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 my-2 py-2 md:gap-6">
            <p className="text-xs md:text-sm  text-center sm:text-left order-2 sm:order-1 font-semibold">
              © {currentYear} CoderLala Technologies. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-2 text-xs md:text-sm text-white/70 order-1 sm:order-2">
              <Link href="/privacy-policy" className="font-semibold hover:text-blue-700 transition-colors px-1">Privacy</Link>
              <Link href="/terms-of-service" className="font-semibold hover:text-blue-700 transition-colors px-1">Terms</Link>
              <Link href="/cookie-policy" className="font-semibold hover:text-blue-700 transition-colors px-1">Cookie</Link>
              <Link href="/coderlala-sitemap" className="font-semibold hover:text-blue-700 transition-colors px-1">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}