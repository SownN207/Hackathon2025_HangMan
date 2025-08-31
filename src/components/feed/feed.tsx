"use client";

import React from "react";
import Posts from "~/components/feed/post"; // adjust path
import type { Post } from "~/types/feed";

interface FeedProps {
  posts: Post[];
}

const Feed: React.FC<FeedProps> = ({ posts }) => {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto h-[80vh] overflow-y-auto p-4 space-y-4">
        {posts.map((post) => (
          <Posts
            key = {post.id}
            friend={post.friend}
            name={post.name}
            image={post.image}
             description={post.description}
          />
        ))}
    </div>
  );
};

export default Feed;
