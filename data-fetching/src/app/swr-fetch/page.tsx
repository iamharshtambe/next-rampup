'use client';

import useSWR from 'swr';

type Quote = {
  quotes: {
    id: number;
    quote: string;
    author: string;
  }[];
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function SWRFetch() {
  const { data, error, isLoading, mutate } = useSWR<Quote>(
    'https://dummyjson.com/quotes',
    fetcher,
    {
      revalidateOnFocus: true,
      refreshInterval: 30000,
      errorRetryCount: 3,
    }
  );

  if (isLoading) return <p className="text-center">Loading...</p>;

  if (error) return <p className="text-center">{error.message}</p>;

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold my-2">Fetching Quotes using SWR</h1>

      <div className="max-w-7xl mx-auto">
        {data?.quotes?.map((quote) => (
          <div key={quote.id} className="w-full border p-2 m-2 rounded-2xl">
            <p className="font-semibold ">"{quote.quote}"</p>
            <p>- {quote.author}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => mutate()}
        className="p-2 bg-black text-white rounded-full mb-4 cursor-pointer"
      >
        Refresh
      </button>
    </div>
  );
}
