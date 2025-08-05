export default async function ImpressionDetails({
  params,
}: {
  params: Promise<{ postId: string; impressionId: string }>;
}) {
  const { postId, impressionId } = await params;
  return (
    <div>
      <h1 className="font-bold text-2xl text-center">Impression Details</h1>
      <p className="text-center">
        Impressions for post {postId} are: {impressionId}
      </p>
    </div>
  );
}
