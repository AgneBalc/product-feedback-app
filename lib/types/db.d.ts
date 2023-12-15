import { Comment, Post, User } from "@prisma/client";

export type ExtendedFeedback = {
  feedback: Post & {
    comments: Comment[];
  };
};
