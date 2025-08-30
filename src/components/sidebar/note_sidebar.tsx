"use client";

import React, { useState } from "react";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

type Comment = { id: number; author: string; content: string; timestamp: string };

export default function NoteTaking() {
  const [comments, setNotes] = useState<Comment[]>([]);
  const [author, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNote = () => {
    if (!author || !content) return;

    const newComment: Comment = {
      id: comments.length + 1,
      author,
      content,
      timestamp: new Date().toISOString(),
    };

    setNotes([...comments, newComment]);
    setTitle("");
    setContent("");
  };

  return (
    <div className="right-0 top-0 h-full w-80 bg-white shadow-lg flex flex-col">
      <Card className="flex-1 flex flex-col">
        <CardHeader>
          <CardTitle>Notes</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 p-0">
          <ScrollArea className="h-full p-2">
            {comments.map((c) => (
              <div key={c.id} className="border-b py-2">
                <p className="font-bold text-sm">{c.author}</p>
                <p className="text-sm">{c.content}</p>
                <p className="text-xs text-gray-400">{new Date(c.timestamp).toLocaleString()}</p>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>

      <div className="p-2 border-t flex flex-col gap-2">
        <Input placeholder="Title" value={author} onChange={(e) => setTitle(e.target.value)} />
        <Input placeholder="Your notes" value={content} onChange={(e) => setContent(e.target.value)} />
        <Button onClick={addNote}>Add Comment</Button>
      </div>
    </div>
  );
}
