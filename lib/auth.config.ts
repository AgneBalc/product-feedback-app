import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { UserSignInSchema } from "./validators/user";
import { db } from "./db";
import { compare } from "bcryptjs";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = UserSignInSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { username, password } = validatedFields.data;

          const existingUser = await db.user.findUnique({
            where: { username },
          });
          if (!existingUser || !existingUser.password) return null;

          const isPasswordCorrect = await compare(
            password,
            existingUser.password
          );

          if (isPasswordCorrect) return existingUser;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
