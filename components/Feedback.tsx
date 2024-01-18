import Button from "@/components/ui/Button";
import Image from "next/image";
import { Comment, Feedback, UserUpvote } from "@prisma/client";
import UserUpvotes from "./UserUpvotes";
import { Suspense } from "react";
import { auth } from "../lib/auth";
import { cn } from "../lib/utils";

type ExtendedPost = Feedback & {
  upvotedBy: UserUpvote[];
  comments: Comment[];
};

interface FeedbackProps {
  feedback: ExtendedPost;
  isDetailPage?: boolean;
}

const FeedbackCard = async ({ feedback, isDetailPage }: FeedbackProps) => {
  const session = await auth();

  const hasUserVoted = feedback.upvotedBy.find(
    (vote) => vote.userId === session?.user.id
  );

  return (
    <article
      className={cn(
        "relative w-full rounded-md bg-white p-6 sm:px-8 sm:py-7 flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0",
        !isDetailPage && "hover:text-blue"
      )}
    >
      <div className="flex flex-col gap-2 sm:gap-1 sm:pl-20">
        <h2 className="text-[13px] font-bold tracking-[-0.1181px] sm:text-head-3">
          {feedback.title}
        </h2>
        <p className="text-gray text-[13px] sm:text-base">
          {feedback.description}
        </p>
        <Button
          size="sm"
          variant="light"
          className="self-start mt-2 hover:bg-grayLight"
          disabled
        >
          <span className="text-body-3">{feedback.category}</span>
        </Button>
      </div>
      {/* <Suspense fallback={<div>...</div>}> */}
      <UserUpvotes
        initialVotesAmount={feedback.upvotes}
        feedbackId={feedback.id}
        isUserUpvoted={hasUserVoted}
      />
      {/* </Suspense> */}
      <div className="flex justify-end items-center">
        <Button className="flex gap-1 h-8 sm:gap-2">
          <Image
            src="/shared/icon-comments.svg"
            alt="Comments icon"
            width={18}
            height={16}
          />
          <span
            className={cn(
              "sm:text-base font-bold text-grayDark",
              feedback.comments.length === 0 && "text-opacity-50"
            )}
          >
            {feedback.comments.length}
          </span>
        </Button>
      </div>
    </article>
  );
};

export default FeedbackCard;
