'use client';
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-zinc-100 px-4">
      <h1 className="text-3xl font-bold mb-2">Page Not Found</h1>
      <p className="text-zinc-400 text-sm">
        Could not find requested resource:{' '}
        <span className="text-zinc-300">{pathname}</span>
      </p>
    </div>
  );
}
