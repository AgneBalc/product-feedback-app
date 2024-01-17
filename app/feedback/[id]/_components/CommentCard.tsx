import Image from "next/image";
import Button from "@/components/ui/Button";
import { Comment, User } from "@prisma/client";
import CommentsSection from "./CommentsSection";
import { cn } from "@/lib/utils";
import CommentReply from "./CommentReply";
import AddCommentForm from "./AddCommentForm";

type ExtendedComment = Comment & {
  author: User;
  replies: Comment[];
};

interface CommentCardProps {
  comment: ExtendedComment;
  replyToUsername?: string;
}

const CommentCard = async ({ comment, replyToUsername }: CommentCardProps) => {
  return (
    <article
      className={cn(
        "flex flex-col gap-6",
        comment.replyToId ? "sm:gap-4" : "py-6 sm:py-8 sm:gap-8 sm:relative"
      )}
    >
      <div
        className={cn(
          "flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8",
          comment.replyToId && "pl-6 sm:pl-11"
        )}
      >
        {/* tablet / desktop avatar */}
        <Image
          src={
            comment.author.image ||
            "https://cdn.imgbin.com/3/5/9/imgbin-computer-icons-user-profile-user-account-avatar-TfT3FkAEbgD76My1GynmW5KzT.jpg"
          }
          alt={comment.author.name}
          width={40}
          height={40}
          className="hidden sm:block rounded-[40px]"
        />

        {/* vertical line - tablet / desktop */}
        {!comment.replyToId && comment.replies.length > 0 && (
          <div className="hidden sm:block absolute w-[1px] bg-gray bg-opacity-10 h-auto left-5 mt-8 top-14 bottom-20" />
        )}

        <div
          className={cn(
            "flex sm:flex-col items-center sm:items-start gap-4 w-full",
            comment.replyToId ? "sm:gap-[10px]" : "sm:gap-4"
          )}
        >
          {/* mobile avatar */}
          <Image
            src={
              comment.author.image ||
              "https://cdn.imgbin.com/3/5/9/imgbin-computer-icons-user-profile-user-account-avatar-TfT3FkAEbgD76My1GynmW5KzT.jpg"
            }
            alt={comment.author.name}
            width={40}
            height={40}
            className="rounded-[40px] sm:hidden"
          />

          <div className="flex w-full justify-between">
            <div className="text-[13px] sm:text-sm">
              <h4 className="font-bold">{comment.author.name}</h4>
              <span className="text-gray">{`@${comment.author.username}`}</span>
            </div>
            <CommentReply
              feedbackId={comment.feedbackId}
              commentId={comment.id}
            />
          </div>

          {/* tablet / desktop text */}
          <p className="hidden sm:block text-gray text-body-2">
            <span
              className={
                !comment.replyToId ? "hidden" : "text-purple font-bold"
              }
            >{`@${replyToUsername}`}</span>{" "}
            {comment.content}
          </p>
        </div>

        {/* mobile text */}
        <p className="text-gray text-[13px] sm:hidden">
          <span
            className={!comment.replyToId ? "hidden" : "text-purple font-bold"}
          >{`@${replyToUsername}`}</span>{" "}
          {comment.content}
        </p>
      </div>

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

      {/* <AddCommentForm feedbackId={comment.feedbackId} replyToId={comment.id} /> */}
    </article>
  );
};

export default CommentCard;
