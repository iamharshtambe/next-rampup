import Author from './author';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}[];

export default async function SqeuentialFetching() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post = await res.json();

  const filteredPosts = posts.filter((post) => post.id % 10 === 1);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Squential Data Fetching</h1>
      <div>
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="border border-white p-2 rounded-2xl my-4"
          >
            <h1>Title: {post.title}</h1>
            <p>{post.body}</p>
            <Author userId={post.userId} />
          </div>
        ))}
      </div>
    </div>
  );
}
