// import { getPostBySlug, getAllPosts } from "../../lib/blog";

// export async function generateStaticParams() {
//   const posts = getAllPosts();
//   return posts.map((post) => ({ slug: post.slug }));
// }

export default async function BlogPost({ params }: { params: { slug: string } }) {
  // const { data, htmlContent } = await getPostBySlug(params.slug);

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
    
    </div>
  );
}
