"use client";

import { useOptimistic, useState, useTransition } from "react";
import Button from "../ui/Button";
import Image from "next/image";
import { upvote } from "@/lib/actions/upvote.actions";
import { cn } from "@/lib/utils";
import { UserUpvotesProps } from "@/lib/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const UserUpvotes = ({
  votesAmount,
  feedback,
  className,
}: UserUpvotesProps) => {
  const { data: session } = useSession();

  const hasUserVoted = feedback.upvotedBy.find((vote) => {
    return vote.userId === session?.user.id;
  });

  const [upvoted, setUpvoted] = useState<boolean>(!!hasUserVoted);
  const [optimisticVotes, addOptimisticVotes] = useOptimistic(
    votesAmount,
    (state, isUpvoted) => (isUpvoted ? state - 1 : state + 1)
  );
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const feedbackId = feedback.id;

  const handleVote = async () => {
    if (!session?.user) {
      router.push("/sign-in");
      return;
    }

    startTransition(() => {
      addOptimisticVotes(upvoted);
    });

    setUpvoted((prev) => !prev);
    await upvote({ feedbackId });
  };

  return (
    <Button
      disabled={isPending}
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
        {/* {votesAmount} */}
        {optimisticVotes}
      </span>
    </Button>
  );
};

export default UserUpvotes;
