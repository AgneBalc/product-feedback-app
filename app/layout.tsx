import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Provider from "@/components/Provider";

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
      <body className="sm:py-14 lg:pt-20 sm:px-4 pb-14">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
