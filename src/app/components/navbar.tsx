"use client";

import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Our Team", path: "/our-team" },
  { name: "Blog", path: "/blog" },
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
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* LOGO - RESPONSIVE SIZING */}
          <Link href="/" className="flex items-center group btn">
            <div className="relative w-[120px] h-[36px] sm:w-[140px] sm:h-[40px] md:w-[160px] md:h-[48px]">
              <img
                src={isDarkMode ? "/logo/CoderLalaLogoDark.svg" : "/logo/CoderLalaLogoLight.svg"}
                alt="CoderLala Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`
                    relative text-sm font-medium transition-colors text-nowrap group mr-0 
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
                      absolute -bottom-1 left-0 h-0.5 bg-linear-to-r
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
                hidden xl:flex ml-2 px-5 py-2.5 rounded-lg text-white! font-semibold 
                bg-linear-to-r from-blue-600 to-purple-600
                hover:from-blue-700 hover:to-purple-700
                transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/25 
                items-center gap-2
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
              className="size-11 rounded-lg! grid place-items-center bg-blue-600 hover:bg-blue-700 transition-colors dark:hover:bg-gray-700">
              <Menu className="w-5 h-5 text-white!" />
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
              className="fixed top-0 left-0 h-full w-4/5 max-w-xs z-50 flex flex-col md:hidden"
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
                  {/* Mobile Menu Logo - Smaller */}
                  <div className="relative w-38  sm:w-46  md:w-[150px]  lg:w-[200px] ">
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
                  <Button
                    onClick={() => setIsOpen(false)}
                    size="icon"
                    variant="destructive"
                    className="size-11 rounded-lg"
                  >
                    <X className="w-5 h-5 text-white!" />
                  </Button>
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
                  <div
                    className="p-3 border-t"
                    style={{ borderColor: isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }}
                  >
                    <Link
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      className="
      flex items-center justify-center gap-2 w-full
      py-3 px-4 rounded-lg
      bg-linear-to-r from-blue-600 to-purple-600
      hover:from-blue-700 hover:to-purple-700
      text-white! font-semibold text-sm
      transition-all
    "
                    >
                      <Sparkles className="w-4 h-4" />
                      Start Your Project
                    </Link>
                  </div>
                </motion.div>


              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}