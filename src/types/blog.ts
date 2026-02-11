export enum BlogStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
}

export enum BlogPrimaryTech {
  NESTJS = 'nestjs',
  NEXTJS = 'nextjs',
  NODEJS = 'nodejs',
  REACT = 'react',
  JAVASCRIPT = 'javascript',
  DEVOPS = 'devops',
  SYSTEM_DESIGN = 'system-design',
  DATABASE = 'database',
}

export enum BlogTechStack {
  NESTJS = 'nestjs',
  NEXTJS = 'nextjs',
  NODEJS = 'nodejs',
  EXPRESS = 'express',
  REACT = 'react',
  REDIS = 'redis',
  MONGODB = 'mongodb',
  POSTGRES = 'postgres',
  MYSQL = 'mysql',
  BULLMQ = 'bullmq',
  DOCKER = 'docker',
  KUBERNETES = 'kubernetes',
  NGINX = 'nginx',
  AWS = 'aws',
  GCP = 'gcp',
}

export enum BlogTag {
  AUTH = 'auth',
  PERFORMANCE = 'performance',
  SECURITY = 'security',
  SCALABILITY = 'scalability',
  MICROSERVICES = 'microservices',
  CACHING = 'caching',
  QUEUE = 'queue',
  DATABASE = 'database',
  API = 'api',
  SEO = 'seo',
}

export enum BlogLevel {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
}

export enum BlogAuthorRole {
  BACKEND = 'backend-engineer',
  FRONTEND = 'frontend-engineer',
  FULLSTACK = 'fullstack-engineer',
  DEVOPS = 'devops-engineer',
  ARCHITECT = 'software-architect',
}

export enum BlogLanguage {
  EN = 'en',
  HI = 'hi',
}


export interface BlogFormData {
  title: string;
  slug: string;
  shortDescription: string;
  content: string;

  primaryTech: BlogPrimaryTech;
  techStack: BlogTechStack[];
  tags: BlogTag[];

  level: BlogLevel;
  readingTime: number;

  authorName: string;
  authorRole: BlogAuthorRole;

  language: BlogLanguage;
  status: BlogStatus;

  seoTitle: string;
  seoDescription: string;
  canonicalUrl?: string;
}
