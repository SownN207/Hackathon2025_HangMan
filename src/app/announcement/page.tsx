/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Link from "next/link";

import Feed from "~/components/feed/feed";
import type { Post } from "~/types/feed";
import profile1 from "/public/images/Profile/profile1.jpg";
import profile2 from "/public/images/photo2.jpg";

const posts = [
  { id: "1", friend: "https://static.vecteezy.com/system/resources/previews/024/959/971/non_2x/businessman-portrait-elegant-man-in-business-suit-employee-of-business-institution-in-uniform-man-office-worker-business-avatar-profile-picture-illustration-vector.jpg", name: "Jason", 
    image: "https://excalidraw.nyc3.cdn.digitaloceanspaces.com/lp-cms/media/SW%20Architecture%20Diagram,%20SVG%20export%20glyphs%20subsetting.png", 
    description: "Just finished this architecture diagram for our new project!" },
  { id: "2", friend: "https://static.vecteezy.com/system/resources/previews/024/966/233/non_2x/businesswoman-portrait-beautiful-woman-in-business-suit-employee-of-business-institution-in-uniform-lady-office-worker-woman-business-avatar-profile-picture-illustration-vector.jpg", name: "Alice", 
    image: "https://community.atlassian.com/forums/image/serverpage/image-id/346491iFA52C55F373261E6/image-size/large?v=v2&px=999", 
    description: "Team 8, this is the notes for today's meeting. Keep up with the progress! Great work!" },
  // add more posts
];

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <h1 className="text-3xl font-bold tracking-tight text-foreground lg:pl-5">Home</h1>
      <p className="mt-2 text-muted-foreground lg:pl-5">Stay connected with your community</p>
      <main className="flex-1 flex justify-center items-start">
        <Feed posts={posts} />
      </main>
    </div>
  );
}



