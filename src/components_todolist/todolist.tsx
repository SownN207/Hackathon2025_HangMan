"use client";

import React, { useEffect, useState, useRef } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import TodoItem from "./todo_item";
import type { Todo } from "~/types/todo_types";


export default function TodoList() {
	const [todos, setTodos] = useState<Todo[]>(() => {
		try {
			const raw = localStorage.getItem("shadcn_todos_v1");
			return raw ? (JSON.parse(raw) as Todo[]) : [];
		} catch {
			return [];
		}
	});

	const [text, setText] = useState("");
	const [editingId, setEditingId] = useState<string | null>(null);
	const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
	const inputRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		localStorage.setItem("shadcn_todos_v1", JSON.stringify(todos));
	}, [todos]);


	function addTodo(e?: React.FormEvent) {
		e?.preventDefault();
		const trimmed = text.trim();
		if (!trimmed) return;
		const newTodo: Todo = {
			id: Math.random().toString(36).slice(2, 9),
			text: trimmed,
			completed: false,
			createdAt: Date.now(),
		};
		setTodos((t) => [newTodo, ...t]);
		setText("");
		inputRef.current?.focus();
	}

	function toggle(id: string) {
		setTodos((t) => t.map((x) => (x.id === id ? { ...x, completed: !x.completed } : x)));
	}


	function remove(id: string) {
		setTodos((t) => t.filter((x) => x.id !== id));
	}


	function startEdit(id: string) {
		setEditingId(id);
	}


	function saveEdit(id: string, newText: string) {
		const trimmed = newText.trim();
		if (!trimmed) remove(id);
		else setTodos((t) => t.map((x) => (x.id === id ? { ...x, text: trimmed } : x)));
		setEditingId(null);
	}


	function clearCompleted() {
		setTodos((t) => t.filter((x) => !x.completed));
	}


	const shown = todos.filter((t) => {
		if (filter === "active") return !t.completed;
		if (filter === "completed") return t.completed;
		return true;
	});


	return (
		<div className="max-w-xl mx-auto p-4 bg-[#FCF8FE] rounded shadow space -y-4 text-black mt-10">
			<h1 className="text-2xl font-semibold mb-4">Todo List</h1>

			<form onSubmit={addTodo} className="mb-4 flex gap-4">
				<Input
					ref={inputRef}
					placeholder="What needs doing?"
					value={text}
					onChange={(e) => setText(e.target.value)}
					aria-label="New todo"
				/>
				<Button type="submit" disabled={!text.trim()} className="rounded bg-black hover:bg-[#69686D] text-[#FCF8FE]">
					Add
				</Button>
			</form>

			<div className="mb-3 flex items-center gap-2">
				<span className="text-sm">Show:</span>
				<div className="flex gap-1">
					<Button variant={filter === "all" ? "secondary" : "outline"} onClick={() => setFilter("all")}>
						All
					</Button>
					<Button variant={filter === "active" ? "secondary" : "outline"} onClick={() => setFilter("active")}>
						Active
					</Button>
					<Button variant={filter === "completed" ? "secondary" : "outline"} onClick={() => setFilter("completed")}>
						Completed
					</Button>
				</div>
				<div className="ml-auto text-sm">{todos.length} total</div>
			</div>


			<ul className="space-y-2">
				{shown.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
						editingId={editingId}
						startEdit={startEdit}
						saveEdit={saveEdit}
						remove={remove}
						toggle={toggle}
						setEditingId={setEditingId}
					/>
				))}
			</ul>


			<div className="mt-4 flex items-center justify-between">
				<div className="text-sm">{todos.filter((t) => !t.completed).length} left</div>
				<div className="flex gap-1">
					<Button variant="outline" onClick={() => setTodos((t) => t.map((x) => ({ ...x, completed: true })))}>
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