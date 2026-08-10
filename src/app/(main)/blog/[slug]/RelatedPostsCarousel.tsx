'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import CSS Module
import styles from './RelatedPostsCarousel.module.css';

// Update the interface to match your API data structure
interface Author {
    name: string;
    role: string;
    _id: string;
}

interface RelatedBlog {
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
    description: string;
    status: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

interface RelatedPostsCarouselProps {
    relatedBlogs: RelatedBlog[];
}

const RelatedPostsCarousel: React.FC<RelatedPostsCarouselProps> = ({ relatedBlogs }) => {
    // Function to format date
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    // Function to get category from primaryTech or first tag
    const getCategory = (blog: RelatedBlog) => {
        return blog.primaryTech?.toUpperCase() || blog.tags[0]?.toUpperCase() || 'TECH';
    };

    // Function to get reading time
    const getReadingTime = (blog: RelatedBlog) => {
        return `${blog.readingTime} min`;
    };

    // Function to truncate description
    const getDescription = (description: string, maxLength: number = 120) => {
        if (description.length <= maxLength) return description;
        return description.substring(0, maxLength) + '...';
    };

    // Function to get subtitle from techStacks
    const getSubtitle = (blog: RelatedBlog) => {
        const stacks = blog.techStacks.slice(0, 2).map(s => s.charAt(0).toUpperCase() + s.slice(1));
        return stacks.join(' • ') || 'Technology';
    };

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
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
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
                    loop={relatedBlogs.length > 3}
                    speed={800}
                    className={styles.swiper}
                >
                    {relatedBlogs.map((blog) => (
                        <SwiperSlide key={blog._id} className={styles.swiperSlide}>
                            <Link href={`/blog/${blog.slug}`} className={styles.card}>
                                <div className={styles.cornerDecoration} />

                                <div className={styles.cardHeader}>
                                    <div className={styles.cardMeta}>
                                        <div className={styles.brandDotPurple} />
                                        <div className={`${styles.brandDotOrange} ${styles.delay75}`} />
                                        <span className={styles.categoryBadge}>
                                            {getCategory(blog)}
                                        </span>
                                    </div>
                                    <span className={styles.readTime}>{getReadingTime(blog)}</span>
                                </div>

                                <h4 className={styles.cardTitle}>
                                    {blog.title}
                                </h4>

                                <p className={styles.cardSubtitle}>
                                    {getSubtitle(blog)}
                                </p>

                                <p className={styles.cardDescription}>
                                    {getDescription(blog.description)}
                                </p>

                                <div className={styles.cardFooter}>
                                    <span className={styles.authorDate}>
                                        {blog.author.name} • {formatDate(blog.createdAt)}
                                    </span>
                                    <span className={styles.readMore}>
                                        Read more
                                        <span className={styles.readMoreArrow}>→</span>
                                    </span>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons - Only show if more than 3 slides on desktop */}
                {relatedBlogs.length > 3 && (
                    <>
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
                    </>
                )}
            </div>

            {/* Show message if no related blogs */}
            {relatedBlogs.length === 0 && (
                <div className={styles.noPosts}>
                    <p>No related posts found</p>
                </div>
            )}
        </div>
    );
};

export default RelatedPostsCarousel;