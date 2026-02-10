'use client';

import { useEffect, useState } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import CreatePostModal from '@/app/components/admin/CreatePostModal';

type Post = {
  id: number;
  title: string;
  desc: string;
  content: string;
  status: 'active' | 'inactive';
};

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [open, setOpen] = useState(false);

  /* -------- Load default posts -------- */
  useEffect(() => {
    const stored = localStorage.getItem('blog-posts');

    if (stored) {
      setPosts(JSON.parse(stored));
    } else {
      const defaults: Post[] = [
        {
          id: 1,
          title: 'Next.js Admin Dashboard',
          desc: 'This post explains how to build a modern admin dashboard.',
          content: 'This post explains how to build a modern admin dashboard.',
          status: 'active',
        },
        {
          id: 2,
          title: 'Tailwind Tips',
          desc: 'Utility-first CSS tips',
          content: 'Best practices for writing clean Tailwind CSS.',
          status: 'inactive',
        },
      ];

      setPosts(defaults);
      localStorage.setItem('blog-posts', JSON.stringify(defaults));
    }
  }, []);

  const savePosts = (data: Post[]) => {
    setPosts(data);
    localStorage.setItem('blog-posts', JSON.stringify(data));
  };

  const createPost = (post: Post) => {
    savePosts([post, ...posts]);
  };

  const deletePost = (id: number) => {
    savePosts(posts.filter(p => p.id !== id));
  };

  return (
    <div className="space-y-2">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Blog</h1>
          <p className="text-gray-600 mt-1 mb-4">Manage blog posts</p>
        </div>
      </div>

      {/* Filter Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

        <div className="flex flex-col md:flex-row gap-3 w-full">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by title or description..."
            className="w-full md:w-64 border rounded-lg px-4 py-2 text-sm outline-none border-gray-300 focus:ring-2 focus:ring-blue-500"
          />

          <select
            className="rounded-lg pl-1 pr-8 py-2 text-sm font-medium border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-linear-to-r from-gray-50 to-white"
          >
            <option value="all">⚪ All Status</option>
            <option value="active" className="text-green-600">🟢 Active</option>
            <option value="inactive" className="text-red-600">🔴 Inactive</option>
          </select>


          {/* Search Button */}
          <button
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white! px-4 py-2 rounded-lg text-sm font-medium"
          >
            Search
          </button>
          <button
            onClick={() => setOpen(true)}
            className="flex ms-auto items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white! px-4 py-2 rounded-lg text-sm font-medium"
          >
            Create Post
            <Plus size={16} />
          </button>
        </div>
      </div>



      {/* Table (UNCHANGED) */}
      <div className="bg-white rounded-xl shadow border border-gray-300 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-200 text-gray-600">
            <tr>
              <th className="px-6 py-3 text-left">S. No</th>
              <th className="px-6 py-3 text-left">Title</th>
              <th className="px-6 py-3 text-left">Description</th>
              <th className="px-6 py-3 text-left">Content</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-300">
            {posts.map((post, index) => (
              <tr key={post.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4 font-medium">{post.title}</td>
                <td className="px-6 py-4 truncate max-w-xs text-gray-500">
                  {post.desc}
                </td>
                <td className="px-6 py-4 truncate max-w-xs text-gray-500">
                  {post.content}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${post.status === 'active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                      }`}
                  >
                    {post.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center gap-3">
                    <button className="text-blue-600 hover:text-blue-800"
                      onClick={() => setOpen(true)}
                    >
                      <Pencil size={16} />
                    </button>
                    {/* <button
                      onClick={() => deletePost(post.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={16} />
                    </button> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <CreatePostModal
        open={open}
        onClose={() => setOpen(false)}
        onCreate={createPost}
      />
    </div>
  );
}
