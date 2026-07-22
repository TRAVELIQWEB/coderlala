// app/admin/enquiries/page.tsx
'use client';

import { useCallback } from "react";
import React, { useEffect, useState } from "react";
import { Pencil, Loader2 } from "lucide-react";
import api from '@/lib/axios';
import EnquiryFilters from "./EnquiryFilter";
import Pagination from "./Pagination";

const EnquiryTable = () => {
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    hasNextPage: false,
    hasPrevPage: false,
  });

  const fetchEnquiries = useCallback(async (page: number = 1, search = '', fromDate = '', toDate = '') => {
    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams();
      params.append('page', page.toString());
      params.append('limit', '10');
      if (search) params.append('searchQuery', search);
      if (fromDate) params.append('fromDate', fromDate);
      if (toDate) params.append('toDate', toDate);

      const res = await api.get(`/admin/enquirys?${params.toString()}`);
      console.log("📊 FETCHED ENQUIRIES:", res.data);

      const enquiriesData = res.data?.data?.enquiries || res.data?.data || [];

      // ✅ MAP API RESPONSE TO UI FORMAT
      const mappedEnquiries = enquiriesData.map((item: any) => ({
        _id: item._id,
        fullName: item.fullName || item.name || '',
        phoneNumber: item.phoneNumber || item.phone || '',
        companyName: item.companyName || item.company || '',
        email: item.email || '',
        budget: item.budget || '',
        projectDetails: item.projectDetails || item.message || '',
        pageUrl: item.pageUrl || '',
        createdAt: item.createdAt || '',
      }));

      setEnquiries(mappedEnquiries);
      const resp = res.data?.data || {};
      const respCurrent = Number(resp.currentPage) || page;
      const respTotalItems = Number(resp.total) || 0;
      const respTotalPages = Number(resp.totalPages ?? resp.totalpage) || 1;
      const respHasNext = typeof resp.hasNextPage === 'boolean' ? resp.hasNextPage : respCurrent < respTotalPages;
      const respHasPrev = typeof resp.hasPrevPage === 'boolean' ? resp.hasPrevPage : respCurrent > 1;

      setPagination({
        currentPage: respCurrent,
        totalItems: respTotalItems,
        totalPages: respTotalPages,
        hasNextPage: respHasNext,
        hasPrevPage: respHasPrev,
      });
    } catch (error: any) {
      console.error('❌ Failed to fetch enquiries', error);
      setError(error.response?.data?.message || 'Failed to fetch enquiries');
      setEnquiries([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEnquiries(1, '', '', '');
  }, [fetchEnquiries]);

  const handleSearch = (newSearch: string, newFromDate: string, newToDate: string) => {
    setSearch(newSearch);
    setFromDate(newFromDate);
    setToDate(newToDate);
    fetchEnquiries(1, newSearch, newFromDate, newToDate); // Reset to first page on new search
  };

  const handleReset = () => {
    setSearch('');
    setFromDate('');
    setToDate('');
    fetchEnquiries(1, '', '', ''); // Reset to first page and clear filters
  };

  const handleNextPage = () => {
    if (pagination.hasNextPage) {
      fetchEnquiries(pagination.currentPage + 1, search, fromDate, toDate);
    }
  };

  const handlePrevPage = () => {
    if (pagination.hasPrevPage) {
      fetchEnquiries(pagination.currentPage - 1, search, fromDate, toDate);
    }
  };

  const handlePageClick = (page: number) => {
    fetchEnquiries(page, search, fromDate, toDate);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-100">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-700 font-medium">{error}</p>
          <button onClick={() => fetchEnquiries()} className="mt-2 text-blue-600 hover:text-blue-800">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <EnquiryFilters onSearch={handleSearch} onReset={handleReset} />
      <div className="overflow-hidden rounded-xl border! border-border bg-tableBg shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-border">
                <th className="w-14 px-4 py-3 text-left font-semibold text-nowrap">
                  S. No
                </th>
                <th className="min-w-45 px-4 py-3 text-left font-semibold text-nowrap">
                  Full Name
                </th>
                <th className="min-w-37.5 px-4 py-3 text-left font-semibold text-nowrap">
                  Phone Number
                </th>
                <th className="min-w-45 px-4 py-3 text-left font-semibold text-nowrap">
                  Company Name
                </th>
                <th className="min-w-55 px-4 py-3 text-left font-semibold text-nowrap">
                  Email
                </th>
                <th className="min-w-45 px-4 py-3 text-left font-semibold text-nowrap">
                  Budget
                </th>
                <th className="min-w-[320px] px-4 py-3 text-left font-semibold text-nowrap">
                  Project Details
                </th>
                <th className="min-w-62.5 px-4 py-3 text-left font-semibold text-nowrap">
                  Page URL
                </th>
                <th className="w-32 px-4 py-3 text-left font-semibold text-nowrap">
                  Created At
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-border">
              {enquiries.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-10 text-center text-muted-foreground">
                    No enquiries found
                  </td>
                </tr>
              ) : (
                enquiries.map((enquiry, index) => (
                  <tr key={enquiry._id} className="transition-colors hover:bg-muted/50">
                    <td className="px-4 py-4">{(pagination.currentPage - 1) * 10 + index + 1}</td>
                    <td className="px-4 py-4 font-medium text-nowrap">
                      {enquiry.fullName}
                    </td>
                    <td className="px-4 py-4 text-nowrap">
                      {enquiry.phoneNumber}
                    </td>
                    <td className="max-w-45 px-4 py-4">
                      <div className="truncate" title={enquiry.companyName || "-"}>
                        {enquiry.companyName || "-"}
                      </div>
                    </td>
                    <td className="max-w-55 px-4 py-4">
                      <div className="truncate" title={enquiry.email}>
                        {enquiry.email || "-"}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-nowrap">
                      <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/20 dark:text-blue-400">
                        {enquiry.budget || "-"}
                      </span>
                    </td>
                    <td className="max-w-[320px] px-4 py-4">
                      <div className="truncate text-muted-foreground" title={enquiry.projectDetails}>
                        {enquiry.projectDetails || "-"}
                      </div>
                    </td>
                    <td className="max-w-62.5 px-4 py-4">
                      <div className="truncate text-blue-600 hover:underline" title={enquiry.pageUrl}>
                        {enquiry.pageUrl ? (
                          <a href={enquiry.pageUrl} target="_blank" rel="noopener noreferrer">
                            {enquiry.pageUrl}
                          </a>
                        ) : "-"}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-nowrap">
                      {new Date(enquiry.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <Pagination
          pagination={pagination}
          onNext={handleNextPage}
          onPrev={handlePrevPage}
          onPageClick={handlePageClick}
        />
      </div>

    </div >
  );
};

export default EnquiryTable;