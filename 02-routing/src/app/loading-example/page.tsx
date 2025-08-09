async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return {
    stats: {
      users: 10000,
    },
  };
}

export default async function LoadingExp() {
  const data = await getData();

  return (
    <div className="text-center text-2xl">
      <h1>Users: {data.stats.users}</h1>
    </div>
  );
}
