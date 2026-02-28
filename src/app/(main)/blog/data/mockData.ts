
// import { Post, BlogPrimaryTech, BlogTechStack, BlogTag, BlogLevel, BlogAuthorRole, BlogLanguage, BlogStatus } from './types/blog';

import { BlogAuthorRole, BlogLanguage, BlogLevel, BlogPrimaryTech, BlogStatus, BlogTag, BlogTechStack, Post } from "@/types/blog";

export const MOCK_POSTS: Post[] = [
  {
    _id: '1',
    title: 'NestJS Complete Guide',
    description: 'Complete beginner guide for NestJS',
    content: 'This is full blog content about NestJS...',
    slug: 'nestjs-complete-guide',
    primaryTech: BlogPrimaryTech.NESTJS,
    techStacks: [BlogTechStack.NESTJS, BlogTechStack.POSTGRES, BlogTechStack.REDIS],
    tags: [BlogTag.API, BlogTag.SECURITY],
    level: BlogLevel.BEGINNER,
    readingTime: 10,
    author: {
      name: 'John Doe',
      role: BlogAuthorRole.BACKEND,
    },
    language: BlogLanguage.EN,
    seo: {
      title: 'NestJS Guide',
      description: 'Learn NestJS from scratch',
      canonicalUrl: 'https://coderlala.com/nestjs-guide'
    },
    status: BlogStatus.ACTIVE,
    createdAt: '2026-02-11T10:00:00Z',
    updatedAt: '2026-02-11T10:00:00Z'
  },
  {
    _id: '2',
    title: 'NextJS SEO Optimization Guide',
    description: 'Improve SEO performance in NextJS',
    content: 'Complete guide to SEO optimization in NextJS applications...',
    slug: 'nextjs-seo-optimization',
    primaryTech: BlogPrimaryTech.NEXTJS,
    techStacks: [BlogTechStack.NEXTJS, BlogTechStack.AWS],
    tags: [BlogTag.SEO, BlogTag.PERFORMANCE],
    level: BlogLevel.INTERMEDIATE,
    readingTime: 8,
    author: {
      name: 'Jane Smith',
      role: BlogAuthorRole.FRONTEND,
    },
    language: BlogLanguage.EN,
    seo: {
      title: 'NextJS SEO Guide',
      description: 'SEO tips for NextJS',
      canonicalUrl: 'https://coderlala.com/nextjs-seo'
    },
    status: BlogStatus.ACTIVE,
    createdAt: '2026-02-11T11:00:00Z',
    updatedAt: '2026-02-11T11:00:00Z'
  },
  {
    _id: '3',
    title: 'Building Microservices with NodeJS',
    description: 'Advanced microservices architecture using NodeJS',
    content: 'Step by step guide to building scalable microservices...',
    slug: 'nodejs-microservices',
    primaryTech: BlogPrimaryTech.NODEJS,
    techStacks: [BlogTechStack.NODEJS, BlogTechStack.BULLMQ, BlogTechStack.DOCKER, BlogTechStack.KUBERNETES],
    tags: [BlogTag.MICROSERVICES, BlogTag.QUEUE, BlogTag.SCALABILITY],
    level: BlogLevel.ADVANCED,
    readingTime: 15,
    author: {
      name: 'Mike Ross',
      role: BlogAuthorRole.ARCHITECT,
    },
    language: BlogLanguage.EN,
    seo: {
      title: 'NodeJS Microservices',
      description: 'Scalable nodejs architecture',
      canonicalUrl: 'https://coderlala.com/nodejs-microservices'
    },
    status: BlogStatus.ACTIVE,
    createdAt: '2026-02-11T12:00:00Z',
    updatedAt: '2026-02-11T12:00:00Z'
  },
  {
    _id: '4',
    title: 'React Performance Tips',
    description: 'Optimize your React applications',
    content: 'Deep dive into React performance profiling and optimization...',
    slug: 'react-performance-tips',
    primaryTech: BlogPrimaryTech.REACT,
    techStacks: [BlogTechStack.REACT],
    tags: [BlogTag.PERFORMANCE, BlogTag.CACHING],
    level: BlogLevel.INTERMEDIATE,
    readingTime: 12,
    author: {
      name: 'Sarah Lee',
      role: BlogAuthorRole.FRONTEND,
    },
    language: BlogLanguage.EN,
    seo: {
      title: 'React Performance',
      description: 'Faster react apps',
      canonicalUrl: 'https://coderlala.com/react-performance'
    },
    status: BlogStatus.ACTIVE,
    createdAt: '2025-12-01T09:00:00Z',
    updatedAt: '2025-12-01T09:00:00Z'
  }
];
