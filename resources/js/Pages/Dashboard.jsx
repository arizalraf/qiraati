import AppLayout from '@/Layouts/AppLayout';

export default function Dashboard() {
    return <div>Ini Halaman Dashboard</div>;
}

Dashboard.layout = (page) => <AppLayout children={page} title="Dashboard" />;
