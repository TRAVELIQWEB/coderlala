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

// Import types from separate file
import {
  BlogPrimaryTech,
  BlogTechStack,
  BlogTag,
  BlogLevel,
  BlogAuthorRole,
  BlogLanguage,
  BlogStatus,
  CreateBlogDto,
  ApiResponse,
  defaultFormData
} from '@/types/blog';

interface Props {
  open: boolean;
  onClose: () => void;
  onCreate: (post: any) => void;
}

export default function CreatePostModal({ open, onClose, onCreate }: Props) {
  const [form, setForm] = useState<CreateBlogDto>(defaultFormData);
  const [errors, setErrors] = useState({
    title: '',
    slug: '',
    description: '',
    content: '',
    primaryTech: '',
    techStacks: '',
    tags: '',
    level: '',
    readingTime: '',
    language: '',
    authorName: '',
    authorRole: '',
    seoTitle: '',
    seoDescription: '',
    canonicalUrl: '', // Now required
    status: '',
  });

  const [enableHtmlInsert, setEnableHtmlInsert] = useState(false);
  const [htmlInput, setHtmlInput] = useState('');
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Initialize editor - ONLY StarterKit
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
      const text = editor.getText();
      setForm((prev) => ({
        ...prev,
        content: content,
      }));

      if (!content.trim() || content === '<p></p>' || text.trim().length < 10) {
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

  useEffect(() => {
    return () => {
      if (editor) {
        editor.destroy();
      }
    };
  }, [editor]);

  // Helper function to generate slug from title
  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  // ============= VALIDATION - ALL FIELDS REQUIRED INCLUDING CANONICAL URL =============
  const validateForm = () => {
    const newErrors = { ...errors };
    let isValid = true;

    // Title validation
    if (!form.title.trim()) {
      newErrors.title = 'Title is required';
      isValid = false;
    } else if (form.title.length < 3) {
      newErrors.title = 'Title must be at least 3 characters';
      isValid = false;
    } else {
      newErrors.title = '';
    }

    // Slug validation
    if (!form.slug.trim()) {
      newErrors.slug = 'Slug is required';
      isValid = false;
    } else {
      newErrors.slug = '';
    }

    // Description validation
    if (!form.description.trim()) {
      newErrors.description = 'Description is required';
      isValid = false;
    } else if (form.description.length > 200) {
      newErrors.description = 'Description must be less than 200 characters';
      isValid = false;
    } else {
      newErrors.description = '';
    }

    // Content validation
    const textContent = editor?.getText() || '';
    if (!form.content.trim() || form.content === '<p></p>' || textContent.trim().length < 10) {
      newErrors.content = 'Content is required and must be at least 10 characters';
      isValid = false;
    } else {
      newErrors.content = '';
    }

    // Primary tech validation
    if (!form.primaryTech) {
      newErrors.primaryTech = 'Primary tech is required';
      isValid = false;
    } else {
      newErrors.primaryTech = '';
    }

    // Tech stacks validation
    if (form.techStacks.length === 0) {
      newErrors.techStacks = 'Select at least one tech stack';
      isValid = false;
    } else {
      newErrors.techStacks = '';
    }

    // Tags validation
    if (form.tags.length === 0) {
      newErrors.tags = 'Select at least one tag';
      isValid = false;
    } else {
      newErrors.tags = '';
    }

    // Level validation
    if (!form.level) {
      newErrors.level = 'Difficulty level is required';
      isValid = false;
    } else {
      newErrors.level = '';
    }

    // Reading time validation
    if (!form.readingTime || form.readingTime < 1) {
      newErrors.readingTime = 'Reading time must be at least 1 minute';
      isValid = false;
    } else if (form.readingTime > 60) {
      newErrors.readingTime = 'Reading time cannot exceed 60 minutes';
      isValid = false;
    } else {
      newErrors.readingTime = '';
    }

    // Language validation
    if (!form.language) {
      newErrors.language = 'Language is required';
      isValid = false;
    } else {
      newErrors.language = '';
    }

    // Author name validation
    if (!form.author.name.trim()) {
      newErrors.authorName = 'Author name is required';
      isValid = false;
    } else {
      newErrors.authorName = '';
    }

    // Author role validation
    if (!form.author.role) {
      newErrors.authorRole = 'Author role is required';
      isValid = false;
    } else {
      newErrors.authorRole = '';
    }

    // Status validation
    if (!form.status) {
      newErrors.status = 'Status is required';
      isValid = false;
    } else {
      newErrors.status = '';
    }

    // SEO Title validation - REQUIRED
    if (!form.seo.title.trim()) {
      newErrors.seoTitle = 'SEO title is required';
      isValid = false;
    } else {
      newErrors.seoTitle = '';
    }

    // SEO Description validation - REQUIRED
    if (!form.seo.description.trim()) {
      newErrors.seoDescription = 'SEO description is required';
      isValid = false;
    } else {
      newErrors.seoDescription = '';
    }

    // Canonical URL validation - NOW REQUIRED
    if (!form.seo.canonicalUrl?.trim()) {
      newErrors.canonicalUrl = 'Canonical URL is required';
      isValid = false;
    } else {
      // Basic URL validation
      const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
      if (!urlPattern.test(form.seo.canonicalUrl.trim())) {
        newErrors.canonicalUrl = 'Please enter a valid URL';
        isValid = false;
      } else {
        newErrors.canonicalUrl = '';
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  // ============= HANDLERS =============
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
    } else {
      setErrors(prev => ({ ...prev, title: '' }));
    }
  };

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '');
    setForm(prev => ({ ...prev, slug: value }));

    if (!value.trim()) {
      setErrors(prev => ({ ...prev, slug: 'Slug is required' }));
    } else {
      setErrors(prev => ({ ...prev, slug: '' }));
    }
  };

  // Insert HTML at cursor
  const insertHtmlIntoEditor = () => {
    if (!editor) {
      setSubmitError('Editor not initialized');
      return;
    }
    
    if (!htmlInput.trim()) {
      setSubmitError('Please enter HTML content to insert');
      return;
    }

    try {
      // Basic HTML validation
      if (!htmlInput.includes('<') || !htmlInput.includes('>')) {
        setSubmitError('Invalid HTML: Must contain HTML tags');
        return;
      }

      // Insert at cursor position
      editor
        .chain()
        .focus()
        .insertContent(htmlInput)
        .run();

      setHtmlInput('');
      setSubmitError(null);
      
    } catch (error) {
      setSubmitError('Failed to insert HTML: Invalid format');
    }
  };

  // ============= TOOLBAR ACTIONS =============
  const toggleBold = () => editor?.chain().focus().toggleBold().run();
  const toggleItalic = () => editor?.chain().focus().toggleItalic().run();
  const toggleStrike = () => editor?.chain().focus().toggleStrike().run();
  const toggleHeading1 = () => editor?.chain().focus().toggleHeading({ level: 1 }).run();
  const toggleHeading2 = () => editor?.chain().focus().toggleHeading({ level: 2 }).run();
  const toggleBulletList = () => editor?.chain().focus().toggleBulletList().run();
  const toggleOrderedList = () => editor?.chain().focus().toggleOrderedList().run();

  // ============= RESET FORM =============
  const resetForm = () => {
    setForm({ ...defaultFormData });
    setErrors({
      title: '',
      slug: '',
      description: '',
      content: '',
      primaryTech: '',
      techStacks: '',
      tags: '',
      level: '',
      readingTime: '',
      language: '',
      authorName: '',
      authorRole: '',
      seoTitle: '',
      seoDescription: '',
      canonicalUrl: '',
      status: '',
    });
    setSubmitError(null);
    setHtmlInput('');
    if (editor) {
      editor.commands.clearContent();
    }
  };

  // ============= SUBMIT HANDLER =============
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!editor) {
      setSubmitError('Editor not initialized');
      return;
    }

    if (!validateForm()) {
      // Scroll to first error
      const firstError = Object.entries(errors).find(([_, value]) => value !== '');
      if (firstError) {
        const element = document.querySelector(`[name="${firstError[0]}"]`);
        element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        title: form.title.trim(),
        content: editor.getHTML(),
        slug: form.slug.trim(),
        primaryTech: form.primaryTech,
        techStacks: form.techStacks,
        tags: form.tags,
        level: form.level,
        readingTime: Number(form.readingTime),
        author: {
          name: form.author.name.trim(),
          role: form.author.role,
        },
        language: form.language,
        seo: {
          title: form.seo.title.trim(),
          description: form.seo.description.trim(),
          canonicalUrl: form.seo.canonicalUrl?.trim(), // Now required
        },
        description: form.description.trim(),
        status: form.status,
      };



      const response = await api.post<ApiResponse>("/admin/blogs/create", payload);
      
      console.log("✅ SUCCESS:", response.data);
      
      onCreate(response.data);
      resetForm();
      onClose();

    } catch (err: any) {
      console.error("❌ ERROR:", err);
      
      if (err.response) {
        const errorMessage = err.response.data?.message;
        if (Array.isArray(errorMessage)) {
          setSubmitError(errorMessage.join(', '));
        } else {
          setSubmitError(errorMessage || `Server error: ${err.response.status}`);
        }
      } else if (err.request) {
        setSubmitError('No response from server. Check if backend is running.');
      } else {
        setSubmitError(err.message || 'Failed to create blog post');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

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
            onClick={() => {
              resetForm();
              onClose();
            }}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <X size={20} />
          </button>
        </div>

        {/* Error Alert - Shows validation and server errors */}
        {submitError && (
          <div className="mx-8 mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 font-medium">Error: {submitError}</p>
          </div>
        )}

        {/* Scrollable Form Content */}
        <form onSubmit={handleSubmit} className="flex flex-col flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
            
            {/* SECTION 1: Basic Information */}
            <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 space-y-5">
              <h3 className="text-lg font-semibold text-blue-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                Basic Information <span className="text-red-500 text-sm">(All fields required)</span>
              </h3>

              {/* Title - Slug */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="title"
                    placeholder="e.g. Complete Guide to NestJS"
                    className={`w-full border rounded-lg px-4 py-2.5 transition-all duration-200 hover:border-blue-400 hover:ring-2 hover:ring-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.title ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                    value={form.title}
                    onChange={handleTitleChange}
                  />
                  {errors.title && (
                    <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Slug <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="slug"
                    placeholder="nestjs-complete-guide"
                    className={`w-full border rounded-lg px-4 py-2.5 transition-all duration-200 hover:border-blue-400 hover:ring-2 hover:ring-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.slug ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                    value={form.slug}
                    onChange={handleSlugChange}
                  />
                  {errors.slug && (
                    <p className="mt-1 text-sm text-red-600">{errors.slug}</p>
                  )}
                </div>
              </div>

              {/* Primary Tech - Level - Language */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Primary Tech <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="primaryTech"
                    value={form.primaryTech}
                    onChange={(e) => {
                      setForm({ ...form, primaryTech: e.target.value as BlogPrimaryTech });
                      setErrors(prev => ({ ...prev, primaryTech: '' }));
                    }}
                    className={`w-full capitalize border rounded-lg px-4 py-2.5 transition-all duration-200 hover:border-blue-400 hover:ring-2 hover:ring-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.primaryTech ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Primary Tech</option>
                    {Object.values(BlogPrimaryTech).map((tech) => (
                      <option key={tech} value={tech}>
                        {tech}
                      </option>
                    ))}
                  </select>
                  {errors.primaryTech && (
                    <p className="mt-1 text-sm text-red-600">{errors.primaryTech}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Difficulty Level <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="level"
                    value={form.level}
                    onChange={(e) => {
                      setForm({ ...form, level: e.target.value as BlogLevel });
                      setErrors(prev => ({ ...prev, level: '' }));
                    }}
                    className={`w-full border rounded-lg px-4 py-2.5 transition-all duration-200 hover:border-blue-400 hover:ring-2 hover:ring-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.level ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Level</option>
                    {Object.values(BlogLevel).map((level) => (
                      <option key={level} value={level}>
                        {level.charAt(0).toUpperCase() + level.slice(1)}
                      </option>
                    ))}
                  </select>
                  {errors.level && (
                    <p className="mt-1 text-sm text-red-600">{errors.level}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Language <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="language"
                    value={form.language}
                    onChange={(e) => {
                      setForm({ ...form, language: e.target.value as BlogLanguage });
                      setErrors(prev => ({ ...prev, language: '' }));
                    }}
                    className={`w-full border rounded-lg px-4 py-2.5 transition-all duration-200 hover:border-blue-400 hover:ring-2 hover:ring-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.language ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Language</option>
                    {Object.values(BlogLanguage).map((lang) => (
                      <option key={lang} value={lang}>
                        {lang === BlogLanguage.EN ? 'English' : 'Hindi'}
                      </option>
                    ))}
                  </select>
                  {errors.language && (
                    <p className="mt-1 text-sm text-red-600">{errors.language}</p>
                  )}
                </div>
              </div>

              {/* Reading Time & Status */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Reading Time (minutes) <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      name="readingTime"
                      type="number"
                      min="1"
                      max="60"
                      placeholder="5"
                      className={`w-full border rounded-lg px-4 py-2.5 transition-all duration-200 hover:border-blue-400 hover:ring-2 hover:ring-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.readingTime ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                      value={form.readingTime}
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        setForm({ ...form, readingTime: value });
                        if (value < 1) {
                          setErrors(prev => ({ ...prev, readingTime: 'Reading time must be at least 1 minute' }));
                        } else if (value > 60) {
                          setErrors(prev => ({ ...prev, readingTime: 'Reading time cannot exceed 60 minutes' }));
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="status"
                    value={form.status}
                    onChange={(e) => {
                      setForm({ ...form, status: e.target.value as BlogStatus });
                      setErrors(prev => ({ ...prev, status: '' }));
                    }}
                    className={`w-full border rounded-lg px-4 py-2.5 border-gray-300 transition-all duration-200 hover:border-blue-400 hover:ring-2 hover:ring-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.status ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Status</option>
                    {Object.values(BlogStatus).map((status) => (
                      <option key={status} value={status}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </option>
                    ))}
                  </select>
                  {errors.status && (
                    <p className="mt-1 text-sm text-red-600">{errors.status}</p>
                  )}
                </div>
              </div>

              {/* Tech Stacks - CHECKBOXES */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tech Stacks <span className="text-red-500">*</span>
                </label>
                <div className={`border rounded-lg p-4 ${errors.techStacks ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-h-48 overflow-y-auto">
                    {Object.values(BlogTechStack).map((tech) => (
                      <label key={tech} className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-50 p-1.5 rounded">
                        <input
                          type="checkbox"
                          checked={form.techStacks.includes(tech)}
                          onChange={(e) => {
                            const values = e.target.checked
                              ? [...form.techStacks, tech]
                              : form.techStacks.filter(t => t !== tech);
                            setForm({ ...form, techStacks: values });
                            if (values.length > 0) {
                              setErrors(prev => ({ ...prev, techStacks: '' }));
                            }
                          }}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="capitalize">{tech}</span>
                      </label>
                    ))}
                  </div>
                </div>
                {errors.techStacks && (
                  <p className="mt-1 text-sm text-red-600">{errors.techStacks}</p>
                )}
              </div>

              {/* Tags - CHECKBOXES */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tags <span className="text-red-500">*</span>
                </label>
                <div className={`border rounded-lg p-4 ${errors.tags ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-48 overflow-y-auto">
                    {Object.values(BlogTag).map((tag) => (
                      <label key={tag} className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-50 p-1.5 rounded">
                        <input
                          type="checkbox"
                          checked={form.tags.includes(tag)}
                          onChange={(e) => {
                            const values = e.target.checked
                              ? [...form.tags, tag]
                              : form.tags.filter(t => t !== tag);
                            setForm({ ...form, tags: values });
                            if (values.length > 0) {
                              setErrors(prev => ({ ...prev, tags: '' }));
                            }
                          }}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="capitalize">{tag}</span>
                      </label>
                    ))}
                  </div>
                </div>
                {errors.tags && (
                  <p className="mt-1 text-sm text-red-600">{errors.tags}</p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  placeholder="Brief summary of your blog post (max 200 characters)"
                  rows={3}
                  maxLength={200}
                  className={`w-full border rounded-lg px-4 py-2.5 transition-all duration-200 hover:border-blue-400 hover:ring-2 hover:ring-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.description ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  value={form.description}
                  onChange={(e) => {
                    setForm({ ...form, description: e.target.value });
                    if (e.target.value.trim()) {
                      setErrors(prev => ({ ...prev, description: '' }));
                    }
                  }}
                />
                <div className="flex justify-between mt-1">
                  {errors.description ? (
                    <p className="text-sm text-red-600">{errors.description}</p>
                  ) : (
                    <p className="text-sm text-gray-500">
                      {form.description.length}/200 characters
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* SECTION 2: Author Information */}
            <div className="bg-purple-50/50 p-6 rounded-xl border border-purple-100 space-y-4">
              <h3 className="text-lg font-semibold text-purple-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                Author Information <span className="text-red-500 text-sm">(All fields required)</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Author Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="authorName"
                    placeholder="John Doe"
                    className={`w-full border rounded-lg px-4 py-2.5 transition-all duration-200 hover:border-purple-400 hover:ring-2 hover:ring-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                      errors.authorName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                    value={form.author.name}
                    onChange={(e) => {
                      setForm({ 
                        ...form, 
                        author: { ...form.author, name: e.target.value } 
                      });
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
                    Author Role <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="authorRole"
                    value={form.author.role}
                    onChange={(e) => {
                      setForm({ 
                        ...form, 
                        author: { ...form.author, role: e.target.value as BlogAuthorRole } 
                      });
                      setErrors(prev => ({ ...prev, authorRole: '' }));
                    }}
                    className={`w-full capitalize border rounded-lg px-4 py-2.5 transition-all duration-200 hover:border-purple-400 hover:ring-2 hover:ring-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                      errors.authorRole ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Author Role</option>
                    {Object.values(BlogAuthorRole).map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                  {errors.authorRole && (
                    <p className="mt-1 text-sm text-red-600">{errors.authorRole}</p>
                  )}
                </div>
              </div>
            </div>

            {/* SECTION 3: SEO Settings - ALL FIELDS REQUIRED INCLUDING CANONICAL URL */}
            <div className="bg-green-50/50 p-6 rounded-xl border border-green-100 space-y-4">
              <h3 className="text-lg font-semibold text-green-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                SEO Settings <span className="text-red-500 text-sm">(All fields required)</span>
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    SEO Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="seoTitle"
                    placeholder="Optimized title for search engines"
                    className={`w-full border rounded-lg px-4 py-2.5 transition-all duration-200 hover:border-green-400 hover:ring-2 hover:ring-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.seoTitle ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                    value={form.seo.title}
                    onChange={(e) => {
                      setForm({ 
                        ...form, 
                        seo: { ...form.seo, title: e.target.value } 
                      });
                      if (e.target.value.trim()) {
                        setErrors(prev => ({ ...prev, seoTitle: '' }));
                      }
                    }}
                  />
                  {errors.seoTitle && (
                    <p className="mt-1 text-sm text-red-600">{errors.seoTitle}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    SEO Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="seoDescription"
                    placeholder="Meta description for search results"
                    rows={2}
                    className={`w-full border rounded-lg px-4 py-2.5 transition-all duration-200 hover:border-green-400 hover:ring-2 hover:ring-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.seoDescription ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                    value={form.seo.description}
                    onChange={(e) => {
                      setForm({ 
                        ...form, 
                        seo: { ...form.seo, description: e.target.value } 
                      });
                      if (e.target.value.trim()) {
                        setErrors(prev => ({ ...prev, seoDescription: '' }));
                      }
                    }}
                  />
                  {errors.seoDescription && (
                    <p className="mt-1 text-sm text-red-600">{errors.seoDescription}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Canonical URL <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="canonicalUrl"
                    placeholder="https://example.com/original-post"
                    className={`w-full border rounded-lg px-4 py-2.5 transition-all duration-200 hover:border-green-400 hover:ring-2 hover:ring-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.canonicalUrl ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                    value={form.seo.canonicalUrl}
                    onChange={(e) => {
                      setForm({ 
                        ...form, 
                        seo: { ...form.seo, canonicalUrl: e.target.value } 
                      });
                      if (e.target.value.trim()) {
                        // Basic URL validation on change
                        const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
                        if (!urlPattern.test(e.target.value.trim())) {
                          setErrors(prev => ({ ...prev, canonicalUrl: 'Please enter a valid URL' }));
                        } else {
                          setErrors(prev => ({ ...prev, canonicalUrl: '' }));
                        }
                      } else {
                        setErrors(prev => ({ ...prev, canonicalUrl: 'Canonical URL is required' }));
                      }
                    }}
                  />
                  {errors.canonicalUrl && (
                    <p className="mt-1 text-sm text-red-600">{errors.canonicalUrl}</p>
                  )}
                </div>
              </div>
            </div>

            {/* SECTION 4: Content */}
            <div className="bg-amber-50/50 p-6 rounded-xl border border-amber-100 space-y-4">
              <h3 className="text-lg font-semibold text-amber-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
                Content <span className="text-red-500 text-sm">(Required - Min 10 characters)</span>
              </h3>

              {/* HTML Insert Toggle */}
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

              {/* Custom HTML Section */}
              {enableHtmlInsert && (
                <div className="bg-white p-4 rounded-lg border border-amber-200">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Custom HTML
                  </label>
                  <textarea
                    placeholder="Paste HTML code here... (e.g., <div class='highlight'>Your content</div>)"
                    rows={4}
                    className="w-full border rounded-lg p-3 font-mono text-sm border-gray-300 transition-all duration-200 hover:border-amber-400 hover:ring-2 hover:ring-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    value={htmlInput}
                    onChange={(e) => setHtmlInput(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={insertHtmlIntoEditor}
                    className="mt-3 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
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
                    className={`p-2 rounded transition-all duration-200 ${
                      editor?.isActive('bold')
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
                    className={`p-2 rounded transition-all duration-200 ${
                      editor?.isActive('italic')
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
                    className={`p-2 rounded transition-all duration-200 ${
                      editor?.isActive('strike')
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
                    className={`p-2 rounded transition-all duration-200 ${
                      editor?.isActive('heading', { level: 1 })
                        ? 'bg-blue-500 text-white ring-2 ring-blue-300'
                        : 'hover:bg-gray-200 text-gray-700 hover:ring-2 hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    }`}
                    title="Heading 1"
                  >
                    <Heading1 size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={toggleHeading2}
                    className={`p-2 rounded transition-all duration-200 ${
                      editor?.isActive('heading', { level: 2 })
                        ? 'bg-blue-500 text-white ring-2 ring-blue-300'
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
                    className={`p-2 rounded transition-all duration-200 ${
                      editor?.isActive('bulletList')
                        ? 'bg-blue-500 text-white ring-2 ring-blue-300'
                        : 'hover:bg-gray-200 text-gray-700 hover:ring-2 hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    }`}
                    title="Bullet List"
                  >
                    <List size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={toggleOrderedList}
                    className={`p-2 rounded transition-all duration-200 ${
                      editor?.isActive('orderedList')
                        ? 'bg-blue-500 text-white ring-2 ring-blue-300'
                        : 'hover:bg-gray-200 text-gray-700 hover:ring-2 hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    }`}
                    title="Ordered List"
                  >
                    <ListOrdered size={18} />
                  </button>
                </div>

                {/* Editor */}
                <div className={`border border-t-0 rounded-b-lg bg-white p-4 transition-all duration-200 ${
                  errors.content ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-blue-400'
                }`}>
                  <EditorContent editor={editor} />
                </div>
                {errors.content && (
                  <p className="mt-1 text-sm text-red-600">{errors.content}</p>
                )}
                <p className="mt-1 text-xs text-gray-500">
                  Characters: {editor?.getText().length || 0} (Minimum 10 required)
                </p>
              </div>
            </div>
          </div>

          {/* Sticky Footer */}
          <div className="flex-shrink-0 border-t border-gray-200 bg-white px-8 py-4 flex justify-end gap-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            <button
              type="button"
              onClick={() => {
                resetForm();
                onClose();
              }}
              className="px-6 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
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