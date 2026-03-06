import { Home, FileText, Shield, Bell, HelpCircle, ChevronLeft, ChevronRight, Settings, BarChart3, LayoutDashboard } from "lucide-react";

import { LucideIcon } from 'lucide-react';

interface AdminMenuItem {
  href: string;
  icon: LucideIcon;
  label: string;
}

export const AdminMenuItems = [
  { href: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/admin/blog', icon: FileText, label: 'Blog' },
  // ... other items
] as const satisfies readonly AdminMenuItem[];

// export const UserMenuItems = [
//   { icon: <Home size={ 20} />, label: 'Dashboard', active: true },
// { icon: <Users size={ 20 } />, label: 'Users', count: 12 },
// ];