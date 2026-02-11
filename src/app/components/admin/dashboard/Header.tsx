'use client';

import api from '@/lib/axios';
import { Bell, Moon, Sun, User, LogOut, Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header({ onMenuClick }: { onMenuClick?: () => void }) {
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

        {/* Spacer for desktop */}
        <div className="hidden lg:block flex-1"></div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-600"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 rounded-lg hover:bg-gray-100 relative"
            >
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
                <div className="p-4 border-b">
                  <h3 className="font-semibold">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notif) => (
                    <div key={notif.id} className="p-4 hover:bg-gray-50 border-b last:border-0">
                      <p className="text-sm">{notif.text}</p>
                      <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t">
                  <a href="#" className="text-blue-600 text-sm font-medium">View all</a>
                </div>
              </div>
            )}
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
              <User size={20} className="text-white" />
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}