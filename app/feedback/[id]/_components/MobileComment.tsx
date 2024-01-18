import Image from "next/image";
import { cn } from "@/lib/utils";
import { CommentCardProps } from "./CommentCard";
import CommentReply from "./CommentReply";

const MobileComment = ({ comment, replyToUsername }: CommentCardProps) => {
  return (
    <div
      className={cn(
        "sm:hidden flex flex-col gap-4",
        comment.replyToId && "pl-6"
      )}
    >
      <div className="flex items-center gap-4 w-full">
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

      <p className="text-gray text-[13px]">
        <span
          className={!comment.replyToId ? "hidden" : "text-purple font-bold"}
        >{`@${replyToUsername}`}</span>{" "}
        {comment.content}
      </p>
      <CommentReply feedbackId={comment.feedbackId} commentId={comment.id} />
    </div>
  );
};

export default MobileComment;
