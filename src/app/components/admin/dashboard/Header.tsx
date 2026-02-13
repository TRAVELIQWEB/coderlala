'use client';

import api from '@/lib/axios';
import { Moon, Sun, User, Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Header({ collapsed, setCollapsed, onMenuClick }: {
  collapsed: boolean; setCollapsed: (val: boolean) => void; onMenuClick?: () => void
}) {
  const [darkMode, setDarkMode] = useState(false);
  const [adminAllData, setAdminAllData] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);

  const [notifications] = useState([
    { id: 1, text: 'New user registered', time: '5 min ago' },
    { id: 2, text: 'Project update completed', time: '1 hour ago' },
    { id: 3, text: 'System backup scheduled', time: '2 hours ago' },
  ]);

  const router = useRouter();

  const handleLogout = async () => {
    const res = await api.get('/auth/logout');
    if (res.data.status == "success") {
      router.push("/auth/login")
    }
  };

  const fetchUserRole = async () => {
    try {
      const response = await api.get('/admin/me');
      setAdminAllData(response.data);
    } catch (error) {
      console.error('Failed to fetch admin data', error);
    }
  };

  useEffect(() => {
    fetchUserRole();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">

        {/* Left: Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 mr-4"
        >
          <Menu size={20} />
        </button>

        {/* Sidebar Toggle (Desktop) */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>

        <div className="flex-1"></div>


        {/* Right Section */}
        <div className="flex items-center space-x-4">

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-600"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>


          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 bg-linear-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
              <User size={15} className="text-white!" />
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-1 bg-red-600 text-white! rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}