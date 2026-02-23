import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dashboard - CoderLala',
    description: 'Dashboard panel for CoderLala',
};

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="dashboard-layout">
            {children}
        </div>
    );
}
