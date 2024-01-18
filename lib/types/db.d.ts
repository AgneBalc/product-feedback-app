import type { Feedback, User, UserUpvote, Comment } from "@prisma/client";

export type ExtendedFeedback = Feedback & {
  upvotedBy: UserUpvote[];
  comments: Comment[];
};

export type ExtendedComment = Comment & {
  author: User;
  replies: Comment[];
};
