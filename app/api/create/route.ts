import { createFeedbackSchema } from "@/lib/validators/feedback";
import { getAuthSession } from "@/lib/auth";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();

    const { title, category, description } = createFeedbackSchema.parse(body);

    const session = await getAuthSession();

    if (!session?.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const newFeedback = await db.feedback.create({
      data: {
        title,
        category,
        description,
        authorId: session.user.id,
      },
    });

    return NextResponse.json(
      { feedback: newFeedback, message: "Feedback created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Could not create a feedback at this time. Please try later" },
      { status: 500 }
    );
  }
};
