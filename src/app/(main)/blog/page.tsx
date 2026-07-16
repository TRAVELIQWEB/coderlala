import { JSX } from "react";
import BlogContent from "./BlogContent";

export default function BlogPage(): JSX.Element {
    return (
        <div className="max-w-7xl mx-auto px-4 py-20">
            <BlogContent />
        </div>
    );
}
