// components/Header.tsx
'use client';

import api from '@/lib/axios';
import { User, Menu, ChevronLeft, ChevronRight, Link, Hamburger } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ThemeToggle from '../../ThemeToggle';
import { motion } from 'framer-motion';

interface AdminData {
  name?: string;
  email?: string;
  role?: string;
  // add other fields as needed
}

export default function Header({
  collapsed,
  setCollapsed,
  onMenuClick
}: {
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
  onMenuClick?: () => void
}) {
  const [adminData, setAdminData] = useState<AdminData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const fetchUserData = async () => {
    try {
      setIsLoading(true);
      const response = await api.get('/admin/me');
      setAdminData(response.data);
    } catch (error) {
      console.error('Failed to fetch admin data', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

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

  // Get initials for avatar
  const getInitials = () => {
    if (!adminData?.name) return 'U';
    return adminData.name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className="sticky top-0 z-30 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-3 transition-colors duration-200">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center">
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 mr-2 text-gray-700 dark:text-gray-200 transition-colors"
            aria-label="Toggle menu"
          >
            <Hamburger size={20} />
          </button>

          {/* Sidebar Toggle (Desktop) */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        {/* Center - could add breadcrumbs or title */}
        <div className="flex-1 lg:ml-4">
          {/* Optional: Add breadcrumbs or page title here */}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle - using the new component */}
          <ThemeToggle />

          {/* Logout */}
          <div className="flex items-center gap-3 ml-2">

            {/* CTA Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <button
                // href="/contact"
                // onClick={() => setIsOpen(false)}
                onClick={handleLogout}

                className="
                      block py-3 px-4 rounded-lg text-center
                      bg-linear-to-r from-blue-600 to-purple-600 
                      text-white! font-semibold
                      hover:from-blue-700 hover:to-purple-700
                      transition-all
                    "
              >
                Logout
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Development indicator - remove in production */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full text-xs bg-gray-800 dark:bg-gray-700 text-white px-2 py-1 rounded-b z-50">
          Dev Mode
        </div>
      )}
    </header>
  );
}