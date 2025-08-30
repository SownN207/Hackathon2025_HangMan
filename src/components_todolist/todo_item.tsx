"use client";

import React from "react";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Checkbox } from "~/components/ui/checkbox";
import InlineEditor from "~/components_todolist/inline_editor";
import type { Todo } from "~/types/todo_types";


export default function TodoItem({
    todo,
    editingId,
    startEdit,
    saveEdit,
    remove,
    toggle,
    setEditingId,
}: {
    todo: Todo;
    editingId: string | null;
    startEdit: (id: string) => void;
    saveEdit: (id: string, text: string) => void;
    remove: (id: string) => void;
    toggle: (id: string) => void;
    setEditingId: (id: string | null) => void;
}) {
    return (
        <Card>
            <CardContent className="flex items-center justify-between p-2">
                <div className="flex items-center gap-2 w-full">
                    <Checkbox checked={todo.completed} onCheckedChange={() => toggle(todo.id)} />


                    {editingId === todo.id ? (
                        <InlineEditor
                            initial={todo.text}
                            onSave={(val) => saveEdit(todo.id, val)}
                            onCancel={() => setEditingId(null)}
                        />
                    ) : (
                        <span
                            className={`flex-1 break-words ${todo.completed ? "line-through text-gray-500" : ""}`}
                            onDoubleClick={() => startEdit(todo.id)}
                            >
                                {todo.text}
                        </span>
                    )}
                </div>


                <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => startEdit(todo.id)}>
                        Edit
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => remove(todo.id)}>
                        Delete
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}