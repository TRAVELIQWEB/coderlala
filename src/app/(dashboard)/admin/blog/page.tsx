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
    <div className="space-y-4">
      {/* Header - Remove hardcoded colors */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          Latest Blogs
        </h1>
        <p className="mt-2 text-muted-foreground">
          Manage blog posts
        </p>
      </div>

      {/* Filter Header - Update to use theme variables */}
      <div className="bg-card rounded-xl shadow-sm border border-border p-4">
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3 items-end">
          <div className="flex-1">
            <label className="text-sm font-medium text-foreground mb-1 block">Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm outline-none bg-background text-foreground border-border focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>

          <div className="w-full md:w-auto">
            <label className="text-sm font-medium text-foreground mb-1 block">Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full md:w-48 rounded-lg px-3 py-2 text-sm font-medium border bg-background text-foreground border-border focus:outline-none focus:ring-2 focus:ring-ring"
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
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium transition w-full md:w-auto justify-center"
            >
              <Search size={16} />
              Search
            </button>
          </div>

          <div className="w-full md:w-auto">
            <button
              type="button"
              onClick={() => setCreateModalOpen(true)}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition w-full md:w-auto justify-center"
            >
              <Plus size={16} />
              Create Post
            </button>
          </div>
        </form>
      </div>

      {/* Table Container */}
      <div className="bg-card rounded-xl shadow-sm border border-border flex flex-col h-full">
        {loading ? (
          <div className="flex justify-center items-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            <div className="overflow-hidden rounded-xl border! border-border bg-background shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-muted">
                      <th className="w-14 px-4 py-3 text-left font-semibold  text-nowrap">S. No</th>
                      <th className="min-w-[160px] px-4 py-3 text-left font-semibold text-nowrap">Title</th>
                      <th className="min-w-[140px] px-4 py-3 text-left font-semibold text-nowrap">Slug</th>
                      <th className="min-w-[200px] px-4 py-3 text-left font-semibold text-nowrap">Description</th>
                      <th className="min-w-[120px] px-4 py-3 text-left font-semibold text-nowrap">Primary Tech</th>
                      <th className="w-24 px-4 py-3 text-left font-semibold text-nowrap">Level</th>
                      <th className="w-28 px-4 py-3 text-left font-semibold text-nowrap">Reading Time</th>
                      <th className="min-w-[120px] px-4 py-3 text-left font-semibold text-nowrap">Author</th>
                      <th className="w-24 px-4 py-3 text-left font-semibold text-nowrap">Language</th>
                      <th className="w-24 px-4 py-3 text-left font-semibold text-nowrap">Status</th>
                      <th className="w-28 px-4 py-3 text-left font-semibold text-nowrap">Created At</th>
                      <th className="w-20 px-4 py-3 text-center font-semibold text-nowrap">Actions</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-border">
                    {posts.length === 0 ? (
                      <tr>
                        <td
                          colSpan={12}
                          className="py-10 text-center text-muted-foreground"
                        >
                          No posts found
                        </td>
                      </tr>
                    ) : (
                      posts.map((post, index) => (
                        <tr
                          key={post._id}
                          className="hover:bg-muted/50 transition-colors"
                        >
                          <td className="px-4 py-4">
                            {(pagination.currentPage - 1) * 20 + index + 1}
                          </td>

                          <td className="px-4 py-4 font-medium text-nowrap">
                            {post.title}
                          </td>

                          <td className="max-w-[160px] px-4 py-4 text-nowrap">
                            <div className="truncate" title={post.slug}>
                              {post.slug || "-"}
                            </div>
                          </td>

                          <td className="max-w-[220px] px-4 py-4">
                            <div
                              className="truncate text-muted-foreground"
                              title={post.description}
                            >
                              {post.description || post.desc || "-"}
                            </div>
                          </td>

                          <td className="px-4 py-4 text-nowrap">
                            {post.primaryTech || "-"}
                          </td>

                          <td className="px-4 py-4 text-nowrap">
                            <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/20 dark:text-blue-400">
                              {post.level || "-"}
                            </span>
                          </td>

                          <td className="px-4 py-4 text-nowrap">
                            {post.readingTime ? `${post.readingTime} min` : "-"}
                          </td>

                          <td className="px-4 py-4 text-nowrap">
                            {post.author?.name || "-"}
                          </td>

                          <td className="px-4 py-4">
                            <span className="rounded-full bg-violet-100 px-2.5 py-1 text-xs font-medium text-violet-700 dark:bg-violet-500/20 dark:text-violet-400">
                              {post.language?.toUpperCase() || "-"}
                            </span>
                          </td>

                          <td className="px-4 py-4 text-nowrap">
                            <span
                              className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${post.status === "active"
                                  ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400"
                                  : post.status === "draft"
                                    ? "bg-gray-100 dark:bg-gray-500/20 "
                                    : "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400"
                                }`}
                            >
                              <span
                                className={`h-2 w-2 rounded-full ${post.status === "active"
                                    ? "bg-green-500"
                                    : post.status === "draft"
                                      ? "bg-gray-500"
                                      : "bg-red-500"
                                  }`}
                              />
                              {post.status}
                            </span>
                          </td>

                          <td className="px-4 py-4 text-sm text-nowrap">
                            {post.createdAt
                              ? new Date(post.createdAt).toLocaleDateString()
                              : "-"}
                          </td>

                          <td className="px-4 py-4">
                            <div className="flex justify-center">
                              <button
                                onClick={() => handleEditClick(post)}
                                className="rounded-md p-2 text-blue-600 transition hover:bg-blue-100 dark:hover:bg-blue-500/20"
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
            </div>

            {/* Pagination */}
            {posts.length > 0 && pagination.totalPages > 1 && (
              <div className="border-t border-border px-6 py-4 bg-card shrink-0">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-sm text-muted-foreground">
                    Showing {((pagination.currentPage - 1) * 20) + 1} to{' '}
                    {Math.min(pagination.currentPage * 20, pagination.totalItems)} of{' '}
                    {pagination.totalItems} posts
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={handlePrevPage}
                      disabled={!pagination.hasPrevPage}
                      className={`p-2 rounded-lg border ${pagination.hasPrevPage
                        ? 'text-foreground hover:bg-accent border-border'
                        : 'text-muted-foreground border-border cursor-not-allowed opacity-50'
                        }`}
                    >
                      <ChevronLeft size={18} />
                    </button>

                    {getPageNumbers().map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageClick(page)}
                        className={`min-w-10 px-3 py-2 rounded-lg border text-sm font-medium ${page === pagination.currentPage
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'text-foreground hover:bg-accent border-border'
                          }`}
                      >
                        {page}
                      </button>
                    ))}

                    <button
                      onClick={handleNextPage}
                      disabled={!pagination.hasNextPage}
                      className={`p-2 rounded-lg border ${pagination.hasNextPage
                        ? 'text-foreground hover:bg-accent border-border'
                        : 'text-muted-foreground border-border cursor-not-allowed opacity-50'
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

      {/* Modals remain the same */}
      <CreatePostModal
        open={createModalOpen}
        onClose={() => {
          setCreateModalOpen(false);
          setError(null);
        }}
        onCreate={createPost}
      />

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