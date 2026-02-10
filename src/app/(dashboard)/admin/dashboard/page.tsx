"use client";
import { useState } from 'react';
import Sidebar from '@/app/components/admin/dashboard/Sidebar';
import Header from '@/app/components/admin/dashboard/Header';
import api from '@/lib/axios';

export default function DashboardPage() {
    const [userRole, setUserRole] = useState<'Admin' | 'Agent'>('Admin');

    // Add this logout function
    const handleLogout = async () => {
        await api.post('/auth/logout', {}, {
            withCredentials: true, // 🔴 mandatory
        });


    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800">
                Welcome {userRole}
            </h1>
            <p className="text-gray-600 mt-2">
                Manage your platform, view analytics, and oversee operations
            </p>
        </div>


    );
}