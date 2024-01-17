"use server";

import { hash } from "bcryptjs";
import { getUserByUsername } from "@/data/user";
import { db } from "../db";
import { UserRegisterSchema, UserRegisterType } from "../validators/user";
import { redirect } from "next/navigation";

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
