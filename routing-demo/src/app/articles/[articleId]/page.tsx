export default async function Article({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: 'en' | 'fr' | 'es' }>;
}) {
  const { articleId } = await params;
  const { lang = 'en' } = await searchParams;
  return (
    <div>
      <p>Article - {articleId}</p>
      <p>Reading in {lang}</p>
    </div>
  );
}
/*
'use client';

import 'use' from 'react';

export default function Article({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: 'en' | 'fr' | 'es' }>;
}) {
  const { articleId } = use(params);
  const { lang = 'en' } = use(searchParams);
  return (
    <div>
      <p>Article - {articleId}</p>
      <p>Reading in {lang}</p>
    </div>
  );
}
*/
