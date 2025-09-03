import { notFound } from 'next/navigation';

function generateRandomNumber(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ReviewDetails({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const randomError = generateRandomNumber(2);

  if (randomError === 1) {
    throw new Error('Error loading review');
  }
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
