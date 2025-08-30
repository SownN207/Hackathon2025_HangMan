//import {ProgressCompoent as Progress} from "@/components/ui";
//import {Progress} from "~/components/ui/progress";
import Todolist from "~/components_todolist/todolist";
//import {SidebarComponent as Sidebar }  from "../components/sidebar/Sidebar";

export default function ProgressPage() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex-1">
        <Todolist/>
      </div>
    </div>
  );
}
