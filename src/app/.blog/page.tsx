import Link from "next/link";
import { getAllPosts } from "../lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold gradient-text text-center">
        Blog
      </h1>

      <p className="text-center opacity-80 mt-4 mb-12">
        Articles, insights, engineering updates, and development tutorials.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {posts?.map((post:any, index) => (
          <Link
            href={`/blog/${post.slug}`}
            key={index}
            className="glass-card p-6 rounded-2xl hover:scale-[1.03] transition-transform"
          >
            <h2 className="text-2xl font-semibold">{post?.title}</h2>
            <p className="text-sm opacity-70 mt-2">{post?.description}</p>
            <p className="mt-4 text-xs opacity-60">{post?.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
