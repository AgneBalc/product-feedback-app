"use server";

import { signIn } from "../auth";
import { UserSignInSchema } from "../validators/user";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (prevState: any, formData: FormData) => {
  const data = Object.fromEntries(formData);

  const validatedData = UserSignInSchema.safeParse(data);

  if (!validatedData.success) {
    return {
      fieldErrors: validatedData.error.flatten().fieldErrors,
    };
  }

  const { username, password } = validatedData.data;

  try {
    await signIn("credentials", {
      username,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Wrong username or password!" };
        default:
          return { error: "Something went wrong! Failed to login!" };
      }
    }
    throw error;
  }
};
