import NoteTaking from "~/components/sidebar/note_sidebar";
import {Board} from "~/components/whiteboard/board";

export default function CreatePage() {
  return (
    <div className="p-4 h-screen w-screen">
      <h1 className="text-2xl font-bold mb-4">Create</h1>
      <hr className="border-gray-300 mb-6" />
      <div className="flex h-screen w-screen">
        <div className="flex-[3]">
          <Board />
        </div>

        <div className="flex-[1] flex bg-gray-50">
          <NoteTaking />
        </div>
      </div>

    </div>
  );
}












