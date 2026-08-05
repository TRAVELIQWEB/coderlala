// app/blog/[slug]/page.tsx
import BlogDetail from './BlogDetail';
import { Metadata } from 'next';
import api from '@/lib/axios';

// Define interfaces for SEO
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

// Generate metadata dynamically for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const { slug } = await params;
    
    try {
        const res = await api.get<ApiResponse>(`/blog/${slug}`);
        const blog = res.data.data.blog;
        
        return {
            title: blog.seo?.title || blog.title || 'Blog Post',
            description: blog.seo?.description || blog.description || 'Read our latest blog post',
            keywords: blog.tags?.join(', ') || blog.techStacks?.join(', ') || '',
            openGraph: {
                title: blog.seo?.title || blog.title,
                description: blog.seo?.description || blog.description,
                url: blog.seo?.canonicalUrl || `/blog/${blog.slug}`,
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
                canonical: blog.seo?.canonicalUrl || `/blog/${blog.slug}`,
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
            // publishedTime: blog.createdAt,
            // modifiedTime: blog.updatedAt,
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
export default async function BlogDetails({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    
    // Pre-fetch blog data for the client component
    let initialBlog: Blog | null = null;
    let initialRelatedBlogs: Blog[] = [];
    
    try {
        const res = await api.get<ApiResponse>(`/blog/${slug}`);
        initialBlog = res.data.data.blog;
        initialRelatedBlogs = res.data.data.relatedBlogs;
    } catch (error) {
        console.error('Error fetching blog:', error);
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-20">
            <BlogDetail 
                slug={slug} 
                initialBlog={initialBlog}
                initialRelatedBlogs={initialRelatedBlogs}
            />
        </div>
    );
}