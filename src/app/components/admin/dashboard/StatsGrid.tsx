// app/admin/dashboard/page.tsx
'use client';
import Link from 'next/link'; // Keep Link for navigation
import { useEffect, useState } from 'react';
import { FileText, Mail, Loader2, ArrowBigRight, ArrowBigRightDash, ArrowBigRightDashIcon, ArrowUpRight } from 'lucide-react';
import api from '@/lib/axios';

interface DashboardStats {
  blogs: {
    total: number;
    draft: number;
    active: number;
    archived: number;
  };
  enquiries: {
    total: number;
    pending: number;
    resolved: number;
    rejected: number;
    today: number;
  };
}

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await api.get('/admin/dashboard');
      console.log("📊 DASHBOARD DATA:", res.data);

      const data = res.data?.data || res.data;
      setStats(data);
    } catch (error: any) {
      console.error('❌ Failed to fetch dashboard stats', error);
      setError(error.response?.data?.message || 'Failed to load dashboard');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-700 font-medium">Error: {error || 'Failed to load dashboard'}</p>
          <button
            onClick={fetchDashboardStats}
            className="mt-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const blogStatusBadges = [
    {
      label: 'Active',
      value: stats.blogs.active,
      className: 'bg-emerald-500',
    },
    {
      label: 'Draft',
      value: stats.blogs.draft,
      className: 'bg-slate-500',
    },
    {
      label: 'Archived',
      value: stats.blogs.archived,
      className: 'bg-orange-500',
    },
  ];

  const enquiryStatusBadges = [
    {
      label: 'Pending',
      value: stats.enquiries.pending,
      className: 'bg-yellow-500',
    },
    {
      label: 'Resolved',
      value: stats.enquiries.resolved,
      className: 'bg-emerald-500',
    },
    {
      label: 'Rejected',
      value: stats.enquiries.rejected,
      className: 'bg-rose-500',
    },
    {
      label: 'Today',
      value: stats.enquiries.today,
      className: 'bg-blue-500',

    },
  ];

  const statsData = [
    {
      title: 'Total Blog',
      value: stats.blogs.total,
      change: '+12%',
      icon: <FileText className="text-white!" size={24} />,
      color: 'from-blue-500 to-blue-600',
      badgeGroup: blogStatusBadges,
    },
    {
      title: 'Total Enquiries',
      value: stats.enquiries.total,
      change: '+8%',
      icon: <Mail className="text-white!" size={24} />,
      color: 'from-purple-500 to-purple-600',
      badgeGroup: enquiryStatusBadges,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
      {statsData.map((stat) => (
        <div
          key={stat.title}
          className="relative w-full rounded-2xl shadow-xl overflow-hidden group
                     bg-tableBg
                     border border-border
                     hover:shadow-2xl transition-all duration-300 ease-in-out
                     transform hover:-translate-y-1"
        >
          {/* Background gradient overlay for visual appeal */}
          <div className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300 ${stat.color.replace('from-', 'from-').replace('to-', 'to-')}`} />

          <div className="relative z-10 px-6 pt-6 pb-3 flex flex-col h-full">
            <div className="flex justify-between items-start gap-4 mb-4">
              <div className="min-w-0 text-primary">
                <p className="text-lg font-semibold truncate">
                  {stat.title}
                </p>
                <p className="text-4xl font-extrabold mt-2">
                  {stat.value}
                </p>
              </div>
              <div
                className={`shrink-0 p-3 rounded-full ${stat.color.replace('from-', 'bg-').replace('to-', 'bg-')} text-white shadow-lg`}
              >
                {stat.icon}
              </div>
            </div>

            <div className="grow" /> {/* Spacer to push content to bottom */}

            <div className="mt-2 pt-2 border-t border-border flex justify-between items-center">
              {stat.badgeGroup && (
                <div className="flex flex-wrap gap-2">
                  {stat.badgeGroup.map((badge) => (
                    <span key={badge.label} className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium text-white! ${badge.className}`}>
                      <span>{badge.label}:</span>
                      <span className="font-bold ">{badge.value}</span>
                    </span>
                  ))}
                </div>
              )}
              <Link href={stat.title === 'Total Blog' ? '/admin/blog' : '/admin/enquiry'} className="relative rounded-full p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 hover:scale-110">
                <span className="sr-only">View details</span>
                <ArrowUpRight />
                {/* <ArrowBigRightDashIcon /> */}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}