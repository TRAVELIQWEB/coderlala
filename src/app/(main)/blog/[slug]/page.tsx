
import BlogDetail from './BlogDetail';

export default async function BlogDetails({ params }: { params: { slug: string } }) {
  


  const {slug}= await params;


  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <BlogDetail slug={slug}/>
    </div>
  );
}
