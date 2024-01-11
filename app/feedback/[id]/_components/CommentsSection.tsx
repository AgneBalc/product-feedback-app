import { db } from "@/lib/db";
import FeedbackComment from "./FeedbackComment";

interface CommentsSectionProps {
  feedbackId: string;
}

const CommentsSection = async ({ feedbackId }: CommentsSectionProps) => {
  const topLevelComments = await db.comment.findMany({
    where: {
      feedbackId,
      replyToId: null,
    },
    include: {
      author: true,
      replies: {
        include: {
          author: true,
        },
      },
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  if (!topLevelComments) return null;

  return (
    <div className="w-full rounded-md bg-white p-6">
      <h1 className="text-head-3">4 Comments</h1>
      <div className="divide-y divide-[#8C92B3] divide-opacity-25">
        {topLevelComments.map((comment) => (
          <FeedbackComment
            key={comment.id}
            comment={comment}
            feedbackId={feedbackId}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
