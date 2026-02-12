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
import BlogDetail from './BlogDetail';
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
    <div className="max-w-7xl mx-auto px-4 py-20">
      <BlogDetail />
    </div>
  );
}