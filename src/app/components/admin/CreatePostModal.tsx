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
  const [form, setForm] = useState({
    title: '',
    desc: '',
    content: '',
    status: 'active' as 'active' | 'inactive',
  });

  const [errors, setErrors] = useState({
    title: '',
    desc: '',
    content: '',
  });

  const [enableHtmlInsert, setEnableHtmlInsert] = useState(true);
  const [htmlInput, setHtmlInput] = useState('');
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* -----------------------
     EDITOR
  ----------------------- */

  const editor = useEditor({
    extensions: [
      StarterKit, // ✅ NO configure -> NO typescript error
    ],
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
      
      // Validate content in real-time
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
    const newErrors = {
      title: '',
      desc: '',
      content: '',
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
    if (!form.content.trim() || form.content === '<p></p>') {
      newErrors.content = 'Content is required';
      isValid = false;
    } else if (form.content.length < 10) {
      newErrors.content = 'Content must be at least 10 characters long';
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

  /* -----------------------
     INPUT HANDLERS WITH VALIDATION
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
    setForm({ ...form, desc: value });
    
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

  /* -----------------------
     SUBMIT
  ----------------------- */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editor) return;

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const rawHTML = editor.getHTML();
      const cleanedHTML = removePTags(rawHTML);

      const res = await api.post('/admin/blogs/create', {
        title: form.title,
        description: form.desc,
        content: cleanedHTML,
        status: form.status,
      });

      onCreate({
        _id: res.data._id,
        title: form.title,
        desc: form.desc,
        content: cleanedHTML,
        status: form.status,
      });

      editor.commands.clearContent();

      setForm({
        title: '',
        desc: '',
        content: '',
        status: 'active',
      });

      setErrors({
        title: '',
        desc: '',
        content: '',
      });

      onClose();
    } catch (error) {
      console.error('Create failed', error);
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
      <div className="bg-white text-gray-800 w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden border border-gray-200 max-h-[90vh] flex flex-col">

        {/* Header */}
        <div className="flex justify-between items-center px-8 py-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 flex-shrink-0">
          <h2 className="font-bold text-2xl text-gray-900">
            Create New Post
          </h2>
          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-8 space-y-6 overflow-y-auto flex-1"
        >

          {/* Title */}
          <div>
            <input
              required
              placeholder="Enter post title"
              className={`w-full border rounded-lg px-4 py-3 ${
                errors.title ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
              }`}
              value={form.title}
              onChange={handleTitleChange}
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">{errors.title}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <input
              required
              placeholder="Enter description"
              className={`w-full border rounded-lg px-4 py-3 ${
                errors.desc ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
              }`}
              value={form.desc}
              onChange={handleDescChange}
            />
            {errors.desc && (
              <p className="mt-1 text-sm !text-red-600">{errors.desc}</p>
            )}
          </div>

          {/* HTML Insert Toggle */}
          <label className="flex items-center gap-2 text-sm font-medium text-amber-800 cursor-pointer">
            <input
              type="checkbox"
              checked={enableHtmlInsert}
              onChange={(e) => setEnableHtmlInsert(e.target.checked)}
              className="rounded border-amber-300 !text-amber-600 focus:!ring-amber-500"
            />
            <span>Insert HTML (Advanced)</span>
          </label>

          {/* HTML Insert */}
          {enableHtmlInsert && (
            <div>
              <textarea
                placeholder="Paste HTML..."
                className="w-full h-28 border rounded-lg p-3 font-mono border-gray-300 focus:border-blue-500"
                value={htmlInput}
                onChange={(e) =>
                  setHtmlInput(e.target.value)
                }
              />
              <button
                type="button"
                onClick={insertHtmlIntoEditor}
                className="bg-orange-500 !text-white px-4 py-2 rounded-lg mt-2 hover:bg-orange-600 transition-colors"
              >
                Insert HTML
              </button>
            </div>
          )}

          {/* Toolbar */}
          <div className="flex flex-wrap gap-2 border border-gray-300 rounded-t-xl p-3 bg-gray-50">

            <button type="button" onClick={toggleBold}
              className={editor?.isActive('bold') ? 'bg-blue-500 text-white p-2 rounded' : 'p-2 border rounded'}>
              <Bold size={16} />
            </button>

            <button type="button" onClick={toggleItalic}
              className={editor?.isActive('italic') ? 'bg-blue-500 text-white p-2 rounded' : 'p-2 border rounded'}>
              <Italic size={16} />
            </button>

            <button type="button" onClick={toggleStrike}
              className={editor?.isActive('strike') ? 'bg-blue-500 text-white p-2 rounded' : 'p-2 border rounded'}>
              <Strikethrough size={16} />
            </button>

            <button type="button" onClick={toggleHeading1}
              className={editor?.isActive('heading', { level: 1 }) ? 'bg-blue-500 text-white p-2 rounded' : 'p-2 border rounded'}>
              <Heading1 size={16} />
            </button>

            <button type="button" onClick={toggleHeading2}
              className={editor?.isActive('heading', { level: 2 }) ? 'bg-blue-500 text-white p-2 rounded' : 'p-2 border rounded'}>
              <Heading2 size={16} />
            </button>

            <button type="button" onClick={toggleBulletList}
              className={editor?.isActive('bulletList') ? 'bg-blue-500 text-white p-2 rounded' : 'p-2 border rounded'}>
              <List size={16} />
            </button>

            <button type="button" onClick={toggleOrderedList}
              className={editor?.isActive('orderedList') ? 'bg-blue-500 text-white p-2 rounded' : 'p-2 border rounded'}>
              <ListOrdered size={16} />
            </button>

          </div>

          {/* Editor */}
          <div>
            <div className={`border rounded-b-xl bg-white p-4 min-h-[280px] ${
              errors.content ? 'border-red-500' : 'border-gray-300 border-t-0'
            }`}>
              <EditorContent editor={editor} />
            </div>
            {errors.content && (
              <p className="mt-1 text-sm text-red-600">{errors.content}</p>
            )}
          </div>

          {/* Status */}
          <select
            value={form.status}
            onChange={(e) =>
              setForm({
                ...form,
                status: e.target.value as 'active' | 'inactive',
              })
            }
            className="w-full border rounded-lg px-4 py-3 border-gray-300 focus:border-blue-500"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border rounded-lg hover:bg-gray-50 transition-colors"
              disabled={isSubmitting}
            >
              Cancel
            </button>

            <button
              type="submit"
              className={`px-6 py-3 bg-blue-600 !text-white rounded-lg hover:bg-blue-700 transition-colors ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating...' : 'Create Post'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}