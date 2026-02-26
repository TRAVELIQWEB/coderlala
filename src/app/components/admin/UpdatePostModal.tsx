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
  Layers,
  Tags,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import 'prosemirror-view/style/prosemirror.css';
import { Option } from "@/components/ui/multi-select";
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
} from '@/types/blog';
import { Label } from '@/components/ui/label';
import { ComboboxMultiple } from '@/app/(main)/blog/ComboboxMultiple';
import { ComboboxSingle } from '@/app/(main)/blog/ComboboxSingle';
import { cn } from '@/lib/utils';
import { FormInput } from '@/components/Form/FormInput';
import { FormTextarea } from '@/components/Form/FormTextarea';

interface Props {
  open: boolean;
  onClose: () => void;
  onUpdate: (post: BasePost) => void;
  editingPost: BasePost | null;
}

// Create mapping between display labels and actual values
const TECH_OPTIONS: { label: string; value: BlogTechStack }[] = Object.values(BlogTechStack).map((tech) => ({
  label: tech.toUpperCase(),
  value: tech,
}));

const TAG_OPTIONS: { label: string; value: BlogTag }[] = Object.values(BlogTag).map((tag) => ({
  label: tag.toUpperCase(),
  value: tag,
}));

// Default SEO values
const defaultSeo = {
  title: '',
  description: '',
  canonicalUrl: ''
};

// Default Author values
const defaultAuthor = {
  name: '',
  role: BlogAuthorRole.FULLSTACK,
  _id: ''
};

// Default Form State
const defaultFormState = {
  _id: '',
  title: '',
  desc: '',
  description: '',
  content: '',
  rawContent: '',
  slug: '',
  primaryTech: BlogPrimaryTech.NESTJS,
  level: BlogLevel.BEGINNER,
  readingTime: 5,
  author: defaultAuthor,
  language: BlogLanguage.EN,
  status: BlogStatus.DRAFT,
  techStacks: [] as BlogTechStack[],
  tags: [] as BlogTag[],
  seo: defaultSeo
};

export default function UpdatePostModal({
  open,
  onClose,
  onUpdate,
  editingPost
}: Props) {
  const [form, setForm] = useState(defaultFormState);
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
    canonicalUrl: '',
    status: '',
  });

  const [enableHtmlInsert, setEnableHtmlInsert] = useState(false);
  const [htmlInput, setHtmlInput] = useState('');
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [selectedTechStacks, setSelectedTechStacks] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

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

  // 🔥 Load editing post data and convert to display labels
  useEffect(() => {
    if (editingPost && editor && open) {
      // Convert techStacks values to display labels
      const techStackLabels = (editingPost.techStacks || []).map(value => {
        const option = TECH_OPTIONS.find(opt => opt.value === value);
        return option?.label || String(value).toUpperCase();
      });

      // Convert tags values to display labels
      const tagLabels = (editingPost.tags || []).map(value => {
        const option = TAG_OPTIONS.find(opt => opt.value === value);
        return option?.label || String(value).toUpperCase();
      });

      setSelectedTechStacks(techStackLabels);
      setSelectedTags(tagLabels);

      setForm({
        _id: editingPost._id || '',
        title: editingPost.title || '',
        desc: editingPost.desc || '',
        description: editingPost.desc || '',
        content: editingPost.content || '',
        rawContent: editingPost.content?.replace(/<[^>]*>/g, '') || '',
        slug: editingPost.slug || '',
        primaryTech: (editingPost.primaryTech as BlogPrimaryTech) || BlogPrimaryTech.NESTJS,
        level: (editingPost.level as BlogLevel) || BlogLevel.BEGINNER,
        readingTime: editingPost.readingTime || 5,
        author: {
          name: editingPost.author?.name || '',
          role: (editingPost.author?.role as BlogAuthorRole) || BlogAuthorRole.FULLSTACK,
          _id: editingPost.author?._id || ''
        },
        language: (editingPost.language as BlogLanguage) || BlogLanguage.EN,
        status: (editingPost.status as BlogStatus) || BlogStatus.DRAFT,
        techStacks: editingPost.techStacks as BlogTechStack[] || [],
        tags: editingPost.tags as BlogTag[] || [],
        seo: {
          title: editingPost.seo?.title || editingPost.title || '',
          description: editingPost.seo?.description || editingPost.desc || '',
          canonicalUrl: editingPost.seo?.canonicalUrl || '',
        }
      });

      editor.commands.setContent(editingPost.content || '');

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
    }
  }, [editingPost, editor, open]);

  // Sync selected values with form state
  useEffect(() => {
    // Convert display labels to actual enum values
    const techStackValues = selectedTechStacks.map(label => {
      const option = TECH_OPTIONS.find(opt => opt.label === label);
      return option?.value || label.toLowerCase() as BlogTechStack;
    });

    const tagValues = selectedTags.map(label => {
      const option = TAG_OPTIONS.find(opt => opt.label === label);
      return option?.value || label.toLowerCase() as BlogTag;
    });

    setForm(prev => ({
      ...prev,
      techStacks: techStackValues,
      tags: tagValues
    }));
  }, [selectedTechStacks, selectedTags]);

  // Helper function to generate slug from title
  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  // ============= VALIDATION - ALL FIELDS REQUIRED =============
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
    if (!form.desc.trim()) {
      newErrors.description = 'Description is required';
      isValid = false;
    } else if (form.desc.length > 200) {
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

    // Tech stacks validation - use selectedTechStacks
    if (selectedTechStacks.length === 0) {
      newErrors.techStacks = 'Select at least one tech stack';
      isValid = false;
    } else {
      newErrors.techStacks = '';
    }

    // Tags validation - use selectedTags
    if (selectedTags.length === 0) {
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

    // SEO Title validation
    if (!form.seo.title.trim()) {
      newErrors.seoTitle = 'SEO title is required';
      isValid = false;
    } else {
      newErrors.seoTitle = '';
    }

    // SEO Description validation
    if (!form.seo.description.trim()) {
      newErrors.seoDescription = 'SEO description is required';
      isValid = false;
    } else {
      newErrors.seoDescription = '';
    }

    // Canonical URL validation
    if (!form.seo.canonicalUrl?.trim()) {
      newErrors.canonicalUrl = 'Canonical URL is required';
      isValid = false;
    } else {
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

  const handleDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setForm(prev => ({ ...prev, desc: value, description: value }));

    if (!value.trim()) {
      setErrors(prev => ({ ...prev, description: 'Description is required' }));
    } else if (value.length > 200) {
      setErrors(prev => ({ ...prev, description: 'Description must be less than 200 characters' }));
    } else {
      setErrors(prev => ({ ...prev, description: '' }));
    }
  };

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
      if (!htmlInput.includes('<') || !htmlInput.includes('>')) {
        setSubmitError('Invalid HTML: Must contain HTML tags');
        return;
      }

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
    setForm(defaultFormState);
    setSelectedTechStacks([]);
    setSelectedTags([]);
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
      const firstError = Object.entries(errors).find(([_, value]) => value !== '');
      if (firstError) {
        const element = document.querySelector(`[name="${firstError[0]}"]`);
        element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      // Convert display labels to actual values for API
      const techStackValues = selectedTechStacks.map(label => {
        const option = TECH_OPTIONS.find(opt => opt.label === label);
        return option?.value || label.toLowerCase();
      });

      const tagValues = selectedTags.map(label => {
        const option = TAG_OPTIONS.find(opt => opt.label === label);
        return option?.value || label.toLowerCase();
      });

      const payload = {
        title: form.title.trim(),
        content: editor.getHTML(),
        slug: form.slug.trim(),
        primaryTech: form.primaryTech,
        techStacks: techStackValues,
        tags: tagValues,
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
          canonicalUrl: form.seo.canonicalUrl?.trim(),
        },
        description: form.desc.trim(),
        status: form.status,
      };

      console.log("🚀 UPDATE PAYLOAD:", payload);

      const res = await api.put(`/admin/blogs/${form._id}`, payload);

      console.log("✅ UPDATE RESPONSE:", res.data);

      // Create updated post that matches BasePost type exactly
      const updatedPost: BasePost = {
        _id: form._id,
        title: form.title,
        desc: form.desc,
        content: editor.getHTML(),
        slug: form.slug,
        primaryTech: form.primaryTech,
        techStacks: techStackValues,
        tags: tagValues,
        level: form.level,
        readingTime: form.readingTime,
        author: {
          name: form.author.name,
          role: form.author.role,
          _id: form.author._id
        },
        language: form.language,
        status: form.status,
        seo: {
          title: form.seo.title || form.title,
          description: form.seo.description || form.desc,
          canonicalUrl: form.seo.canonicalUrl || ''
        }
        // Note: createdAt and updatedAt are intentionally omitted
        // because they don't exist in BasePost type
      };

      onUpdate(updatedPost);
      resetForm();
      onClose();

    } catch (err: any) {
      console.error('❌ Error updating post:', err);

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
        setSubmitError(err.message || 'Failed to update blog post');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!open || !editingPost || !mounted) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 backdrop-blur-sm">
      <div className="bg-white text-gray-800 w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden border border-gray-200 flex flex-col h-[90vh]">

        {/* Fixed Header - EXACT same as CreatePostModal */}
        <div className="flex justify-between items-center px-8 py-6 border-b border-gray-100 bg-linear-to-r from-blue-50 to-indigo-50 shrink-0">
          <h2 className="font-bold text-2xl text-gray-900">
            Edit Post
          </h2>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <X size={20} />
          </button>
        </div>

        {/* Error Alert */}
        {submitError && (
          <div className="mx-8 mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 font-medium">Error: {submitError}</p>
          </div>
        )}

        {/* Scrollable Form Content - EXACT same design as CreatePostModal */}
        <form onSubmit={handleSubmit} className="flex flex-col flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-6">

            {/* SECTION 1: Basic Information */}
            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 space-y-4">
              <h3 className="text-lg font-semibold text-blue-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                Basic Information
              </h3>

              {/* Title - Slug */}
              <div className="grid grid-cols-1 md:grid-cols-8 gap-4">

                <FormInput
                  name="title"
                  label="Title"
                  required
                  placeholder="e.g. Complete Guide to NestJS"
                  value={form.title}
                  onChange={handleTitleChange}
                  error={!!errors.title}
                  errorMessage={errors.title}
                  className='md:col-span-5'
                />

                <FormInput
                  name="slug"
                  label="Slug"
                  required
                  placeholder="nestjs-complete-guide"
                  value={form.slug}
                  onChange={handleSlugChange}
                  error={!!errors.slug}
                  errorMessage={errors.slug}
                  className='col-span-2'
                />
                <FormInput
                  type="number"
                  name="readingTime"
                  label="Reading Time"
                  required
                  min={1}
                  max={60}
                  value={form.readingTime}
                  onChange={(e) => {
                    const value = Number(e.target.value)
                    setForm({ ...form, readingTime: value })
                  }}
                  error={!!errors.readingTime}
                  errorMessage={errors.readingTime}
                />
              </div>

              {/* Primary Tech - Level - Language - Status */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <ComboboxSingle
                  label="Difficulty Level *"
                  options={Object.values(BlogLevel)}
                  value={form.level || undefined}
                  onChange={(val) => {
                    setForm({ ...form, level: val as BlogLevel })
                    setErrors(prev => ({ ...prev, level: "" }))
                  }}
                  error={!!errors.level}
                  errorMessage={errors.level}
                  className="w-full"
                />

                <ComboboxSingle
                  label="Language *"
                  options={[
                    { label: "English", value: BlogLanguage.EN },
                    { label: "Hindi", value: BlogLanguage.HI }
                  ].map(o => o.label)}
                  value={
                    form.language === BlogLanguage.EN
                      ? "English"
                      : form.language === BlogLanguage.HI
                        ? "Hindi"
                        : undefined
                  }
                  onChange={(val) => {
                    const mapped =
                      val === "English"
                        ? BlogLanguage.EN
                        : BlogLanguage.HI

                    setForm({ ...form, language: mapped })
                    setErrors(prev => ({ ...prev, language: "" }))
                  }}
                  error={!!errors.language}
                  errorMessage={errors.language}
                  className="w-full"
                />

                <ComboboxSingle
                  label="Status *"
                  options={Object.values(BlogStatus)}
                  value={form.status || undefined}
                  onChange={(val) => {
                    setForm({ ...form, status: val as BlogStatus })
                    setErrors(prev => ({ ...prev, status: "" }))
                  }}
                  error={!!errors.status}
                  errorMessage={errors.status}
                  className="w-full"
                />
              </div>

              {/* Tech Stacks - Primary Tech and Multi-selects */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="w-full">
                  <ComboboxSingle
                    label="Primary Tech *"
                    options={Object.values(BlogPrimaryTech)}
                    value={form.primaryTech || undefined}
                    onChange={(val) => {
                      setForm({ ...form, primaryTech: val as BlogPrimaryTech })
                      setErrors((prev) => ({ ...prev, primaryTech: "" }))
                    }}
                    error={!!errors.primaryTech}
                    errorMessage={errors.primaryTech}
                    className="w-full"
                  />
                </div>

                {/* Tech Stack */}
                <ComboboxMultiple
                  label="Tech Stack"
                  options={TECH_OPTIONS.map((t) => t.label)}
                  value={selectedTechStacks}
                  onChange={(val: string[]) => {
                    setSelectedTechStacks(val);
                    setErrors((prev) => ({ ...prev, techStacks: "" }));
                  }}
                  icon={Layers}
                  error={!!errors.techStacks}
                  errorMessage={errors.techStacks}
                  className="w-full"
                />

                <ComboboxMultiple
                  label="Tags"
                  options={TAG_OPTIONS.map((t) => t.label)}
                  value={selectedTags}
                  onChange={(val: string[]) => {
                    setSelectedTags(val);
                    setErrors((prev) => ({ ...prev, tags: "" }));
                  }}
                  icon={Tags}
                  error={!!errors.tags}
                  errorMessage={errors.tags}
                  className="w-full"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                {/* Description */}
                <FormTextarea
                  className='col-span-3'
                  name="description"
                  label="Description"
                  required
                  rows={7}
                  maxLength={200}
                  value={form.desc}
                  onChange={handleDescChange}
                  error={!!errors.description}
                  errorMessage={errors.description}
                />
                {/* SECTION 2: Author Information */}
                <div className="bg-purple-50/50 p-4 rounded-xl border border-purple-100 space-y-2">
                  <h3 className="text-lg font-semibold text-purple-900 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                    Author Information
                  </h3>

                  <div className="grid gap-2 mt-5">
                    <FormInput
                      name="authorName"
                      label="Author Name"
                      required
                      value={form.author.name}
                      onChange={(e) => {
                        setForm({
                          ...form,
                          author: { ...form.author, name: e.target.value }
                        })
                        setErrors(prev => ({ ...prev, authorName: "" }))
                      }}
                      error={!!errors.authorName}
                      errorMessage={errors.authorName}
                    />

                    <ComboboxSingle
                      label="Author Role *"
                      options={Object.values(BlogAuthorRole)}
                      value={form.author.role || undefined}
                      onChange={(val) => {
                        setForm({
                          ...form,
                          author: { ...form.author, role: val as BlogAuthorRole }
                        })
                        setErrors(prev => ({ ...prev, authorRole: "" }))
                      }}
                      error={!!errors.authorRole}
                      errorMessage={errors.authorRole}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 3: SEO Settings */}
            <div className="bg-green-50/50 p-4 rounded-xl border border-green-100 space-y-2">
              <h3 className="text-lg font-semibold text-green-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                SEO Settings
              </h3>

              <div className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-2 mt-5">
                <FormInput
                  name="seoTitle"
                  label="SEO Title"
                  required
                  value={form.seo.title}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      seo: { ...form.seo, title: e.target.value }
                    })
                  }}
                  error={!!errors.seoTitle}
                  errorMessage={errors.seoTitle}
                />
                <FormInput
                  name="canonicalUrl"
                  label="Canonical URL"
                  required
                  value={form.seo.canonicalUrl}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      seo: { ...form.seo, canonicalUrl: e.target.value }
                    })
                  }}
                  error={!!errors.canonicalUrl}
                  errorMessage={errors.canonicalUrl}
                />
                <FormTextarea
                  className='col-span-2'
                  name="seoDescription"
                  label="SEO Description"
                  required
                  rows={2}
                  value={form.seo.description}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      seo: { ...form.seo, description: e.target.value }
                    })
                  }
                  error={!!errors.seoDescription}
                  errorMessage={errors.seoDescription}
                />
              </div>
            </div>

            {/* SECTION 4: Content */}
            <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100 space-y-2">
              <h3 className="text-lg font-semibold text-amber-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
                Content <span className="text-red-500 text-sm">(Required - Min 10 characters)</span>
              </h3>

              {/* HTML Insert Toggle */}
              <div className="flex items-center gap-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 cursor-pointermb-1">
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
                  <label className="block text-sm font-medium text-gray-700 mb-2mb-1">
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
                    className="mt-1 bg-amber-600 text-white px-3 py-2 rounded-lg hover:bg-amber-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  >
                    Insert HTML at Cursor
                  </button>
                </div>
              )}

              {/* Content Editor */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2mb-1">
                  Content <span className="text-red-500">*</span>
                </label>

                {/* Toolbar */}
                <div className="flex flex-wrap gap-1 border border-gray-300 rounded-t-lg p-2 bg-gray-50">
                  <button
                    type="button"
                    onClick={toggleBold}
                    className={`p-1 rounded transition-all duration-200 ${editor?.isActive('bold')
                      ? 'bg-blue-500 text-white ring-2 ring-blue-300'
                      : 'hover:bg-gray-200 text-gray-700 hover:ring-2 hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                      }`}
                    title="Bold"
                  >
                    <Bold size={15} />
                  </button>
                  <button
                    type="button"
                    onClick={toggleItalic}
                    className={`p-1 rounded transition-all duration-200 ${editor?.isActive('italic')
                      ? 'bg-blue-500 text-white ring-2 ring-blue-300'
                      : 'hover:bg-gray-200 text-gray-700 hover:ring-2 hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                      }`}
                    title="Italic"
                  >
                    <Italic size={15} />
                  </button>
                  <button
                    type="button"
                    onClick={toggleStrike}
                    className={`p-1 rounded transition-all duration-200 ${editor?.isActive('strike')
                      ? 'bg-blue-500 text-white ring-2 ring-blue-300'
                      : 'hover:bg-gray-200 text-gray-700 hover:ring-2 hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                      }`}
                    title="Strikethrough"
                  >
                    <Strikethrough size={15} />
                  </button>
                  <div className="w-px h-6 bg-gray-300 mx-1" />
                  <button
                    type="button"
                    onClick={toggleHeading1}
                    className={`p-1 rounded transition-all duration-200 ${editor?.isActive('heading', { level: 1 })
                      ? 'bg-blue-500 text-white ring-2 ring-blue-300'
                      : 'hover:bg-gray-200 text-gray-700 hover:ring-2 hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                      }`}
                    title="Heading 1"
                  >
                    <Heading1 size={15} />
                  </button>
                  <button
                    type="button"
                    onClick={toggleHeading2}
                    className={`p-1 rounded transition-all duration-200 ${editor?.isActive('heading', { level: 2 })
                      ? 'bg-blue-500 text-white ring-2 ring-blue-300'
                      : 'hover:bg-gray-200 text-gray-700 hover:ring-2 hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                      }`}
                    title="Heading 2"
                  >
                    <Heading2 size={15} />
                  </button>
                  <div className="w-px h-6 bg-gray-300 mx-1" />
                  <button
                    type="button"
                    onClick={toggleBulletList}
                    className={`p-1 rounded transition-all duration-200 ${editor?.isActive('bulletList')
                      ? 'bg-blue-500 text-white ring-2 ring-blue-300'
                      : 'hover:bg-gray-200 text-gray-700 hover:ring-2 hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                      }`}
                    title="Bullet List"
                  >
                    <List size={15} />
                  </button>
                  <button
                    type="button"
                    onClick={toggleOrderedList}
                    className={`p-1 rounded transition-all duration-200 ${editor?.isActive('orderedList')
                      ? 'bg-blue-500 text-white ring-2 ring-blue-300'
                      : 'hover:bg-gray-200 text-gray-700 hover:ring-2 hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                      }`}
                    title="Ordered List"
                  >
                    <ListOrdered size={15} />
                  </button>
                </div>

                {/* Editor */}
                <div className={`border border-t-0 rounded-b-lg bg-white p-4 transition-all duration-200 ${errors.content ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-blue-400'
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
          <div className="shrink-0 border-t border-gray-200 bg-white px-6 py-3 flex justify-end gap-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Updating...
                </span>
              ) : (
                'Update Post'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}