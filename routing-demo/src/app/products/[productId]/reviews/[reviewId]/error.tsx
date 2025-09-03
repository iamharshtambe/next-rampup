'use client';

import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

export default function ErrorBoundry({
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
      <button onClick={() => reload()}>Try Again</button>
    </div>
  );
}
