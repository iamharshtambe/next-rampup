export default function Documentation({
  params,
}: {
  params: { slug?: string[] };
}) {
  const slug = params.slug ?? [];

  return (
    <div>
      <p>Documentation</p>
      {slug?.length === 2 ? (
        <p>
          Viewing docs for feature {slug[0]} and concept {slug[1]}
        </p>
      ) : slug?.length === 1 ? (
        <p>Viewing docs for feature {slug[0]}</p>
      ) : (
        <p>Welcome to the docs overview</p>
      )}
    </div>
  );
}
