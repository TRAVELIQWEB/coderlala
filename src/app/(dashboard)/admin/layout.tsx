// app/components/admin/dashboard/DashboardLayout.tsx
'use client';

import { useState } from 'react';
import Sidebar from "@/app/components/admin/dashboard/Sidebar";
import styles from './DashboardLayout.module.css';
import Header2 from '@/app/components/admin/dashboard/Header2';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <div className={styles.container}>
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

            <div className={`${styles.mainContent} ${collapsed ? styles.collapsed : styles.expanded}`}>
                {/* <Header collapsed={collapsed} setCollapsed={setCollapsed} /> */}
                <Header2 collapsed={collapsed} setCollapsed={setCollapsed} />
                <main className={styles.contentArea}>
                    {children}
                </main>
            </div>
        </div>
    );
}