import React from "react";
import { PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";

const posts: PostProps[] = [
  {
    title: "First Post",
    content: "This is the content of the first post.",
    author: "Danish",
    date: "2025-09-21",
  },
  {
    title: "Second Post",
    content: "Another post to showcase dynamic rendering.",
    author: "Danish",
    date: "2025-09-22",
  },
];

const PostsPage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Posts</h1>
        {posts.map((post, index) => (
          <div key={index} className="bg-white p-4 rounded shadow mb-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-700 mt-2">{post.content}</p>
            {post.author && (
              <p className="text-sm text-gray-500 mt-1">By {post.author}</p>
            )}
            {post.date && (
              <p className="text-sm text-gray-400">{post.date}</p>
            )}
          </div>
        ))}
      </main>
    </div>
  );
};

export default PostsPage;
