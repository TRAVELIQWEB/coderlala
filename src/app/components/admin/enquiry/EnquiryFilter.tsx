// app/admin/enquiries/components/EnquiryFilters.tsx
'use client';

import { Button } from '@/components/ui/button';
import { Search, RotateCcw } from 'lucide-react';
import { FormEvent } from "react";

interface EnquiryFiltersProps {
  search: string;
  fromDate: string;
  toDate: string;
  onSearchChange: (value: string) => void;
  onFromDateChange: (value: string) => void;
  onToDateChange: (value: string) => void;
  onSearch: (search: string, fromDate: string, toDate: string) => void;
  onReset: () => void;
}

export default function EnquiryFilters({
  search,
  fromDate,
  toDate,
  onSearchChange,
  onFromDateChange,
  onToDateChange,
  onSearch,
  onReset,
}: EnquiryFiltersProps) {
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(search.trim(), fromDate.trim(), toDate.trim());
  };

  const handleReset = () => {
    onSearchChange("");
    onFromDateChange("");
    onToDateChange("");
    onReset();
  };

  return (
    <div className="bg-tableBg rounded-xl border border-border p-4 shadow-sm">
      <form onSubmit={handleSearch} className="flex flex-wrap items-end gap-3">
        <div className="w-full sm:w-44">
          <label className="mb-1 block text-sm font-medium text-foreground">
            From Date
          </label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => onFromDateChange(e.target.value)}
            className="w-full rounded-lg border border-border bg-border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div className="w-full sm:w-44">
          <label className="mb-1 block text-sm font-medium text-foreground">
            To Date
          </label>
          <input
            type="date"
            value={toDate}
            onChange={(e) => onToDateChange(e.target.value)}
            className="w-full rounded-lg border border-border bg-border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="min-w-65 flex-1 lg:flex-none">
          <label className="mb-1 block text-sm font-medium text-foreground">
            Search
          </label>
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Name, Phone, Email or Company..."
              className="w-full rounded-lg border border-border bg-border py-2 pl-10 pr-4 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        <div className="ml-auto flex w-full gap-2 sm:w-auto">
          <button
            type="submit"
            className="flex items-center gap-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition w-full md:w-auto justify-center"
          >
            <Search size={16} />
            Search
          </button>
          <Button type="button" variant="destructive" className="text-white!" onClick={handleReset}>
            <RotateCcw className="h-4 w-4" />
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
}