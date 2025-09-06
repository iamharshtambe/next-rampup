export default async function Author({ userId }: { userId: number }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const authors = await res.json();

  return (
    <div>
      Author - <span className="font-semibold">{authors.name}</span>
    </div>
  );
}
