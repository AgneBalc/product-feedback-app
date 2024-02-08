"use server";

import { db } from "@/lib/db";
import { signIn } from "../auth";
import { UserSignInSchema, UserSignInType } from "../validators/user";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { hash } from "bcryptjs";
import { UserRegisterSchema, UserRegisterType } from "../validators/user";
import { redirect } from "next/navigation";

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({ where: { id } });

    // if (!user) {
    //   return { error: "User not found" };
    // }

    return user;
  } catch (error) {
    return null;
  }
};

export const getUserByUsername = async (username: string) => {
  try {
    const user = await db.user.findUnique({ where: { username } });

    return user;
  } catch (error) {
    return null;
  }
};

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

export const registerUser = async (formData: UserRegisterType) => {
  const validatedData = UserRegisterSchema.safeParse(formData);

  if (!validatedData.success) {
    return { error: "Invalid fields!" };
  }

  const { email, username, name, password, image } = validatedData.data;

  try {
    const existingUserByEmail = await db.user.findUnique({
      where: { email },
    });

    if (existingUserByEmail) {
      return { error: "User with this email already exists" };
    }

    const existingUserByUsername = await getUserByUsername(username);
    if (existingUserByUsername) {
      return { error: "User with this username already exists" };
    }

    const hashedPassword = await hash(password, 10);

    await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        name,
        image,
      },
    });
  } catch (error) {
    return { error: "Something went wrong!" };
  }

  redirect("/sign-in");
};
