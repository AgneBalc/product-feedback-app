"use server";

import { signIn } from "../auth";
import { UserSignInSchema, UserSignInType } from "../validators/user";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (formData: UserSignInType) => {
  const validatedData = UserSignInSchema.safeParse(formData);

  if (!validatedData.success) {
    return { error: "Invalid fields!" };
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
