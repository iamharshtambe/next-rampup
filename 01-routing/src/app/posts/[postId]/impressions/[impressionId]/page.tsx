export default async function ImpressionDetails({
  params,
}: {
  params: Promise<{ postId: string; impressionId: string }>;
}) {
  const { postId, impressionId } = await params;
  function getRandom(count: number) {
    return Math.floor(Math.random() * count);
  }

  const random = getRandom(2);

  if (random === 1) {
    throw new Error('Error loading impressions');
  }
  return (
    <div>
      <h1 className="font-bold text-2xl text-center">Impression Details</h1>
      <p className="text-center">
        Impressions for post {postId} are: {impressionId}
      </p>
    </div>
  );
}
