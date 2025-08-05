'use client';
import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-zinc-100">
      <p className="text-xl mb-4">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-zinc-800 rounded hover:bg-zinc-700 transition"
      >
        Increase
      </button>
    </div>
  );
}
