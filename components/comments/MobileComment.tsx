import Image from "next/image";
import { cn } from "@/lib/utils";
import CommentReply from "./CommentReply";
import { FaUser } from "react-icons/fa";
import { CommentCardProps } from "@/lib/types";

const MobileComment = ({ comment, replyToUsername }: CommentCardProps) => {
  return (
    <div
      className={cn(
        "sm:hidden flex flex-col gap-4",
        comment.replyToId && "pl-6"
      )}
    >
      <div className="flex items-center gap-4 w-full">
        {comment.author.image ? (
          <Image
            src={comment.author.image}
            alt={comment.author.name}
            width={40}
            height={40}
            className="rounded-[40px]"
          />
        ) : (
          <FaUser className="w-10 h-10 rounded-[40px] text-gray text-opacity-55" />
        )}
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
