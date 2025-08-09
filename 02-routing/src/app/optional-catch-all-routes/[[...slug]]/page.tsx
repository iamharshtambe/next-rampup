export default async function OptionalCatchAllRoutes({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;

  return (
    <div className="text-center text-2xl font-bold flex flex-col">
      Optional Catch All Routes
      <div>
        {slug === undefined ? 'slugs not found' : <p>[{slug + ' '}]</p>}
      </div>
    </div>
  );
}
