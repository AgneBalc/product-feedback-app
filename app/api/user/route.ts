import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { hash } from "bcrypt";
import { UserRegisterSchema } from "@/lib/validators/user";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { email, username, name, password, image } =
      UserRegisterSchema.parse(body);

    const existingUserByEmail = await db.user.findUnique({
      where: { email },
    });
    if (existingUserByEmail) {
      return NextResponse.json(
        {
          user: null,
          field: "email",
          message: "User with this email already exists",
        },
        { status: 409 }
      );
    }

    const existingUserByUsername = await db.user.findUnique({
      where: { username },
    });
    if (existingUserByUsername) {
      return NextResponse.json(
        {
          user: null,
          field: "username",
          message: "User with this username already exists",
        },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await db.user.create({
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
    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      { user: rest, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
