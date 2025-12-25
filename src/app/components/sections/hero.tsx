"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Rocket, Zap, Target, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-25 md:pt-20 lg:pt-20">
      
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Dynamic gradient orbs with galaxy integration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="absolute top-1/4 left-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] bg-linear-to-br from-blue-500/20 via-purple-500/15 to-transparent blur-[60px] sm:blur-[80px] lg:blur-[120px] rounded-full"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.12, scale: 1 }}
          transition={{ duration: 2, delay: 0.4 }}
          className="absolute bottom-1/3 right-1/4 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] bg-linear-to-tl from-orange-500/15 via-pink-500/10 to-transparent blur-[50px] sm:blur-[80px] lg:blur-[100px] rounded-full"
        />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            className="absolute rounded-full blur-sm"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i * 8)}%`,
              width: `${2 + i % 3}px`,
              height: `${2 + i % 3}px`,
              background: 'rgba(255, 255, 255, 0.4)'
            }}
          />
        ))}
      </div>

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-linear-to-r from-blue-500/20 to-orange-500/20 backdrop-blur-sm border border-white/20 mb-6 sm:mb-8 hover:from-blue-500/15 hover:to-orange-500/15 transition-colors group cursor-pointer"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300 group-hover:rotate-12 transition-transform" />
              <span className="text-xs sm:text-sm font-medium tracking-wide">
                <span className="text-blue-400">Leading Software Development Company</span> for 25+ Global Startups
              </span>
            </motion.div>

            {/* Headline with Staggered Animation */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight sm:leading-[1.15]"
              >
                <span className="block">
                  Best {" "}
                 
                    <span className="text-orange-500">
                      Web, Mobile App & SaaS
                    </span>
                  
                </span>
                <motion.span
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="block mt-2 sm:mt-4"
                >
                  Development Company in Gurgaon
                </motion.span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0"
            >
              As a{" "}
              <span className="font-semibold text-white">leading web development company, mobile app development, and SaaS development firm in Gurgaon, </span>{" "}
              we specialize in custom software development, web application development, and mobile application development to drive your digital transformation with cutting-edge technology solutions.
            </motion.p>

            {/* Key Features */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4"
            >
              {[
                { icon: Rocket, text: "Agile Development", color: "text-orange-400", bg: "from-orange-500/10 to-orange-600/10" },
                { icon: Zap, text: "High-Performance Apps", color: "text-blue-400", bg: "from-blue-500/10 to-cyan-500/10" },
                { icon: Target, text: "Digital Transformation", color: "text-purple-400", bg: "from-purple-500/10 to-pink-500/10" },
                { icon: Users, text: "Expert IT Consulting", color: "text-green-400", bg: "from-green-500/10 to-emerald-500/10" },
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2 sm:gap-3 group">
                  <div className={`p-1.5 sm:p-2 rounded-lg bg-linear-to-r ${feature.bg} ${feature.color} group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium group-hover:text-gray-600 transition-colors">
                    {feature.text}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons - Blue Primary, Orange Secondary */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              {/* Primary Button - Blue */}
              <Link
                href="/contact"
                className="group relative px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-white! font-semibold bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:via-blue-700 hover:to-blue-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl shadow-[0_10px_40px_-15px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 sm:gap-3 overflow-hidden"
              >
                {/* Button shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                
                <span className="relative text-sm sm:text-base">Get Custom Software Quote</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-linear-to-r from-blue-600/20 to-blue-800/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </Link>

              {/* Secondary Button - Orange */}
              <Link
                href="/portfolio"
                className="group relative px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-white! font-semibold bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl shadow-[0_10px_40px_-15px_rgba(234,88,12,0.5)] flex items-center justify-center gap-2 sm:gap-3 overflow-hidden"
              >
                {/* Button shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                
                <span className="relative text-sm sm:text-base">View Development Portfolio</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-linear-to-r from-orange-600/20 to-orange-800/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Visual/Stats */}
          <div className="relative mt-8 lg:mt-0">
            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-xl border border-white/10"
            >
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  { 
                    value: "25+", 
                    label: "Projects", 
                    description: "Successfully delivered",
                    bg: "bg-[#4087CC]"
                  },
                  { 
                    value: "20+", 
                    label: "Clients", 
                    description: "Global partnerships",
                    bg: "bg-[#F78631]"
                  },
                  { 
                    value: "99%", 
                    label: "Satisfaction", 
                    description: "Client retention rate",
                    bg: "bg-purple-400"
                  },
                  { 
                    value: "24/7", 
                    label: "Support", 
                    description: "Always available",
                    bg: "bg-green-400"
                  },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className={`text-center p-3 sm:p-4 rounded-xl text-dark dark:text-white ${stat.bg} border border-white/5 cursor-pointer group`}
                    whileHover={{ y: -4 }}
                  >
                    <div className={`text-2xl sm:text-3xl font-bold`}>
                      {stat.value}
                    </div>
                    <div className="text-sm sm:text-lg font-semibold mt-1 sm:mt-2">{stat.label}</div>
                    <div className="text-xs sm:text-sm text-gray-100! mt-1">
                      {stat.description}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Stats Description */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10"
              >
                <p className="text-xs sm:text-sm text-white/70 text-center">
                  <span className="font-semibold text-white">Proven Results:</span>{" "}
                  Join hundreds of satisfied clients who achieved digital transformation through our web development, mobile app development, and SaaS development services.
                </p>
              </motion.div>
            </motion.div>

            {/* Floating Elements - Blue and Orange */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-linear-to-br from-blue-500/20 to-blue-600/20 rounded-2xl backdrop-blur-sm border border-white/10 rotate-12"
            />
            
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -3, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-linear-to-tr from-orange-500/15 to-orange-600/15 rounded-xl backdrop-blur-sm border border-white/10 -rotate-12"
            />
          </div>
        </div>

        {/* Scroll Indicator - SHOW ONLY ON LAPTOP (lg) AND ABOVE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden lg:block absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer"
          >
            <span className="text-sm font-medium">Explore Our Services</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white/60 transition-colors">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-1 h-3 bg-linear-to-b from-blue-400 to-orange-400 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}