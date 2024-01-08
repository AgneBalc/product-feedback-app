"use server";

import { revalidatePath } from "next/cache";
import { db } from "../db";
import { createFeedbackSchema } from "../validators/feedback";
import { auth } from "../auth";
import { redirect } from "next/navigation";

export const createFeedback = async (prevState: any, formData: FormData) => {
  const session = await auth();

  if (!session?.user) {
    return { error: "Unauthorized" };
  }

  const data = Object.fromEntries(formData);
  const validatedData = createFeedbackSchema.safeParse(data);

  if (!validatedData.success) {
    return {
      fieldErrors: validatedData.error.flatten().fieldErrors,
    };
  }

  const { title, category, description } = validatedData.data;

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
      error: "Could not create a feedback at this time. Please try later",
    };
  }
  redirect("/");
};
