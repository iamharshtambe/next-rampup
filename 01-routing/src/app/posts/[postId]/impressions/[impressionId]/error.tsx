'use client';
import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  function reload() {
    startTransition(() => {
      router.refresh();
      reset();
    });
  }

  return (
    <div>
      <p>{error.message}</p>
      <button
        className="px-2 py-1 bg-emerald-200 rounded-2xl"
        onClick={() => reload()}
      >
        Try Again
      </button>
    </div>
  );
}
