"use server";

import { revalidatePath } from "next/cache";
import { db } from "../db";
import {
  CreateFeedbackType,
  createFeedbackSchema,
} from "../validators/feedback";
import { auth } from "../auth";
import { redirect } from "next/navigation";

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
