"use server";

import { revalidatePath } from "next/cache";
import { auth } from "../auth";
import { db } from "../db";
import { UpvotedByType } from "../validators/feedback";
import { redirect } from "next/navigation";

export const upvote = async ({ feedbackId }: UpvotedByType) => {
  const session = await auth();

  if (!session?.user) {
    redirect("/sign-in");
  }

  try {
    let vote;

    const existingVote = await db.userUpvote.findFirst({
      where: {
        userId: session.user.id,
        feedbackId,
      },
    });

    if (existingVote) {
      vote = await db.userUpvote.delete({
        where: {
          userId_feedbackId: {
            feedbackId,
            userId: session.user.id,
          },
        },
      });
    } else {
      vote = await db.userUpvote.create({
        data: {
          feedbackId,
          userId: session.user.id,
        },
      });
    }

    const voteValue = existingVote ? -1 : 1;

    if (vote) {
      const updatedFeedback = await db.feedback.update({
        where: {
          id: feedbackId,
        },
        data: {
          upvotes: {
            increment: voteValue,
          },
        },
      });
      revalidatePath("/");
      revalidatePath(`/feedback/${feedbackId}`);

      return { data: updatedFeedback };
    }
  } catch (error) {
    return {
      error: "Could not upvote at this time. Please try later",
    };
  }
};
