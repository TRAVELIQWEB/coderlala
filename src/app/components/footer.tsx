"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope, FaFacebook, FaYoutube } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

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
    <footer className="border-t border-white/10  px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          
          {/* Branding Column - Full width on mobile */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4 md:space-y-5">
            <div>
              <Link href="/" className="inline-block">
                 <div className="relative w-38 h-18 sm:w-46 sm:h-10 md:w-[150px] md:h-[45px] lg:w-[200px] lg:h-[60px]">
                  {!isDarkMode ? (
                    <img 
                      src="/logo/CoderLalaLogoLight.svg" 
                      alt="CoderLalaLogo Light"
                      className="w-full h-full object-contain"
                      key="dark-logo"
                    />
                  ) : (
                    <img 
                      src="/logo/CoderLalaLogoDark.svg" 
                      alt="CoderLalaLogo Dark"
                      className="w-full h-full object-contain"
                      key="light-logo"
                    />
                  )}
                </div>
              </Link>
              <p className="mt-3 md:mt-4 text-white/70 text-sm md:text-base leading-relaxed max-w-md">
                Building next-generation digital products with modern engineering and cutting-edge technology.
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="pt-2">
              <h4 className="font-semibold mb-3 md:mb-4 text-white/90 text-base md:text-lg">Follow Us</h4>
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                {[
                  { icon: FaLinkedin, href: "https://in.linkedin.com/company/coderlala", label: "LinkedIn", color: "hover:text-blue-400" },
                  { icon: FaGithub, href: "https://in.linkedin.com/company/coderlala", label: "GitHub", color: "hover:text-gray-300" },
                  // { icon: FaTwitter, href: "https://in.linkedin.com/company/coderlala", label: "Twitter", color: "hover:text-blue-300" },
                  { icon: FaInstagram, href: "https://www.instagram.com/coderlalatech?igsh=emlmamhiNXUxMTU3", label: "Instagram", color: "hover:text-pink-400" },
                  { icon: FaFacebook, href: "https://in.linkedin.com/company/coderlala", label: "Hashnode", color: "hover:text-blue-500" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon className={`w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white/70 group-hover:text-white ${social.color} transition-colors`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3 md:space-y-5">
            <h4 className="font-semibold text-white/90 text-base md:text-lg">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
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
                    className="text-white/70 hover:text-white transition-colors text-sm md:text-base block py-1 md:py-1.5 hover:pl-1 transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-3 md:space-y-5">
            <h4 className="font-semibold text-white/90 text-base md:text-lg">Services</h4>
            <ul className="space-y-2 md:space-y-3">
              {[
                "Web Development",
                "Mobile Apps",
                "SaaS Products",
                "UI/UX Design",
                "DevOps & Cloud",
                "E-commerce Solutions",
              ].map((service, index) => (
                <li key={index}>
                  <span className="text-white/70 hover:text-white transition-colors text-sm md:text-base block py-1 md:py-1.5 cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-3 md:space-y-5 sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold text-white/90 text-base md:text-lg">Get in Touch</h4>
            <div className="space-y-3 md:space-y-4">
              <a 
                href="mailto:salman.nizam@coderlala.com" 
                className="flex items-start sm:items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/20 group-hover:bg-white/10 transition-all">
                  <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 group-hover:text-white" />
                </div>
                <div>
                  <p className="font-medium text-sm md:text-base">Email Us</p>
                  <p className="text-xs md:text-sm opacity-70 break-all sm:break-normal">salman.nizam@coderlala.com</p>
                </div>
              </a>
              
              <div className="pt-1">
                <h5 className="font-medium text-white/80 mb-1.5 md:mb-2 text-sm md:text-base">Office Hours</h5>
                <p className="text-white/70 text-xs md:text-sm">Mon - Fri: 9AM - 6PM</p>
                <p className="text-white/70 text-xs md:text-sm">Sat: 10AM - 4PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-3"></div>

        {/* Copyright & Legal */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 my-2 py-2 md:gap-6">
          <p className="text-xs md:text-sm  text-center sm:text-left order-2 sm:order-1 font-semibold">
            © {currentYear} CoderLala Technologies Pvt. Ltd. — All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-xs md:text-sm text-white/70 order-1 sm:order-2">
            <Link href="/privacy-policy" className="font-semibold hover:text-blue-700 transition-colors px-1">Privacy Policy</Link>
            <Link href="/terms-of-service" className="font-semibold hover:text-blue-700 transition-colors px-1">Terms of Service</Link>
            <Link href="/cookie-policy" className="font-semibold hover:text-blue-700 transition-colors px-1">Cookie Policy</Link>
            <Link href="/coderlala-sitemap" className="font-semibold hover:text-blue-700 transition-colors px-1">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}