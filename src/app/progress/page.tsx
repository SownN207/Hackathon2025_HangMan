//import {ProgressCompoent as Progress} from "@/components/ui";
//import {Progress} from "~/components/ui/progress";
import Todolist from "~/components_todolist/todolist";
//import {SidebarComponent as Sidebar }  from "../components/sidebar/Sidebar";

export default function ProgressPage() {
  return (
    <div className="flex min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Progress</h1>
      <div className="flex-1 p-6">
        <Todolist/>
      </div>
    </div>
  );
}
