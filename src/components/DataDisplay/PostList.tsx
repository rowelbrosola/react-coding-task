import type { Post } from "@/pages/TaskOne/TaskOne";
import type { JSX } from "react";

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps): JSX.Element {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
