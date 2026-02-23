export interface Post {
  _id: {
    $oid: string;
  };

  title: string;
  description: string;
  content: string;
  slug: string;

  primaryTech: string;
  techStacks: string[];
  tags: string[];

  level: 'beginner' | 'intermediate' | 'advanced';
  readingTime: number;

  author: {
    name: string;
    role: string;
    _id: {
      $oid: string;
    };
  };

  language: string;

  seo: {
    title: string;
    description: string;
    canonicalUrl: string;
    _id: {
      $oid: string;
    };
  };

  status: 'active' | 'inactive';
  userId: string;

  createdAt: {
    $date: string;
  };

  updatedAt: {
    $date: string;
  };

  __v?: number;
}


export const posts: Post[] = [
  {
    "_id": {
      "$oid": "698c4c53275b14cabb40f450"
    },
    "title": "NestJS Complete Guide",
    "content": "This is full blog content about NestJS...",
    "slug": "nestjs-complete-guide",
    "primaryTech": "nestjs",
    "techStacks": [
      "nestjs",
      "mongodb"
    ],
    "tags": [
      "api",
      "security"
    ],
    "level": "beginner",
    "readingTime": 5,
    "author": {
      "name": "John Doe",
      "role": "backend-engineer",
      "_id": {
        "$oid": "698c4c53275b14cabb40f451"
      }
    },
    "language": "en",
    "seo": {
      "title": "NestJS Guide SEO Title",
      "description": "Best NestJS tutorial for beginners",
      "canonicalUrl": "https://example.com/nestjs-guide",
      "_id": {
        "$oid": "698c4c53275b14cabb40f452"
      }
    },
    "status": "active",
    "userId": "Admin",
    "createdAt": {
      "$date": "2026-02-11T09:30:59.469Z"
    },
    "updatedAt": {
      "$date": "2026-02-11T09:30:59.469Z"
    },
    "__v": 0,
    "description": "Complete beginner guide for NestJS"
  },
  {
    "_id": {
      "$oid": "698c4c8c275b14cabb40f454"
    },
    "title": "NextJS SEO Optimization Guide",
    "content": "Complete guide to SEO optimization in NextJS applications...",
    "slug": "nextjs-seo-optimization-guide",
    "primaryTech": "nextjs",
    "techStacks": [
      "nextjs",
      "nginx",
      "aws"
    ],
    "tags": [
      "seo",
      "performance"
    ],
    "level": "intermediate",
    "readingTime": 7,
    "author": {
      "name": "Amit Sharma",
      "role": "frontend-engineer",
      "_id": {
        "$oid": "698c4c8c275b14cabb40f455"
      }
    },
    "language": "en",
    "seo": {
      "title": "NextJS SEO Guide",
      "description": "Learn SEO best practices in NextJS",
      "canonicalUrl": "https://example.com/nextjs-seo-guide",
      "_id": {
        "$oid": "698c4c8c275b14cabb40f456"
      }
    },
    "status": "active",
    "userId": "Admin",
    "createdAt": {
      "$date": "2026-02-11T09:31:56.999Z"
    },
    "updatedAt": {
      "$date": "2026-02-11T09:31:56.999Z"
    },
    "__v": 0,
    "description": "Improve SEO performance in NextJS apps"
  },
  {
    "_id": {
      "$oid": "698c4c95275b14cabb40f458"
    },
    "title": "Building Microservices with NodeJS",
    "content": "Step by step guide to building scalable microservices...",
    "slug": "nodejs-microservices-guide",
    "primaryTech": "nodejs",
    "techStacks": [
      "nodejs",
      "docker",
      "kubernetes",
      "mongodb"
    ],
    "tags": [
      "microservices",
      "scalability"
    ],
    "level": "advanced",
    "readingTime": 10,
    "author": {
      "name": "Rahul Verma",
      "role": "software-architect",
      "_id": {
        "$oid": "698c4c95275b14cabb40f459"
      }
    },
    "language": "en",
    "seo": {
      "title": "NodeJS Microservices Architecture",
      "description": "Learn scalable microservices using NodeJS",
      "canonicalUrl": "https://example.com/nodejs-microservices",
      "_id": {
        "$oid": "698c4c95275b14cabb40f45a"
      }
    },
    "status": "active",
    "userId": "Admin",
    "createdAt": {
      "$date": "2026-02-11T09:32:05.263Z"
    },
    "updatedAt": {
      "$date": "2026-02-11T09:32:05.263Z"
    },
    "__v": 0,
    "description": "Advanced microservices architecture using NodeJS"
  }
];
