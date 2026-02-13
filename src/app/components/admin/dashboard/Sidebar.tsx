'use client';

import {
  Home,
  FileText,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '/admin/dashboard' },
  { icon: FileText, label: 'Blog', href: '/admin/blog' },
];

export default function Sidebar({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
}) {

  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}
      {/* {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )} */}

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-4 left-4 z-30 lg:hidden p-2 bg-white rounded-lg shadow-md border border-gray-200"
      >
        <ChevronRight size={20} />
      </button>

      <aside
        className={`
          fixed top-0 left-0 h-full
          bg-white border-r border-gray-200
          transition-all duration-300 z-50
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          ${collapsed ? 'w-20' : 'w-64'}
        `}
      >
        {/* Logo - Matching Header Style */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          <Link href="/admin/dashboard" className="flex items-center group btn">
            {!collapsed ? (
              <div className="flex items-center space-x-3">
                {/* LOGO - RESPONSIVE SIZING */}
                <div className="relative h-18 sm:h-10 md:w-[150px] md:h-[45px] lg:h-[60px]">
                  {/* {!isDarkMode ? ( */}
                  <img
                    src="/logo/CoderLalaLogoLight.svg"
                    alt="CoderLalaLogo Light"
                    className="w-full h-full object-contain"
                    key="dark-logo"
                  />
                  {/* ) : ( */}
                  {/* <img
                      src="/logo/CoderLalaLogoDark.svg"
                      alt="CoderLalaLogo Dark"
                      className="w-full h-full object-contain"
                      key="light-logo"
                    /> */}
                  {/* )} */}
                </div>
              </div>
            ) : (
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mx-auto">
                <img
                  src="/favicon.svg"
                  alt="CoderLalaLogo Dark"
                  className="w-full h-full object-contain"
                  key="light-logo"
                />
              </div>
            )}
          </Link>


          {/* Mobile Close */}
          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden p-1.5 rounded-lg hover:bg-gray-100 text-gray-600"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-3 space-y-1 mt-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`
                  flex items-center rounded-lg px-3 py-2.5 transition-all
                  ${collapsed ? 'justify-center' : ''}
                  ${isActive
                    ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }
                `}
              >
                <Icon size={20} className={isActive ? 'text-blue-600' : ''} />
                {!collapsed && <span className="ml-3 font-medium text-sm">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* User Profile - Matching Header Style */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
          {!collapsed ? (
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white">
                <span className="font-bold">SN</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Salman Nizam</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                SN
              </div>
            </div>
          )}
        </div>
      </aside >
    </>
  );
}