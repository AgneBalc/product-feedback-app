import { z } from "zod";

export const createFeedbackSchema = z.object({
  title: z.string().min(1, "Can’t be empty"),
  category: z.enum(["UI", "UX", "Enhancement", "Bug", "Feature"]),
  description: z.string().min(1, "Can’t be empty"),
});

export type CreateFeedbackType = z.infer<typeof createFeedbackSchema>;

export const upvotedBySchema = z.object({
  feedbackId: z.string(),
});

export type UpvotedByType = z.infer<typeof upvotedBySchema>;
