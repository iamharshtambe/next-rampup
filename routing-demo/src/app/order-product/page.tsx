'use client';

import { useRouter } from 'next/navigation';

export default function OrderProduct() {
  const router = useRouter();

  function handleClick() {
    console.log('Your order has been placed');
    router.push('/');
  }

  return (
    <div>
      <h1>Order Product</h1>

      <button
        onClick={handleClick}
        className="bg-neutral-300 p-2 rounded-2xl cursor-pointer"
      >
        Place Order
      </button>
    </div>
  );
}
