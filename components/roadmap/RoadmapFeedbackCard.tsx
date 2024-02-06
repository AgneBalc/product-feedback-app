import { ExtendedFeedback } from "@/lib/types/db";
import Button from "../ui/Button";
import UserUpvotes from "../feedbacks/UserUpvotes";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { useSession } from "next-auth/react";
import { StatusList } from "./FeedbackListConatiner";

interface FeedbackListConatinerProps {
  status: StatusList;
  feedback: ExtendedFeedback;
}

const RoadmapFeedbackCard = ({
  status,
  feedback,
}: FeedbackListConatinerProps) => {
  const { data: session } = useSession();

  const hasUserVoted = feedback.upvotedBy.find((vote) => {
    return vote.userId === session?.user.id;
  });

  return (
    <li key={feedback.id} className="bg-white rounded-md pb-6 relative">
      <div className={`h-[6px] ${status.bgColor} rounded-t-sm`} />
      <div className="px-6 flex flex-col gap-4">
        <div
          key={status.name}
          className="flex text-gray gap-2 items-center pt-4"
        >
          <div className={`${status.bgColor} w-2 h-2 rounded-full`} />
          <span className="text-[13px]">{status.name}</span>
        </div>
        <Link href={`/feedback/${feedback.id}`} className=" hover:text-blue">
          <div className="flex flex-col gap-2">
            <h2 className="text-[13px] font-bold tracking-[-0.1181px]">
              {feedback.title}
            </h2>
            <p className="text-gray text-[13px]">{feedback.description}</p>
            <Button
              size="sm"
              variant="light"
              className="self-start mt-2 hover:bg-grayLight"
              disabled
            >
              <span className="text-body-3">{feedback.category}</span>
            </Button>
          </div>
        </Link>
        {/* <Suspense fallback={<div>...</div>}> */}
        <UserUpvotes
          votesAmount={feedback.upvotes}
          feedbackId={feedback.id}
          isUserUpvoted={hasUserVoted}
        />
        {/* </Suspense> */}
        <div className="flex justify-end items-center">
          <div className="flex items-center gap-1 h-8 sm:gap-2">
            <Image
              src="/shared/icon-comments.svg"
              alt="Comments icon"
              width={18}
              height={16}
            />
            <span
              className={cn(
                "text-[13px] sm:text-base font-bold text-grayDark w-[18px] text-center",
                feedback.comments.length === 0 && "text-opacity-50"
              )}
            >
              {feedback.comments.length}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default RoadmapFeedbackCard;
