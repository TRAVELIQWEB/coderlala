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
                    style={{ overflow: "visible" }}
                >
                    {relatedBlogs.map((blog) => (
                        <SwiperSlide key={blog._id}  >
                            <Link
                                href={`/blog/${blog.slug}`}
                                style={{
                                    display: "block",
                                    padding: "20px",
                                    borderRadius: "16px",

                                    // 🌞 Light Mode
                                    background: document.documentElement.classList.contains("dark")
                                        ? "rgba(255,255,255,0.08)"
                                        : "rgba(255,255,255,0.6)",

                                    backdropFilter: "blur(20px)",
                                    WebkitBackdropFilter: "blur(20px)",

                                    border: document.documentElement.classList.contains("dark")
                                        ? "1px solid rgba(255,255,255,0.18)"
                                        : "1px solid rgba(0,0,0,0.08)",

                                    boxShadow: document.documentElement.classList.contains("dark")
                                        ? "0 10px 30px rgba(0,0,0,0.4)"
                                        : "0 10px 30px rgba(0,0,0,0.08)",

                                    transition: "all 0.3s ease",
                                    textDecoration: "none",
                                    color: "inherit",
                                    height: "100%",
                                    transform: "scale(1)"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "scale(1.04)";
                                    e.currentTarget.style.boxShadow =
                                        document.documentElement.classList.contains("dark")
                                            ? "0 20px 40px rgba(0,0,0,0.5)"
                                            : "0 20px 40px rgba(0,0,0,0.12)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "scale(1)";
                                    e.currentTarget.style.boxShadow =
                                        document.documentElement.classList.contains("dark")
                                            ? "0 10px 30px rgba(0,0,0,0.4)"
                                            : "0 10px 30px rgba(0,0,0,0.08)";
                                }}
                            >
                                {/* Top Meta Row */}
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginBottom: "14px",
                                        fontSize: "13px",
                                        opacity: 0.85
                                    }}
                                >
                                    <span
                                        style={{
                                            background: "rgba(59,130,246,0.15)",
                                            color: "#3b82f6",
                                            padding: "4px 10px",
                                            borderRadius: "999px",
                                            fontWeight: 500
                                        }}
                                    >
                                        {getCategory(blog)}
                                    </span>

                                    <span style={{ fontSize: "12px" }}>
                                        {getReadingTime(blog)}
                                    </span>
                                </div>

                                {/* Title */}
                                <h4
                                    style={{
                                        fontSize: "18px",
                                        fontWeight: 600,
                                        marginBottom: "8px",
                                        lineHeight: "1.4"
                                    }}
                                >
                                    {blog.title}
                                </h4>

                                {/* Subtitle */}
                                <p
                                    style={{
                                        fontSize: "14px",
                                        opacity: 0.8,
                                        marginBottom: "6px"
                                    }}
                                >
                                    {getSubtitle(blog)}
                                </p>

                                {/* Description */}
                                <p
                                    style={{
                                        fontSize: "13px",
                                        opacity: 0.7,
                                        marginBottom: "16px",
                                        lineHeight: "1.5"
                                    }}
                                >
                                    {getDescription(blog.description)}
                                </p>

                                {/* Bottom Row */}
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        fontSize: "12px",
                                        opacity: 0.75
                                    }}
                                >
                                    <span>
                                        {blog.author.name} • {formatDate(blog.createdAt)}
                                    </span>

                                    <span
                                        style={{
                                            color: "#3b82f6",
                                            fontWeight: 500
                                        }}
                                    >
                                        Read more →
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