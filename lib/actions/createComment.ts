"use server";

import { CreateCommentType, createCommentSchema } from "../validators/comment";
import { auth } from "../auth";
import { db } from "../db";
import { revalidatePath } from "next/cache";

interface createCommentProps {
  formData: CreateCommentType;
  feedbackId: string;
  replyToId?: string;
}

export const createComment = async ({
  formData,
  feedbackId,
  replyToId,
}: createCommentProps) => {
  const validatedData = createCommentSchema.safeParse(formData);

  if (!validatedData.success) {
    return { error: "Invalid fields!" };
  }

  const { content } = validatedData.data;

  const session = await auth();

  if (!session?.user) {
    return { error: "Unauthorized" };
  }

  try {
    await db.comment.create({
      data: {
        content,
        authorId: session.user.id,
        feedbackId,
        replyToId,
      },
    });

    revalidatePath(`/feedback/${feedbackId}`);
  } catch (error) {
    return {
      error: "Could not create comment at this time. Please try again later",
    };
  }
};
