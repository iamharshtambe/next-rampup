'use client';

import Link from 'next/link';
import '../globals.css';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot Password', href: '/forgot-password' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [input, setInput] = useState('');

  return (
    <div className="h-[600px] p-4 flex flex-col">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-black w-36 px-2 py-1"
      />

      {navLinks.map((link, index) => {
        const isActive =
          pathname === link.href ||
          (pathname.startsWith(link.href) && link.href !== '/');
        return (
          <Link
            href={link.href}
            key={index}
            className={isActive ? 'font-bold text-black' : ''}
          >
            {link.name}
          </Link>
        );
      })}

      <span className="bg-amber-200 p-2 w-15">{children}</span>
    </div>
  );
}
