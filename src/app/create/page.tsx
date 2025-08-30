import NoteTaking from "~/components/sidebar/note_sidebar";
import {Board} from "~/components/whiteboard/board";

export default function CreatePage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create</h1>
      <hr className="border-gray-300 mb-6" />
      <div className="flex h-screen w-screen">
        <div className="flex-1 bg-white p-4 overflow-hidden">
          <Board />
        </div>

        <div className="w-1/4 bg-gray-50 p-4 flex flex-col">
          <NoteTaking />
        </div>
      </div>

    </div>
  );
}




