import { Metadata } from 'next';
import Link from 'next/link';

const products = [
  { id: 1, name: 'Mobile' },
  { id: 2, name: 'Laptop' },
  { id: 3, name: 'Tablet' },
];

export const metadata: Metadata = {
  title: 'Metadata Example',
  description: 'This is a static metadata',
};

export default function MetadataExp() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Product List</h1>
      <div className="flex items-center gap-4">
        {products.map((product) => (
          <Link href={`/metadata-example/${product.id}`} key={product.id}>
            {product.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
