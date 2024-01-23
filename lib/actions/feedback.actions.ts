"use server";

import { revalidatePath } from "next/cache";
import { db } from "../db";
import {
  CreateFeedbackType,
  createFeedbackSchema,
} from "../validators/feedback";
import { auth } from "../auth";
import { redirect } from "next/navigation";
import { categories, sortOrderList } from "@/constants";
import { STATUS } from "@prisma/client";

export const getAllFeedbacks = async (sort?: string, filter?: string) => {
  const existingSortOrder = sortOrderList.find((item) => item.name === sort);

  const orderBy = existingSortOrder
    ? existingSortOrder.orderBy
    : sortOrderList[0].orderBy;

  const existingCategory = categories.find((category) => category === filter);
  let whereClause = {};
  if (existingCategory && existingCategory !== "All") {
    whereClause = { status: "SUGGESTIONS", category: filter };
  } else {
    whereClause = {
      status: "SUGGESTIONS",
    };
  }

  try {
    const data = await db.feedback.findMany({
      where: whereClause,
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

export const getFeedbacksTotal = async (status: STATUS) => {
  try {
    const total = await db.feedback.count({
      where: { status },
    });

    return total;
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
