/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Link from "next/link";

import Feed from "~/components/feed/feed";
import type { Post } from "~/types/feed";
import profile1 from "/public/images/Profile/profile1.jpg";
import profile2 from "/public/images/photo2.jpg";

const posts = [
  { id: "1", friend: "https://static.vecteezy.com/system/resources/previews/024/959/971/non_2x/businessman-portrait-elegant-man-in-business-suit-employee-of-business-institution-in-uniform-man-office-worker-business-avatar-profile-picture-illustration-vector.jpg", name: "Jason", 
    image: "https://i.sstatic.net/fqNYt.png", 
    description: "I’ve been trying to work through some problems and thought you might have some insights. Could you share how you would approach solving these questions?" },
  { id: "2", friend: "https://static.vecteezy.com/system/resources/previews/024/966/233/non_2x/businesswoman-portrait-beautiful-woman-in-business-suit-employee-of-business-institution-in-uniform-lady-office-worker-woman-business-avatar-profile-picture-illustration-vector.jpg", name: "Alice", 
    image: "https://i.sstatic.net/7Kr1t.png", 
    description: "I’m currently working on implementing a responsive feed component in our app and have run into some coding problems, and I was hoping to get your guidance on how to approach them." },
  // add more posts
];


export default function HomePage() {
  return (
    <div className="p-4 h-screen w-screen">
      <h1 className="text-2xl font-bold mb-4">Questions</h1>
      <hr className="border-gray-300 mb-6" />
      <main className="flex-1 flex justify-center items-start">
        <Feed posts={posts} />
      </main>
    </div>
  );
}

