'use client';

import { Search, Bell, Moon, Sun, User } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications] = useState([
    { id: 1, text: 'New user registered', time: '5 min ago' },
    { id: 2, text: 'Project update completed', time: '1 hour ago' },
    { id: 3, text: 'System backup scheduled', time: '2 hours ago' },
  ]);

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200 px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Search */}
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search users, projects, analytics..."
              className="w-full pl-12 pr-4 py-3 bg-gray-100 border-0 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          {/* Dark Mode Toggle */}
          {/* <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button> */}

          {/* Notifications */}
          <div className="relative group">
            <button className="p-2 rounded-lg hover:bg-gray-100 relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
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
                <a href="#" className="text-blue-600 text-sm font-medium">
                  View all notifications
                </a>
              </div>
            </div>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
              <User size={20} className="text-white" />
            </div>
            {/* <div>
              <p className="font-semibold">User</p>
              <p className="text-sm text-gray-500">Admin</p>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
}