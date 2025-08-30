import type { NextApiRequest, NextApiResponse } from "next";

type Comment = {
  id: number;
  author: string;
  content: string;
  timestamp: string;
};

// In-memory storage
let comments: Comment[] = [];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    const { author, content } = req.body;
    if (!author || !content) {
      return res.status(400).json({ error: "Missing author or content" });
    }
    const newComment: Comment = {
      id: comments.length + 1,
      author,
      content,
      timestamp: new Date().toISOString(),
    };
    comments.push(newComment);
    res.status(201).json(newComment);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
