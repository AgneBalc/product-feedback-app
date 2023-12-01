import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Product Feedback App",
  description: "Product Feedback App built with Next.js and TypeScript",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-grayLightest text-grayDark", jost.className)}
    >
      <body className="min-w-[375px] sm:max-w-[689px] lg:max-w-[1100px] mx-auto sm:pt-14 lg:pt-24 sm:pb-28 lg:pb-32 sm:px-4 pb-14">
        {children}
      </body>
    </html>
  );
}
