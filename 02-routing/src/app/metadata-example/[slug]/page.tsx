import { Metadata } from 'next';

const dummyData = {
  '1': {
    title: '1st product',
  },
  '2': {
    title: '2nd product',
  },
  '3': {
    title: '3rd product',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = dummyData[slug as keyof typeof dummyData];

  return {
    title: data.title,
  };
}

export default async function DynamicMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="text-center">
      <h1>You are viewing product with id: {slug}</h1>
    </div>
  );
}
