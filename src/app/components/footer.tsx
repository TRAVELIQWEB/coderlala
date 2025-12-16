"use client";

import Link from "next/link";
import { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope,FaFacebook,FaYoutube } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();
    const [isDarkMode, setIsDarkMode] = useState(false);
  
  return (
    <footer className="border-t border-white/10 mt-16 md:mt-20 py-10 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-10 md:mb-12">
          
          {/* Branding Column */}
          <div className="space-y-4 md:space-y-5">
            <div>
               <Link href="/" className="flex items-center group">
            <div className="relative w-[200px] h-[60px]">
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
              <p className="mt-3 md:mt-4 text-white/70 text-sm md:text-base leading-relaxed">
                Building next-generation digital products with modern engineering and cutting-edge technology.
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="pt-2">
              <h4 className="font-semibold mb-3 md:mb-4 text-white/90">Follow Us</h4>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {[
                  { icon: FaLinkedin, href: "https://in.linkedin.com/company/coderlala", label: "LinkedIn", color: "hover:text-blue-400" },
                  { icon: FaGithub, href: "https://github.com/coderlala", label: "GitHub", color: "hover:text-gray-300" },
                  { icon: FaTwitter, href: "https://twitter.com/coderlala", label: "Twitter", color: "hover:text-blue-300" },
                  { icon: FaInstagram, href: "https://www.instagram.com/coderlalatech?igsh=emlmamhiNXUxMTU3", label: "Instagram", color: "hover:text-pink-400" },
                  { icon: FaFacebook, href: "https://coderlala.hashnode.dev", label: "Hashnode", color: "hover:text-blue-500" },
                  { icon: FaYoutube, href: "https://youtube.com/c/coderlala", label: "YouTube", color: "hover:text-red-400" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon className={`w-5 h-5 md:w-6 md:h-6 text-white/70 group-hover:text-white ${social.color} transition-colors`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4 md:space-y-5">
            <h4 className="font-semibold text-white/90 text-lg md:text-xl">Quick Links</h4>
            <ul className="space-y-2.5 md:space-y-3">
              {[
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-white/70 hover:text-white transition-colors text-sm md:text-base block py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-4 md:space-y-5">
            <h4 className="font-semibold text-white/90 text-lg md:text-xl">Services</h4>
            <ul className="space-y-2.5 md:space-y-3">
              {[
                "Web Development",
                "Mobile Apps",
                "SaaS Products",
                "UI/UX Design",
                "DevOps & Cloud",
                "E-commerce Solutions",
              ].map((service, index) => (
                <li key={index}>
                  <span className="text-white/70 hover:text-white transition-colors text-sm md:text-base block py-1 cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4 md:space-y-5">
            <h4 className="font-semibold text-white/90 text-lg md:text-xl">Get in Touch</h4>
            <div className="space-y-3 md:space-y-4">
              <a 
                href="mailto:support@coderlala.com" 
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/20 group-hover:bg-white/10 transition-all">
                  <FaEnvelope className="w-5 h-5 text-white/70 group-hover:text-white" />
                </div>
                <div>
                  <p className="font-medium text-sm md:text-base">Email Us</p>
                  <p className="text-xs md:text-sm opacity-70">support@coderlala.com</p>
                </div>
              </a>
              
              <div className="pt-2">
                <h5 className="font-medium text-white/80 mb-2 text-sm md:text-base">Office Hours</h5>
                <p className="text-white/70 text-sm md:text-base">Mon - Fri: 9AM - 6PM</p>
                <p className="text-white/70 text-sm md:text-base">Sat: 10AM - 4PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8 md:my-10"></div>

        {/* Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <p className="text-xs md:text-sm text-white/50 text-center md:text-left">
            © {currentYear} CoderLala Technologies Pvt. Ltd. — All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm text-white/70">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}