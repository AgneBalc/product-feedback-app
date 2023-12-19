"use client";

import { useState } from "react";
import Button from "./ui/Button";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { UpvotedByType } from "@/lib/validators/feedback";
import axios, { AxiosError } from "axios";
import { redirect } from "next/navigation";

interface UserUpvotesProps {
  initialVotesAmount: number;
  feedbackId: string;
  isUserUpvoted: string;
}

const UserUpvotes = ({
  initialVotesAmount,
  feedbackId,
  isUserUpvoted,
}: UserUpvotesProps) => {
  const [votesAmount, setVotesAmount] = useState<number>(initialVotesAmount);
  const [upvoted, setUpvoted] = useState<boolean>(!!isUserUpvoted);

  const { mutate: vote } = useMutation({
    mutationFn: async (value: number) => {
      const payload: UpvotedByType = {
        feedbackId,
        voteValue: value,
      };
      await axios.patch("/api/feedback/vote", payload);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          redirect("/sign-in");
        }
      }

      // sutvarkyti serverio klaidu atvaizdavima
      throw new Error(
        "Something went wrong. Your vote was not registered. Please try again."
      );
    },
    onMutate: (value: number) => {
      setVotesAmount((prev) => prev + value);
    },
  });

  const handleVote = () => {
    setUpvoted((prev) => !prev);
    vote(upvoted ? -1 : 1);
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
