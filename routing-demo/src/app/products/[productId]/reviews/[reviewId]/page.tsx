export default function ReviewDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const { productId, reviewId } = params;

  return (
    <div>
      <p>Product - {productId}</p>
      <p>Review - {reviewId}</p>
    </div>
  );
}
