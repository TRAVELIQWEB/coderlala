"use client";
import { useEffect, useState } from 'react';
import QuickActions from '@/app/components/admin/dashboard/QuickActions';
import Sidebar from '@/app/components/admin/dashboard/Sidebar';
import Header from '@/app/components/admin/dashboard/Header';
import StatsGrid from '@/app/components/admin/dashboard/StatsGrid';
import RecentActivity from '@/app/components/admin/dashboard/RecentActivity';
import api from '@/lib/axios';

export default function DashboardPage() {
    const [userRole, setUserRole] = useState<'Admin' | 'Agent'>('Admin');

    // Add this logout function
  const handleLogout = async () => {
  await api.post('/auth/logout', {}, {
    withCredentials: true, // 🔴 mandatory
  });

  
};
// useEffect(() => {
//     fetchUserRole()
// }, []);

// const fetchUserRole = async () => {
//     await api.get('/admin/me');
// }

//      const handleLogout = async () => {
//     try {
//       // ✅ Call backend logout to clear httpOnly cookies
//       await api.post("/auth/logout");
//     } catch (err) {
//       console.log("Logout API failed, clearing client cookies anyway");
//     }

//     // ✅ Clear client-side cookies (non-httpOnly only)
//     document.cookie.split(";").forEach((cookie) => {
//       const eqPos = cookie.indexOf("=");
//       const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;

//       document.cookie =
//         name.trim() + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
//     });

//     // ✅ Clear storages if you use them
//     localStorage.clear();
//     sessionStorage.clear();

//     // ✅ redirect
//     window.location.href = "/login";
//   };

    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar />
            <div className="ml-64">
                <Header />
                <main className="p-8">
                    {/* Welcome Section with Logout Button */}
                    <div className="mb-8 flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">
                                Welcome {userRole}
                            </h1>
                            <p className="text-gray-600 mt-2">
                                Manage your platform, view analytics, and oversee operations
                            </p>
                        </div>
                        
                        {/* Add this logout button */}
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                        >
                            Logout
                        </button>
                    </div>

                </main>
            </div>
        </div>
    );
}