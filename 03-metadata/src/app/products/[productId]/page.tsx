import { Metadata } from 'next';

type Props = { params: Promise<{ productId: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productId } = await params;
  return {
    title: `Product ${productId}`,
  };
}

export default async function ProductDetails({ params }: Props) {
  const { productId } = await params;
  return (
    <div>
      <h1 className="font-bold text-2xl text-center">
        Product Details - {productId}
      </h1>
    </div>
  );
}
