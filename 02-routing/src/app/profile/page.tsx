'use client';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function Profile() {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  return (
    <div className=" flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center">Profile</h1>

      <button
        onClick={() => router.push('/')}
        className="px-2 py-1 bg-black text-white rounded-2xl text-sm cursor-pointer mt-2"
      >
        Get Lost to Home!
      </button>

      <p className="my-2">Path is: {pathName}</p>

      <p className="my-2">
        {searchParams.size === 0
          ? ''
          : `Search Params are: ${searchParams.getAll('name').join(', ')}`}
      </p>
    </div>
  );
}
