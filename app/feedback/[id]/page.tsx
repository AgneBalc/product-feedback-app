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

  const comments = await db.comment.findMany({
    where: {
      feedbackId: feedback.id,
    },
    include: {
      author: true,
      replies: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  const topLevelComments = comments.filter(
    (comment) => comment.replyToId === null
  );

  return (
    <section className="flex flex-col gap-6">
      <FeedbackCard feedback={feedback} />
      {comments.length > 0 && (
        <section className="w-full rounded-md bg-white px-6 sm:px-8 pt-6 lg:pb-4">
          <h1 className="text-head-3 sm:-mb-1">
            {comments.length} Comment{comments.length > 1 && "s"}
          </h1>
          <div className="divide-y divide-[#8C92B3] divide-opacity-25">
            {topLevelComments && (
              <CommentsSection comments={topLevelComments} isReply={false} />
            )}
          </div>
        </section>
      )}
      <AddCommentForm />
    </section>
  );
};

export default FeedbackDetailPage;
