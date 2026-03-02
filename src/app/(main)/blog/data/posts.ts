import { Post } from '@/types/blog';

export const dummyPosts: Post[] = [
  {
    _id: '1',
    title: 'NestJS Complete Guide',
    desc: 'Complete beginner guide for NestJS',
    description: 'Complete beginner guide for NestJS',
    content: 'This is full blog content about NestJS...',
    slug: 'nestjs-complete-guide',
    primaryTech: 'nestjs',
    techStacks: ['nestjs', 'mongodb'],
    tags: ['api', 'security'],
    level: 'beginner',
    readingTime: 5,
    author: {
      name: 'John Doe',
      role: 'backend-engineer',
      _id: 'a1'
    },
    language: 'en',
    seo: {
      title: 'NestJS Guide SEO Title',
      description: 'Best NestJS tutorial for beginners',
      canonicalUrl: 'https://example.com/nestjs-guide',
    },
    status: 'active',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  {
    _id: '2',
    title: 'NextJS SEO Optimization Guide',
    desc: 'Improve SEO performance in NextJS apps',
    description: 'Improve SEO performance in NextJS apps',
    content: 'Complete guide to SEO optimization in NextJS applications...',
    slug: 'nextjs-seo-optimization-guide',
    primaryTech: 'nextjs',
    techStacks: ['nextjs', 'nginx', 'aws'],
    tags: ['seo', 'performance'],
    level: 'intermediate',
    readingTime: 7,
    author: {
      name: 'Amit Sharma',
      role: 'frontend-engineer',
      _id: 'a2'
    },
    language: 'en',
    seo: {
      title: 'NextJS SEO Guide',
      description: 'Learn SEO best practices in NextJS',
      canonicalUrl: 'https://example.com/nextjs-seo-guide',
    },
    status: 'active',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  {
    _id: '3',
    title: 'Building Microservices with NodeJS',
    desc: 'Advanced microservices architecture using NodeJS',
    description: 'Advanced microservices architecture using NodeJS',
    content: 'Step by step guide to building scalable microservices...',
    slug: 'nodejs-microservices-guide',
    primaryTech: 'nodejs',
    techStacks: ['nodejs', 'docker', 'kubernetes', 'mongodb'],
    tags: ['microservices', 'scalability'],
    level: 'advanced',
    readingTime: 10,
    author: {
      name: 'Rahul Verma',
      role: 'software-architect',
      _id: 'a3'
    },
    language: 'en',
    seo: {
      title: 'NodeJS Microservices Architecture',
      description: 'Learn scalable microservices using NodeJS',
      canonicalUrl: 'https://example.com/nodejs-microservices',
    },
    status: 'active',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];