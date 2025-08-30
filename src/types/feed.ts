// /types/post.ts
export interface Post {
  image: string; // URL to the post image
  friend: string; // URL to friend's avatar
  name: string;   // Friend's name

}

interface PostsProps {
  friend: string;  // URL of friend’s avatar
  name: string;    // Friend’s name
  image: string;   // URL of post image
}

