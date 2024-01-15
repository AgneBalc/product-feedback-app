import Image from "next/image";
import Button from "@/components/ui/Button";
import { Comment, User } from "@prisma/client";
import { db } from "@/lib/db";
import CommentsSection from "./CommentsSection";
import { cn } from "@/lib/utils";

type ExtendedComment = Comment & {
  author: User;
  replies: Comment[];
};

interface CommentProps {
  comment: ExtendedComment;
  isReply: boolean;
  replyToUsername?: string;
}

const FeedbackComment = async ({
  comment,
  isReply,
  replyToUsername,
}: CommentProps) => {
  const replies = await db.comment.findMany({
    where: {
      replyToId: comment.id,
    },
    include: {
      author: true,
      replies: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return (
    <div className={cn(isReply ? "" : "py-6", "flex flex-col gap-6")}>
      <article className={cn("flex flex-col gap-4", isReply && "pl-6")}>
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <Image
              src={
                comment.author.image ||
                "https://cdn.imgbin.com/3/5/9/imgbin-computer-icons-user-profile-user-account-avatar-TfT3FkAEbgD76My1GynmW5KzT.jpg"
              }
              alt={comment.author.name}
              width={40}
              height={40}
              className="rounded-[40px]"
            />
            <div className="text-[13px]">
              <h4 className="font-bold">{comment.author.name}</h4>
              <span className="text-gray">{`@${comment.author.username}`}</span>
            </div>
          </div>
          <Button className="text-blue hover:underline">Reply</Button>
        </div>
        <p className="text-gray text-[13px]">
          <span
            className={!isReply ? "hidden" : "text-purple font-bold"}
          >{`@${replyToUsername}`}</span>{" "}
          {comment.content}
        </p>
      </article>

      {replies.length > 0 && (
        <div
          className={cn(
            !isReply ? "border-l border-gray border-opacity-10" : "",
            "flex flex-col gap-6"
          )}
        >
          <CommentsSection
            comments={replies}
            isReply={true}
            replyToUsername={comment.author.username}
          />
        </div>
      )}
    </div>
  );
};

export default FeedbackComment;
