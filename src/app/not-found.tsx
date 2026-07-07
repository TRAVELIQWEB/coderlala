// app/not-found.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft, Search, Code2 } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center">
          {/* Error Code */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 15, stiffness: 100 }}
            className="relative"
          >
            <div className="text-[100px] xs:text-[120px] sm:text-[160px] md:text-[200px] lg:text-[240px] font-black leading-none">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-orange-600">
                404
              </span>
            </div>
          </motion.div>

          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-orange-500">
                Page Not Found
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl  mb-4 max-w-2xl mx-auto">
              Oops! The page you're looking for seems to have wandered off into the digital void.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-500/10 to-orange-500/10 backdrop-blur-sm border border-white/20 mb-4 lg:mb-6">
              <Code2 className="w-4 h-4 text-blue-500 dark:text-blue-300" />
              <span className="text-sm font-medium">
                404 Error
              </span>
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
              className="group relative px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl text-white! font-semibold 
                bg-linear-to-r from-blue-600 to-indigo-600
                hover:from-blue-700 hover:to-indigo-700
                transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                flex items-center justify-center gap-2 sm:gap-3 overflow-hidden text-sm sm:text-base"
            >
              <Home className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              <span>Back to Homepage</span>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="group relative px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-semibold 
                bg-white border border-gray-300 hover:border-gray-400
                hover:bg-gray-50
                transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                flex items-center justify-center gap-2 sm:gap-3 overflow-hidden text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform text-gray-700" />
              <span className="text-gray-800">Go Back</span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}