'use client';

import { HeroTitle2 } from '@/app/components/HeroTitle';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, Tag, ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './BlogDetail.module.css'; // Import the CSS module
import RelatedPostsCarousel from './RelatedPostsCarousel';

export default function BlogDetail() {
    // const [showFullContent, setShowFullContent] = useState(false);
    const [contentDisplay, setContentDisplay] = useState('few'); // 'few', 'medium', 'full'

    // Function to get truncated content based on display mode
    const getTruncatedContent = () => {
        if (!blog.content) return '';

        if (contentDisplay === 'few') {
            // Show first 300 characters
            const textContent = blog.content.replace(/<[^>]*>/g, '');
            if (textContent.length <= 300) return blog.content;

            // Find a good breaking point
            const preview = blog.content.substring(0, 400);
            const lastSpace = preview.lastIndexOf(' ');
            return preview.substring(0, lastSpace) + '...';
        }

        if (contentDisplay === 'medium') {
            // Show more content (first 1000 characters)
            const textContent = blog.content.replace(/<[^>]*>/g, '');
            if (textContent.length <= 1000) return blog.content;

            const preview = blog.content.substring(0, 1200);
            const lastSpace = preview.lastIndexOf(' ');
            return preview.substring(0, lastSpace) + '...';
        }

        // Full content
        return blog.content;
    };
    const blog = {
        title: 'Building Scalable Microservices with NestJS and Kafka',
        coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
        description: 'Learn how to build production-ready microservices using NestJS and Apache Kafka for event-driven architecture. This comprehensive guide covers everything from setup to deployment.',
        content: `
      <h2>Introduction to Microservices</h2>
      <p>Microservices architecture has become the go-to choice for building complex, scalable applications. Unlike monolithic architectures where all components are tightly coupled, microservices allow you to develop, deploy, and scale each service independently.</p>
      
      <p>In this tutorial, we'll build a complete order processing system using NestJS and Kafka. You'll learn how to set up event-driven communication between services, handle failures gracefully, and deploy your microservices to production.</p>
      
      <h2>Prerequisites</h2>
      <ul>
        <li>Node.js 18+ installed on your machine</li>
        <li>Basic knowledge of TypeScript</li>
        <li>Docker and Docker Compose for running Kafka</li>
        <li>Familiarity with REST APIs</li>
      </ul>
      
      <h2>Setting Up the Project</h2>
      <p>First, let's create a new NestJS project:</p>
      
      <pre><code>npm i -g @nestjs/cli
nest new order-service
cd order-service</code></pre>

      <p>Next, install the Kafka client:</p>
      
      <pre><code>npm install @nestjs/microservices kafkajs</code></pre>

      <h2>Configuring Kafka Client</h2>
      <p>Create a Kafka module to handle the client connection:</p>

      <pre><code>// kafka.module.ts
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'order-consumer',
          },
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class KafkaModule {}</code></pre>

      <h2>Creating the Order Service</h2>
      <p>Now, let's create a service that will emit events to Kafka:</p>

      <pre><code>// order.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class OrderService {
  constructor(
    @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka,
  ) {}

  async createOrder(orderData: any) {
    this.kafkaClient.emit('order.created', JSON.stringify({
      id: Date.now(),
      ...orderData,
      createdAt: new Date(),
    }));

    return {
      success: true,
      message: 'Order created successfully',
      orderId: Date.now(),
    };
  }

  async getOrders() {
    return this.kafkaClient.send('order.get_all', {});
  }
}</code></pre>

      <h2>Testing the Implementation</h2>
      <p>Start Kafka using Docker Compose, then run your NestJS application. You should see the events being emitted and consumed successfully.</p>
      
      <h2>Conclusion</h2>
      <p>You've successfully built a microservice with NestJS and Kafka! This architecture allows you to scale individual services independently and handle high throughput scenarios with ease.</p>
      
      <p>In the next part of this series, we'll cover deployment strategies, monitoring, and implementing retry mechanisms for failed events.</p>
    `,
    };

    return (
        <div className="">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
            >
                {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-linear-to-r from-blue-500/10 to-orange-500/10 backdrop-blur-sm border border-white/20 mb-4 sm:mb-6">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300" />
                    <span className="text-xs sm:text-sm font-medium">🚀 CoderLala Blog</span>
                </div> */}

                {/* <HeroTitle2 title1="Latest " title2="Tech Blogs" /> */}

                {/* <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto px-4 sm:px-0">
                    Discover our latest blogs covering web development, mobile app innovation, and SaaS solutions shaping digital transformation.
                </p> */}
            </motion.div>

            <div className="container mx-auto px-4 pb-8 max-w-6xl">
                {/* Hero Section - Image Left, Title Right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 items-center">
                    {/* Left: Feature Image */}
                    <div className="relative h-[280px] md:h-[350px] w-full rounded-2xl overflow-hidden shadow-xl group">
                        {/* Liquid metal effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md" />

                        {/* Chrome border */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600 p-[3px]">
                            <div className="relative h-full w-full rounded-2xl overflow-hidden">
                                <Image
                                    src={blog.coverImage}
                                    alt={blog.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    priority
                                />

                                {/* Reflective overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/30 mix-blend-overlay" />

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

                            {/* <div className="flex items-center gap-2 text-sm text-gray-500">
                                <div className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-full">
                                    <div className="w-5 h-5 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                        <span className="text-[10px] text-white font-medium">AC</span>
                                    </div>
                                    <span className="font-medium text-gray-700">Alex Chen</span>
                                </div>
                                <span className="text-gray-300">•</span>
                                <span className="flex items-center gap-1">
                                    <Calendar size={14} />
                                    Feb 10, 2026
                                </span>
                                <span className="text-gray-300">•</span>
                                <span className="flex items-center gap-1">
                                    <Clock size={14} />
                                    12 min
                                </span>
                            </div> */}
                        </div>

                        <div className="border-l-4 border-[#e38138] pl-4 bg-blue-50/30 py-2 rounded-r-lg">
                            <p className="text-base text-sm italic">
                                {blog.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {['NestJS', 'Kafka', 'Microservices'].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-1.5 bg-gray-500/20 hover:bg-gray-200 text-opacity-80 rounded-full text-xs font-medium transition-colors cursor-pointer"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Variant 10: Elegant Premium */}
                <div className="glass-card rounded-4xl! shadow-2xl relative overflow-hidden">
                    {/* Gold accent */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-[#e38138] rounded-b-full" />

                    {/* Corner decorations */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#e38138] rounded-tl-4xl" />
                    <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#e38138] rounded-tr-4xl" />
                    <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#e38138] rounded-bl-4xl" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#e38138] rounded-br-4xl" />

                    <div className="relative p-10">
                        <div className="relative">
                            {/* Content Display */}
                            <div className="prose prose-lg max-w-none prose-h2:text-2xl prose-h2:font-light prose-h2:tracking-wide prose-h2:text-gray-800 prose-h2:border-b prose-h2:border-amber-200 prose-h2:pb-3 prose-headings:text-gray-900 prose-headings:font-light prose-headings:tracking-wide prose-p:text-gray-600 prose-p:leading-8 prose-p:font-light prose-strong:text-amber-800 prose-strong:font-medium prose-code:text-amber-700 prose-code:bg-amber-50/80 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:border prose-code:border-amber-200/50 prose-pre:bg-gray-900/95 prose-pre:text-amber-50 prose-pre:rounded-xl prose-pre:border prose-pre:border-amber-800/30 prose-pre:shadow-xl prose-ul:list-disc prose-ol:list-decimal prose-li:text-gray-600 prose-li:marker:text-amber-500 prose-blockquote:border-l-2 prose-blockquote:border-amber-400 prose-blockquote:text-gray-600 prose-blockquote:bg-amber-50/30 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg prose-blockquote:font-light prose-blockquote:italic">
                                <div dangerouslySetInnerHTML={{ __html: getTruncatedContent() }} />
                            </div>

                            {/* Content Controls - Using CSS Module classes */}
                            <div className={styles.contentControls}>

                                {contentDisplay !== 'medium' && contentDisplay === 'few' && (
                                    <button
                                        onClick={() => setContentDisplay('medium')}
                                        className={`${styles.controlButton} ${styles.amberButton}`}
                                    >
                                        <span className={styles.amberBtnext}>Show More</span>
                                        <svg className={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                )}

                                {contentDisplay !== 'full' && contentDisplay === 'medium' && (
                                    <button
                                        onClick={() => setContentDisplay('full')}
                                        className={`${styles.controlButton} ${styles.amberButton}`}
                                    >
                                        <span className={styles.amberBtnext}>Continue Reading</span>
                                        <svg className={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                )}

                                {contentDisplay === 'full' && (
                                    <button
                                        onClick={() => setContentDisplay('few')}
                                        className={`${styles.controlButton} ${styles.grayButton}`}
                                    >
                                        <span className={styles.grayBtnText}>Show Less</span>
                                        <svg className={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                        </svg>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/* CoderLala Minimal - Brand Dots (#4948ab) */}
                <div className="mt-10 pt-2">
                    <div className="flex items-center gap-2 mb-8">
                        <span className="ml-2 text-2xl font-bold">Related Posts</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {[1, 2, 3].map((index) => (
                            <a
                                key={index}
                                href="#"
                                className="group block p-6 glass-card hover:scale-105 border border-gray-200 rounded-xl transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-20 h-20 bg-[#4948ab]/80 rounded-bl-full" />

                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-[#4948ab] rounded-full group-hover:scale-150 transition-transform" />
                                        <div className="w-1.5 h-1.5 bg-[#e38138] rounded-full group-hover:scale-150 transition-transform delay-75" />
                                        <span className="text-xs font-medium text-[#4948ab] bg-[#4948ab]/10 px-2 py-1 rounded-md ml-1">
                                            NESTJS
                                        </span>
                                    </div>
                                    <span className="text-xs text-white! z-10">8 min</span>
                                </div>

                                <h4 className="text-base font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-[#4948ab]">
                                    NestJS Microservices with Kafka
                                </h4>

                                <p className="text-xs text-gray-600 mb-2 line-clamp-1">
                                    Event-driven architecture • Scalable systems
                                </p>

                                <p className="text-xs text-gray-500 line-clamp-3 mb-4">
                                    Build production-ready microservices using NestJS and Apache Kafka. Learn event-driven patterns, CQRS, and deployment strategies for enterprise applications.
                                </p>

                                <div className="flex items-center justify-between pt-2">
                                    <span className="text-[10px] text-gray-400">CoderLala • Mar 10, 2026</span>
                                    <span className="text-xs font-medium text-[#4948ab] group-hover:text-[#4948ab]/80 flex items-center gap-1">
                                        Read more
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>

                </div>

                {/* <RelatedPostsCarousel /> */}

            </div>
        </div>
    );
}