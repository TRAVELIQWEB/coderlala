"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, ExternalLink, Mail, MapPin, Briefcase } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TeamMember } from "./team-data";
import { FaLocationDot } from "react-icons/fa6";
import { IoBriefcase } from "react-icons/io5";

const colorMap: { [key: string]: string } = {
    "bg-blue-500": "bg-blue-500/20",
    "bg-orange-500": "bg-orange-500/20",
    "bg-teal-500": "bg-teal-500/20",
    "bg-purple-500": "bg-purple-500/20",
    "bg-green-500": "bg-green-500/20",
    "bg-red-500": "bg-red-500/20",
};

export default function ProfileCard({ member }: { member: TeamMember }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            // className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/10"
            className="glass-card p-2 border-border max-w-4xl mx-auto group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/10"
        >
            {/* Background Gradient Glow */}
            <div className={`absolute -right-20 -top-20 h-64 w-64 rounded-full blur-[100px] transition-all duration-500 group-hover:blur-[80px] ${colorMap[member.color] || 'bg-blue-500/20'}`} />

            <div className="relative p-4">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl ring-1 ring-white/10">
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                    />
                </div>


                <div className="flex-1 mt-4 gap-3">
                    <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mb-2">
                        {member.name}
                    </h3>
                    <p className={`mt-1 inline-block rounded-full px-4 py-1 text-sm font-medium text-white ${member.color}/20 bg-opacity-30 mb-3`}>
                        {member.role}
                    </p>

                    <div className="my-2 flex flex-wrap gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1.5">
                            <IoBriefcase />
                            {member.experience} exp
                        </span>
                        <span className="flex items-center gap-1.5">
                            <FaLocationDot className="text-orangeDark"/>

                            {/* <MapPin className="h-4 w-4" /> */}
                            {member.location}
                        </span>
                    </div>
                </div>

                {/* Description */}
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-400 group-hover:text-gray-300">
                    {member.description}
                </p>

                {/* Skills Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                    {member.skills.slice(0, 3).map((skill, index) => (
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

                {/* Action Buttons */}
                <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                    <div className="flex gap-2">
                        <Link
                            href={member.linkedin}
                            target="_blank"
                            className="profile-icon"
                        >
                            <Linkedin className="h-5 w-5" />
                        </Link>
                        <Link
                            href={member.github}
                            target="_blank"
                            className="profile-icon"
                        >
                            <Github className="h-5 w-5" />
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
                        className="gradient-button"
                    >
                        View Profile
                        <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

