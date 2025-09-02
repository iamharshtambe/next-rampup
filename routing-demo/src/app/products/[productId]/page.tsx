import { Metadata } from 'next';

type ParamsType = {
  params: Promise<{ productId: string }>;
};

export async function generateMetadata({
  params,
}: ParamsType): Promise<Metadata> {
  const { productId } = await params;

  return {
    title: `Product ${productId}`,
  };
}

export default async function ProductDetails({ params }: ParamsType) {
  const { productId } = await params;

  return <div>Product Details - {productId}</div>;
}
