import { useEffect, useState, type JSX } from "react";
import PostList from "@/components/DataDisplay/PostList";
import ErrorMessage from "@/components/DataDisplay/ErrorMessage";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function DataDisplay(): JSX.Element {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true); // new loading state

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true); // start loading
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const data: Post[] = await response.json();
        setPosts(data.slice(0, 5));
        setError(null);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false); // done loading (success or error)
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Stuff</h2>

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
}
