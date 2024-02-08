import Image from "next/image";
import { cn } from "@/lib/utils";
import CommentReply from "./CommentReply";
import { FaUser } from "react-icons/fa";
import { CommentCardProps } from "@/lib/types";

const DesktopComment = ({ comment, replyToUsername }: CommentCardProps) => {
  return (
    <div
      className={cn(
        "hidden sm:flex flex-row items-start gap-8",
        comment.replyToId && "pl-11"
      )}
    >
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
      {!comment.replyToId && comment.replies.length > 0 && (
        <div className="absolute w-[1px] bg-gray bg-opacity-10 h-auto left-5 mt-8 top-14 bottom-20" />
      )}

      <div
        className={cn(
          "flex flex-col items-start gap-4 w-full",
          comment.replyToId ? "gap-[10px]" : "gap-4"
        )}
      >
        <div className="text-sm">
          <h4 className="font-bold">{comment.author.name}</h4>
          <span className="text-gray">{`@${comment.author.username}`}</span>
        </div>
        <p className="text-gray text-body-2">
          <span
            className={!comment.replyToId ? "hidden" : "text-purple font-bold"}
          >{`@${replyToUsername}`}</span>{" "}
          {comment.content}
        </p>
        <CommentReply feedbackId={comment.feedbackId} commentId={comment.id} />
      </div>
    </div>
  );
};

export default DesktopComment;
