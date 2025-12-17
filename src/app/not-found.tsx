// app/not-found.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft, Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };
    
    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center">
          {/* Error Code */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 15, stiffness: 100 }}
            className="relative"
          >
            <div className="text-[120px] xs:text-[140px] sm:text-[180px] md:text-[220px] lg:text-[280px] font-black leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600 dark:from-blue-400 dark:to-orange-400">
                404
              </span>
            </div>
          </motion.div>

          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6 sm:mb-8"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500 dark:from-blue-400 dark:to-orange-400">
                Page Not Found
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
              Oops! The page you're looking for seems to have wandered off into the digital void.
            </p>
            
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-orange-500/10 backdrop-blur-sm border border-black/10 dark:border-white/20">
              <Search className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 dark:text-blue-300" />
              <span className="text-xs sm:text-sm font-medium">404 Error</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <Link
              href="/"
              className="group relative px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl text-white font-semibold 
                bg-gradient-to-r from-blue-600 to-indigo-600
                hover:from-blue-700 hover:to-indigo-700
                transition-all duration-300 hover:scale-[1.02] hover:shadow-xl sm:hover:shadow-2xl
                flex items-center justify-center gap-2 sm:gap-3 overflow-hidden text-sm sm:text-base"
            >
              <Home className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              <span>Back to Homepage</span>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="group relative px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-semibold 
                bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900
                hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-800
                transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                flex items-center justify-center gap-2 sm:gap-3 overflow-hidden border border-black/10 dark:border-white/10 text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-gray-800 dark:text-gray-200">Go Back</span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}