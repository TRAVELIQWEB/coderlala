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
        <div className="min-h-screen bg-gray-50">
            {children}
        </div>
    );
}

