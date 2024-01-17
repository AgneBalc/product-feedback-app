import { db } from "@/lib/db";
import CommentCard from "./CommentCard";
import { Comment, User } from "@prisma/client";

type ExtendedComment = Comment & {
  author: User;
  replies: Comment[];
};

interface CommentsSectionProps {
  feedbackId: string;
  replyToComment?: ExtendedComment;
  replyToUsername?: string;
}

const CommentsSection = async ({
  replyToUsername,
  feedbackId,
  replyToComment,
}: CommentsSectionProps) => {
  const whereClause = replyToComment
    ? { feedbackId, replyToId: replyToComment.id }
    : { feedbackId, replyToId: null };

  const comments = await db.comment.findMany({
    where: whereClause,
    include: {
      author: true,
      replies: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return comments.map((comment) => (
    <CommentCard comment={comment} replyToUsername={replyToUsername} />
  ));
};

export default CommentsSection;
