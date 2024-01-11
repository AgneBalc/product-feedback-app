import FeedbackComment from "./FeedbackComment";
import { Comment, User } from "@prisma/client";

type ExtendedComment = Comment & {
  author: User;
  replies: Comment[];
};

interface CommentsSectionProps {
  comments: ExtendedComment[];
}

const CommentsSection = async ({ comments }: CommentsSectionProps) => {
  return comments.map((comment) => (
    <FeedbackComment key={comment.id} comment={comment} />
  ));
};

export default CommentsSection;
