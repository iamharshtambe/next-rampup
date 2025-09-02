'use client';

import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname();
  const productId = pathname.split('/')[2];
  const reviewId = pathname.split('/')[4];

  return (
    <div>
      Page not found for Review {reviewId} of Product {productId}
    </div>
  );
}
