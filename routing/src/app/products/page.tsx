import Link from 'next/link';
import React from 'react';

const productList = [
  { id: 1, name: 'Laptop', price: 55000 },
  { id: 2, name: 'Smartphone', price: 30000 },
  { id: 3, name: 'Headphones', price: 2500 },
  { id: 4, name: 'Keyboard', price: 1500 },
  { id: 5, name: 'Mouse', price: 800 },
];

export default function Products() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold my-4">Products</h1>

      <div className="flex gap-6">
        {productList.map((product) => (
          <div
            className="border p-2 cursor-pointer rounded-md"
            key={product.id}
          >
            <p>{product.name}</p>

            <p>{product.price}</p>

            <Link href={`/products/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
