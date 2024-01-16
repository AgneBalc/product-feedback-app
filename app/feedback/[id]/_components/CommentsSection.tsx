import CommentCard from "./CommentCard";
import { Comment, User } from "@prisma/client";

type ExtendedComment = Comment & {
  author: User;
  replies: Comment[];
};

interface CommentsSectionProps {
  comments: ExtendedComment[];
  isReply: boolean;
  replyToUsername?: string;
}

const CommentsSection = async ({
  comments,
  isReply,
  replyToUsername,
}: CommentsSectionProps) => {
  return comments.map((comment) => (
    <CommentCard
      comment={comment}
      isReply={isReply}
      replyToUsername={replyToUsername}
    />
  ));
};

export default CommentsSection;
