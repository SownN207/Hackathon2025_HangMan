import Link from "next/link";
import TodoList from "~/components_todolist/todolist";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F5C000] text-white">
      (main page)
      <TodoList />
    </main>
  );
}
