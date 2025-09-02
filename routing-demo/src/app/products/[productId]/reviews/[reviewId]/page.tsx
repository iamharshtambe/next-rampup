import { notFound } from 'next/navigation';

export default async function ReviewDetails({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 1000) {
    notFound();
  }

  return (
    <div>
      <p>Product - {productId}</p>
      <p>Review - {reviewId}</p>
    </div>
  );
}
