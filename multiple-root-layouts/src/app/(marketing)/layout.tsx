import '../globals.css';

export const metadata = {
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
      <body>
        <header className="w-full bg-sky-300 p-4">Header</header>

        <div className="h-[600px] p-4">{children}</div>

        <footer className="w-full bg-sky-300 p-4">Footer</footer>
      </body>
    </html>
  );
}
