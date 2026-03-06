'use client';

import { useEffect, useState, useCallback } from 'react';
import { Plus, Pencil, ChevronLeft, ChevronRight, Search, ArrowUpIcon } from 'lucide-react';
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
  PaginationInfo,
  USE_DUMMY_DATA
} from '@/types/blog';
import { dummyPosts } from '@/app/(main)/blog/data/posts';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
// import { dummyPosts } from '@/app/(main)/blog/data/posts';

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
  const fetchBlogs = useCallback(async (
    page: number = 1,
    search: string = '',
    status: string = 'all'
  ) => {
    try {
      setLoading(true);
      setError(null);

      // 🔥 USE DUMMY DATA
      if (USE_DUMMY_DATA) {
        const ITEMS_PER_PAGE = 10; // Show 10 items per page for pagination demonstration

        // 🔥 Generate 120 dummy records
        const basePost = dummyPosts[0];

        const generatedPosts: Post[] = Array.from({ length: 120 }, (_, index) => ({
          ...basePost,
          _id: `${index + 1}`,
          title: `${basePost.title} ${index + 1}`,
          slug: `${basePost.slug}-${index + 1}`,
          desc: `${basePost.description} (${index + 1})`,
          description: `${basePost.description} (${index + 1})`,
          status: index % 3 === 0 ? 'active' : index % 3 === 1 ? 'draft' : 'archived',
          createdAt: new Date(Date.now() - index * 86400000).toISOString(),
          updatedAt: new Date().toISOString(),
        }));

        let filtered = [...generatedPosts];

        // 🔍 Search filter
        if (search) {
          filtered = filtered.filter(post =>
            post.title.toLowerCase().includes(search.toLowerCase())
          );
        }

        // 📦 Status filter
        if (status !== 'all') {
          filtered = filtered.filter(post => post.status === status);
        }

        const totalItems = filtered.length;
        const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

        const startIndex = (page - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;

        const paginatedPosts = filtered.slice(startIndex, endIndex);

        setPosts(paginatedPosts);

        setPagination({
          currentPage: page,
          totalPages,
          totalItems,
          hasNextPage: page < totalPages,
          hasPrevPage: page > 1,
        });

        return;
      }

      //   if (search) {
      //     filtered = filtered.filter(post =>
      //       post.title.toLowerCase().includes(search.toLowerCase())
      //     );
      //   }

      //   if (status !== 'all') {
      //     filtered = filtered.filter(post => post.status === status);
      //   }

      //   setPosts(filtered);

      //   setPagination({
      //     currentPage: 1,
      //     totalPages: 1,
      //     totalItems: filtered.length,
      //     hasNextPage: false,
      //     hasPrevPage: false,
      //   });

      //   return;
      // }

      // 🔥 REAL API CALL
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '20',
        ...(search && { searchQuery: search }),
        ...(status !== 'all' && { status })
      });

      const res = await api.get(`/admin/blogs?${params.toString()}`);

      const blogsData = res.data?.data?.blogs || res.data?.data || [];

      const mappedPosts: Post[] = blogsData.map((post: any) => ({
        ...post,
        desc: post.description || post.desc || '',
        description: post.description || post.desc || '',
      }));

      setPosts(mappedPosts);

      setPagination({
        currentPage: res.data?.data?.currentPage || page,
        totalItems: res.data?.data?.total || 0,
        totalPages: res.data?.data?.totalPages || 1,
        hasNextPage: res.data?.data?.hasNextPage || false,
        hasPrevPage: res.data?.data?.hasPrevPage || false,
      });

    } catch (error: any) {
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
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Blog</h1>
          <p className="">Manage blog posts</p>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-700 font-medium">Error: {error}</p>
        </div>
      )}

      {/* Filter Header */}
      <div className="bg-secondary border-border rounded-xl w-full shadow border flex flex-col gap-2 p-4">
        <form
          onSubmit={handleSearch}
          className="w-full flex flex-col sm:flex-row flex-wrap gap-1 sm:items-end"
        >
          {/* Search Field */}
          <div className="relative w-full sm:flex-1">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm outline-none border-border"
            />
          </div>

          {/* Status Filter */}
          <div className="w-full sm:w-auto">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full sm:w-44 rounded-lg px-3 py-2 text-sm font-medium border border-input bg-background text-foreground"
            >
              <option value="all">All Status</option>
              <option value="active">🟢 Active</option>
              <option value="draft">📝 Draft</option>
              <option value="archived">📦 Archived</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="flex gap-2 sm:w-auto w-full">
            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition w-full sm:w-auto justify-center"
            >
              <Search size={16} />
              Search
            </button>

            {/* Create Button */}
            <button
              type="button"
              onClick={() => setCreateModalOpen(true)}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition w-full sm:w-auto justify-center"
            >
              <Plus size={16} />
              Create Post
            </button>
          </div>
        </form>
        {/* Table Container - Only table scrolls, pagination stays fixed */}
        <div className="flex flex-col h-full">
          {loading ? (
            <div className="flex justify-center items-center p-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <>
              {/* Scrollable Table Container */}
              <div>
                <div className="w-full overflow-x-auto styled-table">
                  <table className="w-full text-sm min-w-300">
                    <thead className="bg-card text-muted-foreground sticky top-0 z-10">
                      <tr className=''>
                        <th className="text-left text-nowrap font-medium">S. No</th>
                        <th className="text-left text-nowrap font-medium">Title</th>
                        <th className="text-left text-nowrap font-medium">Slug</th>
                        <th className="text-left text-nowrap font-medium">Description</th>
                        <th className="text-left text-nowrap font-medium">Primary Tech</th>
                        <th className="text-left text-nowrap font-medium">Level</th>
                        <th className="text-left text-nowrap font-medium">Reading Time</th>
                        <th className="text-left text-nowrap font-medium">Author</th>
                        <th className="text-left text-nowrap font-medium">Language</th>
                        <th className="text-left text-nowrap font-medium">Status</th>
                        <th className="text-left text-nowrap font-medium">Created At</th>
                        <th className="text-center font-medium">Actions</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y">
                      {posts.length === 0 ? (
                        <tr>
                          <td colSpan={13} className="px-6 py-8 text-center text-destructive">
                            No posts found
                          </td>
                        </tr>
                      ) : (
                        posts.map((post, index) => (
                          <tr key={post._id} className="hover:bg-muted transition-colors text-color-muted">
                            <td className="">{(pagination.currentPage - 1) * 20 + index + 1}</td>
                            <td className="font-medium">{post.title}</td>
                            <td className="max-w-xs">
                              <div className="truncate" title={post.slug}>{post.slug || '-'}</div>
                            </td>
                            <td className="max-w-xs">
                              <div className="truncate" title={post.description}>
                                {post.description || post.desc || '-'}
                              </div>
                            </td>
                            <td className="">{post.primaryTech || '-'}</td>
                            <td className="">
                              <Badge variant={`${post.level === 'beginner' ? 'active' : post.level === 'intermediate' ? 'secondary' : post.level === 'advanced' ? 'destructive' : 'secondary'}`}>
                                {post.level?.toUpperCase() || '-'}
                              </Badge>
                              {/* <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                {post.level || '-'}
                              </span> */}
                            </td>
                            <td className="">{post.readingTime ? `${post.readingTime} min` : '-'}</td>
                            <td className="">{post.author?.name || '-'}</td>
                            <td className="">
                              <Badge variant={`draft`}>
                                {post.language?.toUpperCase() || '-'}
                              </Badge>
                              {/* <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                                {post.language?.toUpperCase() || '-'}
                              </span> */}
                            </td>
                            <td className="">
                              <Badge variant={`${post.status === 'active' ? 'active' : post.status === 'draft' ? 'draft' : 'archived'}`}>
                                {post.status?.toUpperCase() || '-'}
                              </Badge>

                            </td>
                            <td className="text-sm">
                              {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : '-'}
                            </td>
                            <td className="">
                              <div className="flex justify-center gap-2">
                                <Button variant="outline" size="icon" className="rounded-full"
                                  onClick={() => handleEditClick(post)}
                                  title="Edit"
                                >
                                  <Pencil />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Pagination - Fixed outside scroll, always visible */}
              {posts.length > 0 && pagination.totalPages > 1 && (
                <div className="border border-border p-2 rounded-md bg-background mt-1 shrink-0">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-sm text-gray-600">
                      Showing {((pagination.currentPage - 1) * 20) + 1} to{' '}
                      {Math.min(pagination.currentPage * 20, pagination.totalItems)} of{' '}
                      {pagination.totalItems} posts
                    </div>

                    <div className="flex items-center gap-1">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={handlePrevPage}
                        disabled={!pagination.hasPrevPage}
                      >
                        <ChevronLeft size={18} />
                      </Button>

                      {getPageNumbers().map((page) => {
                        const isActive = page === pagination.currentPage;

                        return (
                          <Button
                            key={page}
                            size="icon"
                            variant={isActive ? "destructive" : "outline"}
                            onClick={() => handlePageClick(page)}
                            // disabled={isActive}
                            className={`${isActive ? "text-white pointer-events-none" : ""}`}
                          >
                            {page}
                          </Button>
                        );
                      })}

                      <Button
                        variant="outline"
                        size="icon"
                        onClick={handleNextPage}
                        disabled={!pagination.hasNextPage}
                      >
                        <ChevronRight size={18} />
                      </Button>
                    </div>
                    {/* <div className="flex items-center gap-1">
                      <Button
                        variant={`outline`}
                        size="icon"
                        onClick={handlePrevPage}
                        disabled={!pagination.hasPrevPage}
                      // className={`p-2 rounded-lg border transition
                      //   ${pagination.hasPrevPage
                      //     ? 'bg-card text-foreground border-border hover:bg-secondary'
                      //     : 'bg-muted text-muted-foreground border-border cursor-not-allowed'
                      //   }`}
                      >
                        <ChevronLeft size={18} />
                      </Button>

                      {getPageNumbers().map((page) => (
                        <Button
                          variant={`outline`}
                          size="icon"
                          key={page}
                          onClick={() => handlePageClick(page)}
                          disabled={page === pagination.currentPage}
                        // className={`p-2 rounded-lg border transition
                        //   ${pagination.hasPrevPage
                        //     ? 'bg-card text-foreground border-border hover:bg-secondary'
                        //     : 'bg-muted text-muted-foreground border-border cursor-not-allowed'
                        //   }`}
                        >
                          {page}
                        </Button>
                      ))}

                      <Button
                        variant={`outline`}
                        size="icon"
                        onClick={handleNextPage}
                        disabled={!pagination.hasNextPage}
                      // className={`p-2 rounded-lg border transition
                      //   ${pagination.hasNextPage
                      //     ? 'bg-card text-foreground border-border hover:bg-secondary'
                      //     : 'bg-muted text-muted-foreground border-border cursor-not-allowed'
                      //   }`}
                      >
                        <ChevronRight size={18} />
                      </Button>
                    </div> */}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
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