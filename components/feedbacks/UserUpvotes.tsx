"use client";

import { useState } from "react";
import Button from "../ui/Button";
import Image from "next/image";
import { upvote } from "../../lib/actions/upvote";
import { UserUpvote } from "@prisma/client";

interface UserUpvotesProps {
  votesAmount: number;
  feedbackId: string;
  isUserUpvoted: UserUpvote | undefined;
}

const UserUpvotes = ({
  votesAmount,
  feedbackId,
  isUserUpvoted,
}: UserUpvotesProps) => {
  const [upvoted, setUpvoted] = useState<boolean>(!!isUserUpvoted);

  const handleVote = async () => {
    await upvote({ feedbackId });
    setUpvoted((prev) => !prev);
  };

  return (
    <Button
      onClick={handleVote}
      size="fixed"
      variant="light"
      className={`flex sm:flex-col items-center gap-[10px] justify-start sm:justify-end sm:gap-2 absolute left-6 bottom-6 sm:left-8 sm:top-7
      ${upvoted && "bg-blue"}`}
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
        className={`text-body-3 font-bold ${
          upvoted ? "text-white" : "text-grayDark"
        }`}
      >
        {votesAmount}
      </span>
    </Button>
  );
};

export default UserUpvotes;
