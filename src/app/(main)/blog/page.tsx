import { JSX } from "react";
import BlogContent from "./BlogContent";

export const metadata = {
    title: "CoderLala Blog | Insights on Web Dev, Mobile, SaaS & AI",
    description: "Explore cutting-edge articles and tutorials from CoderLala on web development, mobile app innovation, SaaS solutions, and AI. Stay ahead with expert insights and practical guides for digital transformation.",
    keywords: [
        "CoderLala blog",
        "web development blog",
        "mobile app development blog",
        "SaaS solutions blog",
        "AI insights",
        "tech tutorials",
        "software engineering articles",
        "digital transformation",
        "frontend development",
        "backend development",
        "cloud computing",
        "DevOps",
        "UI/UX design"
    ],
    openGraph: {
        title: "CoderLala Blog | Insights on Web Dev, Mobile, SaaS & AI",
        description: "Explore cutting-edge articles and tutorials from CoderLala on web development, mobile app innovation, SaaS solutions, and AI. Stay ahead with expert insights and practical guides for digital transformation.",
        url: "https://coderlala.com/blog",
        siteName: "CoderLala Technologies",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/images/feature-images/og-images/og-blog.jpg", // Placeholder image path
                width: 1200,
                height: 630,
                alt: "CoderLala Blog - Web Development, Mobile, SaaS & AI Insights",
                type: "image/jpeg",
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "CoderLala Blog | Insights on Web Dev, Mobile, SaaS & AI",
        description: "Explore cutting-edge articles and tutorials from CoderLala on web development, mobile app innovation, SaaS solutions, and AI. Stay ahead with expert insights and practical guides for digital transformation.",
        images: ["/images/feature-images/og-images/og-blog.jpg"], // Placeholder image path
        creator: "@coderlala",
        site: "@coderlala",
    },
    alternates: {
        canonical: "https://coderlala.com/blog",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function BlogPage(): JSX.Element {
    return (
        <div className="max-w-7xl mx-auto px-4 py-20">
            <BlogContent />
        </div>
    );
}
