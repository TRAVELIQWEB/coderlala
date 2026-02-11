'use client';

import api from '@/lib/axios';
import {
  X,
  Bold,
  Italic,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Strikethrough,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import 'prosemirror-view/style/prosemirror.css';
import {
  BlogFormData,
  BlogPrimaryTech,
  BlogTechStack,
  BlogTag,
  BlogLevel,
  BlogAuthorRole,
  BlogLanguage,
  BlogStatus,
} from '@/types/blog';

type Post = {
  _id: string;
  title: string;
  desc: string;
  content: string;
  status: 'active' | 'inactive';
};

interface Props {
  open: boolean;
  onClose: () => void;
  onCreate: (post: Post) => void;
}

export default function CreatePostModal({
  open,
  onClose,
  onCreate,
}: Props) {
  const [form, setForm] = useState<BlogFormData>({
    title: '',
    slug: '',
    shortDescription: '',
    content: '',
    primaryTech: BlogPrimaryTech.NESTJS,
    techStack: [],
    tags: [],
    level: BlogLevel.BEGINNER,
    readingTime: 5,
    authorName: '',
    authorRole: BlogAuthorRole.BACKEND,
    language: BlogLanguage.EN,
    status: BlogStatus.DRAFT,
    seoTitle: '',
    seoDescription: '',
    canonicalUrl: '',
  });

  const [errors, setErrors] = useState({
    title: '',
    slug: '',
    shortDescription: '',
    content: '',
    primaryTech: '',
    techStack: '',
    tags: '',
    level: '',
    readingTime: '',
    language: '',
    authorName: '',
    authorRole: '',
    seoTitle: '',
    seoDescription: '',
    canonicalUrl: '',
  });

  const [enableHtmlInsert, setEnableHtmlInsert] = useState(true);
  const [htmlInput, setHtmlInput] = useState('');
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* -----------------------
     EDITOR
  ----------------------- */

  const editor = useEditor({
    extensions: [StarterKit],
    content: '',
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: 'min-h-[200px] focus:outline-none p-2',
      },
    },
    onUpdate({ editor }) {
      const content = editor.getHTML();
      setForm((prev) => ({
        ...prev,
        content: content,
      }));

      if (content.trim().length < 10) {
        setErrors(prev => ({
          ...prev,
          content: 'Content must be at least 10 characters long'
        }));
      } else {
        setErrors(prev => ({
          ...prev,
          content: ''
        }));
      }
    },
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  /* -----------------------
     VALIDATION FUNCTIONS
  ----------------------- */

  const validateForm = () => {
    const newErrors = { ...errors };
    let isValid = true;

    if (!form.title.trim()) {
      newErrors.title = 'Title is required';
      isValid = false;
    }

    if (!form.slug.trim()) {
      newErrors.slug = 'Slug is required';
      isValid = false;
    }

    if (!form.shortDescription.trim()) {
      newErrors.shortDescription = 'Short description is required';
      isValid = false;
    }

    if (!form.content.trim() || form.content === '<p></p>') {
      newErrors.content = 'Content is required';
      isValid = false;
    }

    if (!form.primaryTech) {
      newErrors.primaryTech = 'Primary tech is required';
      isValid = false;
    }

    if (form.techStack.length === 0) {
      newErrors.techStack = 'Select at least one tech stack';
      isValid = false;
    }

    if (form.tags.length === 0) {
      newErrors.tags = 'Select at least one tag';
      isValid = false;
    }

    if (!form.authorName.trim()) {
      newErrors.authorName = 'Author name is required';
      isValid = false;
    }

    if (form.readingTime < 1) {
      newErrors.readingTime = 'Reading time must be at least 1 minute';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  /* -----------------------
     REMOVE <p> TAGS BEFORE SAVE
  ----------------------- */

  const removePTags = (html: string) => {
    if (!html) return '';
    return html
      .replace(/<p>/g, '')
      .replace(/<\/p>/g, '')
      .trim();
  };

  /* -----------------------
     INSERT CUSTOM HTML
  ----------------------- */

  const insertHtmlIntoEditor = () => {
    if (!editor || !htmlInput.trim()) return;

    editor
      .chain()
      .focus()
      .insertContent(htmlInput, {
        parseOptions: {
          preserveWhitespace: true,
        },
      })
      .run();

    setHtmlInput('');
  };

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');
  };

  /* -----------------------
     INPUT HANDLERS WITH VALIDATION
  ----------------------- */

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm(prev => ({
      ...prev,
      title: value,
      slug: generateSlug(value),
    }));

    if (!value.trim()) {
      setErrors(prev => ({ ...prev, title: 'Title is required' }));
    } else if (value.length < 3) {
      setErrors(prev => ({ ...prev, title: 'Title must be at least 3 characters long' }));
    } else if (value.length > 100) {
      setErrors(prev => ({ ...prev, title: 'Title cannot exceed 100 characters' }));
    } else {
      setErrors(prev => ({ ...prev, title: '' }));
    }
  };

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm(prev => ({ ...prev, slug: value }));

    if (!value.trim()) {
      setErrors(prev => ({ ...prev, slug: 'Slug is required' }));
    } else {
      setErrors(prev => ({ ...prev, slug: '' }));
    }
  };

  /* -----------------------
     SUBMIT
  ----------------------- */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editor) return;

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const rawHTML = editor.getHTML();
      const cleanedHTML = removePTags(rawHTML);

      const payload = {
        title: form.title,
        slug: form.slug,
        shortDescription: form.shortDescription,
        content: cleanedHTML,
        primaryTech: form.primaryTech,
        techStack: form.techStack,
        tags: form.tags,
        level: form.level,
        readingTime: form.readingTime,
        author: {
          name: form.authorName,
          role: form.authorRole,
        },
        language: form.language,
        status: form.status,
        seo: {
          title: form.seoTitle,
          description: form.seoDescription,
          canonicalUrl: form.canonicalUrl,
        },
      };

      // 📦 CONSOLE LOG - SUBMIT PAYLOAD
      console.log('🚀 ========== CREATE POST SUBMISSION ==========');
      console.log('📝 Form Data:', {
        title: form.title,
        slug: form.slug,
        shortDescription: form.shortDescription,
        contentLength: cleanedHTML.length,
        primaryTech: form.primaryTech,
        techStack: form.techStack,
        tags: form.tags,
        level: form.level,
        readingTime: form.readingTime,
        authorName: form.authorName,
        authorRole: form.authorRole,
        language: form.language,
        status: form.status,
        seoTitle: form.seoTitle,
        seoDescription: form.seoDescription,
        canonicalUrl: form.canonicalUrl,
      });

      console.log('📦 Full Payload:', payload);
      console.log('📄 Content HTML Preview:', cleanedHTML.substring(0, 200) + (cleanedHTML.length > 200 ? '...' : ''));
      console.log('🔗 API Endpoint: /admin/blogs/create');
      console.log('===============================================\n');

      const res = await api.post('/admin/blogs/create', payload);

      // ✅ CONSOLE LOG - SUCCESS RESPONSE
      console.log('✅ ========== CREATE POST SUCCESS ==========');
      console.log('Response:', res.data);
      console.log('Created Post ID:', res.data._id);
      console.log('============================================\n');

      onCreate({
        _id: res.data._id,
        title: form.title,
        desc: form.shortDescription,
        content: cleanedHTML,
        status: form.status === BlogStatus.PUBLISHED ? 'active' : 'inactive',
      });

      editor.commands.clearContent();

      setForm({
        title: '',
        slug: '',
        shortDescription: '',
        content: '',
        primaryTech: BlogPrimaryTech.NESTJS,
        techStack: [],
        tags: [],
        level: BlogLevel.BEGINNER,
        readingTime: 5,
        authorName: '',
        authorRole: BlogAuthorRole.BACKEND,
        language: BlogLanguage.EN,
        status: BlogStatus.DRAFT,
        seoTitle: '',
        seoDescription: '',
        canonicalUrl: '',
      });

      setErrors({
        title: '',
        slug: '',
        shortDescription: '',
        content: '',
        primaryTech: '',
        techStack: '',
        tags: '',
        level: '',
        readingTime: '',
        language: '',
        authorName: '',
        authorRole: '',
        seoTitle: '',
        seoDescription: '',
        canonicalUrl: '',
      });

      onClose();
    } catch (error: any) {
      // ❌ CONSOLE LOG - ERROR RESPONSE
      console.error('❌ ========== CREATE POST FAILED ==========');
      console.error('Error:', error);

      if (error.response) {
        console.error('Server Response:', error.response.data);
        console.error('Status Code:', error.response.status);
        console.error('Headers:', error.response.headers);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Request setup error:', error.message);
      }

      console.error('==========================================\n');
    } finally {
      setIsSubmitting(false);
    }
  };

  /* -----------------------
     TOOLBAR ACTIONS
  ----------------------- */

  const toggleBold = () => editor?.chain().focus().toggleBold().run();
  const toggleItalic = () => editor?.chain().focus().toggleItalic().run();
  const toggleStrike = () => editor?.chain().focus().toggleStrike().run();
  const toggleHeading1 = () =>
    editor?.chain().focus().toggleHeading({ level: 1 }).run();
  const toggleHeading2 = () =>
    editor?.chain().focus().toggleHeading({ level: 2 }).run();
  const toggleBulletList = () =>
    editor?.chain().focus().toggleBulletList().run();
  const toggleOrderedList = () =>
    editor?.chain().focus().toggleOrderedList().run();

  if (!open || !mounted) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 backdrop-blur-sm">
      <div className="bg-white text-gray-800 w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden border border-gray-200 flex flex-col h-[90vh]">

        {/* Fixed Header */}
        <div className="flex justify-between items-center px-8 py-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 flex-shrink-0">
          <h2 className="font-bold text-2xl text-gray-900">
            Create New Post
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Form Content */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-1 overflow-hidden"
        >
          <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
            {/* SECTION 1: Basic Information */}
            <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 space-y-5">
              <h3 className="text-lg font-semibold text-blue-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                Basic Information
              </h3>

              {/* Title - Slug - Primary Tech */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    placeholder="e.g. Complete Guide to NestJS"
                    className={`w-full border rounded-lg px-4 py-2.5 transition-all duration-200 hover:border-blue-400 hover:ring-2 hover:ring-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.title ? 'border-red-500 hover:border-red-400 hover:ring-red-200 focus:ring-red-500' : 'border-gray-300'
                      }`}
                    value={form.title}
                    onChange={handleTitleChange}
                  />
                  {errors.title && (
                    <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                  )}
                </div>

                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Slug <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    placeholder="nestjs-complete-guide"
                    className={`w-full border rounded-lg px-4 py-2.5 transition-all duration-200 hover:border-blue-400 hover:ring-2 hover:ring-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.slug ? 'border-red-500 hover:border-red-400 hover:ring-red-200 focus:ring-red-500' : 'border-gray-300'
                      }`}
                    value={form.slug}
                    onChange={handleSlugChange}
                  />
                  {errors.slug && (
                    <p className="mt-1 text-sm text-red-600">{errors.slug}</p>
                  )}
                </div>

                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Primary Tech <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={form.primaryTech}
                    onChange={(e) =>
                      setForm({ ...form, primaryTech: e.target.value as BlogPrimaryTech })
                    }
                    className="w-full capitalize border rounded-lg px-4 py-2.5 border-gray-300 transition-all duration-200 hover:border-blue-400 hover:ring-2 hover:ring-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {Object.values(BlogPrimaryTech).map((tech) => (
                      <option key={tech} value={tech}>
                        {tech}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Difficulty Level - Language - Reading Time */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Difficulty Level
                  </label>
                  <select
                    value={form.level}
                    onChange={(e) =>
                      setForm({ ...form, level: e.target.value as BlogLevel })
                    }
                    className="w-full border rounded-lg px-4 py-2.5 border-gray-300 transition-all duration-200 hover:border-blue-400 hover:ring-2 hover:ring-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value={BlogLevel.BEGINNER}>Beginner</option>
                    <option value={BlogLevel.INTERMEDIATE}>Intermediate</option>
                    <option value={BlogLevel.ADVANCED}>Advanced</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Language
                  </label>
                  <select
                    value={form.language}
                    onChange={(e) =>
                      setForm({ ...form, language: e.target.value as BlogLanguage })
                    }
                    className="w-full border rounded-lg px-4 py-2.5 border-gray-300 transition-all duration-200 hover:border-blue-400 hover:ring-2 hover:ring-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value={BlogLanguage.EN}>English</option>
                    <option value={BlogLanguage.HI}>Hindi</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Reading Time <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="1"
                      max="60"
                      placeholder="5"
                      className={`w-full border rounded-lg px-4 py-2.5 transition-all duration-200 hover:border-blue-400 hover:ring-2 hover:ring-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.readingTime ? 'border-red-500 hover:border-red-400 hover:ring-red-200 focus:ring-red-500' : 'border-gray-300'
                        }`}
                      value={form.readingTime}
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        setForm({ ...form, readingTime: value });
                        if (value < 1) {
                          setErrors(prev => ({ ...prev, readingTime: 'Reading time must be at least 1 minute' }));
                        } else {
                          setErrors(prev => ({ ...prev, readingTime: '' }));
                        }
                      }}
                    />
                    <span className="text-sm text-gray-500">min</span>
                  </div>
                  {errors.readingTime && (
                    <p className="mt-1 text-sm text-red-600">{errors.readingTime}</p>
                  )}
                </div>
              </div>

              {/* Tech Stack & Tags */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tech Stack <span className="text-red-500">*</span>
                  </label>
                  <select
                    multiple
                    size={4}
                    value={form.techStack}
                    onChange={(e) => {
                      const values = Array.from(
                        e.target.selectedOptions,
                        (option) => option.value as BlogTechStack
                      );
                      setForm({ ...form, techStack: values });
                      if (values.length > 0) {
                        setErrors(prev => ({ ...prev, techStack: '' }));
                      }
                    }}
                    className={`w-full capitalize border rounded-lg px-4 py-2.5 transition-all duration-200 hover:border-blue-400 hover:ring-2 hover:ring-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.techStack ? 'border-red-500 hover:border-red-400 hover:ring-red-200 focus:ring-red-500' : 'border-gray-300'
                      }`}
                  >
                    {Object.values(BlogTechStack).map((tech) => (
                      <option key={tech} value={tech}>
                        {tech}
                      </option>
                    ))}
                  </select>
                  {errors.techStack && (
                    <p className="mt-1 text-sm text-red-600">{errors.techStack}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tags <span className="text-red-500">*</span>
                  </label>
                  <select
                    multiple
                    size={4}
                    value={form.tags}
                    onChange={(e) => {
                      const values = Array.from(
                        e.target.selectedOptions,
                        (option) => option.value as BlogTag
                      );
                      setForm({ ...form, tags: values });
                      if (values.length > 0) {
                        setErrors(prev => ({ ...prev, tags: '' }));
                      }
                    }}
                    className={`w-full capitalize border rounded-lg px-4 py-2.5 transition-all duration-200 hover:border-blue-400 hover:ring-2 hover:ring-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.tags ? 'border-red-500 hover:border-red-400 hover:ring-red-200 focus:ring-red-500' : 'border-gray-300'
                      }`}
                  >
                    {Object.values(BlogTag).map((tag) => (
                      <option key={tag} value={tag}>
                        {tag}
                      </option>
                    ))}
                  </select>
                  {errors.tags && (
                    <p className="mt-1 text-sm text-red-600">{errors.tags}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple</p>
                </div>
              </div>

              {/* Short Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Short Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  placeholder="Brief summary of your blog post (max 200 characters)"
                  rows={3}
                  className={`w-full border rounded-lg px-4 py-2.5 transition-all duration-200 hover:border-blue-400 hover:ring-2 hover:ring-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.shortDescription ? 'border-red-500 hover:border-red-400 hover:ring-red-200 focus:ring-red-500' : 'border-gray-300'
                    }`}
                  value={form.shortDescription}
                  onChange={(e) => {
                    setForm({ ...form, shortDescription: e.target.value });
                    if (e.target.value.trim()) {
                      setErrors(prev => ({ ...prev, shortDescription: '' }));
                    }
                  }}
                />
                <div className="flex justify-between mt-1">
                  {errors.shortDescription ? (
                    <p className="text-sm text-red-600">{errors.shortDescription}</p>
                  ) : (
                    <p className="text-sm text-gray-500">
                      {form.shortDescription.length}/200 characters
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* SECTION 2: Author Information */}
            <div className="bg-purple-50/50 p-6 rounded-xl border border-purple-100 space-y-4">
              <h3 className="text-lg font-semibold text-purple-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                Author Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Author Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="John Doe"
                    className={`w-full border rounded-lg px-4 py-2.5 transition-all duration-200 hover:border-purple-400 hover:ring-2 hover:ring-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${errors.authorName ? 'border-red-500 hover:border-red-400 hover:ring-red-200 focus:ring-red-500' : 'border-gray-300'
                      }`}
                    value={form.authorName}
                    onChange={(e) => {
                      setForm({ ...form, authorName: e.target.value });
                      if (e.target.value.trim()) {
                        setErrors(prev => ({ ...prev, authorName: '' }));
                      }
                    }}
                  />
                  {errors.authorName && (
                    <p className="mt-1 text-sm text-red-600">{errors.authorName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Author Role
                  </label>
                  <select
                    value={form.authorRole}
                    onChange={(e) =>
                      setForm({ ...form, authorRole: e.target.value as BlogAuthorRole })
                    }
                    className="w-full capitalize border rounded-lg px-4 py-2.5 border-gray-300 transition-all duration-200 hover:border-purple-400 hover:ring-2 hover:ring-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {Object.values(BlogAuthorRole).map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* SECTION 3: SEO Settings */}
            <div className="bg-green-50/50 p-6 rounded-xl border border-green-100 space-y-4">
              <h3 className="text-lg font-semibold text-green-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                SEO Settings
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    SEO Title
                  </label>
                  <input
                    placeholder="Optimized title for search engines"
                    className="w-full border rounded-lg px-4 py-2.5 border-gray-300 transition-all duration-200 hover:border-green-400 hover:ring-2 hover:ring-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={form.seoTitle}
                    onChange={(e) =>
                      setForm({ ...form, seoTitle: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Canonical URL
                  </label>
                  <input
                    placeholder="https://example.com/original-post"
                    className="w-full border rounded-lg px-4 py-2.5 border-gray-300 transition-all duration-200 hover:border-green-400 hover:ring-2 hover:ring-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={form.canonicalUrl}
                    onChange={(e) =>
                      setForm({ ...form, canonicalUrl: e.target.value })
                    }
                  />
                </div>
                <div className='md:col-span-2'>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    SEO Description
                  </label>
                  <textarea
                    placeholder="Meta description for search results"
                    rows={2}
                    className="w-full border rounded-lg px-4 py-2.5 border-gray-300 transition-all duration-200 hover:border-green-400 hover:ring-2 hover:ring-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={form.seoDescription}
                    onChange={(e) =>
                      setForm({ ...form, seoDescription: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            {/* SECTION 4: Content */}
            <div className="bg-amber-50/50 p-6 rounded-xl border border-amber-100 space-y-4">
              <h3 className="text-lg font-semibold text-amber-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
                Content
              </h3>

              {/* Status and HTML Insert Toggle - Side by Side */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={enableHtmlInsert}
                      onChange={(e) => setEnableHtmlInsert(e.target.checked)}
                      className="rounded border-gray-300 text-amber-600 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-all duration-200"
                    />
                    <span>Insert HTML (Advanced)</span>
                  </label>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">Post Status:</span>
                  <select
                    value={form.status}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        status: e.target.value as BlogStatus,
                      })
                    }
                    className="border rounded-lg px-4 py-2 border-gray-300 transition-all duration-200 hover:border-amber-400 hover:ring-2 hover:ring-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                  >
                    <option value={BlogStatus.DRAFT}>Draft</option>
                    <option value={BlogStatus.PUBLISHED}>Published</option>
                  </select>
                </div>
              </div>

              {/* Custom HTML Section */}
              {enableHtmlInsert && (
                <div className="bg-white p-4 rounded-lg border border-amber-200">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Custom HTML
                  </label>
                  <textarea
                    placeholder="Paste HTML code here..."
                    rows={4}
                    className="w-full border rounded-lg p-3 font-mono text-sm border-gray-300 transition-all duration-200 hover:border-amber-400 hover:ring-2 hover:ring-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    value={htmlInput}
                    onChange={(e) => setHtmlInput(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={insertHtmlIntoEditor}
                    className="mt-3 bg-amber-600 text-white! px-4 py-2 rounded-lg hover:bg-amber-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  >
                    Insert HTML at Cursor
                  </button>
                </div>
              )}

              {/* Content Editor */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content <span className="text-red-500">*</span>
                </label>

                {/* Toolbar */}
                <div className="flex flex-wrap gap-1 border border-gray-300 rounded-t-lg p-2 bg-gray-50">
                  <button
                    type="button"
                    onClick={toggleBold}
                    className={`p-2 rounded transition-all duration-200 ${editor?.isActive('bold')
                      ? 'bg-blue-500 text-white ring-2 ring-blue-300'
                      : 'hover:bg-gray-200 text-gray-700 hover:ring-2 hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                      }`}
                    title="Bold"
                  >
                    <Bold size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={toggleItalic}
                    className={`p-2 rounded transition-all duration-200 ${editor?.isActive('italic')
                      ? 'bg-blue-500 text-white ring-2 ring-blue-300'
                      : 'hover:bg-gray-200 text-gray-700 hover:ring-2 hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                      }`}
                    title="Italic"
                  >
                    <Italic size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={toggleStrike}
                    className={`p-2 rounded transition-all duration-200 ${editor?.isActive('strike')
                      ? 'bg-blue-500 text-white ring-2 ring-blue-300'
                      : 'hover:bg-gray-200 text-gray-700 hover:ring-2 hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                      }`}
                    title="Strikethrough"
                  >
                    <Strikethrough size={18} />
                  </button>
                  <div className="w-px h-6 bg-gray-300 mx-1" />
                  <button
                    type="button"
                    onClick={toggleHeading1}
                    className={`p-2 rounded transition-all duration-200 ${editor?.isActive('heading', { level: 1 })
                      ? 'bg-blue-500 text-white! ring-2 ring-blue-300'
                      : 'hover:bg-gray-200 text-gray-700 hover:ring-2 hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                      }`}
                    title="Heading 1"
                  >
                    <Heading1 size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={toggleHeading2}
                    className={`p-2 rounded transition-all duration-200 ${editor?.isActive('heading', { level: 2 })
                      ? 'bg-blue-500 text-white! ring-2 ring-blue-300'
                      : 'hover:bg-gray-200 text-gray-700 hover:ring-2 hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                      }`}
                    title="Heading 2"
                  >
                    <Heading2 size={18} />
                  </button>
                  <div className="w-px h-6 bg-gray-300 mx-1" />
                  <button
                    type="button"
                    onClick={toggleBulletList}
                    className={`p-2 rounded transition-all duration-200 ${editor?.isActive('bulletList')
                      ? 'bg-blue-500 text-white! ring-2 ring-blue-300'
                      : 'hover:bg-gray-200 text-gray-700 hover:ring-2 hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                      }`}
                    title="Bullet List"
                  >
                    <List size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={toggleOrderedList}
                    className={`p-2 rounded transition-all duration-200 ${editor?.isActive('orderedList')
                      ? 'bg-blue-500 text-white! ring-2 ring-blue-300'
                      : 'hover:bg-gray-200 text-gray-700 hover:ring-2 hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                      }`}
                    title="Ordered List"
                  >
                    <ListOrdered size={18} />
                  </button>
                </div>

                {/* Editor */}
                <div className={`border border-t-0 rounded-b-lg bg-white p-4 transition-all duration-200 ${errors.content ? 'border-red-500' : 'border-gray-300 hover:border-blue-400'
                  }`}>
                  <EditorContent editor={editor} />
                </div>
                {errors.content && (
                  <p className="mt-1 text-sm text-red-600">{errors.content}</p>
                )}
                <p className="text-xs text-gray-500 mt-2">
                  Tip: You can use the toolbar above to format your content, or paste HTML directly.
                </p>
              </div>
            </div>
          </div>

          {/* Sticky Footer with Form Actions */}
          <div className="flex-shrink-0 border-t border-gray-200 bg-white px-8 py-4 flex justify-end gap-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`px-6 py-2.5 bg-blue-600 text-white! rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Creating...
                </span>
              ) : (
                'Create Post'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}