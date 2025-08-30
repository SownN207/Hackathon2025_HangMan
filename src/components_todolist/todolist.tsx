"use client";

import React, { useEffect, useState, useRef } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Progress } from "~/components/ui/progress";
import TodoItem from "./todo_item";
import type { Todo } from "~/types/todo_types";
import { motion, AnimatePresence } from "framer-motion";

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("shadcn_todos_v1");
      if (raw) setTodos(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem("shadcn_todos_v1", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e?: React.FormEvent) => {
    e?.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: trimmed,
      completed: false,
      createdAt: Date.now(),
    };
    setTodos((t) => [newTodo, ...t]);
    setText("");
    inputRef.current?.focus();
  };

  const toggle = (id: string) => {
    setTodos((t) => t.map((x) => (x.id === id ? { ...x, completed: !x.completed } : x)));
  };

  const remove = (id: string) => {
    setTodos((t) => t.filter((x) => x.id !== id));
  };

  const startEdit = (id: string) => setEditingId(id);

  const saveEdit = (id: string, newText: string) => {
    const trimmed = newText.trim();
    if (!trimmed) remove(id);
    else setTodos((t) => t.map((x) => (x.id === id ? { ...x, text: trimmed } : x)));
    setEditingId(null);
  };

  const clearCompleted = () => setTodos((t) => t.filter((x) => !x.completed));

  const shown = todos.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  const completedCount = todos.filter((t) => t.completed).length;
  const progressValue = todos.length ? (completedCount / todos.length) * 100 : 0;

  return (
    <div
      className="w-full h-screen p-8 overflow-y-auto"
      style={{ backgroundColor: "#FCF8EF" }}
    >
      
      <h1 className="text-2xl font-semibold mb-4">Todo List</h1>

      {/* Animated Progress Tracker */}
      <div className="mb-4">
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
          <motion.div
            className="h-2 bg-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressValue}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />
        </div>
        <div className="text-sm text-right mt-1">
          {completedCount} / {todos.length} completed
        </div>
      </div>

      <form onSubmit={addTodo} className="mb-4 flex gap-2">
        <Input
          ref={inputRef}
          placeholder="What needs doing?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          aria-label="New todo"
        />
        <Button type="submit" disabled={!text.trim()}>
          Add
        </Button>
      </form>

      <div className="mb-3 flex items-center gap-2">
        <span className="text-sm">Show:</span>
        <div className="flex gap-1">
          <Button
            variant={filter === "all" ? "secondary" : "outline"}
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          <Button
            variant={filter === "active" ? "secondary" : "outline"}
            onClick={() => setFilter("active")}
          >
            Active
          </Button>
          <Button
            variant={filter === "completed" ? "secondary" : "outline"}
            onClick={() => setFilter("completed")}
          >
            Completed
          </Button>
        </div>
        <div className="ml-auto text-sm">{todos.length} total</div>
      </div>

      {/* Sliding task list */}
      <ul className="space-y-2">
        <AnimatePresence>
          {shown.map((todo) => (
            <motion.li
              key={todo.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <TodoItem
                todo={todo}
                editingId={editingId}
                startEdit={startEdit}
                saveEdit={saveEdit}
                remove={remove}
                toggle={toggle}
                setEditingId={setEditingId}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm">{todos.filter((t) => !t.completed).length} left</div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => setTodos((t) => t.map((x) => ({ ...x, completed: true })))}
          >
            Mark all done
          </Button>
          <Button variant="outline" onClick={() => setTodos([])}>
            Clear all
          </Button>
          <Button variant="outline" onClick={clearCompleted}>
            Clear completed
          </Button>
        </div>
      </div>
    </div>
  );
}
