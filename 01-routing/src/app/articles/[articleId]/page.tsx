import Link from 'next/link';

export default async function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: 'en' | 'fr' | 'es' }>;
}) {
  const { articleId } = await params;
  const { lang = 'en' } = await searchParams;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-6">
        <h1 className="text-3xl font-bold">News Article {articleId}</h1>
        <p className="text-gray-400">Reading in {lang.toUpperCase()}</p>

        <div className="flex items-center justify-center gap-4">
          <Link
            href={`/articles/${articleId}?lang=en`}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
          >
            English
          </Link>
          <Link
            href={`/articles/${articleId}?lang=es`}
            className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg transition-colors"
          >
            Spanish
          </Link>
          <Link
            href={`/articles/${articleId}?lang=fr`}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors"
          >
            French
          </Link>
        </div>
      </div>
    </div>
  );
}
