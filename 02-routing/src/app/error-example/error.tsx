'use client';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // // Log the error to an error reporting service
  }, [error]);

  return (
    <div className="text-center">
      <p className="font-bold text-2xl text-red-500">
        {error?.message || 'An error occured'}
      </p>
    </div>
  );
}
