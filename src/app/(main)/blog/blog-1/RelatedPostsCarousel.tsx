{/* CoderLala Minimal - Brand Dots (#4948ab) */ }

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import CSS Module
import styles from './RelatedPostsCarousel.module.css';

interface Post {
    id: number;
    category: string;
    readTime: string;
    title: string;
    subtitle: string;
    description: string;
    author: string;
    date: string;
}

const RelatedPostsCarousel: React.FC = () => {
    const posts: Post[] = [
        {
            id: 1,
            category: 'NESTJS',
            readTime: '8 min',
            title: 'NestJS Microservices with Kafka',
            subtitle: 'Event-driven architecture • Scalable systems',
            description: 'Build production-ready microservices using NestJS and Apache Kafka. Learn event-driven patterns, CQRS, and deployment strategies for enterprise applications.',
            author: 'CoderLala',
            date: 'Mar 10, 2026'
        },
        {
            id: 2,
            category: 'REACT',
            readTime: '6 min',
            title: 'React 19 Server Components Deep Dive',
            subtitle: 'RSC • Streaming • Suspense patterns',
            description: 'Master React Server Components in React 19. Learn about streaming SSR, Suspense boundaries, and how to build hybrid applications with client and server components.',
            author: 'CoderLala',
            date: 'Mar 8, 2026'
        },
        {
            id: 3,
            category: 'NEXTJS',
            readTime: '10 min',
            title: 'Next.js 15 App Router Mastery',
            subtitle: 'Parallel routes • Intercepting • Caching',
            description: 'Explore advanced Next.js 15 patterns including parallel routes, route interception, and granular caching strategies for optimal performance.',
            author: 'CoderLala',
            date: 'Mar 5, 2026'
        },
        {
            id: 4,
            category: 'TYPESCRIPT',
            readTime: '7 min',
            title: 'TypeScript 5.5 Advanced Types',
            subtitle: 'Inferred type predicates • Control flow',
            description: 'Leverage TypeScript 5.5 new features including inferred type predicates, const type parameters, and improved control flow analysis.',
            author: 'CoderLala',
            date: 'Mar 3, 2026'
        },
        {
            id: 5,
            category: 'GRAPHQL',
            readTime: '9 min',
            title: 'GraphQL Federation with Apollo',
            subtitle: 'Supergraph • Subgraphs • Gateway',
            description: 'Implement GraphQL federation to combine multiple services into a single endpoint. Learn Apollo Federation 2 and supergraph composition.',
            author: 'CoderLala',
            date: 'Feb 28, 2026'
        },
        {
            id: 6,
            category: 'DOCKER',
            readTime: '5 min',
            title: 'Docker Multi-Stage Builds 2026',
            subtitle: 'Image optimization • Security • CI/CD',
            description: 'Optimize your Docker images with multi-stage builds, security scanning, and best practices for production deployments in CI/CD pipelines.',
            author: 'CoderLala',
            date: 'Feb 25, 2026'
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.headerTitle}>Related Posts</span>
            </div>

            <div className={styles.carouselWrapper}>
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 3 }
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    navigation={{
                        prevEl: '.custom-prev',
                        nextEl: '.custom-next',
                    }}
                    loop={true}
                    speed={800}
                    className={styles.swiper}
                >
                    {posts.map((post) => (
                        <SwiperSlide key={post.id} className={styles.swiperSlide}>
                            <a href="#" className={styles.card}>
                                <div className={styles.cornerDecoration} />

                                <div className={styles.cardHeader}>
                                    <div className={styles.cardMeta}>
                                        <div className={styles.brandDotPurple} />
                                        <div className={`${styles.brandDotOrange} ${styles.delay75}`} />
                                        <span className={styles.categoryBadge}>
                                            {post.category}
                                        </span>
                                    </div>
                                    <span className={styles.readTime}>{post.readTime}</span>
                                </div>

                                <h4 className={styles.cardTitle}>
                                    {post.title}
                                </h4>

                                <p className={styles.cardSubtitle}>
                                    {post.subtitle}
                                </p>

                                <p className={styles.cardDescription}>
                                    {post.description}
                                </p>

                                <div className={styles.cardFooter}>
                                    <span className={styles.authorDate}>{post.author} • {post.date}</span>
                                    <span className={styles.readMore}>
                                        Read more
                                        <span className={styles.readMoreArrow}>→</span>
                                    </span>
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <button
                    className={`custom-prev ${styles.navPrev}`}
                    aria-label="Previous slide"
                >
                    <svg className={styles.navIcon} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    className={`custom-next ${styles.navNext}`}
                    aria-label="Next slide"
                >
                    <svg className={styles.navIcon} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default RelatedPostsCarousel;