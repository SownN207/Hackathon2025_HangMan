import {Board} from "~/components/whiteboard/board";

export default function CreatePage() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <h1 className="text-2xl font-bold mb-4">Create</h1>
      <main className="flex-1 w-full">
        {/* Make Board take full available space */}
        <Board />
      </main>

    </div>
  );
}




