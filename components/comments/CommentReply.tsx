"use client";

import Button from "@/components/ui/Button";
import { useState } from "react";
import AddCommentForm from "@/components/forms/AddCommentForm";
import { cn } from "@/lib/utils";

interface CommentReply {
  feedbackId: string;
  commentId: string;
  className?: string;
}

const CommentReply = ({ feedbackId, commentId, className }: CommentReply) => {
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
