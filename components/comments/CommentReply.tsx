"use client";

import Button from "@/components/ui/Button";
import { useState } from "react";
import AddCommentForm from "@/components/forms/AddCommentForm";
import { cn } from "@/lib/utils";
import { CommentReplyProps } from "@/lib/types";

const CommentReply = ({
  feedbackId,
  commentId,
  className,
}: CommentReplyProps) => {
  const [isReplaying, setIsReplaying] = useState(false);

  const toggleReply = () => setIsReplaying((prev) => !prev);

  const handleCloseReply = () => setIsReplaying(false);

  return (
    <>
      <Button
        onClick={toggleReply}
        className={cn(
          "text-blue hover:underline font-semibold absolute right-0",
          className
        )}
      >
        Reply
      </Button>
      {isReplaying && (
        <AddCommentForm
          feedbackId={feedbackId}
          replyToId={commentId}
          onReply={handleCloseReply}
        />
      )}
    </>
  );
};

export default CommentReply;
