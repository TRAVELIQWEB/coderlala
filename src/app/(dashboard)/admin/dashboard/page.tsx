"use client";
import { useState } from 'react';
import Sidebar from '@/app/components/admin/dashboard/Sidebar';
import Header from '@/app/components/admin/dashboard/Header';
import api from '@/lib/axios';
import { AdminMenuItems } from '@/data/DashboardMenu';
import { SidebarMenuCard } from './SidebarMenuCard';

export default function DashboardPage() {
    const [userRole, setUserRole] = useState<'Admin' | 'Agent'>('Admin');

    // Filter out dashboard for cards
    const cardItems = AdminMenuItems.filter(item => item.href !== '/admin/dashboard');
    return (
        <div>
            <h1 className="text-3xl font-bold">
                Welcome {userRole}
            </h1>
            <p className="mt-2">
                Manage your platform, view analytics, and oversee operations
            </p>
            {/* Grid of SidebarMenuCard components */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {cardItems.map((card, index) => (
                    <SidebarMenuCard
                        key={index}
                        title={card.label}
                        // description={card.description}
                        href={card.href}
                        // icon={card.icon}
                    />
                ))}
            </div> */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {cardItems.map((item) => (
                    <div key={item.href} className="p-4 border rounded-lg shadow-sm">
                        <item.icon className="w-6 h-6 mb-2" />
                        <h3 className="font-semibold">{item.label}</h3>
                    </div>
                ))}

            </div> */}
        </div>


    );
}