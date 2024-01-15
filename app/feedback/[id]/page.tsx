import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import FeedbackCard from "@/components/Feedback";
import CommentsSection from "./_components/CommentsSection";
import AddCommentForm from "./_components/AddCommentForm";

interface FeedbackDetailPageProps {
  params: { id: string };
}

const FeedbackDetailPage = async ({ params }: FeedbackDetailPageProps) => {
  const { id } = params;

  const feedback = await db.feedback.findUnique({
    where: { id },
    include: {
      comments: true,
      upvotedBy: true,
    },
  });

  if (!feedback) return notFound();

  const topLevelComments = await db.comment.findMany({
    where: {
      feedbackId: feedback.id,
      replyToId: null,
    },
    include: {
      author: true,
      replies: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return (
    <section className="flex flex-col gap-6">
      <FeedbackCard feedback={feedback} />
      <section className="w-full rounded-md bg-white px-6 pt-6">
        <h1 className="text-head-3">4 Comments</h1>
        <div className="divide-y divide-[#8C92B3] divide-opacity-25">
          {topLevelComments && (
            <CommentsSection comments={topLevelComments} isReply={false} />
          )}
        </div>
      </section>
      <AddCommentForm />
    </section>
  );
};

export default FeedbackDetailPage;
