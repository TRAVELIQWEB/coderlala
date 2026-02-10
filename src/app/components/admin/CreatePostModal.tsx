'use client';

import { X } from 'lucide-react';
import { useState } from 'react';

type Post = {
  id: number;
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

export default function CreatePostModal({ open, onClose, onCreate }: Props) {
  const [form, setForm] = useState({
    title: '',
    desc: '',
    content: '',
    status: 'active',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onCreate({
      id: Date.now(),
      title: form.title,
      desc: form.desc,
      content: form.content,
      status: form.status as 'active' | 'inactive',
    });

    setForm({ title: '', desc: '', content: '', status: 'active' });
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      {/* Modal */}
      <div className="
        bg-white w-full max-w-lg rounded-2xl border border-gray-300
        shadow-xl animate-in fade-in zoom-in
        max-h-[90vh] overflow-hidden
      ">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300 bg-gray-200">
          <h2 className="font-bold text-xl text-gray-800">
            Create Post
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-md hover:bg-gray-200 transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-4 overflow-y-auto max-h-[calc(90vh-64px)]"
        >
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-600">
              Title
            </label>
            <input
              required
              placeholder="Enter post title"
              className="
                w-full border rounded-lg px-4 py-2 border-gray-300
                focus:outline-none focus:ring-2 focus:ring-blue-500
              "
              value={form.title}
              onChange={e => setForm({ ...form, title: e.target.value })}
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-600">
              Description
            </label>
            <input
              required
              placeholder="Short description"
              className="
                w-full border rounded-lg px-4 py-2 border-gray-300
                focus:outline-none focus:ring-2 focus:ring-blue-500
              "
              value={form.desc}
              onChange={e => setForm({ ...form, desc: e.target.value })}
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-600">
              Content
            </label>
            <textarea
              required
              placeholder="Write post content..."
              className="
                w-full border rounded-lg px-4 py-2 border-gray-300 h-32 resize-none
                focus:outline-none focus:ring-2 focus:ring-blue-500
              "
              value={form.content}
              onChange={e => setForm({ ...form, content: e.target.value })}
            />
          </div>

          <div className="space-y-2 flex gap-4 items-center">
            <label className="text-lg font-medium text-gray-600 mb-0">
              Status
            </label>


            <select
              className="rounded-lg pl-1 pr-8 py-2 text-sm font-medium border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-linear-to-r from-gray-50 to-white"
            >
              <option value="all">⚪ All Status</option>
              <option value="active" className="text-green-600">🟢 Active</option>
              <option value="inactive" className="text-red-600">🔴 Inactive</option>
            </select>
          </div>



        </form>
        {/* Footer */}
        <div className="flex justify-end gap-3 bg-gray-300 px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="
                px-4 py-2 text-sm border rounded-lg text-gray-700
                hover:bg-gray-100 transition
              "
          >
            Cancel
          </button>
          <button
            type="submit"
            className="
                px-4 py-2 text-sm bg-blue-600 text-white! rounded-lg
                hover:bg-blue-700 transition
              "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
