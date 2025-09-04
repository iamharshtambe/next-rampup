export default function DashboardLayout({
  children,
  notifications,
  revenue,
  user,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  user: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-xl font-semibold">{children}</h1>

      <div className="grid grid-cols-2 gap-4 p-6 w-1/2">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center h-40 rounded-lg shadow-md border">
            {user}
          </div>
          <div className="flex items-center justify-center h-40 rounded-lg shadow-md border">
            {revenue}
          </div>
        </div>

        <div className="flex items-center justify-center rounded-lg shadow-md border">
          {notifications}
        </div>
      </div>
    </div>
  );
}
