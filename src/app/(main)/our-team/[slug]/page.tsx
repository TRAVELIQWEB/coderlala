"use client";

import { useParams, useRouter } from "next/navigation";
import { Metadata } from "next";
import { motion } from "framer-motion";
import {
    Linkedin,
    Github,
    Mail,
    MapPin,
    Briefcase,
    ArrowLeft,
    CheckCircle2,
    Globe,
    Zap,
    ArrowRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getExperience, teamMembers, TeamMember } from "../team-data";

const colorMap: { [key: string]: string } = {
    "bg-blue-500": "bg-blue-500/20",
    "bg-orange-500": "bg-orange-500/20",
    "bg-teal-500": "bg-teal-500/20",
    "bg-purple-500": "bg-purple-500/20",
    "bg-green-500": "bg-green-500/20",
    "bg-red-500": "bg-red-500/20",
};

interface MemberProfilePageProps {
    params: { slug: string };
}

async function generateMetadata({ params }: MemberProfilePageProps): Promise<Metadata> {
    const slug = decodeURIComponent(params.slug);
    const member = teamMembers.find((m) => m.slug.toLowerCase() === slug.toLowerCase());

    if (!member) {
        return {
            title: "Member Not Found | CoderLala",
            description: "The team member you are looking for could not be found.",
        };
    }

    const memberTitle = `${member.name} | ${member.role} at CoderLala`;
    const memberDescription = member.description;
    const memberKeywords = [
        member.name,
        member.role,
        ...member.skills,
        "CoderLala team",
        "software developer",
        "web developer",
        "mobile app developer",
        "AI engineer",
        "SaaS expert",
        "Gurugram",
        "India"
    ].join(", ");

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://coderlala.com";
    const canonicalUrl = `${baseUrl}/our-team/${member.slug}`;
    const ogImageAbsoluteUrl = `${baseUrl}${member.image}`;

    return {
        title: memberTitle,
        description: memberDescription,
        keywords: memberKeywords,
        openGraph: {
            title: memberTitle,
            description: memberDescription,
            url: canonicalUrl,
            siteName: "CoderLala Technologies",
            type: "profile",
            locale: "en_US",
            images: [
                {
                    url: ogImageAbsoluteUrl,
                    width: 800,
                    height: 800,
                    alt: member.name,
                }
            ],
        },
        twitter: {
            card: "summary",
            title: memberTitle,
            description: memberDescription,
            images: [ogImageAbsoluteUrl],
            creator: "@coderlala",
            site: "@coderlala",
        },
        alternates: {
            canonical: canonicalUrl,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
    };
}

export default function MemberProfilePage() {
    const params = useParams();
    const router = useRouter();

    // In Next.js App Router, params are available on the client via useParams()
    // It can be null initially or empty during hydration.
    const rawSlug = params?.slug;
    const slug = typeof rawSlug === 'string' ? decodeURIComponent(rawSlug) : "";

    // If we're on a route that SHOULD have a slug but it hasn't loaded yet,
    // we show a small loading state or nothing to avoid a flash of "not found"
    if (!rawSlug && typeof window !== 'undefined') {
        return null;
    }

    const member = teamMembers.find((m) => m.slug.toLowerCase() === slug.toLowerCase());

    if (!member && slug) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center text-white px-4 text-center">
                <h1 className="text-4xl font-extrabold mb-4">Member not found</h1>
                <p className="text-gray-400 text-lg max-w-md">
                    We couldn't find a team member with the slug <span className="text-blue-400">"{slug}"</span>.
                </p>
                <div className="mt-8 flex gap-4">
                    <Link
                        href="/our-team"
                        className="rounded-full bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                    >
                        View All Team
                    </Link>
                    <button
                        onClick={() => router.back()}
                        className="rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition-all hover:bg-blue-700"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    if (!member) return null;

    return (
        <div className="min-h-screen pb-20 pt-24">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => router.back()}
                    className="group mb-8 flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
                >
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Team
                </motion.button>

                {/* Hero Section */}
                <div className="relative overflow-hidden glass-card border border-white/10 bg-white/5 backdrop-blur-xl">
                    <div className={`absolute -right-24 -top-24 h-96 w-96 rounded-full blur-[120px] animate-pulse ${colorMap[member.color] || 'bg-blue-500/20'}`} />
                    <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full blur-[120px] bg-blue-500/10" />

                    <div className="relative flex flex-col gap-10 p-8 md:flex-row md:items-center">
                        {/* Image */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative aspect-square w-full shrink-0 overflow-hidden rounded-3xl border-2 border-white/10 sm:h-64 sm:w-64 md:h-80 md:w-80 shadow-2xl shadow-black/50"
                        >
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Info */}
                        <div className="flex-1">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <h3 className="font-extrabold tracking-tight text-white text-4xl">
                                    {member.name}
                                </h3>
                                <div className="mt-4 flex flex-wrap items-center gap-3">
                                    <span className={`rounded-full px-4 py-1.5 text-sm font-bold text-white bg-white/10 backdrop-blur-md border border-white/10`}>
                                        {member.role}
                                    </span>
                                    <span className="flex items-center gap-1.5 text-gray-400">
                                        <MapPin className="h-4 w-4" />
                                        {member.location}
                                    </span>
                                </div>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg leading-relaxed text-gray-300 mt-8 max-w-2xl"
                            >
                                {member.description}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mt-10 flex flex-wrap gap-4"
                            >
                                <Link
                                    href={member.linkedin}
                                    target="_blank"
                                    className="bg-[#0b79b5]! text-white! flex items-center gap-2 rounded-xl! px-6 py-3 font-semibold border border-white/10 transition-all hover:bg-white/10 hover:scale-105"
                                >
                                    <Linkedin className="h-5 w-5" />
                                    LinkedIn
                                </Link>
                                <Link
                                    href={member.github}
                                    target="_blank"
                                    className="bg-[#080808]! text-white! flex items-center gap-2 rounded-xl! px-6 py-3 font-semibold border border-white/10 transition-all hover:bg-white/10 hover:scale-105"
                                >
                                    <Github className="h-5 w-5" />
                                    GitHub
                                </Link>
                                {/* <Link
                                    href={`mailto:${member.email}`}
                                    className="flex items-center gap-2 rounded-xl bg-[#f97316] px-6 py-3 font-semibold text-white! transition-all hover:bg-[#ea580c]"
                                >
                                    <Mail className="h-5 w-5" />
                                    Email Me
                                </Link> */}
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Details Grid */}
                <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
                    {/* Skills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 glass-card p-8 border border-white/10"
                    >
                        <h2 className="flex items-center gap-3 text-2xl font-bold text-white">
                            <Globe className="h-6 w-6 text-blue-500" />
                            Technical Expertise
                        </h2>
                        {/* Skills Tags */}

                        <div className="mt-8 flex flex-wrap gap-2 mb-4">
                            {member.skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="glass-card flex hover:cursor-pointer items-center gap-2 rounded-md! px-3 py-1 font-semibold border border-white/10 transition-all hover:bg-white/10 hover:scale-105 bg-white/5 text-sm hover:border-blue-500/50"
                                >
                                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Experience Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl glass-card p-8 border border-white/10"
                    >
                        <h2 className="flex items-center gap-3 text-2xl font-bold text-white">
                            <Briefcase className="h-6 w-6 text-[#f97316]" />
                            Experience
                        </h2>
                        <div className="mt-6 flex flex-col gap-6">
                            <div>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Experience</p>
                                <p className="mt-1 text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-500">{getExperience(member.experience)}</p>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Specialization</p>
                                <p className="text-md leading-relaxed text-gray-400 mt-2">Enterprise Projects, Consulting, and Full-Stack Architecture.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 glass-card p-8 border border-white/10 bg-linear-to-r from-blue-600/10 to-orange-600/10 text-center"
                >
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to work with {member.name.split(' ')[0]}?</h3>
                    <p className="text-gray-400 mb-4 max-w-xl mx-auto">
                        Bring your vision to life with expert engineering and innovative design.
                    </p>
                    <div className="flex justify-center">

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
                    </div>
                </motion.div>

            </div>
        </div >
    );
}
