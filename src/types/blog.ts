// ============= ENUMS - EXACT VALUES AS PER BACKEND =============

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

export enum BlogStatus {
  DRAFT = 'draft',
  ACTIVE = 'active',
  ARCHIVED = 'archived',
}

// ============= CREATE BLOG DTO - EXACT MATCH WITH BACKEND =============
export interface CreateBlogDto {
  title: string;
  content: string;        // Blog body/content
  slug: string;
  primaryTech: BlogPrimaryTech;
  techStacks: BlogTechStack[];
  tags: BlogTag[];
  level: BlogLevel;
  readingTime: number;
  author: {
    name: string;
    role: BlogAuthorRole;
  };
  language: BlogLanguage;
  seo: {
    title: string;
    description: string;  // SEO meta description
    canonicalUrl: string; // Now required
  };
  description: string;    // Blog summary/description
  status: BlogStatus;
}

export interface ApiResponse {
  status: string;
  data: any;
}

// ============= MODAL POST TYPE - USES 'desc' FOR MODAL COMPATIBILITY =============
export interface BasePost {
  _id?: string;
  title: string;
  desc: string;          // Maps to blog description (summary)
  content: string;       // Blog body/content
  slug: string;
  primaryTech: BlogPrimaryTech | string;
  techStacks: (BlogTechStack | string)[];
  tags: (BlogTag | string)[];
  level: BlogLevel | string;
  readingTime: number;
  author: {
    name: string;
    role: BlogAuthorRole | string;
    _id?: string;
  };
  language: BlogLanguage | string;
  seo: {
    title: string;
    description: string; // SEO description
    canonicalUrl: string;
  };
  status: BlogStatus | string;
}

// ============= API RESPONSE POST TYPE - USES 'description' =============
export interface Post {
  _id: string;
  title: string;
  description: string;   // API returns 'description' (blog summary)
  content: string;       // Blog body/content
  slug: string;
  primaryTech: BlogPrimaryTech | string;
  techStacks: (BlogTechStack | string)[];
  tags: (BlogTag | string)[];
  level: BlogLevel | string;
  readingTime: number;
  author: {
    name: string;
    role: BlogAuthorRole | string;
    _id?: string;
  };
  language: BlogLanguage | string;
  seo: {
    title: string;
    description: string; // SEO description
    canonicalUrl: string;
  };
  status: BlogStatus | string;
  createdAt: string;
  updatedAt: string;
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

// ============= DEFAULT FORM VALUES =============
export const defaultFormData: CreateBlogDto = {
  title: '',
  content: '',
  slug: '',
  primaryTech: BlogPrimaryTech.NESTJS,
  techStacks: [],
  tags: [],
  level: BlogLevel.BEGINNER,
  readingTime: 5,
  author: {
    name: '',
    role: BlogAuthorRole.BACKEND,
  },
  language: BlogLanguage.EN,
  seo: {
    title: '',
    description: '',
    canonicalUrl: '',
  },
  description: '',
  status: BlogStatus.DRAFT,
};