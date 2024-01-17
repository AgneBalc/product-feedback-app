"use server";

import { revalidatePath } from "next/cache";
import { db } from "../db";
import { CreateFeedbackType } from "../validators/feedback";
import { auth } from "../auth";
import { redirect } from "next/navigation";

export const createFeedback = async (formData: CreateFeedbackType) => {
  const session = await auth();

  if (!session?.user) {
    return { error: "Unauthorized" };
  }

  const { title, category, description } = formData;

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
