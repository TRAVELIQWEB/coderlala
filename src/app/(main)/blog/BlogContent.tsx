"use client";

import { useEffect, useState, useCallback } from 'react'
import { motion } from "framer-motion";
import Link from "next/link";
import { HeroTitle2 } from "@/app/components/HeroTitle";
import api from '@/lib/axios';
import { FilterBar } from './FilterBar';
import { BlogTag, BlogTechStack } from "@/types/blog";
import DOMPurify from 'isomorphic-dompurify';
import { format } from 'date-fns';

export interface Post {
    id: number;
    title: string;
    description: string;
    content: string;
    slug: string;
    createdAt: string;
    tags: string[];
    techStacks: string[];
}

const BlogContent = () => {
    const [allBlogs, setAllBlogs] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const [selectedTechStacks, setSelectedTechStacks] = useState<string[]>([]);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    // Function to fetch blogs from backend with filters
    const fetchFilteredBlogs = useCallback(async () => {
        try {
            setLoading(true);

            // Build query params object
            const params: any = {};

            // Send dates in ISO format
            if (dateFrom) {
                params.fromDate = new Date(dateFrom).toISOString();
            }
            if (dateTo) {
                // Set to end of day
                const endDate = new Date(dateTo);
                endDate.setHours(23, 59, 59, 999);
                params.toDate = endDate.toISOString();
            }
            if (selectedTechStacks.length > 0) {
                params.techStacks = selectedTechStacks.join(','); // Send as comma-separated string
            }
            if (selectedTags.length > 0) {
                params.tags = selectedTags.join(','); // Send as comma-separated string
            }
            if (searchQuery) {
                params.searchQuery = searchQuery;
            }

            // console.log('Sending params to API:', params);

            // Make API call with query params
            const res = await api.get('/blog', { params });
            // console.log('API Response:', res.data);
            
            // Only show active blogs (hide drafts, archived, etc.)
            const activeBlogs = res.data.filter((blog: any) => blog.status === 'active');
            setAllBlogs(activeBlogs);
        } catch (error) {
            console.error('Error fetching filtered blogs:', error);
        } finally {
            setLoading(false);
        }
    }, [dateFrom, dateTo, selectedTechStacks, selectedTags, searchQuery]);

    // Initial fetch on component mount - THIS IS WHAT YOU NEED
    useEffect(() => {
        fetchFilteredBlogs();
    }, []); // Empty dependency array means this runs once on mount

    // Handle search button click
    const handleSearch = () => {
        // console.log('Search button clicked with filters:', {
        //     dateFrom,
        //     dateTo,
        //     selectedTechStacks,
        //     selectedTags,
        //     searchQuery
        // });
        fetchFilteredBlogs();
    };

    // Handle reset filters
    const handleReset = () => {
        setDateFrom('');
        setDateTo('');
        setSelectedTechStacks([]);
        setSelectedTags([]);
        setSearchQuery('');
        // Fetch after reset
        fetchFilteredBlogs();
    };

    // Sanitize HTML content
    const sanitizeHTML = (html: string) => {
        return DOMPurify.sanitize(html, {
            ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'code', 'pre', 'ul', 'ol', 'li', 'a', 'img'],
            ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'target']
        });
    };

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
                    dateFrom={dateFrom}
                    setDateFrom={setDateFrom}
                    dateTo={dateTo}
                    setDateTo={setDateTo}
                    selectedTechStacks={selectedTechStacks}
                    setSelectedTechStacks={setSelectedTechStacks}
                    selectedTags={selectedTags}
                    setSelectedTags={setSelectedTags}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    onSearch={handleSearch}
                    onReset={handleReset}
                />
            </motion.div>

            {/* Loading State */}
            {loading && (
                <div className="text-center py-8">
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent"></div>
                    <p className="mt-2 text-white/70">Loading blogs...</p>
                </div>
            )}

            {/* Blog Grid */}
            <div className="grid sm:grid-cols-1 lg:grid-cols-1 gap-4 sm:gap-6 px-4 sm:px-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Display blogs from API */}
                    {!loading && allBlogs.length > 0 && allBlogs.map((blog, index) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            whileHover={{ y: -8 }}
                            className="relative group"
                            key={blog.id || blog._id || index}
                        >
                            <div className="relative flex flex-col justify-between glass-card p-4 sm:p-6 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-white/10 h-full">
                                <div className="grid gap-4">
                                    <Link href={`/blog/${blog.slug}`}>
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold group-hover:text-white transition-colors overflow-hidden cursor-pointer hover:text-blue-400">
                                            {blog.title
                                                .split(' ')
                                                .slice(0, 7)
                                                .join(' ')}
                                        </h3>
                                    </Link>

                                    {/* Description with HTML support */}
                                    <div
                                        className="text-white/70 w-[90%] text-sm font-bold sm:text-base prose prose-invert prose-sm"
                                        dangerouslySetInnerHTML={{
                                            __html: sanitizeHTML(
                                                blog.description
                                                    .split(' ')
                                                    .slice(0, 5)
                                                    .join(' ')
                                            )
                                        }}
                                    />

                                    {/* Content with HTML support - 3 lines */}
                                    <div
                                        className="text-white/70 text-sm sm:text-base line-clamp-3 overflow-hidden prose prose-invert prose-sm"
                                        dangerouslySetInnerHTML={{
                                            __html: sanitizeHTML(blog.content)
                                        }}
                                    />
                                </div>

                                <Link
                                    href={`/blog/${blog.slug}`}
                                    className="group/btn relative block mt-8 cursor-pointer"
                                >
                                    <div className="relative flex items-center justify-between border bg-[#4948ab] text-white! border-white/10 group-hover/btn:border-white/20 rounded-xl px-4 py-3 transition-all duration-300">
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

                                        <div className="flex items-center gap-2">
                                            <div className="h-4 w-px bg-white/20 group-hover/btn:bg-white/40 transition-colors" />
                                            <div className="flex items-center gap-1.5">
                                                <svg className="w-4 h-4 text-white/40! group-hover/btn:text-white/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <span className="text-xs text-white/50! group-hover/btn:text-white/70 transition-colors">
                                                    {new Date(blog.createdAt).toLocaleDateString('en-US', {
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

                    {/* Show message if no blogs found */}
                    {!loading && allBlogs.length === 0 && (
                        <div className="col-span-full text-center py-12">
                            <p className="text-white/70 text-lg">No blogs found matching your criteria.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default BlogContent