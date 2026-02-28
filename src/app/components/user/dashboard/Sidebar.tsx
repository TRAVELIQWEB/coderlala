'use client';

import {
  Home, Users, Settings, BarChart3,
  FileText, Shield, Bell, HelpCircle,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import { useState } from 'react';

const menuItems = [
  { icon: <Home size={20} />, label: 'Dashboard', active: true },
  { icon: <Users size={20} />, label: 'Users', count: 12 },
  { icon: <FileText size={20} />, label: 'Projects', count: 25 },
  { icon: <BarChart3 size={20} />, label: 'Analytics' },
  { icon: <Shield size={20} />, label: 'Security' },
  { icon: <Settings size={20} />, label: 'Settings' },
  { icon: <Bell size={20} />, label: 'Notifications', count: 3 },
  { icon: <HelpCircle size={20} />, label: 'Support' },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`
      fixed left-0 top-0 h-screen bg-linear-to-b from-[#0f1a2e] to-[#1a2d4a]
      text-white transition-all duration-300 z-40
      ${collapsed ? 'w-20' : 'w-64'}
    `}>
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-linear-to-r from-blue-500 to-cyan-400 rounded-lg" />
              <span className="text-xl font-bold">CoderLala User</span>
            </div>
          )}
          {collapsed && (
            <div className="w-8 h-8 bg-linear-to-r from-blue-500 to-cyan-400 rounded-lg mx-auto" />
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20"
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`
              flex items-center rounded-lg px-4 py-3 transition-all
              ${item.active
                ? 'bg-linear-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                : 'hover:bg-white/10 text-gray-300'
              }
            `}
          >
            <span className="shrink-0">{item.icon}</span>
            {!collapsed && (
              <>
                <span className="ml-3 font-medium">{item.label}</span>
                {item.count && (
                  <span className="ml-auto bg-red-500 text-xs px-2 py-1 rounded-full">
                    {item.count}
                  </span>
                )}
              </>
            )}
          </a>
        ))}
      </nav>

      {/* User Profile (Bottom) */}
      {!collapsed && (
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-linear-to-r from-purple-500 to-pink-500 rounded-full" />
            <div>
              <p className="font-semibold">Ravi Kaliya</p>
              <p className="text-sm text-gray-400">User</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}