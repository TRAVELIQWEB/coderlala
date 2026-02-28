'use client';

import { useEffect, useState, useCallback } from 'react';
import { Plus, Pencil, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import CreatePostModal from '@/app/components/admin/CreatePostModal';
import UpdatePostModal from '@/app/components/admin/UpdatePostModal';
import api from '@/lib/axios';

// Import types from separate file
import {
  BlogPrimaryTech,
  BlogTechStack,
  BlogTag,
  BlogLevel,
  BlogAuthorRole,
  BlogLanguage,
  BlogStatus,
  BasePost,
  Post,
  PaginationInfo
} from '@/types/blog';

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
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
  const [error, setError] = useState<string | null>(null);

  // Helper function to generate slug
  const generateSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  // Fetch blogs
  const fetchBlogs = useCallback(async (page: number = 1, search: string = '', status: string = 'all') => {
    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams({
        page: page.toString(),
        limit: '20',
        ...(search && { searchQuery: search }),
        ...(status !== 'all' && { status })
      });

      const res = await api.get(`/admin/blogs?${params.toString()}`);

      console.log("📊 FETCHED BLOGS:", res.data);

      const blogsData = res.data?.data?.blogs || res.data?.data || [];

      const mappedPosts: Post[] = blogsData.map((post: any): Post => ({
        _id: post._id,
        title: post.title || '',
        desc: post.description || post.desc || '',
        description: post.description || post.desc || '',
        content: post.content || '',
        slug: post.slug || '',
        primaryTech: post.primaryTech || BlogPrimaryTech.NESTJS,
        techStacks: post.techStacks || [],
        tags: post.tags || [],
        level: post.level || BlogLevel.BEGINNER,
        readingTime: post.readingTime || 5,
        author: post.author || { name: '', role: BlogAuthorRole.BACKEND, _id: '' },
        language: post.language || BlogLanguage.EN,
        seo: post.seo || {
          title: post.title || '',
          description: post.description || post.desc || '',
          canonicalUrl: ''
        },
        status: post.status || BlogStatus.DRAFT,
        createdAt: post.createdAt || new Date().toISOString(),
        updatedAt: post.updatedAt || new Date().toISOString()
      }));

      setPosts(mappedPosts);
      setPagination({
        currentPage: res.data?.data?.currentPage || page,
        totalItems: res.data?.data?.total || 0,
        totalPages: res.data?.data?.totalPages || res.data?.data?.totalpage || 1,
        hasNextPage: res.data?.data?.hasNextPage || page < (res.data?.data?.totalPages || 1),
        hasPrevPage: res.data?.data?.hasPrevPage || page > 1,
      });
    } catch (error: any) {
      console.error('❌ Failed to fetch blogs', error);
      setError(error.response?.data?.message || 'Failed to fetch blogs');
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Debounced search
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchBlogs(1, searchQuery, statusFilter);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, statusFilter, fetchBlogs]);

  // 🔥 FIXED: Create post - Handle both desc and description fields with proper type checking
  const createPost = async (post: BasePost) => {
    try {
      setError(null);

      console.log("✅ DATA FROM MODAL:", post);

      // 🔥 Check if _id exists (should come from API via modal)
      if (!post._id) {
        console.error("❌ No _id received from modal");
        // Refresh the list instead of trying to add manually
        fetchBlogs(pagination.currentPage, searchQuery, statusFilter);
        setCreateModalOpen(false);
        return;
      }

      // 🔥 Get description from either desc or description field
      const description = post.description || '';
      
      // 🔥 Create the mapped post with all required fields
      const mappedNewPost: Post = {
        _id: post._id,
        title: post.title || '',
        desc: description,
        description: description,
        content: post.content || '',
        slug: post.slug || '',
        primaryTech: post.primaryTech || BlogPrimaryTech.NESTJS,
        techStacks: post.techStacks || [],
        tags: post.tags || [],
        level: post.level || BlogLevel.BEGINNER,
        readingTime: post.readingTime || 5,
        author: post.author || { name: '', role: BlogAuthorRole.BACKEND, _id: '' },
        language: post.language || BlogLanguage.EN,
        seo: post.seo || {
          title: post.title || '',
          description: description,
          canonicalUrl: ''
        },
        status: post.status || BlogStatus.DRAFT,
        // Use current date since BasePost doesn't have these fields
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      console.log("📝 MAPPED POST:", mappedNewPost);

      // Add to beginning of list and refresh pagination count
      setPosts(prev => [mappedNewPost, ...prev]);
      setPagination(prev => ({
        ...prev,
        totalItems: prev.totalItems + 1,
        totalPages: Math.ceil((prev.totalItems + 1) / 20)
      }));

      // Close modal
      setCreateModalOpen(false);

    } catch (error: any) {
      console.error('❌ Error creating post:', error);
      const errorMsg = error.response?.data?.message;
      if (Array.isArray(errorMsg)) {
        setError(errorMsg.join(', '));
      } else {
        setError(errorMsg || 'Failed to create blog post');
      }

      // Refresh on error to ensure UI consistency
      fetchBlogs(pagination.currentPage, searchQuery, statusFilter);
    }
  };

  // 🔥 FIXED: Update post - REMOVED background refresh
  const updatePost = async (updatedPost: BasePost) => {
    try {
      if (!updatedPost._id) {
        setError('Post ID is missing');
        return;
      }

      setError(null);

      const payload = {
        title: updatedPost.title.trim(),
        content: updatedPost.content,
        slug: updatedPost.slug || generateSlug(updatedPost.title),
        primaryTech: updatedPost.primaryTech as BlogPrimaryTech || BlogPrimaryTech.NESTJS,
        techStacks: updatedPost.techStacks as BlogTechStack[] || [],
        tags: updatedPost.tags as BlogTag[] || [],
        level: updatedPost.level as BlogLevel || BlogLevel.BEGINNER,
        readingTime: Number(updatedPost.readingTime) || 5,
        author: {
          name: updatedPost.author?.name?.trim() || 'Admin',
          role: updatedPost.author?.role as BlogAuthorRole || BlogAuthorRole.FULLSTACK
        },
        language: updatedPost.language as BlogLanguage || BlogLanguage.EN,
        seo: {
          title: updatedPost.seo?.title?.trim() || updatedPost.title,
          description: updatedPost.seo?.description?.trim() || updatedPost.description,
          canonicalUrl: updatedPost.seo?.canonicalUrl?.trim() || ''
        },
        description: updatedPost.description.trim(),
        status: updatedPost.status as BlogStatus || BlogStatus.DRAFT
      };

      const res = await api.put(`/admin/blogs/${updatedPost._id}`, payload);

      console.log("✅ UPDATE RESPONSE:", res.data);

      // Get description from response or payload
      const updatedDescription = res.data?.data?.description || res.data?.description || payload.description;

      // 🔥 IMMEDIATE UI UPDATE: Update the post in the list
      setPosts(prev => prev.map(post =>
        post._id === updatedPost._id
          ? {
              ...post,
              title: payload.title,
              content: payload.content,
              slug: payload.slug,
              primaryTech: payload.primaryTech as string,
              techStacks: payload.techStacks as string[],
              tags: payload.tags as string[],
              level: payload.level as string,
              readingTime: payload.readingTime,
              author: payload.author,
              language: payload.language as string,
              seo: payload.seo,
              status: payload.status as string,
              desc: updatedDescription,
              description: updatedDescription,
              updatedAt: new Date().toISOString()
            }
          : post
      ));

      // Close modal
      setUpdateModalOpen(false);
      setEditingPost(null);

    } catch (error: any) {
      console.error('❌ Error updating post:', error);
      const errorMsg = error.response?.data?.message;
      if (Array.isArray(errorMsg)) {
        setError(errorMsg.join(', '));
      } else {
        setError(errorMsg || 'Failed to update blog post');
      }

      // Refresh on error
      fetchBlogs(pagination.currentPage, searchQuery, statusFilter);
    }
  };

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

  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, pagination.currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = startPage + maxPagesToShow - 1;
    if (endPage > pagination.totalPages) {
      endPage = pagination.totalPages;
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    for (let i = startPage; i <= endPage; i++) pages.push(i);
    return pages;
  };

  const handleEditClick = (post: Post) => {
    setEditingPost(post);
    setUpdateModalOpen(true);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchBlogs(1, searchQuery, statusFilter);
  };

  return (
    <div className="space-y-4 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Blog</h1>
          <p className="text-gray-600 mt-1">Manage blog posts</p>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-700 font-medium">Error: {error}</p>
        </div>
      )}

      {/* Filter Header */}
      <div className="bg-white rounded-xl shadow border border-gray-300 p-4">
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3 items-end">
          <div className="flex-1">
            <label className="text-sm font-medium mb-1 block">Search</label>
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
            <label className="text-sm font-medium text-gray-600 mb-1 block">Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full md:w-48 rounded-lg px-3 py-2 text-sm font-medium border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="all">All Status</option>
              <option value="active">🟢 Active</option>
              <option value="draft">📝 Draft</option>
              <option value="archived">📦 Archived</option>
            </select>
          </div>

          <div className="w-full md:w-auto">
            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white! px-4 py-2 rounded-lg text-sm font-medium transition w-full md:w-auto justify-center"
            >
              <Search size={16} />
              Search
            </button>
          </div>

          <div className="w-full md:w-auto">
            <button
              type="button"
              onClick={() => setCreateModalOpen(true)}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white! px-4 py-2 rounded-lg text-sm font-medium transition w-full md:w-auto justify-center"
            >
              <Plus size={16} />
              Create Post
            </button>
          </div>
        </form>
      </div>

      {/* Table Container - Only table scrolls, pagination stays fixed */}
      <div className="bg-white rounded-xl shadow border border-gray-300 flex flex-col h-full">
        {loading ? (
          <div className="flex justify-center items-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <>
            {/* Scrollable Table Container */}
            <div className="overflow-x-auto overflow-y-auto flex-1">
              <table className="w-full text-sm">
                <thead className="bg-gray-200 text-gray-600 sticky top-0 z-10">
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
                        <td className="px-6 py-4">{(pagination.currentPage - 1) * 20 + index + 1}</td>
                        <td className="px-6 py-4 font-medium">{post.title}</td>
                        <td className="px-6 py-4 max-w-xs">
                          <div className="truncate text-gray-500" title={post.slug}>{post.slug || '-'}</div>
                        </td>
                        <td className="px-6 py-4 max-w-xs">
                          <div className="truncate text-gray-500" title={post.description}>
                            {post.description || post.desc || '-'}
                          </div>
                        </td>
                        <td className="px-6 py-4">{post.primaryTech || '-'}</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                            {post.level || '-'}
                          </span>
                        </td>
                        <td className="px-6 py-4">{post.readingTime ? `${post.readingTime} min` : '-'}</td>
                        <td className="px-6 py-4">{post.author?.name || '-'}</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                            {post.language?.toUpperCase() || '-'}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            post.status === 'active' ? 'bg-green-100 text-green-700' :
                            post.status === 'draft' ? 'bg-gray-100 text-gray-700' :
                            'bg-red-100 text-red-700'
                          }`}>
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
                              className="p-1.5 text-blue-600! hover:text-blue-800 !hover:bg-blue-50 rounded transition"
                              title="Edit"
                            >
                              <Pencil size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination - Fixed outside scroll, always visible */}
            {posts.length > 0 && pagination.totalPages > 1 && (
              <div className="border-t border-gray-300 px-6 py-4 bg-white shrink-0">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-sm text-gray-600">
                    Showing {((pagination.currentPage - 1) * 20) + 1} to{' '}
                    {Math.min(pagination.currentPage * 20, pagination.totalItems)} of{' '}
                    {pagination.totalItems} posts
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={handlePrevPage}
                      disabled={!pagination.hasPrevPage}
                      className={`p-2 rounded-lg border ${
                        pagination.hasPrevPage
                          ? 'text-gray-700! hover:bg-gray-100 border-gray-300'
                          : 'text-gray-400! border-gray-200 cursor-not-allowed'
                      }`}
                    >
                      <ChevronLeft size={18} />
                    </button>

                    {getPageNumbers().map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageClick(page)}
                        className={`min-w-10 px-3 py-2 rounded-lg border text-sm font-medium ${
                          page === pagination.currentPage
                            ? 'bg-blue-600 text-white! border-blue-600'
                            : 'text-gray-700 hover:bg-gray-100 border-gray-300'
                        }`}
                      >
                        {page}
                      </button>
                    ))}

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
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Create Modal */}
      <CreatePostModal
        open={createModalOpen}
        onClose={() => {
          setCreateModalOpen(false);
          setError(null);
        }}
        onCreate={createPost}
      />

      {/* Update Modal */}
      <UpdatePostModal
        open={updateModalOpen}
        onClose={() => {
          setUpdateModalOpen(false);
          setEditingPost(null);
          setError(null);
        }}
        onUpdate={updatePost}
        editingPost={editingPost}
      />
    </div>
  );
}