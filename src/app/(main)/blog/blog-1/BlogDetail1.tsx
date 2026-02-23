'use client';

import { useState } from 'react';
import {
    Calendar,
    User,
    Clock,
    Tag,
    BookOpen,
    ArrowLeft,
    Heart,
    Share2,
    Bookmark,
    MessageCircle,
    Eye,
    ChevronRight,
    Twitter,
    Facebook,
    Linkedin,
    Link2,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogDetails() {
    const [isLiked, setIsLiked] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [showShareMenu, setShowShareMenu] = useState(false);

    // Mock blog data
    const blog = {
        id: '1',
        title: 'Building Scalable Microservices with NestJS and Kafka',
        slug: 'building-scalable-microservices-nestjs-kafka',
        shortDescription: 'Learn how to build production-ready microservices using NestJS and Apache Kafka for event-driven architecture.',
        content: `
      <h2>Introduction to Microservices</h2>
      <p>Microservices architecture has become the go-to choice for building complex, scalable applications. In this comprehensive guide, we'll explore how to leverage NestJS and Kafka to create robust microservices that can handle millions of requests.</p>
      
      <h2>Why NestJS?</h2>
      <p>NestJS provides a structured way to build server-side applications with TypeScript. It uses controllers, providers, and modules to organize code effectively.</p>
      
      <pre><code>@Module({
  imports: [ClientsModule.register([
    { name: 'KAFKA_CLIENT', transport: Transport.KAFKA }
  ])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}</code></pre>

      <h2>Setting Up Kafka</h2>
      <p>Apache Kafka acts as the backbone for event streaming. Here's how we configure it in NestJS:</p>
      
      <pre><code>@Injectable()
export class KafkaService {
  constructor(@Inject('KAFKA_CLIENT') private client: ClientKafka) {}
  
  async emitOrderEvent(order: Order) {
    this.client.emit('order.created', JSON.stringify(order));
  }
}</code></pre>
    `,
        coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
        author: {
            name: 'Alex Chen',
            role: 'Senior Backend Engineer',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop',
            bio: 'Alex has over 8 years of experience building scalable backend systems. He specializes in Node.js, NestJS, and event-driven architectures.',
        },
        primaryTech: 'NESTJS',
        techStack: ['NESTJS', 'KAFKA', 'DOCKER', 'TYPESCRIPT', 'POSTGRESQL'],
        tags: ['BACKEND', 'MICROSERVICES', 'DEVOPS', 'TUTORIAL'],
        level: 'INTERMEDIATE',
        readingTime: 12,
        language: 'ENGLISH',
        publishedAt: '2026-02-10T10:30:00Z',
        updatedAt: '2026-02-11T14:20:00Z',
        likes: 342,
        views: 12500,
        comments: 28,
        status: 'PUBLISHED',
        seo: {
            title: 'Building Scalable Microservices with NestJS and Kafka | CoderLala',
            description: 'Complete guide to building microservices with NestJS and Kafka. Learn event-driven architecture, best practices, and production deployment.',
            canonicalUrl: 'https://coderlala.com/blog/nestjs-kafka-microservices',
        },
    };

    // Related blogs
    const relatedPosts = [
        {
            id: '2',
            title: 'Advanced NestJS: Custom Decorators and Middleware',
            slug: 'advanced-nestjs-custom-decorators-middleware',
            shortDescription: 'Take your NestJS skills to the next level with custom decorators and middleware patterns.',
            coverImage: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop',
            readingTime: 10,
            level: 'ADVANCED',
        },
        {
            id: '3',
            title: 'Dockerizing NestJS Applications: Best Practices',
            slug: 'dockerizing-nestjs-applications-best-practices',
            shortDescription: 'Learn how to containerize your NestJS apps for development and production with Docker.',
            coverImage: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=2071&auto=format&fit=crop',
            readingTime: 8,
            level: 'BEGINNER',
        },
        {
            id: '4',
            title: 'Testing Microservices: Unit Tests to Integration Tests',
            slug: 'testing-microservices-unit-to-integration',
            shortDescription: 'Comprehensive testing strategies for microservices with Jest and Supertest.',
            coverImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2128&auto=format&fit=crop',
            readingTime: 15,
            level: 'INTERMEDIATE',
        },
    ];

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const getLevelColor = (level: string) => {
        switch (level) {
            case 'BEGINNER':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'INTERMEDIATE':
                return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'ADVANCED':
                return 'bg-orange-100 text-orange-800 border-orange-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    return (
        <>
            <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
                {/* Hero Section with Cover Image */}
                <div className="relative h-[60vh] min-h-[500px] w-full bg-linear-to-r from-gray-900 to-gray-800 overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                        <Image
                            src={blog.coverImage}
                            alt={blog.title}
                            fill
                            className="object-cover opacity-60"
                            priority
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/80 to-transparent" />
                        <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 to-purple-600/20" />
                    </div>

                    {/* Navigation */}
                    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                        <Link
                            href="/blogs"
                            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors group mb-8"
                        >
                            <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full group-hover:bg-white/20 transition-colors">
                                <ArrowLeft size={18} />
                            </div>
                            <span className="text-sm font-medium">Back to Blogs</span>
                        </Link>
                    </div>

                    {/* Hero Content */}
                    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-16">
                        <div className="max-w-4xl">
                            {/* Tech Stack Pills */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-medium text-white">
                                    {blog.primaryTech}
                                </span>
                                {blog.techStack.slice(0, 3).map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-medium text-white/90"
                                    >
                                        {tech}
                                    </span>
                                ))}
                                {blog.techStack.length > 3 && (
                                    <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-medium text-white/90">
                                        +{blog.techStack.length - 3}
                                    </span>
                                )}
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                {blog.title}
                            </h1>

                            {/* Description */}
                            <p className="text-lg text-white/80 mb-6 max-w-2xl">
                                {blog.shortDescription}
                            </p>

                            {/* Meta Info */}
                            <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full overflow-hidden bg-white/20">
                                        <Image
                                            src={blog.author.avatar}
                                            alt={blog.author.name}
                                            width={32}
                                            height={32}
                                            className="object-cover"
                                        />
                                    </div>
                                    <span className="font-medium text-white">{blog.author.name}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Calendar size={14} />
                                    <span>{formatDate(blog.publishedAt)}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock size={14} />
                                    <span>{blog.readingTime} min read</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Eye size={14} />
                                    <span>{(blog.views / 1000).toFixed(1)}k views</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container text-black! mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left Sidebar - Author & Actions */}
                        <div className="lg:col-span-3 order-2 lg:order-1">
                            <div className="sticky top-24 space-y-6">
                                {/* Author Card */}
                                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-blue-50">
                                                <Image
                                                    src={blog.author.avatar}
                                                    alt={blog.author.name}
                                                    width={64}
                                                    height={64}
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{blog.author.name}</h3>
                                            <p className="text-sm text-gray-600">{blog.author.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-4">{blog.author.bio}</p>
                                    <button className="w-full py-2.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors">
                                        Follow Author
                                    </button>
                                </div>

                                {/* Table of Contents */}
                                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                        <BookOpen size={18} className="text-blue-600" />
                                        Table of Contents
                                    </h4>
                                    <nav className="space-y-2 text-sm">
                                        <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
                                            Introduction to Microservices
                                        </a>
                                        <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors pl-3">
                                            What are Microservices?
                                        </a>
                                        <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors pl-3">
                                            Benefits and Challenges
                                        </a>
                                        <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
                                            Why NestJS?
                                        </a>
                                        <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors pl-3">
                                            NestJS Architecture
                                        </a>
                                        <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors pl-3">
                                            Code Examples
                                        </a>
                                        <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
                                            Setting Up Kafka
                                        </a>
                                        <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
                                            Production Deployment
                                        </a>
                                    </nav>
                                </div>

                                {/* Tags */}
                                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                        <Tag size={18} className="text-blue-600" />
                                        Tags
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {blog.tags.map((tag) => (
                                            <Link
                                                key={tag}
                                                href={`/blogs/tag/${tag.toLowerCase()}`}
                                                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-xs font-medium text-gray-700 transition-colors"
                                            >
                                                #{tag}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
                                    <div className="flex items-center justify-around">
                                        <button
                                            onClick={() => setIsLiked(!isLiked)}
                                            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors group ${isLiked ? 'text-red-600' : 'text-gray-500 hover:text-red-600'
                                                }`}
                                        >
                                            <Heart
                                                size={22}
                                                className={isLiked ? 'fill-red-600' : 'group-hover:scale-110 transition-transform'}
                                            />
                                            <span className="text-xs font-medium">{blog.likes}</span>
                                        </button>
                                        <button className="flex flex-col items-center gap-1 p-2 rounded-lg text-gray-500 hover:text-blue-600 transition-colors group">
                                            <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
                                            <span className="text-xs font-medium">{blog.comments}</span>
                                        </button>
                                        <button
                                            onClick={() => setIsBookmarked(!isBookmarked)}
                                            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors group ${isBookmarked ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'
                                                }`}
                                        >
                                            <Bookmark
                                                size={22}
                                                className={isBookmarked ? 'fill-blue-600' : 'group-hover:scale-110 transition-transform'}
                                            />
                                            <span className="text-xs font-medium">Save</span>
                                        </button>
                                        <div className="relative">
                                            <button
                                                onClick={() => setShowShareMenu(!showShareMenu)}
                                                className="flex flex-col items-center gap-1 p-2 rounded-lg text-gray-500 hover:text-green-600 transition-colors group"
                                            >
                                                <Share2 size={22} className="group-hover:scale-110 transition-transform" />
                                                <span className="text-xs font-medium">Share</span>
                                            </button>
                                            {showShareMenu && (
                                                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white rounded-xl border border-gray-200 shadow-lg p-2 flex gap-1 z-50">
                                                    <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-blue-500 transition-colors">
                                                        <Twitter size={18} />
                                                    </button>
                                                    <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-blue-700 transition-colors">
                                                        <Facebook size={18} />
                                                    </button>
                                                    <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-blue-800 transition-colors">
                                                        <Linkedin size={18} />
                                                    </button>
                                                    <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-gray-900 transition-colors">
                                                        <Link2 size={18} />
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="lg:col-span-6 order-1 lg:order-2">
                            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                                {/* Blog Meta */}
                                <div className="flex flex-wrap items-center gap-4 pb-6 mb-6 border-b border-gray-100">
                                    <span className={`px-3 py-1.5 rounded-full text-xs font-medium border ${getLevelColor(blog.level)}`}>
                                        {blog.level}
                                    </span>
                                    <span className="text-sm text-gray-600 flex items-center gap-1">
                                        <Calendar size={14} />
                                        Updated: {formatDate(blog.updatedAt)}
                                    </span>
                                    <span className="text-sm text-gray-600 flex items-center gap-1">
                                        <Clock size={14} />
                                        {blog.readingTime} min read
                                    </span>
                                </div>

                                {/* Blog Content */}
                                <div
                                    className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-semibold prose-p:text-gray-600 prose-a:text-blue-600 prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:p-4"
                                    dangerouslySetInnerHTML={{ __html: blog.content }}
                                />

                                {/* Feedback Section */}
                                <div className="mt-12 pt-8 border-t border-gray-100">
                                    <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Was this article helpful?
                                        </h3>
                                        <p className="text-gray-600 mb-6">
                                            Your feedback helps us improve our content.
                                        </p>
                                        <div className="flex items-center justify-center gap-4">
                                            <button className="px-6 py-2.5 bg-white hover:bg-gray-50 text-gray-700 rounded-lg border border-gray-200 transition-colors font-medium">
                                                👍 Yes, very helpful
                                            </button>
                                            <button className="px-6 py-2.5 bg-white hover:bg-gray-50 text-gray-700 rounded-lg border border-gray-200 transition-colors font-medium">
                                                👎 Needs improvement
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Comments Section */}
                                <div className="mt-8 pt-8 border-t border-gray-100">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                                        <MessageCircle size={20} className="text-blue-600" />
                                        Comments ({blog.comments})
                                    </h3>
                                    <div className="space-y-6">
                                        <div className="flex gap-4">
                                            <div className="shrink-0">
                                                <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                                                    JD
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="bg-gray-50 rounded-2xl p-4">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="font-medium text-gray-900">John Doe</span>
                                                        <span className="text-xs text-gray-500">2 hours ago</span>
                                                    </div>
                                                    <p className="text-gray-700 text-sm">
                                                        Great article! The Kafka integration example really helped me understand the concept. Looking forward to more microservices content.
                                                    </p>
                                                </div>
                                                <button className="mt-2 text-xs text-gray-500 hover:text-blue-600 transition-colors">
                                                    Reply
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 pl-8">
                                            <div className="shrink-0">
                                                <div className="w-8 h-8 rounded-full bg-linear-to-br from-green-500 to-teal-500 flex items-center justify-center text-white text-sm font-semibold">
                                                    AS
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="bg-gray-50 rounded-2xl p-4">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="font-medium text-gray-900">Alex Smith</span>
                                                        <span className="text-xs text-gray-500">1 hour ago</span>
                                                        <span className="text-xs text-blue-600">@johndoe</span>
                                                    </div>
                                                    <p className="text-gray-700 text-sm">
                                                        Totally agree! The code examples are production-ready. Thanks for sharing!
                                                    </p>
                                                </div>
                                                <button className="mt-2 text-xs text-gray-500 hover:text-blue-600 transition-colors">
                                                    Reply
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 mt-6">
                                            <div className="shrink-0">
                                                <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold">
                                                    Y
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <textarea
                                                    placeholder="Add a comment..."
                                                    rows={3}
                                                    className="w-full border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                                />
                                                <div className="flex justify-end mt-2">
                                                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                                                        Post Comment
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar - Related & Newsletter */}
                        <div className="lg:col-span-3 order-3">
                            <div className="sticky top-24 space-y-6">
                                {/* Newsletter */}
                                <div className="bg-linear-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
                                    <h4 className="font-semibold text-lg mb-2">Never miss an article</h4>
                                    <p className="text-sm text-white/90 mb-4">
                                        Get the latest posts delivered straight to your inbox.
                                    </p>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 mb-3"
                                    />
                                    <button className="w-full px-4 py-2.5 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                                        Subscribe Now
                                    </button>
                                    <p className="text-xs text-white/70 mt-3">
                                        No spam. Unsubscribe anytime.
                                    </p>
                                </div>

                                {/* Related Posts */}
                                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                        <BookOpen size={18} className="text-blue-600" />
                                        Related Articles
                                    </h4>
                                    <div className="space-y-4">
                                        {relatedPosts.map((post) => (
                                            <Link
                                                key={post.id}
                                                href={`/blog/${post.slug}`}
                                                className="group block"
                                            >
                                                <div className="flex gap-3">
                                                    <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                                                        <Image
                                                            src={post.coverImage}
                                                            alt={post.title}
                                                            fill
                                                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                                                        />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h5 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                                                            {post.title}
                                                        </h5>
                                                        <div className="flex items-center gap-2">
                                                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getLevelColor(post.level)}`}>
                                                                {post.level}
                                                            </span>
                                                            <span className="text-xs text-gray-500">{post.readingTime} min</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                    <Link
                                        href="/blogs"
                                        className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium mt-4 group"
                                    >
                                        View all articles
                                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}