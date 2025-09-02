export default async function Documentation({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  if (slug?.length === 2) {
    return (
      <p>
        Viewing feature {slug[0]} and concept {slug[1]}
      </p>
    );
  } else if (slug?.length === 1) {
    return <p>Viewing feature {slug[0]}</p>;
  } else {
    return <p>Documentation</p>;
  }
}
