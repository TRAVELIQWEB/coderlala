// app/our-team/page.tsx
"use client";

import { motion } from "framer-motion";
import {
  Users,
  Rocket,
  ArrowRight,
  Calendar,
  Award,
  Mail
} from "lucide-react";
import Link from "next/link";
import OurTeamContent2 from "./OurTeamContent2";
import HeroTitle from "@/app/components/HeroTitle";

export default function OurTeamContent() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-20"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-500/10 to-orange-500/10 backdrop-blur-sm border border-white/20 mb-4 lg:mb-6">
          <Users className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground dark:text-foreground-dark">Meet Our Team</span>
        </div>
        <HeroTitle title1="The Minds" title2="Behind The Magic" />
        <p className="text-base sm:text-lg md:text-xl  max-w-3xl mx-auto px-4 sm:px-0">
          A passionate team of engineers, designers, and innovators dedicated to building
          exceptional digital experiences that transform businesses.
        </p>
      </motion.div>

      {/* Team Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl border border-border dark:border-border-dark bg-card/70 dark:bg-card-dark/70"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { value: "6", label: "Team Members", icon: Users, color: "text-blue-500" },
            { value: "5+", label: "Years Experience", icon: Calendar, color: "text-orange-500" },
            { value: "25+", label: "Projects Delivered", icon: Rocket, color: "text-purple-500" },
            { value: "100%", label: "Client Satisfaction", icon: Award, color: "text-green-500" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-3 sm:p-4">
              <div className={`inline-flex p-2 sm:p-3 md:p-3 rounded-xl  mb-3 sm:mb-4 ${stat.color}`}>
                <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-xs sm:text-sm ">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <OurTeamContent2 />
      {/* Team Grid */}
      {/* <div className="my-16 md:my-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <ProfileCard key={member.id} member={member} />
          ))}
        </div>
      </div> */}

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="glass-card p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl border border-border max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground dark:text-foreground-dark mb-4 md:mb-6">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-orange-600 dark:from-blue-400 dark:to-orange-400">
              Want to Join Our Team?
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-muted-foreground-dark mb-6 md:mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals to join our growing team of innovators.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/careers"
              className={`group relative px-6 py-3 sm:px-8 sm:py-4 rounded-lg md:rounded-xl font-semibold 
                bg-linear-to-r from-blue-500 to-indigo-600 
                hover:from-blue-600 hover:to-indigo-700
                transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                flex items-center justify-center gap-2 sm:gap-3 overflow-hidden text-sm sm:text-base`}
            >
              <span className="relative  text-white! ">View Open Positions</span>
              <ArrowRight className="w-4 h-4 text-white! sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className={`group relative px-6 py-3 sm:px-8 sm:py-4 rounded-lg md:rounded-xl text-white! font-semibold 
                bg-linear-to-r from-orange-500 to-orange-600
                hover:from-orange-600 hover:to-orange-700
                transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                flex items-center justify-center gap-2 sm:gap-3 overflow-hidden text-sm sm:text-base`}
            >
              <span className="relative text-white!">Contact Us</span>
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

