// "use client";

// import Image from "next/image";

// interface PostProps {
//   friend: string;
//   name: string;
//   image: string;
//   description: string;
// }

// export default function Posts({ friend, name, image, description }: PostProps) {
//   return (
//     <div className="w-full rounded-xl border bg-white shadow-sm overflow-hidden">
//       {/* Header */}
//       <div className="flex items-center gap-3 p-4">
//         <Image
//           width={20}
//           height={20} 
//           src={friend}
//           alt={name}
//           className="w-12 h-12 rounded-full border"
//         />
//         <div>
//           <h3 className="font-semibold">{name}</h3>
//           <span className="text-sm text-gray-500">2 hours ago</span>
//         </div>
//       </div>

//       {/* Post image */}
//       <Image width={600} height={800}  src={image} alt="" className="w-full object-cover" />

//       {/* Footer */}
//       <div className="p-4 text-gray-600 text-sm">
//         <p>{description}</p>
//         <div className="flex items-center gap-4 mt-3 pt-3 border-t">
//           <a
//             href="https://www.youtube.com/watch?v=xvFZjo5PgG0&list=RDxvFZjo5PgG0&start_radio=1"
//             className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
//           >
//             Like
//           </a>
//           <a
//             href="https://www.youtube.com/watch?v=xvFZjo5PgG0&list=RDxvFZjo5PgG0&start_radio=1"
//             className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
//           >
//             Share
//           </a>
//           <a
//             href="https://www.youtube.com/watch?v=xvFZjo5PgG0&list=RDxvFZjo5PgG0&start_radio=1"
//             className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
//           >
//             Comment
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

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
        <div className="flex items-center gap-4 mt-3 pt-3 border-t">
          <a
            href="https://www.youtube.com/watch?v=xvFZjo5PgG0&list=RDxvFZjo5PgG0&start_radio=1"
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            Like
          </a>
          <a
            href="https://www.youtube.com/watch?v=xvFZjo5PgG0&list=RDxvFZjo5PgG0&start_radio=1"
            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
            </svg>
            Share
          </a>
          <a
            href="https://www.youtube.com/watch?v=xvFZjo5PgG0&list=RDxvFZjo5PgG0&start_radio=1"
            className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h11c.55 0 1-.45 1-1z" />
            </svg>
            Comment
          </a>
        </div>
      </div>
    </div>
  );
}