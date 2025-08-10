import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between max-w-lg">
      <aside className="border-r p-6 w-64">
        <nav className="flex flex-col items-start mr-18">
          <Link href="/dashboard">Home</Link>
          <Link href="/dashboard/analytics">Analytics</Link>
        </nav>
      </aside>
      <main>{children}</main>
    </div>
  );
}
