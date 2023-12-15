import type { Feedback, User, UserUpvote } from "@prisma/client";

export type ExtendedFeedback = Feedback & {
  upvotedBy: UserUpvote[];
  comments: Comment[];
};
