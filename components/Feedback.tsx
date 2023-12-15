"use client";

import Button from "@/components/ui/Button";
import { Comment, Post } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";

interface FeedbackProps {
  feedback: Post & {
    comments: Comment[];
  };
}

const Feedback = ({ feedback }: FeedbackProps) => {
  const [isVoted, setIsVoted] = useState(false);

  return (
    <div className="relative w-full rounded-md bg-white p-6 sm:px-8 sm:py-7 flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0 hover:text-blue">
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
      <Button
        onClick={() => setIsVoted((prev) => !prev)}
        size="fixed"
        variant="light"
        className={`flex sm:flex-col items-center gap-[10px] justify-start sm:justify-end sm:gap-2 absolute left-6 bottom-6 sm:left-8 sm:top-7 ${
          isVoted && "bg-blue"
        }`}
      >
        <Image
          src={
            isVoted
              ? "/shared/icon-arrow-up-white.svg"
              : "/shared/icon-arrow-up-blue.svg"
          }
          alt="Arrow up icon"
          width={10}
          height={7}
        />
        <span
          className={`text-body-3 ${isVoted ? "text-white" : "text-grayDark"}`}
        >
          {feedback.upvotes}
        </span>
      </Button>
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
    </div>
  );
};

export default Feedback;
