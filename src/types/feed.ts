/* eslint-disable @typescript-eslint/no-unused-vars */

// /types/post.ts
export interface Post {
  id: string;
  image: string; // URL to the post image
  friend: string; // URL to friend's avatar
  name: string;   // Friend's name
  description: string; // Optional description or caption

}

interface PostsProps {
  friend: string;  // URL of friend’s avatar
  name: string;    // Friend’s name
  image: string;   // URL of post image
}

