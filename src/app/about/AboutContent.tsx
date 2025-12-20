"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Users,
  Award,
  Rocket,
  Code2,
  Globe,
  Heart,
  TrendingUp,
  Shield,
  Zap,
  Calendar,
  ArrowRight,
  Cloud,
} from "lucide-react";
import Link from "next/link";

export default function AboutContent() {
  const timeline = [
    {
      year: "2025",
      title: "Company Founded",
      desc: "CoderLala Technologies was born with a vision to transform ideas into powerful digital products.",
      icon: Rocket,
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "2025",
      title: "First 10 Clients",
      desc: "Successfully delivered 10+ projects for startups and established businesses.",
      icon: Users,
      color: "from-orange-500 to-amber-500",
    },
    {
      year: "2025",
      title: "SaaS & Cloud Expansion",
      desc: "Architected large-scale SaaS platforms and cloud-based systems for enterprise clients.",
      icon: Cloud,
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "2025",
      title: "Enterprise Partnerships",
      desc: "Became trusted technology partner for Fortune companies and unicorn startups.",
      icon: Award,
      color: "from-green-500 to-emerald-500",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      desc: "We strive for perfection in every line of code and every pixel of design.",
      color: "text-blue-500",
    },
    {
      icon: Heart,
      title: "Passion",
      desc: "We love what we do, and it shows in the quality of our work.",
      color: "text-orange-500",
    },
    {
      icon: Users,
      title: "Collaboration",
      desc: "We work closely with clients as partners in their success journey.",
      color: "text-purple-500",
    },
    {
      icon: Shield,
      title: "Integrity",
      desc: "We believe in transparent communication and ethical business practices.",
      color: "text-green-500",
    },
    {
      icon: Zap,
      title: "Innovation",
      desc: "We constantly explore new technologies and methodologies.",
      color: "text-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      desc: "We help businesses scale and grow through technology.",
      color: "text-red-500",
    },
  ];

  const TeamMembers = [
    {
      name: "Salman Nizam",
      role: "Co-Founder & DevOps Engineer"
    },
    {
      name: "Achal Singh",
      role: "Co-Founder & Full-Stack Developer"
    },
    {
      name: "Ansh Garg",
      role: "Young Developer"
    },
    {
      name: "Aman Singh",
      role: "Senior Full-Stack Developer"
    },
    {
      name: "Ravi Kaliya",
      role: "Senior Frontend Developer"
    },
    {
      name: "Raghib Nizam",
      role: "Full-Stack Developer"
    }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-0">
      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-20"
      >
        <div className="about-hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-orange-500/10 backdrop-blur-sm border border-black/10 dark:border-white/20 mb-4 md:mb-6">
          <Code2 className="w-4 h-4 text-blue-500 dark:text-blue-300" />
          <span className="text-sm font-medium">
            Our Story
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6">
          <span className="text-transparent bg-clip-text bg-blue-500">
            Building the Future
          </span>
          <span className="block text-transparent bg-clip-text bg-orange-500">
            of Technology
          </span>
        </h1>

        <p className="about-hero-desc text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4 sm:px-0">
          We are a team of passionate engineers, designers, and innovators dedicated to
          transforming businesses through cutting-edge digital solutions.
        </p>
      </motion.div>

      {/* STATS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-black/10 dark:border-white/10 mb-12 md:mb-20 bg-white/70 dark:bg-white/10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { value: "25+", label: "Projects Delivered", icon: Rocket, color: "text-blue-500" },
            { value: "25+", label: "Happy Clients", icon: Users, color: "text-orange-500" },
            { value: "5+", label: "Years Experience", icon: Calendar, color: "text-purple-500" },
            { value: "99%", label: "Client Satisfaction", icon: Heart, color: "text-green-500" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-3 sm:p-4">
              <div className={`inline-flex p-2 sm:p-3 lg:p-3 rounded-xl bg-gray-200/40 dark:bg-white/5 mb-3 sm:mb-4 ${stat.color}`}>
                <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
              </div>

              <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">
                {stat.value}
              </div>

              <div className="text-xs sm:text-sm ">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* MISSION + VISION */}
      <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-32">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl lg:rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500" />

          <div className="relative glass-card p-6 md:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-black/10 dark:border-white/10">
            <div className="inline-flex p-3 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 mb-4 md:mb-6">
              <Target className="w-6 h-6 md:w-8 md:h-8 text-blue-500 dark:text-blue-400" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
              Our Mission
            </h2>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 dark:text-white/80 mb-4 md:mb-6">
              To empower businesses with innovative, scalable, and secure digital solutions
              that drive growth, enhance efficiency, and create exceptional user experiences.
            </p>

            <div className="mt-6 md:mt-8 p-4 md:p-6 rounded-xl md:rounded-2xl bg-blue-500/10 dark:bg-blue-500/10">
              <p className="text-xs sm:text-sm italic text-gray-700 dark:text-white/70">
                "We believe that great technology should be accessible, reliable,
                and transformative for businesses of all sizes."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl sm:rounded-2xl lg:rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500" />

          <div className="relative glass-card p-6 md:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-black/10 dark:border-white/10">
            <div className="inline-flex p-3 rounded-xl bg-orange-500/10 dark:bg-orange-500/20 mb-4 md:mb-6">
              <Eye className="w-6 h-6 md:w-8 md:h-8 text-orange-500 dark:text-orange-400" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
              Our Vision
            </h2>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 dark:text-white/80 mb-4 md:mb-6">
              To be the world's most trusted technology partner, leading the digital
              transformation journey for enterprises and startups globally through
              cutting-edge innovation and unparalleled expertise.
            </p>

            <div className="mt-6 md:mt-8 p-4 md:p-6 rounded-xl md:rounded-2xl bg-orange-500/10 dark:bg-orange-500/10">
              <p className="text-xs sm:text-sm italic text-gray-700 dark:text-white/70">
                "We envision a future where technology seamlessly enhances every aspect
                of business operations and customer experiences."
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CORE VALUES */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-32"
      >
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            <span className="text-transparent bg-clip-text bg-orange-500">
              Our Core Values
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4 sm:px-0">
            These principles guide everything we do and define who we are as a company.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-4 md:p-6 rounded-xl md:rounded-2xl border border-black/10 dark:border-white/10 group cursor-pointer bg-white/70 dark:bg-white/10"
            >
              <div className={`inline-flex p-2 md:p-3 rounded-xl bg-gray-200/40 dark:bg-white/5 mb-3 md:mb-4 ${value.color}`}>
                <value.icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3">
                {value.title}
              </h3>

              <p className="text-gray-700 dark:text-white/70 text-sm md:text-base">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* TIMELINE - Mobile layout added */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-32"
      >
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            <span className="text-transparent bg-clip-text bg-orange-500">
              Our Journey
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4 sm:px-0">
            From humble beginnings to becoming a trusted technology partner for businesses worldwide.
          </p>
        </div>

        <div className="relative">
          {/* Desktop timeline */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 via-purple-500 to-orange-500" />

          {timeline.map((item, index) => (
            <div key={index}>
              {/* Mobile Layout */}
              <div className="md:hidden mb-8">
                <div className="glass-card p-4 rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/10 ml-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-gray-200/50 dark:bg-white/10">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-gray-600 dark:text-white/60">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-700 dark:text-white/70">
                    {item.desc}
                  </p>
                </div>
                <div className="absolute left-4 -translate-x-1/2 flex-shrink-0">
                  <div
                    className={`w-4 h-4 rounded-full bg-gradient-to-br ${item.color} border-2 border-white dark:border-[#0a0e27]`}
                  />
                </div>
              </div>

              {/* Desktop Layout - Your original code */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`hidden md:relative md:flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                  <div className="glass-card p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-gray-200/50 dark:bg-white/10">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-semibold text-gray-600 dark:text-white/60">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-700 dark:text-white/70 text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="relative flex-shrink-0 w-6">
                  <div
                    className={`w-6 h-6 rounded-full bg-gradient-to-br ${item.color} border-4 border-white dark:border-[#0a0e27]`}
                  />
                </div>

                <div className="w-5/12" />
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* TEAM */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
          <span className="text-transparent bg-clip-text bg-orange-500">
            Meet Our Team
          </span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 md:mb-12 px-4 sm:px-0">
          A diverse team of passionate engineers, designers, and innovators dedicated to excellence.
        </p>

        <div className="glass-card p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/10 max-w-3xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-6 md:mb-8">
            {TeamMembers.map((data, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-2 sm:mb-4 rounded-full bg-gray-500/70 dark:bg-white/10 flex items-center justify-center">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                </div>

                <div className="text-xs sm:text-sm font-semibold">
                  {data?.name}
                </div>
                <div className="text-xs">{data?.role}</div>
              </div>
            ))}
          </div>

          <p className="text-gray-700 dark:text-white/70 text-xs sm:text-sm">
            We're currently expanding our team!
            <Link href="/our-team" className="text-blue-600 dark:text-blue-300 hover:underline ml-1">
              View Open Positions →
            </Link>
          </p>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-16 md:mt-32 text-center"
      >
        <div className="glass-card p-6 sm:p-8 lg:p-12 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/10 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600 dark:from-blue-400 dark:to-orange-400">
              Ready to Build Together?
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-white/70 mb-6 md:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
            Join hundreds of businesses that transformed their operations with our expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/contact"
              className="group relative px-6 py-3 sm:px-8 sm:py-4 rounded-lg lg:rounded-xl !text-white font-semibold 
                bg-gradient-to-r from-blue-500 to-indigo-600 
                hover:from-blue-600 hover:to-indigo-700
                transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                flex items-center justify-center gap-2 sm:gap-3 overflow-hidden text-sm sm:text-base"
            >
              <span className="relative !text-white">Start Your Project</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/portfolio"
              className="group relative px-6 py-3 sm:px-8 sm:py-4 rounded-lg lg:rounded-xl !text-white font-semibold 
                bg-gradient-to-r from-orange-500 to-orange-600
                hover:from-orange-600 hover:to-orange-700
                transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                flex items-center justify-center gap-2 sm:gap-3 overflow-hidden text-sm sm:text-base"
            >
              <span className="relative !text-white">View Our Work</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}