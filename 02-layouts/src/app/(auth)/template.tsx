'use client';
import Link from 'next/link';
import '../globals.css';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [input, setInput] = useState('');

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-zinc-900 text-zinc-100">
        <div className="flex items-center gap-2 justify-center cursor-pointer">
          <input
            className="border bg-white text-black"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (pathname.startsWith(link.href) && link.href !== '/');

            return (
              <Link
                className={isActive ? 'font-bold text-blue-500' : ''}
                href={link.href}
                key={link.name}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <main className="flex-1 p-4">{children}</main>

        <footer className="p-4 text-center text-xl font-semibold bg-zinc-600">
          Footer
        </footer>
      </body>
    </html>
  );
}
