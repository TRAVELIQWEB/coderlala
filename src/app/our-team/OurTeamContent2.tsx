// app/our-team/page.tsx
"use client";

import { motion } from "framer-motion";
import {
  Users,
  Code2,
  Cloud,
  Palette,
  Shield,
  Globe,
  Rocket,
  ArrowRight,
  Mail,
  Linkedin,
  Github,
  Calendar,
  MapPin,
  Briefcase,
  Award,
  ExternalLink
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { teamMembers } from "./team-data";


export default function OurTeamContent2() {
  return (
    <div className="py-10">

      {/* Team Members with Alternating Layout */}
      <div className="relative grid md:grid-cols-2 gap-4">
        {teamMembers.map((member, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={member.id}>

              {/* Details Container - Slides in from opposite side */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: isEven ? 100 : -100
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.2
                }}
                className={`h-full`}
              >
                <div className="glass-card h-full flex flex-col justify-between p-6 md:p-8 rounded-2xl md:rounded-3xl border border-black/10 dark:border-white/10">
                  <div className="">
                    {/* Name and Role */}
                    <div className="flex flex-col-reverse lg:flex-row lg:justify-between w-full">
                      {/* Name and Role */}
                      <div className="mt-2">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                          {member.name}
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">{member.role}</p>
                        {/* Info Grid */}
                        <div className="grid gap-4 my-3">
                          <div className="flex gap-3">
                            <div className="opacity-60 mt-2">
                              <Briefcase />
                            </div>
                            <div>
                              <div className="text-sm font-medium">Experience</div>
                              <div className="font-medium text-gray-500 dark:text-gray-400">{member.experience}</div>
                            </div>
                          </div>

                          <div className="flex gap-3">
                            <div className="opacity-60 mt-2">
                              <MapPin />
                            </div>
                            <div>
                              <div className="text-sm font-medium">Location</div>
                              <div className="font-medium text-gray-500 dark:text-gray-400">{member.location}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Image Container - Slides in from left/right */}
                      <motion.div
                        initial={{
                          opacity: 0,
                          x: isEven ? -100 : 100
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0
                        }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut"
                        }}
                        className={`w-full max-w-[180px] max-h-[180px] group relative aspect-square overflow-hidden rounded-2xl ring-1 ring-white/10`}
                      >

                        {/* Image Container */}
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            // sizes="(max-width: 768px) 100vw, 50vw"
                            priority={index < 2} // Prioritize first two images
                          />
                        ) : (
                          <div className="absolute inset-0 bg-linear-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                            <Users className="w-32 h-32 text-gray-400 dark:text-gray-600" />
                          </div>
                        )}
                      </motion.div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-500 dark:text-gray-400 my-2 md:my-4 leading-relaxed line-clamp-2 md:line-clamp-none">
                      {member.description}
                    </p>
                  </div>

                  <div className="">

                    {/* Skills */}
                    <div className="">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Expertise</h4>
                      {/* Skills Tags */}
                      <div className=" flex flex-wrap gap-2 mb-4">
                        {member.skills.slice(0, 5).map((skill, index) => (
                          <span
                            key={index}
                            className="skill-badge"
                          >
                            {skill}
                          </span>
                        ))}
                        {member.skills.length > 3 && (
                          <span className="px-2 py-1 text-xs text-gray-500">+{member.skills.length - 4} more</span>
                        )}
                      </div>
                    </div>
                    {/* Action Buttons */}
                    <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                      <div className="flex gap-2">
                        <Link
                          href={member.linkedin}
                          target="_blank"
                          className="profile-icon bg-[#0b79b5]"
                        >
                          <Linkedin className="h-5 w-5 text-white!" />
                        </Link>
                        <Link
                          href={member.github}
                          target="_blank"
                          className="profile-icon bg-[#080808]"
                        >
                          <Github className="h-5 w-5 text-white!" />
                        </Link>
                        {/* <Link
                            href={`mailto:${member.email}`}
                            className="profile-icon"
                        >
                            <Mail className="h-5 w-5" />
                        </Link> */}
                      </div>

                      {/* <Link
                        href={`/our-team/${member.slug}`}
                        className={`group/btn flex items-center gap-2 rounded-full px-4 py-1 text-sm font-semibold outline-1 text-white ${member.color}/30 outline-white/10 transition-all`}
                    >
                        View Profile
                        <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link> */}
                      <Link
                        href={`/our-team/${member.slug}`}
                        className={`px-3 py-2 group relative rounded-lg! md:rounded-xl font-semibold 
                bg-linear-to-r from-blue-500 to-indigo-600 
                hover:from-blue-600 hover:to-indigo-700
                transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                flex items-center justify-center gap-2 sm:gap-3 overflow-hidden text-sm sm:text-base`}
                      >
                        <span className="relative  text-white! ">View Profile</span>
                        <ArrowRight className="w-4 h-4 text-white! sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      {/* <Link
                        href={`/our-team/${member.slug}`}
                        className="gradient-button"
                      >
                        View Profile
                        <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </Link> */}
                    </div>

                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

    </div>
  );
}