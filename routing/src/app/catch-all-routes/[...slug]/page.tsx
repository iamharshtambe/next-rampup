export default async function CatchAllRoutes({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  return (
    <div className="text-center text-2xl font-bold">
      Catch All Routes
      <p>[{slug + ' '}]</p>
    </div>
  );
}
