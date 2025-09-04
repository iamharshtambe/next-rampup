import Link from 'next/link';

export default function Notifications() {
  return (
    <div>
      <h1>Notifications</h1>
      <Link href="/dashboard/archived">Archived Notifications</Link>
    </div>
  );
}
