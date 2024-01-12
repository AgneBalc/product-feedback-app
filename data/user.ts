import { db } from "@/lib/db";

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
