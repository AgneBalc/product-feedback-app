"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Button from "../ui/Button";
import { cn } from "@/lib/utils";

const GoBackButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isRoadmapPage = pathname === "/roadmap";

  return (
    <Button
      onClick={() => router.back()}
      className="items-center gap-[15.666px]"
    >
      <Image
        src={
          isRoadmapPage
            ? "/shared/icon-arrow-left-gray.svg"
            : "/shared/icon-arrow-left-blue.svg"
        }
        alt="Arrow left icon"
        width={7}
        height={10}
      />
      <span
        className={cn(
          "font-semibold hover:underline",
          isRoadmapPage ? "text-white" : "text-gray"
        )}
      >
        Go Back
      </span>
    </Button>
  );
};

export default GoBackButton;
