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
      year: "2020",
      title: "Company Founded",
      desc: "CoderLala Technologies was born with a vision to transform ideas into powerful digital products.",
      icon: Rocket,
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "2021",
      title: "First 50 Clients",
      desc: "Successfully delivered 50+ projects for startups and established businesses.",
      icon: Users,
      color: "from-orange-500 to-amber-500",
    },
    {
      year: "2022",
      title: "SaaS & Cloud Expansion",
      desc: "Architected large-scale SaaS platforms and cloud-based systems for enterprise clients.",
      icon: Cloud,
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "2023",
      title: "Enterprise Partnerships",
      desc: "Became trusted technology partner for Fortune 500 companies and unicorn startups.",
      icon: Award,
      color: "from-green-500 to-emerald-500",
    },
    {
      year: "2024",
      title: "AI & ML Integration",
      desc: "Started integrating AI, machine learning, and automation into our solutions.",
      icon: Zap,
      color: "from-red-500 to-orange-500",
    },
    {
      year: "2025",
      title: "Global Recognition",
      desc: "Expanded to serve clients across 20+ countries with award-winning solutions.",
      icon: Globe,
      color: "from-indigo-500 to-blue-500",
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

  return (
    <div>

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <div className="about-hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-orange-500/10 backdrop-blur-sm border border-black/10 dark:border-white/20 mb-6">
          <Code2 className="w-4 h-4 text-blue-500 dark:text-blue-300" />
          <span className="text-sm font-medium text-gray-700 dark:text-white/80">
            Our Story
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="about-hero-title-1 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200">
            Building the Future
          </span>
          <span className="about-hero-title-2 block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 dark:from-blue-400 dark:to-orange-400">
            of Technology
          </span>
        </h1>

        <p className="about-hero-desc text-xl text-gray-700 dark:text-white/70 max-w-3xl mx-auto">
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
        className="glass-card p-8 rounded-3xl border border-black/10 dark:border-white/10 mb-20 bg-white/70 dark:bg-white/10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "150+", label: "Projects Delivered", icon: Rocket, color: "text-blue-500" },
            { value: "50+", label: "Happy Clients", icon: Users, color: "text-orange-500" },
            { value: "5+", label: "Years Experience", icon: Calendar, color: "text-purple-500" },
            { value: "99%", label: "Client Satisfaction", icon: Heart, color: "text-green-500" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4">
              <div className={`inline-flex p-3 rounded-xl bg-gray-200/40 dark:bg-white/5 mb-4 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>

              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>

              <div className="text-sm text-gray-600 dark:text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* MISSION + VISION */}
      <div className="grid lg:grid-cols-2 gap-8 mb-32">

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500" />

          <div className="relative glass-card p-8 rounded-3xl border border-black/10 dark:border-white/10">
            <div className="inline-flex p-3 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 mb-6">
              <Target className="w-8 h-8 text-blue-500 dark:text-blue-400" />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-white/80 mb-6">
              To empower businesses with innovative, scalable, and secure digital solutions
              that drive growth, enhance efficiency, and create exceptional user experiences.
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-blue-500/10 dark:bg-blue-500/10">
              <p className="text-sm italic text-gray-700 dark:text-white/70">
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
          <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500" />

          <div className="relative glass-card p-8 rounded-3xl border border-black/10 dark:border-white/10">
            <div className="inline-flex p-3 rounded-xl bg-orange-500/10 dark:bg-orange-500/20 mb-6">
              <Eye className="w-8 h-8 text-orange-500 dark:text-orange-400" />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Vision
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-white/80 mb-6">
              To be the world's most trusted technology partner, leading the digital
              transformation journey for enterprises and startups globally through
              cutting-edge innovation and unparalleled expertise.
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-orange-500/10 dark:bg-orange-500/10">
              <p className="text-sm italic text-gray-700 dark:text-white/70">
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
        className="mb-32"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600 dark:from-blue-400 dark:to-orange-400">
              Our Core Values
            </span>
          </h2>

          <p className="text-xl text-gray-700 dark:text-white/70 max-w-3xl mx-auto">
            These principles guide everything we do and define who we are as a company.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-6 rounded-2xl border border-black/10 dark:border-white/10 group cursor-pointer bg-white/70 dark:bg-white/10"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gray-200/40 dark:bg-white/5 mb-4 ${value.color}`}>
                <value.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {value.title}
              </h3>

              <p className="text-gray-700 dark:text-white/70">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* TIMELINE */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-32"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600 dark:from-blue-400 dark:to-orange-400">
              Our Journey
            </span>
          </h2>

          <p className="text-xl text-gray-700 dark:text-white/70 max-w-3xl mx-auto">
            From humble beginnings to becoming a trusted technology partner for businesses worldwide.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 via-purple-500 to-orange-500" />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                <div className="glass-card p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-gray-200/50 dark:bg-white/10">
                      <item.icon className="w-5 h-5 text-gray-700 dark:text-white" />
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
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600 dark:from-blue-400 dark:to-orange-400">
            Meet Our Team
          </span>
        </h2>

        <p className="text-xl text-gray-700 dark:text-white/70 max-w-3xl mx-auto mb-12">
          A diverse team of passionate engineers, designers, and innovators dedicated to excellence.
        </p>

        <div className="glass-card p-8 rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/10 max-w-2xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-200/70 dark:bg-white/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-gray-600 dark:text-white/40" />
                </div>

                <div className="text-sm font-semibold text-gray-900 dark:text-white">
                  Team Member
                </div>
                <div className="text-xs text-gray-700 dark:text-white/60">Role</div>
              </div>
            ))}
          </div>

          <p className="text-gray-700 dark:text-white/70 text-sm">
            We're currently expanding our team!
            <Link href="/careers" className="text-blue-600 dark:text-blue-300 hover:underline ml-1">
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
        className="mt-32 text-center"
      >
        <div className="glass-card p-12 rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600 dark:from-blue-400 dark:to-orange-400">
              Ready to Build Together?
            </span>
          </h2>

          <p className="text-xl text-gray-700 dark:text-white/70 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that transformed their operations with our expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group relative px-8 py-4 rounded-xl text-white font-semibold 
                bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800
                hover:from-blue-700 hover:via-blue-800 hover:to-blue-900
                transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
                flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="relative">Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/portfolio"
              className="group relative px-8 py-4 rounded-xl text-white font-semibold 
                bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800
                hover:from-orange-700 hover:via-orange-800 hover:to-orange-900
                transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
                flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="relative">View Our Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
