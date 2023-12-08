import { z } from "zod";

export const createFeedbackSchema = z.object({
  title: z.string().min(1, "Can’t be empty"),
  category: z.enum(["UI", "UX", "Enhancement", "Bug", "Feature"]),
  description: z.string().min(1, "Can’t be empty"),
});

export type CreateFeedbackSchemaType = z.infer<typeof createFeedbackSchema>;
