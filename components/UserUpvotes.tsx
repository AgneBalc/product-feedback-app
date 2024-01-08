"use client";

import { useState } from "react";
import Button from "./ui/Button";
import Image from "next/image";
import { upvote } from "../lib/actions/upvote";
import { UserUpvote } from "@prisma/client";

interface UserUpvotesProps {
  initialVotesAmount: number;
  feedbackId: string;
  isUserUpvoted: UserUpvote | undefined;
}

const UserUpvotes = ({
  initialVotesAmount,
  feedbackId,
  isUserUpvoted,
}: UserUpvotesProps) => {
  const [votesAmount, setVotesAmount] = useState<number>(initialVotesAmount);
  const [upvoted, setUpvoted] = useState<boolean>(!!isUserUpvoted);

  const handleVote = async () => {
    setUpvoted((prev) => !prev);
    const updatedVotes = await upvote({ feedbackId });
    updatedVotes?.data && setVotesAmount(updatedVotes?.data?.upvotes);
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
        className={`text-body-3 ${upvoted ? "text-white" : "text-grayDark"}`}
      >
        {votesAmount}
      </span>
    </Button>
  );
};

export default UserUpvotes;
