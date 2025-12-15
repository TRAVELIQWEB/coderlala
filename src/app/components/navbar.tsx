"use client";

import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

export default function EnhancedNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
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
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
      observer.disconnect();
    };
  }, []);

  // Determine navbar background based on device and scroll
  const getNavbarBackground = () => {
    if (isMobile) {
      // On mobile: always solid background when scrolled or menu open
      if (scrolled || isOpen) {
        return isDarkMode ? "bg-gray-900" : "bg-white";
      }
      return "bg-transparent";
    } else {
      // On desktop: your original glass effect
      if (scrolled) {
        return "bg-white/20 dark:bg-black/20 backdrop-blur-xl shadow-lg";
      }
      return "bg-transparent";
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${getNavbarBackground()}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
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

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`
                    relative text-sm font-medium transition-colors group text-[16px]
                    ${isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : isDarkMode 
                        ? "text-white hover:text-blue-400" 
                        : "text-gray-800 hover:text-blue-600"
                    }
                  `}
                >
                  {item.name}

                  {/* Underline */}
                  <span
                    className={`
                      absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r
                      from-blue-500 to-purple-500 transition-all duration-300
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}  
                    `}
                  />
                </Link>
              );
            })}

            {/* CTA Button */}
            <Link
              href="/contact"
              className="
                ml-4 px-6 py-3 rounded-lg !text-white font-semibold 
                bg-gradient-to-r from-blue-600 to-purple-600
                hover:from-blue-700 hover:to-purple-700
                transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/25 
                flex items-center gap-2
              "
            >
              <Sparkles className="w-4 h-4 " />
              Get Started
            </Link>

            <ThemeToggle />
          </nav>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />

            <button
              onClick={() => setIsOpen(true)}
              className="
                p-2 rounded-lg 
                !bg-blue-700 
                hover:bg-gray-300 dark:hover:bg-gray-700
                transition-colors
              "
            >
              <Menu className="w-6 h-6 text-gray-800 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU WITH ANIMATION - FIXED DARK MODE */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop with fade animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu panel with slide animation */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-full max-w-sm z-50 md:hidden"
              style={{
                backgroundColor: isDarkMode ? '#111827' : '#ffffff',
                boxShadow: '2px 0 20px rgba(0,0,0,0.3)'
              }}
            >
              {/* Menu Header */}
              <div className="p-4 border-b"
                style={{
                  borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="w-28 h-6 ">
                    {!isDarkMode ? (
                      <img 
                        src="/logo/CoderLalaLogoLight.svg" 
                        alt="CoderLala Logo"
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <img 
                        src="/logo/CoderLalaLogoDark.svg" 
                        alt="CoderLala Logo"
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                    style={{
                      backgroundColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'
                    }}
                  >
                    <X className="w-5 h-5" 
                      style={{
                        color: isDarkMode ? '#d1d5db' : '#374151'
                      }}
                    />
                  </button>
                </div>
              </div>

              {/* Navigation Items */}
              <div className="p-4">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.path;

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        className="block py-3 px-4 rounded-lg mb-2 font-medium transition-all"
                        style={{
                          backgroundColor: isActive 
                            ? (isDarkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)')
                            : 'transparent',
                          color: isActive
                            ? (isDarkMode ? '#60a5fa' : '#2563eb')
                            : (isDarkMode ? '#d1d5db' : '#374151'),
                          border: isActive
                            ? `1px solid ${isDarkMode ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)'}`
                            : '1px solid transparent'
                        }}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}

                {/* CTA Button */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="
                      block mt-6 py-3 px-4 rounded-lg text-center
                      bg-gradient-to-r from-blue-600 to-purple-600 
                      !text-white font-semibold
                      hover:from-blue-700 hover:to-purple-700
                      transition-all
                    "
                  >
                    Start Your Project
                  </Link>
                </motion.div>

                
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}