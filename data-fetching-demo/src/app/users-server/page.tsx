type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}[];

export default async function UserServer() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data: Post = await response.json();

  return (
    <div>
      <h1>Fetching Data in Server Component</h1>
      {data.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p> <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
