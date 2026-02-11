"use client";

import React from 'react'
import { Post, posts } from './data/posts'
import { motion } from "framer-motion";
import {
    Globe,
    Cloud,
    Cpu,
    Brain,
    Database,
    Smartphone,
    ShoppingCart,
    BarChart,
    Shield,
    Zap,
    Eye,
    ExternalLink,
    Github,
    Filter,
    Award,
    TrendingUp,
    Users,
    Lock,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
// import { useState, useRef, useMemo } from "react";
import Link from "next/link";
import HeroTitle, { HeroTitle2 } from "@/app/components/HeroTitle";

const BlogContent = () => {
    return (
        <>
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-linear-to-r from-blue-500/10 to-orange-500/10 backdrop-blur-sm border border-white/20 mb-4 sm:mb-6">
                    {/* <Award className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300" /> */}
                    <span className="text-xs sm:text-sm font-medium">🚀 CoderLala Blog</span>
                </div>

                <HeroTitle2 title1="Latest " title2="Tech Blogs" />

                <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto px-4 sm:px-0">
                    Discover our latest blogs covering web development, mobile app innovation, and SaaS solutions shaping digital transformation.
                </p>
            </motion.div>

            {/* Single Project Card */}
            <div className="grid sm:grid-cols-1 lg:grid-cols-1 gap-4 sm:gap-6 px-4 sm:px-0">

                {/* Glow */}
                {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl sm:rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500" /> */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card */}
                    {posts.map((post: Post) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            whileHover={{ y: -8 }}
                            className="relative group"
                        >
                            <div className="relative flex flex-col justify-between glass-card p-4 sm:p-6 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-white/10 h-full">
                                <div className="grid gap-4">
                                    {/* Title with link - Show only 7 words */}
                                    <Link href="/contact">
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold group-hover:text-white transition-colors overflow-hidden cursor-pointer hover:text-blue-400">
                                            {post.title
                                                .split(' ')
                                                .slice(0, 7)
                                                .join(' ')}
                                        </h3>
                                    </Link>

                                    {/* Short Description - Show only 5 words */}
                                    <p className="text-white/70 w-[90%] text-sm font-bold sm:text-base">
                                        {post.description
                                            .split(' ')
                                            .slice(0, 5)
                                            .join(' ')}
                                    </p>

                                    {/* Content - 3 lines, no ellipsis */}
                                    <p className="text-white/70 text-sm sm:text-base line-clamp-3 overflow-hidden">
                                        {post.content}
                                    </p>
                                </div>

                                {/* Attractive Blog-style Footer */}
                                <div className="mt-6 border-t border-white/10">
                                    <Link href="/contact" className="flex gap-2 w-full justify-between pt-4 items-center gap-2 sm:gap-3 group cursor-pointer">
                                        <div className="flex flex-col">
                                            {/* <span className="text-xs sm:text-sm text-white/60 font-medium">Continue reading</span> */}
                                            <span className="text-sm sm:text-base capitalize font-semibold text-white group-hover:text-blue-400 transition-colors">
                                                Read full blog
                                            </span>
                                        </div>
                                        <div className="relative">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </div>
                                            {/* Glow effect */}
                                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                </div >
            </div >
        </>
    )
}

export default BlogContent