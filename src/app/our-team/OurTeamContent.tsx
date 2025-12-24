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
  Award
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";

const teamMembers = [
  {
    id: 1,
    name: "Salman Nizam",
    role: "Co-Founder & DevOps Engineer",
    image: "/images/team/user-profile.webp",
    description: "Expert in cloud architecture, containerization, and scalable infrastructure. Leads our DevOps practices and ensures 99.9% uptime for all client projects.",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
    experience: "5+ years",
    location: "Gurugram, India",
    email: "salman.nizam@coderlala.com",
    linkedin: "https://linkedin.com/in/salmannizam",
    github: "https://github.com/salmannizam",
    color: "bg-blue-500"
  },
  {
    id: 2,
    name: "Achal Singh",
    role: "Co-Founder & Full-Stack Developer",
    image: "/images/team/user-profile.webp",
    description: "Full-stack specialist with expertise in modern web technologies. Architect of scalable SaaS platforms and enterprise-grade applications.",
    skills: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
    experience: "5+ years",
    location: "Gurugram, India",
    email: "achal.singh@coderlala.com",
    linkedin: "https://linkedin.com/in/achalsingh",
    github: "https://github.com/achalsingh",
    color: "bg-orange-500"
  },
  {
    id: 3,
    name: "Ansh Garg",
    role: "Young Developer",
    image: "/images/team/ansh.jpeg",
    description: "Energetic young developer with a passion for learning new technologies. Contributes to frontend development and brings fresh perspectives to projects.",
    skills: ["HTML/CSS", "JavaScript", "React Basics", "Python", "Git", "Github", "TypeScript", "Bootstrap", "Responsive Design"],
    experience: "1+ year",
    location: "Gurugram, India",
    email: "ansh.garg@coderlala.com",
    linkedin: "https://linkedin.com/in/anshgarg",
    github: "https://github.com/anshgarg",
    color: "bg-teal-500"
  },
  {
    id: 4,
    name: "Aman Singh",
    role: "Senior Full-Stack Developer",
    image: "/images/team/user-profile.webp",
    description: "Specializes in building performant web applications with modern frameworks. Passionate about clean code and user experience.",
    skills: ["React", "Vue.js", "Python", "Django", "MongoDB"],
    experience: "3+ years",
    location: "Gurugram, India",
    email: "aman.singh@coderlala.com",
    linkedin: "https://linkedin.com/in/amansingh",
    github: "https://github.com/amansingh",
    color: "bg-purple-500"
  },
  {
    id: 5,
    name: "Ravi Kaliya",
    role: "Senior Frontend Developer",
    image: "/images/team/user-profile.webp",
    description: "Frontend expert with a keen eye for design and user experience. Creates beautiful, responsive interfaces with modern CSS and JavaScript.",
    skills: ["HTML", "CSS" ,"Tailwind", "Bootstrap","Javascript", "Typescript" ,"PHP" ,"MySQL" ,"WordPress", "Nodejs", "Reactjs", "Nextjs" ,"  Git", "Github"],
    experience: "5+ years",
    location: "Gurugram, India",
    email: "ravi.k@coderlala.com",
    linkedin: "https://linkedin.com/in/ravikaliya",
    github: "https://github.com/ravikaliya",
    color: "bg-green-500"
  },
  {
    id: 6,
    name: "Raghib Nizam",
    role: "Full-Stack Developer",
    image: "/images/team/user-profile.webp",
    description: "Versatile developer with expertise across the stack. Focuses on creating efficient, maintainable code and seamless user experiences.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "Express", "TypeScript", "MongoDB", "Git", "Github", "Redis", "Tailwind CSS", "Bootstrap", "WordPress"],
    experience: "2+ years",
    location: "Gurugram, India",
    email: "raghib.nizam@coderlala.com",
    linkedin: "https://linkedin.com/in/raghibnizam",
    github: "https://github.com/raghibnizam",
    color: "bg-red-500"
  }
];

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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-500/10 to-orange-500/10 backdrop-blur-sm border border-black/10 dark:border-white/20 mb-6">
          <Users className="w-4 h-4 text-blue-500 dark:text-blue-300" />
          <span className="text-sm font-medium">Meet Our Team</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6">
          <span className="text-transparent bg-clip-text bg-blue-500">
            The Minds
          </span>
          <span className="block text-transparent bg-clip-text bg-orange-500">
            Behind The Magic
          </span>
        </h1>
        
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
        className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl border border-black/10 dark:border-white/10 mb-12 md:mb-20 bg-white/70 dark:bg-white/10"
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

      {/* Team Members with Alternating Layout */}
      <div className="space-y-12 md:space-y-20 lg:space-y-24 mb-20 md:mb-32">
        {teamMembers.map((member, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div key={member.id} className="relative">
              {/* Alternating Layout Container */}
              <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 md:gap-12 lg:gap-16 items-center`}>
                
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
                  className={`w-full lg:w-1/2 ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}
                >
                  <div className="relative group">
                    {/* Glow Effect */}
                    <div className={`absolute -inset-4 ${member.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    
                    {/* Image Container */}
                    <div className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden border-4 border-white dark:border-gray-900 shadow-2xl">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={index < 2} // Prioritize first two images
                        />
                      ) : (
                        <div className="absolute inset-0 bg-linear-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                          <Users className="w-32 h-32 text-gray-400 dark:text-gray-600" />
                        </div>
                      )}
                    </div>
                    
                    {/* Role Badge */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                      <div className={`px-4 py-2 rounded-full ${member.color} text-white font-semibold text-sm shadow-lg`}>
                        {member.role.split('&')[0].trim()}
                      </div>
                    </div>
                  </div>
                </motion.div>

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
                  className={`w-full lg:w-1/2 ${isEven ? 'lg:pl-8' : 'lg:pr-8'}`}
                >
                  <div className="glass-card p-6 md:p-8 rounded-2xl md:rounded-3xl border border-black/10 dark:border-white/10">
                    {/* Name and Role */}
                    <div className="mb-6">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        {member.name}
                      </h2>
                      <p className="text-lg text-gray-600 dark:text-gray-300">{member.role}</p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {member.description}
                    </p>

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/10 border border-gray-400/80! dark:border-white/10 text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-gray-100 dark:bg-white/10">
                          <Briefcase className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Experience</div>
                          <div className="font-medium">{member.experience}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-gray-100 dark:bg-white/10">
                          <MapPin className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Location</div>
                          <div className="font-medium">{member.location}</div>
                        </div>
                      </div>
                    </div>

                    {/* Contact Links */}
                    <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-200 dark:border-white/10">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 dark:bg-blue-500/20 dark:hover:bg-blue-500/30 transition-colors"
                      >
                        <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-medium">Email</span>
                      </a>
                      
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 dark:bg-blue-500/20 dark:hover:bg-blue-500/30 transition-colors"
                      >
                        <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-medium">LinkedIn</span>
                      </a>
                      
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-500/10 hover:bg-gray-500/20 dark:bg-white/10 dark:hover:bg-white/20 transition-colors"
                      >
                        <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                        <span className="text-sm font-medium">GitHub</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="glass-card p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl border border-black/10 dark:border-white/10 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600 dark:from-blue-400 dark:to-orange-400">
              Want to Join Our Team?
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-white/70 mb-6 md:mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals to join our growing team of innovators.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/careers"
              className="group relative px-6 py-3 sm:px-8 sm:py-4 rounded-lg md:rounded-xlfont-semibold 
                bg-gradient-to-r from-blue-500 to-indigo-600 
                hover:from-blue-600 hover:to-indigo-700
                transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                flex items-center justify-center gap-2 sm:gap-3 overflow-hidden text-sm sm:text-base"
            >
              <span className="relative  !text-white ">View Open Positions</span>
              <ArrowRight className="w-4 h-4 !text-white sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="group relative px-6 py-3 sm:px-8 sm:py-4 rounded-lg md:rounded-xl !text-white font-semibold 
                bg-gradient-to-r from-orange-500 to-orange-600
                hover:from-orange-600 hover:to-orange-700
                transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                flex items-center justify-center gap-2 sm:gap-3 overflow-hidden text-sm sm:text-base"
            >
              <span className="relative !text-white">Contact Us</span>
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}