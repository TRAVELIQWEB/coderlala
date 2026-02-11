'use client';

import { useEffect, useState, useCallback } from 'react';
import { Plus, Pencil, Trash2, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import CreatePostModal from '@/app/components/admin/CreatePostModal';
import UpdatePostModal from '@/app/components/admin/UpdatePostModal';
import api from '@/lib/axios';
// Remove the debounce import since we're not using it

// Define a base Post type without createdAt for modals
type BasePost = {
  _id: string;
  title: string;
  desc: string;
  content: string;
  status: 'active' | 'inactive' | 'archived';
  slug?: string;
  primaryTech?: string;
  level?: string;
  readingTime?: number;
  author?: {
    name: string;
    role: string;
    _id: string;
  };
  language?: string;
};

// Extended Post type with createdAt and other fields for the main page
type Post = BasePost & {
  createdAt: string;
  updatedAt: string;
  slug: string;
  primaryTech: string;
  level: string;
  readingTime: number;
  author: {
    name: string;
    role: string;
    _id: string;
  };
  language: string;
  description: string;
};

type PaginationInfo = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  // Pagination and filter states
  const [pagination, setPagination] = useState<PaginationInfo>({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    hasNextPage: false,
    hasPrevPage: false,
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [loading, setLoading] = useState(false);

  // Fetch blogs with pagination and filters
  const fetchBlogs = useCallback(async (page: number = 1, search: string = '', status: string = 'all') => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: page.toString(),
        ...(search && { searchQuery: search }),
        ...(status !== 'all' && { status: status })
      });

      const res = await api.get(`admin/blogs?${params.toString()}`);

      // Map API response to match your Post type
      const mappedPosts = res.data?.data?.blogs?.map((post: any) => ({
        _id: post._id,
        title: post.title,
        desc: post.description || '',
        content: post.content,
        slug: post.slug || '',
        primaryTech: post.primaryTech || '',
        level: post.level || '',
        readingTime: post.readingTime || 0,
        author: post.author || { name: '', role: '', _id: '' },
        language: post.language || '',
        status: post.status,
        description: post.description || '',
        createdAt: post.createdAt,
        updatedAt: post.updatedAt
      }));

      setPosts(mappedPosts || []);
      setPagination({
        currentPage: page,
        totalItems: res?.data?.data?.total || 0,
        totalPages: res?.data?.data?.totalpage || 1,
        hasNextPage: page < (res?.data?.data?.totalpage || 1),
        hasPrevPage: page > 1,
      });

      console.log('Fetched posts:', mappedPosts);
    } catch (error) {
      console.error('Failed to fetch blogs', error);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial fetch
  useEffect(() => {
    fetchBlogs(1, '', 'all');
  }, [fetchBlogs]);

  // Fetch when search or status changes
  useEffect(() => {
    fetchBlogs(1, searchQuery, statusFilter);
  }, [searchQuery, statusFilter, fetchBlogs]);

  // Create new post
  const createPost = async (post: BasePost) => {
    try {
      const res = await api.post('/admin/blogs/create', {
        title: post.title,
        description: post.desc,
        content: post.content,
        status: post.status
      });

      const newPost: Post = {
        _id: res.data._id,
        title: res.data.title,
        desc: res.data.description,
        content: res.data.content,
        slug: res.data.slug || '',
        primaryTech: res.data.primaryTech || '',
        level: res.data.level || '',
        readingTime: res.data.readingTime || 0,
        author: res.data.author || { name: '', role: '', _id: '' },
        language: res.data.language || '',
        status: res.data.status,
        description: res.data.description || '',
        createdAt: res.data.createdAt || new Date().toISOString(),
        updatedAt: res.data.updatedAt || new Date().toISOString()
      };

      // Add new post and refetch to maintain pagination order
      setPosts([newPost, ...posts.slice(0, 19)]); // Keep only 20 items
      console.log('Post created:', newPost);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  // Update existing post
  const updatePost = async (updatedPost: BasePost) => {
    try {
      const res = await api.put(`/admin/blogs/${updatedPost._id}`, {
        title: updatedPost.title,
        description: updatedPost.desc,
        content: updatedPost.content,
        status: updatedPost.status
      });

      console.log('Update response:', res.data);

      // Update post in state
      const updatedPosts = posts.map(post =>
        post._id === updatedPost._id ? {
          ...post,
          ...updatedPost,
          desc: res.data?.description || updatedPost.desc,
          updatedAt: new Date().toISOString()
        } : post
      );

      setPosts(updatedPosts);
      console.log('Post updated:', updatedPost);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  // Delete post
  const deletePost = async (_id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      await api.delete(`/admin/blogs/${_id}`);
      setPosts(posts.filter(p => p._id !== _id));
      console.log('Post deleted:', _id);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  // Pagination handlers
  const handleNextPage = () => {
    if (pagination.hasNextPage) {
      fetchBlogs(pagination.currentPage + 1, searchQuery, statusFilter);
    }
  };

  const handlePrevPage = () => {
    if (pagination.hasPrevPage) {
      fetchBlogs(pagination.currentPage - 1, searchQuery, statusFilter);
    }
  };

  const handlePageClick = (page: number) => {
    fetchBlogs(page, searchQuery, statusFilter);
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, pagination.currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > pagination.totalPages) {
      endPage = pagination.totalPages;
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  // Handle edit button click
  const handleEditClick = (post: Post) => {
    setEditingPost(post);
    setUpdateModalOpen(true);
    console.log('Editing post:', post);
  };

  // Handle create button click
  const handleCreateClick = () => {
    setCreateModalOpen(true);
  };

  // Handle modal close
  const handleCloseCreateModal = () => {
    setCreateModalOpen(false);
  };

  const handleCloseUpdateModal = () => {
    setUpdateModalOpen(false);
    setEditingPost(null);
  };

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchBlogs(1, searchQuery, statusFilter);
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Blog</h1>
          <p className="text-gray-600 mt-1">Manage blog posts</p>
        </div>
      </div>

      {/* Filter Header */}
      <div className="bg-white rounded-xl shadow border border-gray-300 p-4">
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3 items-end">
          <div className="flex-1">
            <label className="text-sm font-medium mb-1 block">
              Search
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm outline-none border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="w-full md:w-auto">
            <label className="text-sm font-medium text-gray-600 mb-1 block">
              Status
            </label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full md:w-48 rounded-lg px-3 py-2 text-sm font-medium border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="all">All Status</option>
              <option value="active">🟢 Active</option>
              <option value="inactive">🔴 Inactive</option>
              <option value="archived">📦 Archived</option>
            </select>
          </div>

          <div className="w-full md:w-auto">
            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 !text-white px-4 py-2 rounded-lg text-sm font-medium transition w-full md:w-auto justify-center"
            >
              <Search size={16} />
              Search
            </button>
          </div>

          <div className="w-full md:w-auto">
            <button
              type="button"
              onClick={handleCreateClick}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 !text-white px-4 py-2 rounded-lg text-sm font-medium transition w-full md:w-auto justify-center"
            >
              <Plus size={16} />
              Create Post
            </button>
          </div>
        </form>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow border border-gray-300 overflow-x-auto">
        {loading ? (
          <div className="flex justify-center items-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <>
            <table className="w-full text-sm">
              <thead className="bg-gray-200 text-gray-600">
                <tr>
                  <th className="px-6 py-3 text-left text-nowrap">S. No</th>
                  <th className="px-6 py-3 text-left text-nowrap">Title</th>
                  <th className="px-6 py-3 text-left text-nowrap">Slug</th>
                  <th className="px-6 py-3 text-left text-nowrap">Description</th>
                  <th className="px-6 py-3 text-left text-nowrap">Primary Tech</th>
                  <th className="px-6 py-3 text-left text-nowrap">Level</th>
                  <th className="px-6 py-3 text-left text-nowrap">Reading Time</th>
                  <th className="px-6 py-3 text-left text-nowrap">Author</th>
                  <th className="px-6 py-3 text-left text-nowrap">Language</th>
                  <th className="px-6 py-3 text-left text-nowrap">Status</th>
                  <th className="px-6 py-3 text-left text-nowrap">Created At</th>
                  <th className="px-6 py-3 text-center">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-300">
                {posts.length === 0 ? (
                  <tr>
                    <td colSpan={13} className="px-6 py-8 text-center text-gray-500">
                      No posts found
                    </td>
                  </tr>
                ) : (
                  posts.map((post, index) => (
                    <tr key={post._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        {(pagination.currentPage - 1) * 20 + index + 1}
                      </td>
                      <td className="px-6 py-4 font-medium">{post.title}</td>
                      <td className="px-6 py-4 max-w-xs">
                        <div className="truncate text-gray-500" title={post.slug}>
                          {post.slug || '-'}
                        </div>
                      </td>
                      <td className="px-6 py-4 max-w-xs">
                        <div className="truncate text-gray-500" title={post.description}>
                          {post.description || post.desc || '-'}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {post.primaryTech || '-'}
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                          {post.level || '-'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {post.readingTime ? `${post.readingTime} min` : '-'}
                      </td>
                      <td className="px-6 py-4">
                        {post.author?.name || '-'}
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                          {post.language?.toUpperCase() || '-'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            post.status === 'active'
                              ? 'bg-green-100 text-green-700'
                              : post.status === 'inactive'
                              ? 'bg-red-100 text-red-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {post.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : '-'}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => handleEditClick(post)}
                            className="p-1.5 !text-blue-600 hover:text-blue-800 !hover:bg-blue-50 rounded transition"
                            title="Edit"
                          >
                            <Pencil size={16} />
                          </button>
                          {/* <button
                            onClick={() => deletePost(post._id)}
                            className="p-1.5 text-red-600 hover:text-red-800 hover:bg-red-50 rounded transition"
                            title="Delete"
                          >
                            <Trash2 size={16} />
                          </button> */}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>

            {/* Pagination */}
            {posts.length > 0 && (
              <div className="border-t border-gray-300 px-6 py-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-sm text-gray-600">
                    Showing {((pagination.currentPage - 1) * 20) + 1} to{' '}
                    {Math.min(pagination.currentPage * 20, pagination.totalItems)} of{' '}
                    {pagination.totalItems} posts
                  </div>

                  <div className="flex items-center gap-1">
                    {/* Previous button */}
                    <button
                      onClick={handlePrevPage}
                      disabled={!pagination.hasPrevPage}
                      className={`p-2 rounded-lg border ${
                        pagination.hasPrevPage
                          ? '!text-gray-700 hover:bg-gray-100 border-gray-300'
                          : '!text-gray-400 border-gray-200 cursor-not-allowed'
                      }`}
                    >
                      <ChevronLeft size={18} />
                    </button>

                    {/* Page numbers */}
                    {getPageNumbers().map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageClick(page)}
                        className={`min-w-[40px] px-3 py-2 rounded-lg border text-sm font-medium ${
                          page === pagination.currentPage
                            ? 'bg-blue-600 !text-white border-blue-600'
                            : 'text-gray-700 hover:bg-gray-100 border-gray-300'
                        }`}
                      >
                        {page}
                      </button>
                    ))}

                    {/* Next button */}
                    <button
                      onClick={handleNextPage}
                      disabled={!pagination.hasNextPage}
                      className={`p-2 rounded-lg border ${
                        pagination.hasNextPage
                          ? 'text-gray-700 hover:bg-gray-100 border-gray-300'
                          : 'text-gray-400 border-gray-200 cursor-not-allowed'
                      }`}
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-600">Go to page:</span>
                    <input
                      type="number"
                      min="1"
                      max={pagination.totalPages}
                      defaultValue={pagination.currentPage}
                      onBlur={(e) => {
                        const page = parseInt(e.target.value);
                        if (page >= 1 && page <= pagination.totalPages) {
                          handlePageClick(page);
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          const page = parseInt((e.target as HTMLInputElement).value);
                          if (page >= 1 && page <= pagination.totalPages) {
                            handlePageClick(page);
                          }
                        }
                      }}
                      className="w-16 px-2 py-1 border border-gray-300 rounded text-center focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <span className="text-gray-600">of {pagination.totalPages}</span>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Create Modal */}
      <CreatePostModal
        open={createModalOpen}
        onClose={handleCloseCreateModal}
        onCreate={createPost}
      />

      {/* Update Modal */}
      <UpdatePostModal
        open={updateModalOpen}
        onClose={handleCloseUpdateModal}
        onUpdate={updatePost}
        editingPost={editingPost}
      />
    </div>
  );
}