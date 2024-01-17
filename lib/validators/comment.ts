import { z } from "zod";

export const createCommentSchema = z.object({
  content: z.string().min(1, "Can’t be empty"),
});

export type CreateCommentType = z.infer<typeof createCommentSchema>;
