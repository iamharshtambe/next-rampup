type Quote = {
  quotes: {
    id: number;
    quote: string;
    author: string;
  }[];
};

async function fetchQuotes(): Promise<Quote> {
  const response = await fetch('https://dummyjson.com/quotes');

  if (!response.ok) {
    throw new Error('Failed to fetch quotes');
  }

  return response.json();
}

export default async function ServerFetch() {
  const quotes = await fetchQuotes();

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold my-2">
        Fetching Quotes in Server Component
      </h1>

      <div className="max-w-7xl mx-auto">
        {quotes?.quotes?.map((quote) => (
          <div key={quote.id} className="w-full border p-2 m-2 rounded-2xl">
            <p className="font-semibold ">"{quote.quote}"</p>
            <p>- {quote.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
