'use client';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
      <p className="mt-2 text-gray-400 text-center max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <button
        onClick={() => router.replace('/')}
        className="mt-6 inline-block px-6 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition"
      >
        Go Home
      </button>
    </div>
  );
}
