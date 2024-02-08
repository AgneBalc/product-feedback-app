import CommentCard from "./CommentCard";
import { getComments } from "@/lib/actions/comments.actions";
import { CommentsSectionProps } from "@/lib/types";

const CommentsSection = async ({
  replyToUsername,
  feedbackId,
  replyToComment,
}: CommentsSectionProps) => {
  const whereClause = replyToComment
    ? { feedbackId, replyToId: replyToComment.id }
    : { feedbackId, replyToId: null };

  const comments = await getComments(whereClause);

  return comments.map((comment) => (
    <CommentCard
      key={comment.id}
      comment={comment}
      replyToUsername={replyToUsername}
    />
  ));
};

export default CommentsSection;
