export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <h1>Featured Products</h1>
    </div>
  );
}
