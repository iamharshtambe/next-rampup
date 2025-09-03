import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      Welcome Home
      <Link href="/about">About Us</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/counter">Counter</Link>
      <Link href="/docs">Documentation</Link>
      <Link href="/products">Products</Link>
      <Link href="/profile">Profile</Link>
      <div className="flex items-center gap-6">
        <Link href="/articles/breaking-news?lang=en">Read in English</Link>
        <Link href="/articles/breaking-news?lang=fr">Read in French</Link>
      </div>
    </div>
  );
}
