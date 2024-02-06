"use client";

import { useState } from "react";
import Button from "../ui/Button";
import Image from "next/image";
import { upvote } from "@/lib/actions/upvote";
import { UserUpvote } from "@prisma/client";
import { cn } from "../../lib/utils";

interface UserUpvotesProps {
  votesAmount: number;
  feedbackId: string;
  isUserUpvoted: UserUpvote | undefined;
  className?: string;
}

const UserUpvotes = ({
  votesAmount,
  feedbackId,
  isUserUpvoted,
  className,
}: UserUpvotesProps) => {
  const [upvoted, setUpvoted] = useState<boolean>(!!isUserUpvoted);

  const handleVote = async () => {
    await upvote({ feedbackId });
    setUpvoted((prev) => !prev);
  };

  return (
    <Button
      onClick={handleVote}
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
