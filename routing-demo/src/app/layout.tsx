export const metaData = {
  title: 'Routing Demo',
  description: 'Routing concepts explained',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
