// app/admin/enquiries/page.tsx
'use client';

import React, { useEffect, useState } from "react";
import { Pencil, Loader2 } from "lucide-react";
import api from '@/lib/axios';
import EnquiryFilters from "./EnquiryFilter";

const EnquiryTable = () => {
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEnquiries = async (search?: string, fromDate?: string, toDate?: string) => {
    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams();
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
    } catch (error: any) {
      console.error('❌ Failed to fetch enquiries', error);
      setError(error.response?.data?.message || 'Failed to fetch enquiries');
      setEnquiries([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleSearch = (search: string, fromDate: string, toDate: string) => {
    fetchEnquiries(search, fromDate, toDate);
  };

  const handleReset = () => {
    fetchEnquiries();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
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
    <div>
      <EnquiryFilters onSearch={handleSearch} onReset={handleReset} />
      <div className="overflow-hidden rounded-xl border! border-border bg-background shadow-sm mt-5">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="w-14 px-4 py-3 text-left font-semibold text-nowrap">
                  S. No
                </th>
                <th className="min-w-[180px] px-4 py-3 text-left font-semibold text-nowrap">
                  Full Name
                </th>
                <th className="min-w-[150px] px-4 py-3 text-left font-semibold text-nowrap">
                  Phone Number
                </th>
                <th className="min-w-[180px] px-4 py-3 text-left font-semibold text-nowrap">
                  Company Name
                </th>
                <th className="min-w-[220px] px-4 py-3 text-left font-semibold text-nowrap">
                  Email
                </th>
                <th className="min-w-[180px] px-4 py-3 text-left font-semibold text-nowrap">
                  Budget
                </th>
                <th className="min-w-[320px] px-4 py-3 text-left font-semibold text-nowrap">
                  Project Details
                </th>
                <th className="min-w-[250px] px-4 py-3 text-left font-semibold text-nowrap">
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
                    <td className="px-4 py-4">{index + 1}</td>
                    <td className="px-4 py-4 font-medium text-nowrap">
                      {enquiry.fullName}
                    </td>
                    <td className="px-4 py-4 text-nowrap">
                      {enquiry.phoneNumber}
                    </td>
                    <td className="max-w-[180px] px-4 py-4">
                      <div className="truncate" title={enquiry.companyName || "-"}>
                        {enquiry.companyName || "-"}
                      </div>
                    </td>
                    <td className="max-w-[220px] px-4 py-4">
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
                    <td className="max-w-[250px] px-4 py-4">
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
      </div>
    </div>
  );
};

export default EnquiryTable;