// app/components/admin/dashboard/Header.tsx
'use client';

import { Bell, Search, Moon, Sun, User, LogOut } from 'lucide-react';
import { useState } from 'react';
import styles from './Header2.module.css';
import ThemeToggle from '../../ThemeToggle';
import { useRouter } from 'next/navigation';
import api from '@/lib/axios';

interface HeaderProps {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}

export default function Header2({ collapsed, setCollapsed }: HeaderProps) {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            const res = await api.get('/auth/logout');
            if (res.data.status === "success") {
                router.push("/auth/login");
            }
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerLeft}>
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className={styles.menuButton}
                    aria-label="Toggle sidebar"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
                    </svg>
                </button>

            </div>

            <div className={styles.headerRight}>
                <ThemeToggle />

                <button
                    onClick={handleLogout}
                    className="group flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-300 text-sm font-medium relative overflow-hidden"
                >
                    <LogOut size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    <span>Logout</span>
                    <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                </button>

            </div>
        </header>
    );
}