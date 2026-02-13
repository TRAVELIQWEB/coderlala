'use client';

import { useState } from 'react';
import Header from "@/app/components/admin/dashboard/Header";
import Sidebar from "@/app/components/admin/dashboard/Sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="min-h-screen flex">

            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

            <div className={`flex-1 flex flex-col transition-all duration-300 ${collapsed ? 'lg:ml-20' : 'lg:ml-64'}`} >
                <Header collapsed={collapsed} setCollapsed={setCollapsed} />
                <main className="p-8 flex-1">
                    {children}
                </main>
            </div>
        </div>
    );
}
