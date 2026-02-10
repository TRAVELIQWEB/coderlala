import Header from "@/app/components/admin/dashboard/Header";
import Sidebar from "@/app/components/admin/dashboard/Sidebar";
import api from '@/lib/axios';
import LogoutBtn from "./LogoutBtn";

export const metadata = {
    title: 'Dashboard - CoderLala',
    description: 'Dashboard panel for CoderLala',
};

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <Sidebar />
                <div className="ml-64">
                    <Header />
                    <main className="p-8">
                        {/* Welcome Section with Logout Button */}
                        <div className="mb-8">
                            {children}

                        </div>

                    </main>
                </div>
            </div>
        </>
    );
}

