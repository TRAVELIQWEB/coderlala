'use client';

import api from '@/lib/axios';
import { X, Bold, Italic, List, ListOrdered, Heading1, Heading2, Strikethrough } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import 'prosemirror-view/style/prosemirror.css';

// Complete Post type matching your API response
type Post = {
  _id: string;
  title: string;
  desc: string;
  content: string;
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
  status: 'active' | 'inactive' | 'archived';
  description: string;
  createdAt: string;
  updatedAt: string;
  techStacks?: string[];
  tags?: string[];
  seo?: {
    title: string;
    description: string;
    canonicalUrl: string;
    _id: string;
  };
  userId?: string;
};

interface Props {
  open: boolean;
  onClose: () => void;
  onUpdate: (post: Post) => void;
  editingPost: Post | null;
}

export default function UpdatePostModal({ 
  open, 
  onClose, 
  onUpdate,
  editingPost
}: Props) {
  const [form, setForm] = useState({
    _id: '',
    title: '',
    desc: '',
    description: '',
    content: '',
    rawContent: '',
    slug: '',
    primaryTech: '',
    level: '',
    readingTime: 0,
    author: {
      name: '',
      role: '',
      _id: ''
    },
    language: '',
    status: 'active' as 'active' | 'inactive' | 'archived',
    techStacks: [] as string[],
    tags: [] as string[],
  });

  const [errors, setErrors] = useState({
    title: '',
    desc: '',
    content: '',
    slug: '',
    primaryTech: '',
  });

  const [enableHtmlInsert, setEnableHtmlInsert] = useState(false);
  const [htmlInput, setHtmlInput] = useState('');
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ TipTap editor
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
      const html = editor.getHTML();
      const text = editor.getText();
      
      setForm((prev) => ({
        ...prev,
        content: html,
        rawContent: text,
      }));
      
      // Validate content in real-time
      const cleanText = text.trim();
      if (html.trim() === '<p></p>' || !cleanText) {
        setErrors(prev => ({
          ...prev,
          content: 'Content is required'
        }));
      } else if (cleanText.length < 10) {
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
    const newErrors = {
      title: '',
      desc: '',
      content: '',
      slug: '',
      primaryTech: '',
    };
    let isValid = true;

    // Validate title
    if (!form.title.trim()) {
      newErrors.title = 'Title is required';
      isValid = false;
    } else if (form.title.length < 3) {
      newErrors.title = 'Title must be at least 3 characters long';
      isValid = false;
    } else if (form.title.length > 100) {
      newErrors.title = 'Title cannot exceed 100 characters';
      isValid = false;
    }

    // Validate description
    if (!form.desc.trim()) {
      newErrors.desc = 'Description is required';
      isValid = false;
    } else if (form.desc.length < 10) {
      newErrors.desc = 'Description must be at least 10 characters long';
      isValid = false;
    } else if (form.desc.length > 200) {
      newErrors.desc = 'Description cannot exceed 200 characters';
      isValid = false;
    }

    // Validate content
    const cleanContent = form.content?.replace(/<[^>]*>/g, '').trim() || '';
    if (!form.content || form.content === '<p></p>' || !cleanContent) {
      newErrors.content = 'Content is required';
      isValid = false;
    } else if (cleanContent.length < 10) {
      newErrors.content = 'Content must be at least 10 characters long';
      isValid = false;
    }

    // Validate slug
    if (!form.slug.trim()) {
      newErrors.slug = 'Slug is required';
      isValid = false;
    }

    // Validate primaryTech
    if (!form.primaryTech.trim()) {
      newErrors.primaryTech = 'Primary Tech is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // 🔥 Load ALL editing post data into form and editor
  useEffect(() => {
    if (editingPost && editor && open) {
      setForm({
        _id: editingPost._id,
        title: editingPost.title || '',
        desc: editingPost.desc || editingPost.description || '',
        description: editingPost.description || editingPost.desc || '',
        content: editingPost.content || '',
        rawContent: editingPost.content?.replace(/<[^>]*>/g, '') || '',
        slug: editingPost.slug || '',
        primaryTech: editingPost.primaryTech || '',
        level: editingPost.level || 'beginner',
        readingTime: editingPost.readingTime || 5,
        author: editingPost.author || { name: '', role: '', _id: '' },
        language: editingPost.language || 'en',
        status: editingPost.status || 'active',
        techStacks: editingPost.techStacks || [],
        tags: editingPost.tags || [],
      });
      
      // Set editor content
      editor.commands.setContent(editingPost.content || '');
      
      // Clear errors when loading new post
      setErrors({
        title: '',
        desc: '',
        content: '',
        slug: '',
        primaryTech: '',
      });
    }
  }, [editingPost, editor, open]);

  /* -----------------------
     INPUT HANDLERS
  ----------------------- */

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm({ ...form, title: value });
    
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

  const handleDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm({ ...form, desc: value, description: value });
    
    if (!value.trim()) {
      setErrors(prev => ({ ...prev, desc: 'Description is required' }));
    } else if (value.length < 10) {
      setErrors(prev => ({ ...prev, desc: 'Description must be at least 10 characters long' }));
    } else if (value.length > 200) {
      setErrors(prev => ({ ...prev, desc: 'Description cannot exceed 200 characters' }));
    } else {
      setErrors(prev => ({ ...prev, desc: '' }));
    }
  };

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/--+/g, '-').replace(/^-|-$/g, '');
    setForm({ ...form, slug: value });
    
    if (!value.trim()) {
      setErrors(prev => ({ ...prev, slug: 'Slug is required' }));
    } else {
      setErrors(prev => ({ ...prev, slug: '' }));
    }
  };

  const handlePrimaryTechChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm({ ...form, primaryTech: value });
    
    if (!value.trim()) {
      setErrors(prev => ({ ...prev, primaryTech: 'Primary Tech is required' }));
    } else {
      setErrors(prev => ({ ...prev, primaryTech: '' }));
    }
  };

  const handleTechStacksChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const techArray = value.split(',').map(tech => tech.trim()).filter(tech => tech);
    setForm({ ...form, techStacks: techArray });
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const tagsArray = value.split(',').map(tag => tag.trim()).filter(tag => tag);
    setForm({ ...form, tags: tagsArray });
  };

  const handleAuthorNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ 
      ...form, 
      author: { 
        ...form.author, 
        name: e.target.value 
      } 
    });
  };

  const handleAuthorRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ 
      ...form, 
      author: { 
        ...form.author, 
        role: e.target.value 
      } 
    });
  };

  // Insert raw HTML
  const insertHtmlIntoEditor = () => {
    if (!editor || !htmlInput.trim()) return;
    editor.commands.insertContent(htmlInput);
    setHtmlInput('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editor) return;

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const contentToSend = form.content || editor.getHTML();

      // Send ALL fields to the API
      const res = await api.put(`/admin/blogs/${form._id}`, {
        title: form.title,
        description: form.desc,
        content: contentToSend,
        slug: form.slug,
        primaryTech: form.primaryTech,
        techStacks: form.techStacks,
        tags: form.tags,
        level: form.level,
        readingTime: form.readingTime,
        author: form.author,
        language: form.language,
        status: form.status,
      });

      // Get the updated post from response
      const updatedPost: Post = {
        _id: form._id,
        title: form.title,
        desc: form.desc,
        description: form.desc,
        content: contentToSend,
        slug: form.slug,
        primaryTech: form.primaryTech,
        level: form.level,
        readingTime: form.readingTime,
        author: form.author,
        language: form.language,
        status: form.status,
        techStacks: form.techStacks,
        tags: form.tags,
        createdAt: editingPost?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        ...(res.data || {})
      };
      
      onUpdate(updatedPost);

      // Reset form
      editor?.commands.clearContent();
      setForm({ 
        _id: '', 
        title: '', 
        desc: '', 
        description: '',
        content: '', 
        rawContent: '', 
        slug: '',
        primaryTech: '',
        level: 'beginner',
        readingTime: 5,
        author: { name: '', role: '', _id: '' },
        language: 'en',
        status: 'active',
        techStacks: [],
        tags: [],
      });
      setErrors({ title: '', desc: '', content: '', slug: '', primaryTech: '' });
      onClose();
      
    } catch (error) {
      console.error('Error updating post:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    editor?.commands.clearContent();
    setForm({ 
      _id: '', 
      title: '', 
      desc: '', 
      description: '',
      content: '', 
      rawContent: '', 
      slug: '',
      primaryTech: '',
      level: 'beginner',
      readingTime: 5,
      author: { name: '', role: '', _id: '' },
      language: 'en',
      status: 'active',
      techStacks: [],
      tags: [],
    });
    setErrors({ title: '', desc: '', content: '', slug: '', primaryTech: '' });
    onClose();
  };

  // Toolbar functions
  const toggleBold = () => editor?.chain().focus().toggleBold().run();
  const toggleItalic = () => editor?.chain().focus().toggleItalic().run();
  const toggleStrike = () => editor?.chain().focus().toggleStrike().run();
  const toggleHeading1 = () => editor?.chain().focus().toggleHeading({ level: 1 }).run();
  const toggleHeading2 = () => editor?.chain().focus().toggleHeading({ level: 2 }).run();
  const toggleBulletList = () => editor?.chain().focus().toggleBulletList().run();
  const toggleOrderedList = () => editor?.chain().focus().toggleOrderedList().run();

  if (!open || !editingPost || !mounted) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-white w-full max-w-4xl rounded-2xl border border-gray-300 shadow-xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300 bg-gray-200 flex-shrink-0">
          <h2 className="font-bold text-xl text-gray-800">Edit Post</h2>
          <button 
            type="button"
            onClick={handleClose} 
            className="p-1 rounded-md hover:bg-gray-300 transition"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto flex-1">
          {/* Two Column Layout for Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Title */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-600">Title *</label>
              <input
                required
                placeholder="Enter post title"
                className={`w-full border rounded-lg px-4 py-2 ${
                  errors.title ? 'border-red-500' : 'border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                }`}
                value={form.title}
                onChange={handleTitleChange}
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600">{errors.title}</p>
              )}
            </div>

            {/* Slug */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-600">Slug *</label>
              <input
                required
                placeholder="post-url-slug"
                className={`w-full border rounded-lg px-4 py-2 ${
                  errors.slug ? 'border-red-500' : 'border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                }`}
                value={form.slug}
                onChange={handleSlugChange}
              />
              {errors.slug && (
                <p className="mt-1 text-sm text-red-600">{errors.slug}</p>
              )}
            </div>
          </div>

          {/* Description - Full Width */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-600">Description *</label>
            <input
              required
              placeholder="Short description"
              className={`w-full border rounded-lg px-4 py-2 ${
                errors.desc ? 'border-red-500' : 'border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
              }`}
              value={form.desc}
              onChange={handleDescChange}
            />
            {errors.desc && (
              <p className="mt-1 text-sm text-red-600">{errors.desc}</p>
            )}
          </div>

          {/* Two Column Layout for Tech Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Primary Tech */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-600">Primary Tech *</label>
              <input
                required
                placeholder="e.g., react, nodejs, python"
                className={`w-full border rounded-lg px-4 py-2 ${
                  errors.primaryTech ? 'border-red-500' : 'border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                }`}
                value={form.primaryTech}
                onChange={handlePrimaryTechChange}
              />
              {errors.primaryTech && (
                <p className="mt-1 text-sm text-red-600">{errors.primaryTech}</p>
              )}
            </div>

            {/* Level */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-600">Level</label>
              <select
                value={form.level}
                onChange={e => setForm({ ...form, level: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>

          {/* Two Column Layout for Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Reading Time */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-600">Reading Time (minutes)</label>
              <input
                type="number"
                min="1"
                max="60"
                placeholder="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.readingTime}
                onChange={e => setForm({ ...form, readingTime: parseInt(e.target.value) || 5 })}
              />
            </div>

            {/* Language */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-600">Language</label>
              <select
                value={form.language}
                onChange={e => setForm({ ...form, language: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="en">English (EN)</option>
                <option value="hi">Hindi (HI)</option>
                <option value="es">Spanish (ES)</option>
                <option value="fr">French (FR)</option>
                <option value="de">German (DE)</option>
              </select>
            </div>
          </div>

          {/* Author Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-600">Author Name</label>
              <input
                placeholder="Author name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.author.name}
                onChange={handleAuthorNameChange}
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-600">Author Role</label>
              <input
                placeholder="e.g., fullstack-engineer"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.author.role}
                onChange={handleAuthorRoleChange}
              />
            </div>
          </div>

          {/* Tech Stacks and Tags */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-600">Tech Stacks</label>
              <input
                placeholder="nginx, redis, postgres (comma separated)"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.techStacks?.join(', ')}
                onChange={handleTechStacksChange}
              />
              <p className="text-xs text-gray-500">Separate with commas</p>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-600">Tags</label>
              <input
                placeholder="scalability, database (comma separated)"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.tags?.join(', ')}
                onChange={handleTagsChange}
              />
              <p className="text-xs text-gray-500">Separate with commas</p>
            </div>
          </div>

          {/* 🔹 Insert HTML (Admin only) - Optional */}
          <div className="space-y-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
            <label className="flex items-center gap-2 text-sm font-medium text-amber-800 cursor-pointer">
              <input
                type="checkbox"
                checked={enableHtmlInsert}
                onChange={(e) => setEnableHtmlInsert(e.target.checked)}
                className="rounded border-amber-300 text-amber-600 focus:ring-amber-500"
              />
              <span>Insert HTML (Advanced)</span>
            </label>
            
            {enableHtmlInsert && (
              <div className="space-y-2">
                <textarea
                  placeholder="Paste HTML here..."
                  className="w-full h-24 border border-amber-300 rounded p-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-amber-500"
                  value={htmlInput}
                  onChange={(e) => setHtmlInput(e.target.value)}
                />
                <button
                  type="button"
                  onClick={insertHtmlIntoEditor}
                  disabled={!htmlInput.trim()}
                  className="px-3 py-1.5 bg-amber-500 text-white text-sm rounded hover:bg-amber-600 disabled:opacity-50 transition"
                >
                  Insert into Editor
                </button>
              </div>
            )}
          </div>

          {/* 🔥 Content Editor with TipTap */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">Content *</label>
            
            {/* Toolbar */}
            <div className="flex flex-wrap gap-2 border border-gray-300 rounded-t-lg p-2 bg-gray-50">
              <button
                type="button"
                onClick={toggleBold}
                disabled={!editor}
                className={`p-2 rounded transition-all flex items-center gap-1 text-sm
                  ${editor?.isActive('bold') 
                    ? 'bg-blue-500 text-white' 
                    : 'hover:bg-gray-200 text-gray-700'
                  } ${!editor ? 'opacity-50 cursor-not-allowed' : ''}`}
                title="Bold"
              >
                <Bold size={16} />
                <span className="hidden sm:inline">Bold</span>
              </button>

              <button
                type="button"
                onClick={toggleItalic}
                disabled={!editor}
                className={`p-2 rounded transition-all flex items-center gap-1 text-sm
                  ${editor?.isActive('italic') 
                    ? 'bg-blue-500 text-white' 
                    : 'hover:bg-gray-200 text-gray-700'
                  } ${!editor ? 'opacity-50 cursor-not-allowed' : ''}`}
                title="Italic"
              >
                <Italic size={16} />
                <span className="hidden sm:inline">Italic</span>
              </button>

              <button
                type="button"
                onClick={toggleStrike}
                disabled={!editor}
                className={`p-2 rounded transition-all flex items-center gap-1 text-sm
                  ${editor?.isActive('strike') 
                    ? 'bg-blue-500 text-white' 
                    : 'hover:bg-gray-200 text-gray-700'
                  } ${!editor ? 'opacity-50 cursor-not-allowed' : ''}`}
                title="Strikethrough"
              >
                <Strikethrough size={16} />
                <span className="hidden sm:inline">Strike</span>
              </button>

              <div className="w-px h-6 bg-gray-300 mx-1 self-center" />

              <button
                type="button"
                onClick={toggleHeading1}
                disabled={!editor}
                className={`p-2 rounded transition-all flex items-center gap-1 text-sm
                  ${editor?.isActive('heading', { level: 1 }) 
                    ? 'bg-blue-500 text-white' 
                    : 'hover:bg-gray-200 text-gray-700'
                  } ${!editor ? 'opacity-50 cursor-not-allowed' : ''}`}
                title="Heading 1"
              >
                <Heading1 size={16} />
                <span className="hidden sm:inline">H1</span>
              </button>

              <button
                type="button"
                onClick={toggleHeading2}
                disabled={!editor}
                className={`p-2 rounded transition-all flex items-center gap-1 text-sm
                  ${editor?.isActive('heading', { level: 2 }) 
                    ? 'bg-blue-500 text-white' 
                    : 'hover:bg-gray-200 text-gray-700'
                  } ${!editor ? 'opacity-50 cursor-not-allowed' : ''}`}
                title="Heading 2"
              >
                <Heading2 size={16} />
                <span className="hidden sm:inline">H2</span>
              </button>

              <div className="w-px h-6 bg-gray-300 mx-1 self-center" />

              <button
                type="button"
                onClick={toggleBulletList}
                disabled={!editor}
                className={`p-2 rounded transition-all flex items-center gap-1 text-sm
                  ${editor?.isActive('bulletList') 
                    ? 'bg-blue-500 text-white' 
                    : 'hover:bg-gray-200 text-gray-700'
                  } ${!editor ? 'opacity-50 cursor-not-allowed' : ''}`}
                title="Bullet List"
              >
                <List size={16} />
                <span className="hidden sm:inline">Bullet</span>
              </button>

              <button
                type="button"
                onClick={toggleOrderedList}
                disabled={!editor}
                className={`p-2 rounded transition-all flex items-center gap-1 text-sm
                  ${editor?.isActive('orderedList') 
                    ? 'bg-blue-500 text-white' 
                    : 'hover:bg-gray-200 text-gray-700'
                  } ${!editor ? 'opacity-50 cursor-not-allowed' : ''}`}
                title="Numbered List"
              >
                <ListOrdered size={16} />
                <span className="hidden sm:inline">Numbered</span>
              </button>
            </div>

            {/* Editor */}
            <div>
              <div className={`border rounded-b-lg bg-white p-3 min-h-[200px] focus-within:ring-2 focus-within:ring-blue-500 ${
                errors.content ? 'border-red-500 border-t-0' : 'border-gray-300 border-t-0'
              }`}>
                <EditorContent 
                  editor={editor} 
                  className="prose prose-sm max-w-none focus:outline-none"
                />
              </div>
              {errors.content && (
                <p className="mt-1 text-sm text-red-600">{errors.content}</p>
              )}
            </div>
          </div>

          {/* Status */}
          <div className="flex gap-4 items-center">
            <label className="text-sm font-medium text-gray-600">Status</label>
            <select
              value={form.status}
              onChange={e => setForm({ ...form, status: e.target.value as 'active' | 'inactive' | 'archived' })}
              className="rounded-lg px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="active">🟢 Active</option>
              <option value="inactive">🔴 Inactive</option>
              <option value="archived">📦 Archived</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 text-sm border rounded-lg text-gray-700 hover:bg-gray-100 transition"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Updating...' : 'Update Post'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}