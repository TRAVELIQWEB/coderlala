// app/blog/[slug]/page.tsx
import BlogDetail from './BlogDetail';
import { Metadata } from 'next';
import { cache } from 'react';

// Define interfaces
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

interface ApiResponse {
    status: string;
    data: {
        blog: Blog;
        relatedBlogs: Blog[];
    };
}

// Cache the fetch function to prevent duplicate requests within the same render pass
const getBlog = cache(async (slug: string): Promise<ApiResponse | null> => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    if (!backendUrl) {
        console.error('NEXT_PUBLIC_BACKEND_URL is not configured');
        return null;
    }

    const cleanUrl = backendUrl.replace(/\/$/, '');

    try {
        const res = await fetch(
            `${cleanUrl}/blog/${encodeURIComponent(slug)}`,
            {
                next: {
                    revalidate: 3600,
                },
            }
        );

        if (!res.ok) {
            console.error(
                `Failed to fetch blog: ${res.status} ${res.statusText}`
            );
            return null;
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching blog:', error);
        return null;
    }
});

// Generate metadata dynamically for SEO
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;

    try {
        const data = await getBlog(slug);
        const blog = data?.data?.blog;

        if (!blog) {
            return {
                title: 'Blog Post - CoderLala',
                description: 'Read our latest blog post about technology and development',
                robots: {
                    index: true,
                    follow: true,
                },
            };
        }

        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://coderlala.com';

        return {
            title: blog.seo?.title || blog.title || 'Blog Post',
            description: blog.seo?.description || blog.description || 'Read our latest blog post',
            keywords: [blog.slug, ...(blog.tags || []).map(tag => `${tag} coderlala`), ...(blog.techStacks || []).map(tech => `${tech} coderlala`)].filter(Boolean).join(', ') || '',
            openGraph: {
                title: blog.seo?.title || blog.title,
                description: blog.seo?.description || blog.description,
                url: blog.seo?.canonicalUrl || `${siteUrl}/blog/${blog.slug}`,
                type: 'article',
                publishedTime: blog.createdAt,
                modifiedTime: blog.updatedAt,
                authors: blog.author?.name ? [blog.author.name] : [],
                tags: blog.tags || [],
                images: blog.coverImage ? [
                    {
                        url: blog.coverImage,
                        width: 1200,
                        height: 630,
                        alt: blog.title,
                    }
                ] : [],
            },
            twitter: {
                card: 'summary_large_image',
                title: blog.seo?.title || blog.title,
                description: blog.seo?.description || blog.description,
                images: blog.coverImage ? [blog.coverImage] : [],
            },
            alternates: {
                canonical: blog.seo?.canonicalUrl || `${siteUrl}/blog/${blog.slug}`,
            },
            robots: {
                index: true,
                follow: true,
                googleBot: {
                    index: true,
                    follow: true,
                    'max-video-preview': -1,
                    'max-image-preview': 'large',
                    'max-snippet': -1,
                },
            },
            authors: blog.author?.name ? [{ name: blog.author.name }] : [],
            category: blog.primaryTech || blog.techStacks?.[0] || 'Technology',
            applicationName: 'CoderLala Blog',
            referrer: 'origin-when-cross-origin',
            creator: blog.author?.name || 'CoderLala Team',
            publisher: 'CoderLala',
            formatDetection: {
                email: false,
                address: false,
                telephone: false,
            },
        };
    } catch (error) {
        console.error('Error fetching blog for metadata:', error);
        return {
            title: 'Blog Post - CoderLala',
            description: 'Read our latest blog post about technology and development',
            robots: {
                index: true,
                follow: true,
            },
        };
    }
}

// Server component with proper data fetching
export default async function BlogDetails({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    // Pre-fetch blog data using the cached function
    let initialBlog: Blog | null = null;
    let initialRelatedBlogs: Blog[] = [];

    try {
        const data = await getBlog(slug);
        if (data?.data) {
            initialBlog = data.data.blog;
            initialRelatedBlogs = data.data.relatedBlogs;
        }
    } catch (error) {
        console.error('Error fetching blog:', error);
    }

    // If no blog data, show a 404 or error state
    if (!initialBlog) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-30">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-primary">Blog Post Not Found</h1>
                    <p className="mt-4 text-primary">The blog post you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-20">
            <BlogDetail
                initialBlog={initialBlog}
                initialRelatedBlogs={initialRelatedBlogs}
            />
        </div>
    );
}