"use client";
import Link from "next/link";

import Feed from "~/components/feed/feed";
import type { Post } from "~/types/feed";

const posts = [
  { id: "1", friend: "/images/friend1.jpg", name: "Jason", image: "/images/photo1.jpg" },
  { id: "2", friend: "/images/friend2.jpg", name: "Alice", image: "/images/photo2.jpg" },
  // add more posts
];


export default function HomePage() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <main className="flex-1 flex justify-center items-start">
        <Feed posts={posts} />
      </main>
    </div>
  );
}

