"use server";

import { revalidatePath } from "next/cache";
import { db } from "../db";
import {
  CreateFeedbackType,
  createFeedbackSchema,
} from "../validators/feedback";
import { auth } from "../auth";
import { redirect } from "next/navigation";

export type SortOrder = "asc" | "desc";

export const getAllFeedbacks = async (sortOrder?: string) => {
  let orderBy;
  if (sortOrder === "Most Upvotes" || !sortOrder) {
    orderBy = { upvotes: "desc" as SortOrder };
  }
  if (sortOrder === "Least Upvotes") {
    orderBy = { upvotes: "asc" as SortOrder };
  }
  if (sortOrder === "Most Comments") {
    orderBy = { comments: { _count: "desc" as SortOrder } };
  }
  if (sortOrder === "Least Comments") {
    orderBy = { comments: { _count: "asc" as SortOrder } };
  }

  try {
    const data = await db.feedback.findMany({
      where: { status: "SUGGESTIONS" },
      include: {
        comments: true,
        upvotedBy: true,
      },
      orderBy: orderBy,
    });

    return data;
  } catch (error) {
    throw new Error("Failed to fetch feedbacks.");
  }
};

export const createFeedback = async (formData: CreateFeedbackType) => {
  const validatedData = createFeedbackSchema.safeParse(formData);

  if (!validatedData.success) {
    return { error: "Invalid fields!" };
  }

  const { title, category, description } = validatedData.data;

  const session = await auth();

  if (!session?.user) {
    return { error: "Unauthorized" };
  }

  try {
    await db.feedback.create({
      data: {
        title,
        category,
        description,
        authorId: session.user.id,
      },
    });
    revalidatePath("/");
  } catch (error) {
    return {
      error: "Could not create feedback at this time. Please try again later",
    };
  }
  redirect("/");
};
