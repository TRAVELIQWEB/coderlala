// app/components/admin/dashboard/Sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  ChevronLeft,
  Menu,
  LogOut,
  FolderKanban,
  BarChart3
} from 'lucide-react';
import styles from './Sidebar.module.css';
import { useTheme } from 'next-themes';
import { AdminMenuItems } from '@/data/DashboardMenu';

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export default function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
  const pathname = usePathname();
  const { theme } = useTheme();

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`${styles.overlay} ${!collapsed ? styles.overlayVisible : ''}`}
        onClick={() => setCollapsed(true)}
      />

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : styles.expanded}`}>
        {/* Logo area */}
        <div className={styles.logoArea}>
          {!collapsed ? (
            <div className="flex items-center space-x-3">
              {/* LOGO - RESPONSIVE SIZING */}
              <div className="relative h-10">

                <img
                  src="/logo/CoderLalaLogoLight.svg"
                  alt="CoderLalaLogo Light"
                  className="w-full h-full object-contain"
                  key="dark-logo"
                />


              </div>
            </div>
          ) : (
            <div className="size-12 rounded-lg flex items-center justify-center mx-auto">
              {theme === "light" ? (
                <img
                  src="/favicon.svg"
                  alt="CoderLalaLogo Dark"
                  className="w-full h-full object-contain"
                  key="light-logo"
                />
              ) : (
                <img
                  src="/favicon.svg"
                  alt="CoderLalaLogo Dark"
                  className="w-full h-full object-contain"
                  key="light-logo"
                />
              )}
              {/* <img
                src="/favicon.svg"
                alt="CoderLalaLogo Dark"
                className="w-full h-full object-contain"
                key="light-logo"
              /> */}
            </div>)}
        </div>

        {/* Navigation */}
        <nav className={styles.nav}>
          {AdminMenuItems.map((item, key) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={key}
                href={item.href}
                className={`${styles.navItem} ${isActive ? styles.active : ''}`}
                title={collapsed ? item.label : undefined}
              >
                <item.icon size={20} className={styles.navIcon} />
                {!collapsed && <span className={styles.navLabel}>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        {/* <div className={`${styles.footer} p-4`}>
          <button className={styles.logoutButton}>
            <LogOut size={20} />
            {!collapsed && <span>Logout</span>}
          </button>
        </div> */}
      </aside>
    </>
  );
}