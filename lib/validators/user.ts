import { z } from "zod";

export const UserValidator = z
  .object({
    username: z
      .string({ required_error: "Username is required" })
      .trim()
      .min(3, { message: "Username must be at least 3 characters long." })
      .max(30, {
        message: "Username must be be less than 30 characters long.",
      }),
    name: z
      .string({ required_error: "Name is required" })
      .min(3, { message: "Name must be at least 3 characters long." })
      .max(100, { message: "Name must be be less than 100 characters long." }),
    email: z
      .string({ required_error: "Email is required" })
      .trim()
      .email({ message: "Invalid email address" }),
    image: z.string().trim().url({ message: "Invalid url" }),
    password: z
      .string({ required_error: "Password is required" })
      .min(6, { message: "Password must be at least 6 characters long." }),
    confirmPassword: z.string({
      required_error: "Password confirmation is required",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export type UserValidatorType = z.infer<typeof UserValidator>;
