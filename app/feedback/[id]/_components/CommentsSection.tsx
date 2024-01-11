import { db } from "@/lib/db";
import Comment from "./Comment";

interface CommentsSectionProps {
  feedbackId: string;
}

const CommentsSection = async ({ feedbackId }: CommentsSectionProps) => {
  const comments = await db.comment.findMany({
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

  const topLevelComments = comments.filter((comment) => !comment.replyToId);
  console.log(comments);

  return (
    <div className="w-full rounded-md bg-white p-6">
      <h1 className="text-head-3">4 Comments</h1>
      <div className="divide-y divide-[#8C92B3] divide-opacity-25">
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

export default CommentsSection;
