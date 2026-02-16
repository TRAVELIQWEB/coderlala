{/* CoderLala Minimal - Brand Dots (#4948ab) */ }
import React, { useState, useEffect, useRef } from 'react';

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
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
    const carouselRef = useRef<HTMLDivElement>(null);

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
            category: 'NESTJS',
            readTime: '8 min',
            title: 'NestJS Microservices with Kafka',
            subtitle: 'Event-driven architecture • Scalable systems',
            description: 'Build production-ready microservices using NestJS and Apache Kafka. Learn event-driven patterns, CQRS, and deployment strategies for enterprise applications.',
            author: 'CoderLala',
            date: 'Mar 10, 2026'
        },
        {
            id: 3,
            category: 'NESTJS',
            readTime: '8 min',
            title: 'NestJS Microservices with Kafka',
            subtitle: 'Event-driven architecture • Scalable systems',
            description: 'Build production-ready microservices using NestJS and Apache Kafka. Learn event-driven patterns, CQRS, and deployment strategies for enterprise applications.',
            author: 'CoderLala',
            date: 'Mar 10, 2026'
        }
    ];

    const totalSlides: number = Math.ceil(posts.length / 3);
    const itemsPerSlide: number = 3;

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex: number) =>
                    prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
                );
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, totalSlides]);

    const handleMouseEnter = (): void => setIsAutoPlaying(false);
    const handleMouseLeave = (): void => setIsAutoPlaying(true);

    const goToSlide = (index: number): void => {
        setCurrentIndex(index);
    };

    const nextSlide = (): void => {
        setCurrentIndex((prevIndex: number) =>
            prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = (): void => {
        setCurrentIndex((prevIndex: number) =>
            prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
        );
    };

    const getCurrentPosts = (): Post[] => {
        const startIdx = currentIndex * itemsPerSlide;
        return posts.slice(startIdx, startIdx + itemsPerSlide);
    };

    return (
        <div className="mt-10 pt-2">
            <div className="flex items-center gap-2 mb-8">
                <span className="ml-2 text-2xl font-bold">Related Posts</span>
            </div>

            <div
                className="relative overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                ref={carouselRef}
            >
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                        <div
                            key={slideIndex}
                            className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-5"
                        >
                            {posts.slice(slideIndex * itemsPerSlide, (slideIndex * itemsPerSlide) + itemsPerSlide).map((post: Post) => (
                                <a
                                    key={post.id}
                                    href="#"
                                    className="group block p-6 glass-card hover:scale-105 border border-gray-200 rounded-xl transition-all duration-300 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#4948ab]/80 rounded-bl-full" />

                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-[#4948ab] rounded-full group-hover:scale-150 transition-transform" />
                                            <div className="w-1.5 h-1.5 bg-[#e38138] rounded-full group-hover:scale-150 transition-transform delay-75" />
                                            <span className="text-xs font-medium text-[#4948ab] bg-[#4948ab]/10 px-2 py-1 rounded-md ml-1">
                                                {post.category}
                                            </span>
                                        </div>
                                        <span className="text-xs text-white! z-10">{post.readTime}</span>
                                    </div>

                                    <h4 className="text-base font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-[#4948ab]">
                                        {post.title}
                                    </h4>

                                    <p className="text-xs text-gray-600 mb-2 line-clamp-1">
                                        {post.subtitle}
                                    </p>

                                    <p className="text-xs text-gray-500 line-clamp-3 mb-4">
                                        {post.description}
                                    </p>

                                    <div className="flex items-center justify-between pt-2">
                                        <span className="text-[10px] text-gray-400">{post.author} • {post.date}</span>
                                        <span className="text-xs font-medium text-[#4948ab] group-hover:text-[#4948ab]/80 flex items-center gap-1">
                                            Read more
                                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 border border-gray-200 hover:border-[#4948ab] hover:bg-white transition-all duration-300 group shadow-md"
                    aria-label="Previous slide"
                >
                    <svg className="w-4 h-4 text-gray-600 group-hover:text-[#4948ab]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 border border-gray-200 hover:border-[#4948ab] hover:bg-white transition-all duration-300 group shadow-md"
                    aria-label="Next slide"
                >
                    <svg className="w-4 h-4 text-gray-600 group-hover:text-[#4948ab]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Progress Indicators */}
                <div className="flex justify-center gap-2 mt-6">
                    {Array.from({ length: totalSlides }).map((_, index: number) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'w-8 bg-[#4948ab]'
                                    : 'w-2 bg-gray-300 hover:bg-[#4948ab]/50'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RelatedPostsCarousel;