"use client";

import { useState, useTransition } from "react";
import Button from "../ui/Button";
import Image from "next/image";
import { upvote } from "@/lib/actions/upvote.actions";
import { cn } from "@/lib/utils";
import { UserUpvotesProps } from "@/lib/types";

const UserUpvotes = ({
  votesAmount,
  feedbackId,
  isUserUpvoted,
  className,
}: UserUpvotesProps) => {
  const [upvoted, setUpvoted] = useState<boolean>(!!isUserUpvoted);
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      disabled={isPending}
      onClick={() =>
        startTransition(async () => {
          await upvote({ feedbackId });
          setUpvoted((prev) => !prev);
        })
      }
      variant="light"
      className={cn(
        "flex items-center w-[69px] h-8 pl-4",
        upvoted && "bg-blue",
        className
      )}
    >
      <Image
        src={
          upvoted
            ? "/shared/icon-arrow-up-white.svg"
            : "/shared/icon-arrow-up-blue.svg"
        }
        alt="Arrow up icon"
        width={10}
        height={7}
      />
      <span
        className={`text-body-3 font-bold w-full ${
          upvoted ? "text-white" : "text-grayDark"
        }`}
      >
        {votesAmount}
      </span>
    </Button>
  );
};

export default UserUpvotes;
