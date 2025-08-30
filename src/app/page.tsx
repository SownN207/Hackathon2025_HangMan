// pages/index.tsx
"use client";
import { useState } from "react";

type WhiteboardElement =
  | { id: number; type: "text" }
  | {
      id: number;
      type: "line";
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      dragging?: "start" | "end" | null;
    }
  | { id: number; type: "shape" };

export default function Whiteboard() {
  const [elements, setElements] = useState<WhiteboardElement[]>([]);

  // Add a new element
  const addElement = (type: WhiteboardElement["type"]) => {
    if (type === "line") {
      setElements((prev) => [
        ...prev,
        { id: prev.length + 1, type, x1: 10, y1: 25, x2: 190, y2: 25, dragging: null },
      ]);
    } else {
      setElements((prev) => [...prev, { id: prev.length + 1, type }]);
    }
  };

  // Handle mouse move for dragging
  const handleMouseMove = (e: React.MouseEvent, lineId: number) => {
    setElements((prev) =>
      prev.map((el) => {
        if (el.type === "line" && el.id === lineId && el.dragging) {
          const svgRect = (e.target as SVGSVGElement).getBoundingClientRect();
          const x = e.clientX - svgRect.left;
          const y = e.clientY - svgRect.top;
          if (el.dragging === "start") return { ...el, x1: x, y1: y };
          if (el.dragging === "end") return { ...el, x2: x, y2: y };
        }
        return el;
      })
    );
  };

  // Start dragging an endpoint
  const handleMouseDown = (lineId: number, point: "start" | "end") => {
    setElements((prev) =>
      prev.map((el) =>
        el.type === "line" && el.id === lineId ? { ...el, dragging: point } : el
      )
    );
  };

  // Stop dragging
  const handleMouseUp = (lineId: number) => {
    setElements((prev) =>
      prev.map((el) =>
        el.type === "line" && el.id === lineId ? { ...el, dragging: null } : el
      )
    );
  };

  return (
    <div className="p-6">
      {/* Buttons */}
      <div className="space-x-2 mb-4">
        <button
          onClick={() => addElement("text")}
          className="bg-blue-500 text-white px-3 py-2 rounded"
        >
          Add Text Box
        </button>
        <button
          onClick={() => addElement("line")}
          className="bg-green-500 text-white px-3 py-2 rounded"
        >
          Add Line
        </button>
        <button
          onClick={() => addElement("shape")}
          className="bg-purple-500 text-white px-3 py-2 rounded"
        >
          Add Shape
        </button>
      </div>

      {/* Whiteboard area */}
      <div className="border h-[500px] bg-gray-100 p-4 overflow-auto">
        {elements.map((el) => (
          <div key={el.id} className="mb-3 p-3 border rounded bg-white shadow">
            {el.type === "text" && (
              <textarea
                placeholder="Type here..."
                className="w-full border rounded p-2"
              />
            )}

            {el.type === "line" && (
              <svg
                width="200"
                height="50"
                className="border"
                onMouseMove={(e) => handleMouseMove(e, el.id)}
                onMouseUp={() => handleMouseUp(el.id)}
              >
                <line
                  x1={el.x1}
                  y1={el.y1}
                  x2={el.x2}
                  y2={el.y2}
                  stroke="black"
                  strokeWidth={2}
                />
                {/* draggable circles at endpoints */}
                <circle
                  cx={el.x1}
                  cy={el.y1}
                  r={5}
                  fill="red"
                  onMouseDown={() => handleMouseDown(el.id, "start")}
                />
                <circle
                  cx={el.x2}
                  cy={el.y2}
                  r={5}
                  fill="red"
                  onMouseDown={() => handleMouseDown(el.id, "end")}
                />
              </svg>
            )}

            {el.type === "shape" && (
              <div className="w-16 h-16 bg-red-300 rounded" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
