import { db } from "@/lib/db";
import CommentCard from "./CommentCard";
import { ExtendedComment } from "@/lib/types/db";
import { getComments } from "../../../../lib/actions/comments.actions";

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

  const comments = await getComments(whereClause);

  return comments.map((comment) => (
    <CommentCard comment={comment} replyToUsername={replyToUsername} />
  ));
};

export default CommentsSection;
