"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Rocket, Zap, Target, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Dynamic gradient orbs with galaxy integration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-transparent blur-[120px] rounded-full"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.12, scale: 1 }}
          transition={{ duration: 2, delay: 0.4 }}
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-orange-500/15 via-pink-500/10 to-transparent blur-[100px] rounded-full"
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left">
            {/* Badge */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-orange-500/10 backdrop-blur-sm border border-white/20 mb-8 hover:from-blue-500/15 hover:to-orange-500/15 transition-colors group cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-blue-300 group-hover:rotate-12 transition-transform" />
              <span className="text-sm font-medium tracking-wide">
                <span className="text-blue-300">Trusted Partner</span> for 20+ Global Startups
              </span>
            </motion.div>

            {/* Headline with Staggered Animation */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15]"
              >
                <span className="block">
                  Transform Your{" "}
                  <span className="relative">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-orange-400">
                      Vision
                    </span>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      className="absolute bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"
                    />
                  </span>
                </span>
                <motion.span
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-orange-200"
                >
                  Into Digital Reality
                </motion.span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl"
            >
              CoderLala Technologies delivers{" "}
              <span className="font-semibold text-white">enterprise-grade digital solutions</span>{" "}
              that accelerate growth, optimize performance, and redefine user experiences through cutting-edge technology.
            </motion.p>

            {/* Key Features */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-8 grid grid-cols-2 gap-4"
            >
              {[
                { icon: Rocket, text: "Fast Delivery", color: "text-orange-400", bg: "from-orange-500/10 to-orange-600/10" },
                { icon: Zap, text: "High Performance", color: "text-blue-400", bg: "from-blue-500/10 to-cyan-500/10" },
                { icon: Target, text: "Pixel Perfect", color: "text-purple-400", bg: "from-purple-500/10 to-pink-500/10" },
                { icon: Users, text: "Team Collaboration", color: "text-green-400", bg: "from-green-500/10 to-emerald-500/10" },
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${feature.bg} ${feature.color} group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium group-hover:text-white transition-colors">
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
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              {/* Primary Button - Blue */}
              <Link
                href="/contact"
                className="group relative px-8 py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl shadow-[0_10px_40px_-15px_rgba(37,99,235,0.5)] flex items-center justify-center gap-3 overflow-hidden"
              >
                {/* Button shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                <span className="relative">Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-blue-800/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </Link>

              {/* Secondary Button - Orange */}
              <Link
                href="/portfolio"
                className="group relative px-8 py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 hover:from-orange-700 hover:via-orange-800 hover:to-orange-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl shadow-[0_10px_40px_-15px_rgba(234,88,12,0.5)] flex items-center justify-center gap-3 overflow-hidden"
              >
                {/* Button shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                <span className="relative">View Case Studies</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600/20 to-orange-800/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Visual/Stats */}
          <div className="relative">
            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-card p-8 rounded-2xl backdrop-blur-xl border border-white/10"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { 
                    value: "25+", 
                    label: "Projects", 
                    description: "Successfully delivered",
                    gradient: "from-blue-500 to-cyan-500"
                  },
                  { 
                    value: "20+", 
                    label: "Clients", 
                    description: "Global partnerships",
                    gradient: "from-orange-500 to-red-500"
                  },
                  { 
                    value: "99%", 
                    label: "Satisfaction", 
                    description: "Client retention rate",
                    gradient: "from-purple-500 to-pink-500"
                  },
                  { 
                    value: "24/7", 
                    label: "Support", 
                    description: "Always available",
                    gradient: "from-green-500 to-emerald-500"
                  },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className={`text-center p-4 rounded-xl bg-gradient-to-br ${stat.gradient}/10 hover:${stat.gradient}/20 border border-white/5 transition-colors cursor-pointer group`}
                    whileHover={{ y: -4 }}
                  >
                    <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold mt-2">{stat.label}</div>
                    <div className="text-xs text-white/60 mt-1 group-hover:text-white/80 transition-colors">
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
                className="mt-8 pt-6 border-t border-white/10"
              >
                <p className="text-sm text-white/70 text-center">
                  <span className="font-semibold text-white">Proven Results:</span>{" "}
                  Join hundreds of satisfied clients who transformed their businesses with our solutions.
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
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl backdrop-blur-sm border border-white/10 rotate-12"
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
              className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-tr from-orange-500/15 to-orange-600/15 rounded-xl backdrop-blur-sm border border-white/10 -rotate-12"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors cursor-pointer"
          >
            <span className="text-sm font-medium">Explore More</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-orange-400 rounded-full mt-2" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}