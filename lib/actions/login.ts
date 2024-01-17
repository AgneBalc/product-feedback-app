"use server";

import { signIn } from "../auth";
import { UserSignInType } from "../validators/user";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (formData: UserSignInType) => {
  const { username, password } = formData;

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
