"use client";

import Image from "next/image";

interface PostProps {
  friend: string;
  name: string;
  image: string;
  description: string;
}

export default function Posts({ friend, name, image, description }: PostProps) {
  return (
    <div className="w-full rounded-xl border bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 p-4">
        <Image
          width={20}
          height={20} 
          src={friend}
          alt={name}
          className="w-12 h-12 rounded-full border"
        />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <span className="text-sm text-gray-500">2 hours ago</span>
        </div>
      </div>

      {/* Post image */}
      <Image width={600} height={800}  src={image} alt="" className="w-full object-cover" />

      {/* Footer */}
      <div className="p-4 text-gray-600 text-sm">
        <p>{description}</p>
      </div>
    </div>
  );
}
