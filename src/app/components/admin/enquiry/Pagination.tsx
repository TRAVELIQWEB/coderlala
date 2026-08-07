'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PaginationInfo } from '@/types/blog';

interface PaginationProps {
  pagination: PaginationInfo;
  pageSize?: number;
  onNext: () => void;
  onPrev: () => void;
  onPageClick: (page: number) => void;
  maxPagesToShow?: number;
}

export default function Pagination({
  pagination,
  pageSize = 10,
  onNext,
  onPrev,
  onPageClick,
  maxPagesToShow = 5,
}: PaginationProps) {
  const currentPage = Number(pagination.currentPage) || 1;
  const totalPages = Math.max(1, Number(pagination.totalPages) || 1);
  const totalItems = Number(pagination.totalItems) || 0;
  const hasNextPage = typeof pagination.hasNextPage === 'boolean' ? pagination.hasNextPage : currentPage < totalPages;
  const hasPrevPage = typeof pagination.hasPrevPage === 'boolean' ? pagination.hasPrevPage : currentPage > 1;

  if (totalItems === 0 || totalPages <= 1) {
    return null;
  }

  const getPageNumbers = () => {
    const pages: number[] = [];
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) pages.push(i);
    return pages;
  };

  const rangeStart = (currentPage - 1) * pageSize + 1;
  const rangeEnd = Math.min(currentPage * pageSize, totalItems);

  return (
    <div className="p-2 bg-border rounded-b-lg mt-1 shrink-0">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          Showing {rangeStart} to {rangeEnd} of {totalItems} posts
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onPrev}
            disabled={!hasPrevPage}
            aria-label="Previous page"
            className={`p-2 rounded-lg border ${hasPrevPage
              ? 'text-foreground hover:bg-accent border-border'
              : 'text-muted-foreground border-border cursor-not-allowed opacity-50'
              }`}
          >
            <ChevronLeft size={18} />
          </button>

          {getPageNumbers().map((page) => (
            <button
              type="button"
              key={page}
              onClick={() => onPageClick(page)}
              disabled={page === currentPage}
              aria-current={page === currentPage ? 'page' : undefined}
              className={`min-w-10 p-2 rounded-lg border text-sm font-medium ${page === currentPage
                ? 'bg-brand-blue text-white border-border cursor-not-allowed'
                : 'text-foreground hover:bg-accent border-border cursor-pointer'
                }`}
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            onClick={onNext}
            disabled={!hasNextPage}
            aria-label="Next page"
            className={`p-2 rounded-lg border ${hasNextPage
              ? 'text-foreground hover:bg-accent border-border'
              : 'text-muted-foreground border-border cursor-not-allowed opacity-50'
              }`}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export function CenteredPagination({
  pagination,
  pageSize = 10,
  onNext,
  onPrev,
  onPageClick,
  maxPagesToShow = 5,
}: PaginationProps) {
  const currentPage = Number(pagination.currentPage) || 1;
  const totalPages = Math.max(1, Number(pagination.totalPages) || 1);
  const totalItems = Number(pagination.totalItems) || 0;
  const hasNextPage = typeof pagination.hasNextPage === 'boolean' ? pagination.hasNextPage : currentPage < totalPages;
  const hasPrevPage = typeof pagination.hasPrevPage === 'boolean' ? pagination.hasPrevPage : currentPage > 1;

  if (totalItems === 0 || totalPages <= 1) {
    return null;
  }

  const getPageNumbers = () => {
    const pages: number[] = [];
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) pages.push(i);
    return pages;
  };

  const rangeStart = (currentPage - 1) * pageSize + 1;
  const rangeEnd = Math.min(currentPage * pageSize, totalItems);

  return (
    <div className="p-2 rounded-b-lg mt-1 shrink-0">
      {/* Changed justify-between to justify-center to center the content */}
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onPrev}
            disabled={!hasPrevPage}
            aria-label="Previous page"
            className={`p-2 rounded-lg ${hasPrevPage
              ? 'text-foreground hover:bg-accent border-border'
              : 'text-muted-foreground border-border cursor-not-allowed opacity-50'
              }`}
          >
            <ChevronLeft size={18} />
          </button>

          {getPageNumbers().map((page) => (
            <button
              type="button"
              key={page}
              onClick={() => onPageClick(page)}
              disabled={page === currentPage}
              aria-current={page === currentPage ? 'page' : undefined}
              className={`min-w-10 p-2 rounded-lg text-sm font-medium ${page === currentPage
                ? 'bg-brand-blue text-white! border-border cursor-not-allowed'
                : 'text-foreground hover:bg-accent border-border cursor-pointer'
                }`}
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            onClick={onNext}
            disabled={!hasNextPage}
            aria-label="Next page"
            className={`p-2 rounded-lg ${hasNextPage
              ? 'text-foreground hover:bg-accent border-border'
              : 'text-muted-foreground border-border cursor-not-allowed opacity-50'
              }`}
          >
            <ChevronRight size={18} />
          </button>
        </div>
        <div className="text-sm text-muted-foreground">
          Showing {rangeStart} to {rangeEnd} of {totalItems} posts
        </div>
      </div>
    </div>
  );
}
