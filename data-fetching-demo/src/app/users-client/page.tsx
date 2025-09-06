'use client';

import { useEffect, useState } from 'react';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}[];

export default function UserClient() {
  const [data, setData] = useState<Post>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await response.json();

      setData(data);

      setIsLoading(false);
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Fetching Data in Client Component</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {data.map((post) => (
            <div key={post.id}>
              <p>{post.title}</p>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
