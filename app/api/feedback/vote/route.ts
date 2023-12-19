import { upvotedBySchema } from "@/lib/validators/feedback";
import { getAuthSession } from "@/lib/auth";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const PATCH = async (request: Request) => {
  try {
    const body = await request.json();

    const { feedbackId, voteValue } = upvotedBySchema.parse(body);

    const session = await getAuthSession();

    if (!session?.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

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

    if (vote) {
      await db.feedback.update({
        where: {
          id: feedbackId,
        },
        data: {
          upvotes: {
            increment: voteValue,
          },
        },
      });
    }

    return NextResponse.json({ message: "OK" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Could not upvote at this time. Please try later" },
      { status: 500 }
    );
  }
};
