import { z } from "zod";

export const UserRegisterSchema = z
  .object({
    username: z
      .string()
      .trim()
      .min(3, { message: "Username must be at least 3 characters long." }),
    name: z
      .string()
      .min(3, { message: "Name must be at least 3 characters long." }),
    email: z.string().trim().email({ message: "Invalid email address" }),
    image: z.string().optional(),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long." }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export const UserSignInSchema = z.object({
  username: z.string().min(1, "Can’t be empty"),
  password: z.string().min(1, "Can’t be empty"),
});

export type UserRegisterType = z.infer<typeof UserRegisterSchema>;
export type UserSignInType = z.infer<typeof UserSignInSchema>;
