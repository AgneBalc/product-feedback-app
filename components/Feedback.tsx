import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { Comment, Feedback, UserUpvote } from "@prisma/client";
import UserUpvotes from "./UserUpvotes";
import { Suspense } from "react";
import { auth } from "../lib/auth";

interface FeedbackProps {
  feedback: Feedback & {
    upvotedBy: UserUpvote[];
    comments: Comment[];
  };
}

const FeedbackCard = async ({ feedback }: FeedbackProps) => {
  const session = await auth();

  const hasUserVoted = feedback.upvotedBy.find(
    (vote) => vote.userId === session?.user.id
  );
  return (
    <article className="relative w-full rounded-md bg-white p-6 sm:px-8 sm:py-7 flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0 hover:text-blue">
      <Link href={`/feedback/${feedback.id}`}>
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
            className="self-start mt-2 hover:bg-grayLight hover:text-current"
            disabled
          >
            <span className="text-body-3">{feedback.category}</span>
          </Button>
        </div>
      </Link>
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
          <span className="sm:text-base font-bold text-grayDark">
            {feedback.comments.length}
          </span>
        </Button>
      </div>
    </article>
  );
};

export default FeedbackCard;
