"use client";
import { useState } from 'react';
import QuickActions from '@/app/components/admin/dashboard/QuickActions';
import Sidebar from '@/app/components/admin/dashboard/Sidebar';
import Header from '@/app/components/admin/dashboard/Header';
import StatsGrid from '@/app/components/admin/dashboard/StatsGrid';
import RecentActivity from '@/app/components/admin/dashboard/RecentActivity';

export default function DashboardPage() {
    const [userRole, setUserRole] = useState<'Admin' | 'Agent'>('Admin');


    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar />
            <div className="ml-64">
                <Header />
                <main className="p-8">
                    {/* Welcome Section */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-800">
                            Welcome {userRole}
                        </h1>
                        <p className="text-gray-600 mt-2">
                            Manage your platform, view analytics, and oversee operations
                        </p>
                    </div>

                    {/* Stats Overview */}
                    {/* <StatsGrid /> */}

                    {/* Content Area */}
                    {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2">
              <RecentActivity />
            </div>
            <div>
              <QuickActions userRole={userRole} />
            </div>
          </div> */}
                </main>
            </div>
        </div>
    );
}
