import { getPostBySlug, getAllPosts } from "../../lib/blog";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { data, htmlContent } = await getPostBySlug(params.slug);

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold gradient-text">{data.title}</h1>
      <p className="opacity-60 mt-2 text-sm">{data.date}</p>

      <article
        className="prose prose-invert mt-8 opacity-90"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
