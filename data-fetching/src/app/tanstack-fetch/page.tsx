'use client';

import { useQuery } from '@tanstack/react-query';

type Quote = {
  quotes: {
    id: number;
    quote: string;
    author: string;
  }[];
};

export default function TanstackFetch() {
  const { data, isLoading, error, refetch } = useQuery<Quote>({
    queryKey: ['Quotes'],
    queryFn: async () => {
      const response = await fetch('https://dummyjson.com/quotes');

      if (!response.ok)
        return <p className="text-center">Failed to fetch quotes</p>;

      return response.json();
    },
  });

  if (isLoading) return <p className="text-center">Loading...</p>;

  if (error) return <p className="text-center">{error.message}</p>;

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold my-2">
        Fetching Quotes using TanStack Query
      </h1>

      <div className="max-w-7xl mx-auto">
        {data?.quotes?.map((quote) => (
          <div key={quote.id} className="w-full border p-2 m-2 rounded-2xl">
            <p className="font-semibold ">"{quote.quote}"</p>
            <p>- {quote.author}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => refetch()}
        className="p-2 bg-black text-white rounded-full mb-4 cursor-pointer"
      >
        Refresh
      </button>
    </div>
  );
}
