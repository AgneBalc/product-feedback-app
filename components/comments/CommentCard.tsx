import CommentsSection from "./CommentsSection";
import { cn } from "@/lib/utils";
import { ExtendedComment } from "@/lib/types/db";
import MobileComment from "./MobileComment";
import DesktopComment from "./DesktopComment";

export interface CommentCardProps {
  comment: ExtendedComment;
  replyToUsername?: string;
}

const CommentCard = ({ comment, replyToUsername }: CommentCardProps) => {
  return (
    <article
      className={cn(
        "flex flex-col gap-6 relative",
        comment.replyToId ? "sm:gap-4" : "py-6 sm:py-8 sm:gap-8"
      )}
    >
      <MobileComment comment={comment} replyToUsername={replyToUsername} />
      <DesktopComment comment={comment} replyToUsername={replyToUsername} />

      {comment.replies.length > 0 && (
        <div
          className={cn(
            comment.replyToId ? "sm:gap-4" : "relative sm:gap-8",
            "flex flex-col gap-6"
          )}
        >
          {/* vertical line - mobile */}
          {!comment.replyToId && (
            <div className="absolute w-[1px] bg-gray bg-opacity-10 h-[90%] sm:hidden" />
          )}
          <CommentsSection
            feedbackId={comment.feedbackId}
            replyToComment={comment}
            replyToUsername={comment.author.username}
          />
        </div>
      )}
    </article>
  );
};

export default CommentCard;
