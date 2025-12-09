"use client";

import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { useState, useEffect } from "react";
import { Menu, X, Code2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";   // ⭐ ADD THIS

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
  const pathname = usePathname();               // ⭐ GET ACTIVE PATH

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled
          ? "bg-white/20  dark:bg-black/20 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600
              group-hover:from-blue-600 group-hover:to-purple-700 transition-all"
            >
              <Code2 className="w-6 h-6 text-white" />
            </div>

            <div className="flex flex-col">
              <span className="
                text-xl font-bold bg-gradient-to-r 
                from-blue-700 to-purple-700 
                dark:from-blue-400 dark:to-purple-400 
                bg-clip-text text-transparent
              ">
                CoderLala
              </span>

              <span className="text-xs text-gray-700 dark:text-gray-400">
                Technologies
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.path;   // ⭐ ACTIVE CHECK

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`
                    relative text-sm font-medium transition-colors group
                    ${isActive
                      ? "text-blue-600 dark:text-blue-400"     // ⭐ ACTIVE COLOR
                      : "text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }
                  `}
                >
                  {item.name}

                  {/* Underline */}
                  <span
                    className={`
                      absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r
                      from-blue-500 to-purple-500 transition-all duration-300
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}   // ⭐ ACTIVE UNDERLINE
                    `}
                  />
                </Link>
              );
            })}

            {/* CTA Button */}
            <Link
              href="/contact"
              className="
                ml-4 px-6 py-2 rounded-lg text-white font-semibold 
                bg-gradient-to-r from-blue-600 to-purple-600
                hover:from-blue-700 hover:to-purple-700
                transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/25 
                flex items-center gap-2
              "
            >
              <Sparkles className="w-4 h-4" />
              Get Started
            </Link>

            <ThemeToggle />
          </nav>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
                p-2 rounded-lg 
                bg-gray-200 dark:bg-gray-800 
                hover:bg-gray-300 dark:hover:bg-gray-700
                transition-colors
              "
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-800 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE NAV */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="
              md:hidden bg-white dark:bg-gray-900
              rounded-xl shadow-2xl mt-2 p-6
              border border-gray-200 dark:border-gray-800
            "
          >
            <div className="space-y-4">
              {navItems.map((item) => {
                const isActive = pathname === item.path;

                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`
                      block py-3 px-4 rounded-lg font-medium transition-all
                      ${isActive
                        ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"  // ⭐ ACTIVE MOBILE STYLE
                        : "text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="
                  block mt-6 py-3 px-4 rounded-lg text-center
                  bg-gradient-to-r from-blue-600 to-purple-600 
                  text-white font-semibold
                  hover:from-blue-700 hover:to-purple-700
                  transition-all
                "
              >
                Start Your Project
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
