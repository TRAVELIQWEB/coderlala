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
            {children}
        </>
    );
}

