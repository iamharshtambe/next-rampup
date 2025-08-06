import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href="/">
        <h1 className="font-bold text-2xl text-center">Home</h1>
      </Link>

      <Link href="/profile">
        <h2 className="font-bold text-2xl text-center">Profile</h2>
      </Link>

      <Link href="/blogs">
        <h2 className="font-bold text-2xl text-center">Blogs</h2>
      </Link>

      <Link href="/posts">
        <h2 className="font-bold text-2xl text-center">Posts</h2>
      </Link>

      <Link href="/products">
        <h2 className="font-bold text-2xl text-center">Products</h2>
      </Link>
    </div>
  );
}
