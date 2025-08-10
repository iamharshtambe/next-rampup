export default async function ProductDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="flex items-center justify-center">
      <h1 className="text-2xl font-bold">Product Details - {slug}</h1>
    </div>
  );
}
