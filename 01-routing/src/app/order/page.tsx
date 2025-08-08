'use client';
import { useRouter } from 'next/navigation';

export default function Order() {
  const router = useRouter();
  function handleClick() {
    console.log('Your order has been placed');
    router.push('/');
  }

  return (
    <div>
      <h1>This is your product</h1>
      <button
        className="px-2 py-1 bg-pink-200 border border-emerald-200"
        onClick={handleClick}
      >
        Place Order
      </button>
    </div>
  );
}
