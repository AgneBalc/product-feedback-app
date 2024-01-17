"use client";

import Button from "@/components/ui/Button";
import { useState } from "react";
import AddCommentForm from "./AddCommentForm";

interface CommentReply {
  feedbackId: string;
  commentId: string;
}

const CommentReply = ({ feedbackId, commentId }: CommentReply) => {
  const [isReplaying, setIsReplaying] = useState(false);

  const toggleReply = () => setIsReplaying((prev) => !prev);

  const handleCloseReply = () => setIsReplaying(false);

  return (
    <>
      <Button
        onClick={toggleReply}
        className="text-blue hover:underline font-semibold"
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
