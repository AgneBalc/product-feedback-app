"use server";

import { hash } from "bcryptjs";
import { getUserByUsername } from "@/data/user";
import { db } from "../db";
import { UserRegisterSchema } from "../validators/user";
import { redirect } from "next/navigation";

export const register = async (prevState: any, formData: FormData) => {
  const data = Object.fromEntries(formData);

  const validatedData = UserRegisterSchema.safeParse(data);

  if (!validatedData.success) {
    return {
      fieldErrors: validatedData.error.flatten().fieldErrors,
    };
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
        image:
          "https://cdn.imgbin.com/3/5/9/imgbin-computer-icons-user-profile-user-account-avatar-TfT3FkAEbgD76My1GynmW5KzT.jpg" ||
          image,
      },
    });
  } catch (error) {
    return { error: "Something went wrong!" };
  }

  redirect("/sign-in");
};
