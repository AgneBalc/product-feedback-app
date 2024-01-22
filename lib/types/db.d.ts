import type { Feedback, User, UserUpvote, Comment } from "@prisma/client";

export type ExtendedFeedback = Feedback & {
  comments: Comment[];
  upvotedBy: UserUpvote[];
};

export type ExtendedComment = Comment & {
  author: User;
  replies: Comment[];
};
