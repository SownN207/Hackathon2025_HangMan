/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Link from "next/link";

import Feed from "~/components/feed/feed";
import type { Post } from "~/types/feed";
import profile1 from "/public/images/Profile/profile1.jpg";
import profile2 from "/public/images/photo2.jpg";

const posts = [
  { id: "1", friend: "https://static.vecteezy.com/system/resources/previews/024/959/971/non_2x/businessman-portrait-elegant-man-in-business-suit-employee-of-business-institution-in-uniform-man-office-worker-business-avatar-profile-picture-illustration-vector.jpg", name: "Jason", 
    image: "https://static.vecteezy.com/system/resources/previews/041/180/849/non_2x/technology-event-poster-editor_template.jpeg?last_updated=1710863360", 
    description: "Check this out! The company will be hosting a seminar with our local partners at Manila! " },
  { id: "2", friend: "https://static.vecteezy.com/system/resources/previews/024/966/233/non_2x/businesswoman-portrait-beautiful-woman-in-business-suit-employee-of-business-institution-in-uniform-lady-office-worker-woman-business-avatar-profile-picture-illustration-vector.jpg", name: "Alice", 
    image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/ai-poster-design-template-3b32fb1c4890f1184b1364c1227af664_screen.jpg?ts=1686817095", 
    description: "As AI transforms how we collaborate and innovate, Belgian remote teams face opportunities and challenges alike: ethical dilemmas, skill gaps, and adapting to rapid change. Understanding these challenges helps teams thrive in a global, AI-driven workspace." },
  // add more posts
];


export default function HomePage() {
  return (
    <div className="p-4 h-screen w-screen">
      <h1 className="text-2xl font-bold mb-4">Events</h1>
      <hr className="border-gray-300 mb-6" />
      <main className="flex-1 flex justify-center items-start">
        <Feed posts={posts} />
      </main>
    </div>
  );
}

