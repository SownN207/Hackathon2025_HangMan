import {Board} from "~/components/whiteboard/board";
import NoteTaking from "~/components/sidebar/note_sidebar";

export default function CreatePage() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <h1 className="text-2xl font-bold mb-4">Create</h1>
      <p>This is the Create page. Add your creation logic here.</p>
      <Board/>
      <NoteTaking/>
    </div>
  );
}




