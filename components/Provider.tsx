import { SessionProvider } from "next-auth/react";
import React from "react";
import { auth } from "../lib/auth";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider = async ({ children }: ProviderProps) => {
  const session = await auth();
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
