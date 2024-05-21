"user server";
import { Post } from "@/mongodb/models/post";
import { currentUser } from "@clerk/nextjs/server";

export default async function deletePostAction(postId: string) {
  const user = await currentUser();

  if (!user?.id) {
    throw new Error("User not authenticated");
  }

  const post = await Post.findById(postId);
}
