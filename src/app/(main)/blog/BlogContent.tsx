"use client";

import { useEffect, useMemo, useState } from 'react'
import { posts } from './data/posts'
import { motion } from "framer-motion";
// import { useState, useRef, useMemo } from "react";
import Link from "next/link";
import { HeroTitle2 } from "@/app/components/HeroTitle";
import api from '@/lib/axios';
import { FilterBar } from './FilterBar';
import { MOCK_POSTS } from './data/mockData';
import { isWithinInterval, parseISO, startOfDay, endOfDay } from 'date-fns';

export interface Post {
    id: number;
    title: string;
    description: string;
    content: string;
}



const BlogContent = () => {
    const [allBlogs, setAllBlogs] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const [selectedTechStacks, setSelectedTechStacks] = useState<string[]>([]);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const filteredPosts = useMemo(() => {
        return MOCK_POSTS.filter(post => {
            // Date Filter
            if (dateFrom || dateTo) {
                const postDate = parseISO(post.createdAt);
                const from = dateFrom ? startOfDay(new Date(dateFrom)) : new Date(0);
                const to = dateTo ? endOfDay(new Date(dateTo)) : new Date(8640000000000000); // Far future

                if (!isWithinInterval(postDate, { start: from, end: to })) {
                    return false;
                }
            }

            // Tech Stack Filter (Multi-select: Match if post has ANY of the selected stacks)
            if (selectedTechStacks.length > 0) {
                const hasMatch = selectedTechStacks.some(stack => post.techStacks.includes(stack));
                if (!hasMatch) return false;
            }

            // Tag Filter (Multi-select: Match if post has ANY of the selected tags)
            if (selectedTags.length > 0) {
                const hasMatch = selectedTags.some(tag => post.tags.includes(tag));
                if (!hasMatch) return false;
            }

            // Search Query
            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                return (
                    post.title.toLowerCase().includes(query) ||
                    post.description.toLowerCase().includes(query) ||
                    post.content.toLowerCase().includes(query)
                );
            }

            return true;
        });
    }, [searchQuery, dateFrom, dateTo, selectedTechStacks, selectedTags]);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const res = await api.get('/blog')
                setAllBlogs(res.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);
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

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
            >

                <FilterBar
                    dateFrom={dateFrom} setDateFrom={setDateFrom}
                    dateTo={dateTo} setDateTo={setDateTo}
                    selectedTechStacks={selectedTechStacks} setSelectedTechStacks={setSelectedTechStacks}
                    selectedTags={selectedTags} setSelectedTags={setSelectedTags}
                    searchQuery={searchQuery} setSearchQuery={setSearchQuery}
                />
            </motion.div>

            {/* Single Project Card */}
            <div className="grid sm:grid-cols-1 lg:grid-cols-1 gap-4 sm:gap-6 px-4 sm:px-0">

                {/* Glow */}
                {/* <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500 to-indigo-600 rounded-2xl sm:rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500" /> */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card */}
                    {posts.map((blog, index) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            whileHover={{ y: -8 }}
                            className="relative group"
                            key={index}
                        >
                            <div className="relative flex flex-col justify-between glass-card p-4 sm:p-6 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-white/10 h-full">
                                <div className="grid gap-4">
                                    {/* Title with link - Show only 7 words */}
                                    <Link href="/contact">
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold group-hover:text-white transition-colors overflow-hidden cursor-pointer hover:text-blue-400">
                                            {blog.title
                                                .split(' ')
                                                .slice(0, 7)
                                                .join(' ')}
                                        </h3>
                                    </Link>

                                    {/* Short Description - Show only 5 words */}
                                    <p className="text-white/70 w-[90%] text-sm font-bold sm:text-base">
                                        {blog.description
                                            .split(' ')
                                            .slice(0, 5)
                                            .join(' ')}
                                    </p>

                                    {/* Content - 3 lines, no ellipsis */}
                                    <p className="text-white/70 text-sm sm:text-base line-clamp-3 overflow-hidden">
                                        {blog.content}
                                    </p>
                                </div>

                                {/* Bottom row: Stunning Continue Reading button */}
                                <Link
                                    href="/contact"
                                    className="group/btn relative block mt-8 cursor-pointer"
                                >
                                    {/* Animated background gradient */}
                                    <div className="absolute -inset-1  rounded-xl blur opacity-0 group-hover/btn:opacity-100 transition duration-500" />

                                    <div className="relative flex items-center justify-between border bg-[#4948ab] text-white! border-white/10 group-hover/btn:border-white/20 rounded-xl px-4 py-3 transition-all duration-300">
                                        {/* Left side: Read more text with arrow */}
                                        <div className="flex items-center gap-3">
                                            <span className="text-sm font-medium text-white/80! group-hover/btn:text-white transition-colors">
                                                Continue reading
                                            </span>
                                            <div className="relative">
                                                <svg
                                                    className="w-5 h-5 text-white/60 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all duration-300"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                                <svg
                                                    className="absolute top-0 left-0 w-5 h-5 text-white/60 group-hover/btn:text-white translate-x-2 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-3 transition-all duration-300"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Right side: Date display */}
                                        <div className="flex items-center gap-2">
                                            <div className="h-4 w-px bg-white/20 group-hover/btn:bg-white/40 transition-colors" />
                                            <div className="flex items-center gap-1.5">
                                                <svg className="w-4 h-4 text-white/40! group-hover/btn:text-white/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <span className="text-xs text-white/50! group-hover/btn:text-white/70 transition-colors">
                                                    {new Date('2026-02-11').toLocaleDateString('en-US', {
                                                        month: 'short',
                                                        day: 'numeric',
                                                        year: 'numeric'
                                                    })}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </motion.div>
                    ))}

                </div >
            </div >
        </>
    )
}

export default BlogContent