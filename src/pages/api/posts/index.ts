import type { Post } from "@/types/posts";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post>,
) {
  res.status(200).json({ name: "John Doe" });
}
