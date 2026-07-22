'use client';

import React from 'react';
import { Search, Plus } from 'lucide-react';

interface BlogFiltersProps {
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  statusFilter: string;
  setStatusFilter: (v: string) => void;
  onSearch: (search: string, fromDate: string, toDate: string) => void;
  onCreate?: () => void;
}

export default function BlogFilters({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  onSearch,
  onCreate,
}: BlogFiltersProps) {
  const [fromDate, setFromDate] = React.useState('');
  const [toDate, setToDate] = React.useState('');
  return (
    <div className="rounded-xl shadow-sm border border-border p-4 bg-tableBg">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(searchQuery.trim(), fromDate, toDate);
        }}
        className="flex flex-wrap items-end gap-3"
      >
        <div className="w-full md:w-44">
          <label className="mb-1 block text-sm font-medium text-foreground">From Date</label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="w-full rounded-lg border border-border bg-border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div className="w-full md:w-44">
          <label className="mb-1 block text-sm font-medium text-foreground">To Date</label>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="w-full rounded-lg border border-border bg-border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="min-w-65 flex-1 lg:flex-none">
          <label className="text-sm font-medium text-foreground mb-1 block">Search</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm outline-none bg-border text-foreground border-border focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
        <div className="w-full md:w-auto">
          <label className="text-sm font-medium text-foreground mb-1 block">Status</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full md:w-48 rounded-lg px-3 py-2 text-sm font-medium border bg-border text-foreground border-border focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="all">All Status</option>
            <option value="active">🟢 Active</option>
            <option value="draft">📝 Draft</option>
            <option value="archived">📦 Archived</option>
          </select>
        </div>

        <div className="ml-auto flex w-full gap-2 sm:w-auto">
          <button
            type="submit"
            className="flex items-center gap-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition w-full md:w-auto justify-center"
          >
            <Search size={16} />
            Search
          </button>
          <button
            type="button"
            onClick={() => onCreate?.()}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition w-full md:w-auto justify-center"
          >
            <Plus size={16} />
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
}
