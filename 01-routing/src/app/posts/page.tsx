import Link from 'next/link';

export default function Post() {
  return (
    <div>
      <h1 className="font-bold text-2xl text-center">Posts</h1>

      <p className="text-center">
        <Link href="/">Go to Home </Link>
      </p>

      <div className="text-center">
        <Link href="/posts/1" replace>
          <p>Post 1</p>
        </Link>
        <Link href="/posts/1">
          <p>Post 2</p>
        </Link>
      </div>
    </div>
  );
}
