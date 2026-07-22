// app/components/admin/dashboard/Sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  Mail,
  ChevronLeft,
  Menu,
  LogOut,
  FolderKanban,
  BarChart3
} from 'lucide-react';
import styles from './Sidebar.module.css';
import { useTheme } from 'next-themes';
import Image from 'next/image';

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export default function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
  const pathname = usePathname();
  const { theme } = useTheme();

  const menuItems = [
    { href: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { href: '/admin/blog', icon: FileText, label: 'Blog' },
    { href: '/admin/enquiry', icon: Mail, label: 'Enquiry' },
    // { href: '#', icon: FolderKanban, label: 'Projects' },
    // { href: '#', icon: Users, label: 'Users' },
    // { href: '#', icon: BarChart3, label: 'Analytics' },
    // { href: '#', icon: Settings, label: 'Settings' },
  ];

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
              <div className="relative w-full">
                {theme === "dark" ? (
                  <Image
                    src="/logo/CoderLalaLogoDark.svg"
                    alt="CoderLalaLogo Dark"
                    width={0}
                    height={0}
                    className="w-full h-full object-contain"
                    key="dark-logo"
                  />
                ) : (
                  <Image
                    src="/logo/CoderLalaLogoLight.svg"
                    alt="CoderLalaLogo Light"
                    width={0}
                    height={0}
                    className="w-full h-full object-contain"
                    key="light-logo"
                  />
                )}
              </div>
            </div>
          ) : (
            <div className="size-12 rounded-lg flex items-center justify-center mx-auto">
              {theme === "light" ? (
                <Image
                  src="/favicon.svg"
                  alt="CoderLalaLogo Light"
                  width={0}
                  height={0}
                  className="w-full h-full object-contain"
                  key="light-logo"
                />
              ) : (
                <Image
                  src="/favicon.svg"
                  alt="CoderLalaLogo Dark"
                  width={0}
                  height={0}
                  className="w-full h-full object-contain"
                  key="dark-logo"
                />
              )}
            </div>)}
        </div>

        {/* Navigation */}
        <nav className={styles.nav}>
          {menuItems.map((item, key) => {
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
      </aside>
    </>
  );
}