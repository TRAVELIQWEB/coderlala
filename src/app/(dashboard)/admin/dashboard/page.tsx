"use client";
import { useState } from 'react';
import Sidebar from '@/app/components/admin/dashboard/Sidebar';
import Header from '@/app/components/admin/dashboard/Header';
import api from '@/lib/axios';

export default function DashboardPage() {
    const [userRole, setUserRole] = useState<'Admin' | 'Agent'>('Admin');


    return (
        <div>
            <h1 className="text-3xl font-bold">
                Welcome {userRole}
            </h1>
            <p className="mt-2">
                Manage your platform, view analytics, and oversee operations
            </p>
        </div>


    );
}