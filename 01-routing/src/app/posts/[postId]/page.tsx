export default async function PostDetails({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;
  return (
    <div>
      <h1 className="font-bold text-2xl text-center">
        Post Details - {postId}
      </h1>
    </div>
  );
}
