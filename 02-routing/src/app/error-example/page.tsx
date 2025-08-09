async function getProducts() {
  const shouldErr = Math.floor(Math.random() * 2);

  if (shouldErr === 1) {
    throw new Error('Failed to fetch products');
  }

  return [
    { id: 1, name: 'Mobile' },
    { id: 2, name: 'Laptop' },
    { id: 3, name: 'Tablet' },
  ];
}

export default async function ErrorExp() {
  const prodcuts = await getProducts();

  return (
    <div className="flex flex-col text-center">
      <h1 className="text-2xl font-bold">Products</h1>
      <div className="flex items-center gap-4 mx-auto">
        {prodcuts.map((product) => (
          <div key={product.id}>{product.name}</div>
        ))}
      </div>
    </div>
  );
}
