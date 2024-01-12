import { cn } from "@/lib/utils";
import FeedbackComment from "./FeedbackComment";
import { Comment, User } from "@prisma/client";

type ExtendedComment = Comment & {
  author: User;
  replies: Comment[];
};

interface CommentsSectionProps {
  comments: ExtendedComment[];
  isReply: boolean;
  className?: string;
  replyToUsername?: string;
}

const CommentsSection = async ({
  comments,
  isReply,
  className,
  replyToUsername,
}: CommentsSectionProps) => {
  return comments.map((comment) => (
    <div
      key={comment.id}
      className={cn("flex flex-col gap-6", isReply ? "" : "py-6", className)}
    >
      <FeedbackComment
        comment={comment}
        isReply={isReply}
        replyToUsername={replyToUsername}
      />
    </div>
  ));
};

export default CommentsSection;
