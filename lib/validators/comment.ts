import { z } from "zod";

export const createCommentSchema = z.object({
  content: z
    .string()
    .trim()
    .min(1, "Can’t be empty")
    .max(250, "Too many characters"),
});

export type CreateCommentType = z.infer<typeof createCommentSchema>;
