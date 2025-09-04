import Link from 'next/link';

export default function F1() {
  return (
    <div>
      <h1>F1</h1>

      <div className="flex items-center gap-4">
        <Link href="/f1/f2">Go to F2</Link>
        <Link href="/f3">Go to F3</Link>
      </div>
    </div>
  );
}
