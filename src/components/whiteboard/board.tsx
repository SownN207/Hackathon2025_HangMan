"use client";

import dynamic from "next/dynamic";

// Import CSS from package root
import "@excalidraw/excalidraw/index.css";

// Dynamically import Excalidraw with SSR disabled
const Excalidraw = dynamic(
  () => import("@excalidraw/excalidraw").then((mod) => mod.Excalidraw),
  { ssr: false }
);

export function Board() {
  return (
    <>
      <div style={{ height: "100%", width: "100%"}}>
        <Excalidraw />
      </div>
    </>
  );
}
