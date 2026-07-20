// app/admin/dashboard/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { FileText, Mail, Loader2 } from 'lucide-react';
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

  const statsData = [
    {
      title: 'Total Blog',
      value: stats.blogs.total.toString(),
      change: '+12%',
      icon: <FileText className="text-white!" size={24} />,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Total Enquiry',
      value: stats.enquiries.total.toString(),
      change: '+8%',
      icon: <Mail className="text-white!" size={24} />,
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
      {statsData.map((stat) => (
        <div
          key={stat.title}
          className="w-full glass-card  text-card-foreground rounded-2xl shadow-sm border border-border p-5 sm:p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start gap-3">
            <div className="min-w-0">
              <p className="text-base sm:text-lg font-semibold text-muted-foreground truncate">
                {stat.title}
              </p>
              <p className="text-2xl sm:text-3xl font-bold text-foreground mt-2">
                {stat.value}
              </p>
            </div>
            <div
              className={`shrink-0 p-2.5 sm:p-3 rounded-xl bg-linear-to-br ${stat.color} bg-opacity-10 dark:bg-opacity-20`}
            >
              {stat.icon}
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-border">
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full bg-linear-to-r ${stat.color} rounded-full`}
                style={{ width: '75%' }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}