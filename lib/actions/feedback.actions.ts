"use server";

import { revalidatePath } from "next/cache";
import { db } from "../db";
import {
  CreateFeedbackType,
  EditFeedbackType,
  createFeedbackSchema,
  editFeedbackSchema,
} from "../validators/feedback";
import { auth } from "../auth";
import { redirect } from "next/navigation";
import { categories, sortOrderList, statusList } from "@/constants";
import { STATUS } from "@prisma/client";

export const getAllSuggestions = async (searchParams?: {
  sort?: string;
  filter?: string;
}) => {
  let orderBy;
  if (searchParams?.sort) {
    const existingSortOrder = sortOrderList.find(
      (item) => item.name === searchParams.sort
    );

    if (existingSortOrder) {
      orderBy = existingSortOrder.orderBy;
    }
  } else {
    orderBy = sortOrderList[0].orderBy;
  }

  let whereClause = {};
  if (searchParams?.filter) {
    const existingCategory = categories.find(
      (category) => category === searchParams.filter
    );
    if (existingCategory && existingCategory !== "All") {
      whereClause = { status: "SUGGESTIONS", category: searchParams.filter };
    }
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

export const getAllNotSuggestions = async () => {
  try {
    const data = await db.feedback.findMany({
      where: { status: { not: "SUGGESTIONS" } },
      include: {
        comments: true,
        upvotedBy: true,
      },
      orderBy: { upvotes: "desc" },
    });

    return data;
  } catch (error) {
    throw new Error("Failed to fetch feedbacks.");
  }
};

export const getFeedbackById = async (id: string) => {
  try {
    const data = await db.feedback.findUnique({
      where: { id },
      include: {
        comments: true,
        upvotedBy: true,
      },
    });

    return data;
  } catch (error) {
    throw new Error("Failed to fetch feedback.");
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

export const updateFeedback = async (
  formData: EditFeedbackType,
  id: string
) => {
  const validatedData = editFeedbackSchema.safeParse(formData);

  if (!validatedData.success) {
    return { error: "Invalid fields!" };
  }

  const { title, category, status, description } = validatedData.data;
  const statusKey = statusList.find((item) => item.name === status)!.key;

  const session = await auth();

  if (!session?.user) {
    return { error: "Unauthorized" };
  }

  try {
    await db.feedback.update({
      where: { id },
      data: {
        title,
        category,
        description,
        status: statusKey,
      },
    });
    revalidatePath(`/feedback/${id}`);
  } catch (error) {
    return {
      error: "Could not update feedback at this time. Please try again later",
    };
  }
  redirect(`/feedback/${id}`);
};

export const disconnectReplies = async (id: string) => {
  try {
    const comments = await db.comment.findMany({
      where: { feedbackId: id },
      include: { replies: true },
    });

    const commentsWithReplies = comments.filter(
      (comment) => comment.replies.length > 0
    );

    for (const comment of commentsWithReplies) {
      const replyIds = comment.replies.map((reply) => reply.id);

      await db.comment.update({
        where: { id: comment.id },
        data: {
          replies: {
            disconnect: replyIds.map((replyId) => ({ id: replyId })),
          },
        },
      });
    }
  } catch (error) {
    return { error: "Database Error: Failed to disconnect replies." };
  }
};

export const deleteFeedback = async (id: string) => {
  try {
    await disconnectReplies(id);

    await db.feedback.delete({
      where: { id },
    });

    revalidatePath("/");
  } catch (error) {
    return { error: "Database Error: Failed to Delete Post." };
  }
  redirect("/");
};
