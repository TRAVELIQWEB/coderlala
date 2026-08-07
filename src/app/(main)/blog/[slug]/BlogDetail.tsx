// BlogDetail.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './BlogDetail.module.css';
import RelatedPostsCarousel from './RelatedPostsCarousel';
import api from '@/lib/axios';
import { useRouter } from 'next/navigation';

// Define the interfaces for your data structure
interface Author {
    name: string;
    role: string;
    _id: string;
}

interface SEO {
    title: string;
    description: string;
    canonicalUrl: string;
    _id: string;
}

interface Blog {
    _id: string;
    title: string;
    content: string;
    slug: string;
    primaryTech: string;
    techStacks: string[];
    tags: string[];
    level: string;
    readingTime: number;
    author: Author;
    language: string;
    seo: SEO;
    description: string;
    status: string;
    userId: string;
    coverImage?: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

interface RelatedBlog extends Blog { }

interface ApiResponse {
    status: string;
    data: {
        blog: Blog;
        relatedBlogs: RelatedBlog[];
    };
}

interface BlogDetailProps {
    slug: string;
    initialBlog: Blog | null;
    initialRelatedBlogs: RelatedBlog[];
}

export default function BlogDetail({
    slug,
    initialBlog,
    initialRelatedBlogs
}: BlogDetailProps) {
    const router = useRouter();
    const [blog, setBlog] = useState<Blog | null>(initialBlog);
    const [relatedBlogs, setRelatedBlogs] = useState<RelatedBlog[]>(initialRelatedBlogs);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Only fetch if initial data is not available
        if (!initialBlog) {
            const fetchBlogs = async () => {
                try {
                    const res = await api.get<ApiResponse>(`/blog/${slug}`);
                    setBlog(res.data.data.blog);
                    setRelatedBlogs(res.data.data.relatedBlogs);
                } catch (error) {
                    console.error('Error fetching blog:', error);
                    setError('Failed to load blog post');
                }
            };
            fetchBlogs();
        }
    }, [slug, initialBlog]);

    const normalizeBlogContent = (html: string) => {
        if (!html) return '';

        return html.replace(/<(th|td)\b[^>]*>([\s\S]*?)<\/\1>/gi, (_match, tag, inner) => {
            const cleanedInner = inner.replace(/<p\b[^>]*>([\s\S]*?)<\/p>/gi, '$1');
            return `<${tag}>${cleanedInner}</${tag}>`;
        });
    };

    // Structured data for SEO
    const structuredData = blog ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'headline': blog.title,
        'description': blog.description,
        'image': blog.coverImage || '',
        'datePublished': blog.createdAt,
        'dateModified': blog.updatedAt,
        'author': {
            '@type': 'Person',
            'name': blog.author?.name || 'CoderLala Team',
            'url': '/about',
        },
        'publisher': {
            '@type': 'Organization',
            'name': 'CoderLala',
            'logo': {
                '@type': 'ImageObject',
                'url': 'https://coderlala.com/logo.png',
            },
        },
        'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': `https://coderlala.com/blog/${blog.slug}`,
        },
        'keywords': blog.tags?.join(', ') || '',
        'articleSection': blog.primaryTech || 'Technology',
        'wordCount': blog.content?.split(/\s+/).length || 0,
        'timeRequired': `PT${blog.readingTime || 5}M`,
    } : null;

    // If error occurs
    if (error) {
        return (
            <div className="container mx-auto px-4 py-8 max-w-6xl">
                <div className="text-center text-red-500">
                    <p>{error}</p>
                    <button
                        onClick={() => router.refresh()}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white! rounded hover:bg-blue-600"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    // If blog is still loading or doesn't exist
    if (!blog) {
        return (
            <div className="container mx-auto px-4 py-8 max-w-6xl">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                    <p className="mt-4 text-gray-600">Loading blog post...</p>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Structured Data Script */}
            {structuredData && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            )}

            <div className="">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    {/* Your existing hero section content */}
                </motion.div>

                <div className="container pb-8">
                    {/* Hero Section - Image Left, Title Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 items-center">
                        {/* Left: Feature Image */}
                        <div className="relative h-70 md:h-87.5 w-full rounded-2xl overflow-hidden shadow-xl group">
                            {/* Liquid metal effect */}
                            <div className="absolute -inset-0.5 bg-linear-to-r from-gray-300 via-gray-100 to-gray-300 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md" />

                            {/* Chrome border */}
                            <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-gray-200 via-gray-400 to-gray-600 p-0.75">
                                <div className="relative h-full w-full rounded-2xl overflow-hidden">
                                    <Image
                                        src={blog.coverImage || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'}
                                        alt={blog.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        priority
                                    />

                                    {/* Reflective overlay */}
                                    <div className="absolute inset-0 bg-linear-to-br from-white/30 via-transparent to-black/30 mix-blend-overlay" />

                                    {/* Inner metallic rim */}
                                    <div className="absolute inset-1 rounded-xl border border-white/40" />
                                </div>
                            </div>
                        </div>

                        {/* Right: Title and Description */}
                        <div className="flex flex-col space-y-5">
                            <div className="space-y-3">
                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                                    {blog.title}
                                </h1>

                                {/* Meta info - reading time and date */}
                                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                                    <span>📅 {new Date(blog.createdAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}</span>
                                    <span>•</span>
                                    <span>⏱️ {blog.readingTime || 5} min read</span>
                                    {blog.author?.name && (
                                        <>
                                            <span>•</span>
                                            <span>✍️ {blog.author.name}</span>
                                        </>
                                    )}
                                </div>
                            </div>

                            <div className="border-l-4 border-[#e38138] pl-4 bg-blue-50/30 py-2 rounded-r-lg">
                                <p className="text-base italic">
                                    {blog.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {blog.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-4 py-1.5 bg-muted/70 border border-border text-opacity-80 rounded-full text-xs font-medium transition-colors cursor-pointer"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Blog Content */}
                    <div className={`${styles.PostContent} rounded-4xl! shadow-2xl relative overflow-hidden`}>
                        {/* Gold accent */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-[#e38138] rounded-b-full" />

                        {/* Corner decorations */}
                        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#e38138] rounded-tl-4xl" />
                        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#e38138] rounded-tr-4xl" />
                        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#e38138] rounded-bl-4xl" />
                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#e38138] rounded-br-4xl" />

                        <div className="relative p-4 md:p-10">
                            <div className="relative">
                                {/* Content Display */}
                                <div className={`${styles.contentWrapper} ${styles.contentWrapperExpanded}`}>
                                    <div className={`prose prose-lg max-w-none prose-h2:text-2xl prose-h2:font-light prose-h2:tracking-wide prose-h2:text-gray-800 prose-h2:border-b prose-h2:border-amber-200 prose-h2:pb-3 prose-headings:text-gray-900 prose-headings:font-light prose-headings:tracking-wide prose-p:text-gray-600 prose-p:leading-8 prose-p:font-light prose-strong:text-amber-800 prose-strong:font-medium prose-code:text-amber-700 prose-code:bg-amber-50/80 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:border prose-code:border-amber-200/50 prose-pre:bg-gray-900/95 prose-pre:text-amber-50 prose-pre:rounded-xl prose-pre:border prose-pre:border-amber-800/30 prose-pre:shadow-xl prose-ul:list-disc prose-ol:list-decimal prose-li:text-gray-600 prose-li:marker:text-amber-500 prose-blockquote:border-l-2 prose-blockquote:border-amber-400 prose-blockquote:text-gray-600 prose-blockquote:bg-amber-50/30 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg prose-blockquote:font-light prose-blockquote:italic ${styles.truncatedContent}`}>
                                        <div dangerouslySetInnerHTML={{ __html: normalizeBlogContent(blog.content) }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Related Posts Carousel */}
                    {relatedBlogs.length > 0 && (
                        <RelatedPostsCarousel relatedBlogs={relatedBlogs} />
                    )}
                </div>
            </div>
        </>
    );
}