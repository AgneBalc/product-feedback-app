import Button from "../ui/Button";
import UserUpvotes from "../feedbacks/UserUpvotes";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { RoadmapFeedbackCardProps } from "@/lib/types";

const RoadmapFeedbackCard = ({
  status,
  feedback,
}: RoadmapFeedbackCardProps) => {
  return (
    <li className="bg-white rounded-md px-6 sm:px-5 lg:px-8 flex flex-col pb-6 lg:pb-8 gap-4 lg:gap-2">
      {/* header */}
      <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
        <div
          className={`h-[6px] ${status.bgColor} rounded-t-sm -mx-6 sm:-mx-5 lg:-mx-8`}
        />
        <div
          key={status.name}
          className="flex text-gray gap-2 sm:gap-4 items-center"
        >
          <div className={`${status.bgColor} w-2 h-2 rounded-full`} />
          <span className="text-[13px] lg:text-base">{status.name}</span>
        </div>
      </div>

      {/* feedback */}
      <div className="flex flex-col gap-4 h-full">
        <Link
          href={`/feedback/${feedback.id}`}
          className="hover:text-blue flex flex-col gap-2 justify-between h-full sm:gap-6 lg:gap-4"
        >
          <div className="flex flex-col gap-2 lg:gap-1">
            <h2 className="text-[13px] lg:text-head-3 font-bold tracking-[-0.1181px]">
              {feedback.title}
            </h2>
            <p className="text-gray text-[13px] lg:text-base">
              {feedback.description}
            </p>
          </div>
          <Button
            size="sm"
            variant="light"
            className="self-start hover:bg-grayLight"
            disabled
          >
            <span className="text-body-3">{feedback.category}</span>
          </Button>
        </Link>
        <div className="flex items-center justify-between">
          <UserUpvotes
            votesAmount={feedback.upvotes}
            feedback={feedback}
            className="lg:h-10"
          />
          <div className="flex items-center gap-1 lg:gap-2">
            <Image
              src="/shared/icon-comments.svg"
              alt="Comments icon"
              width={18}
              height={16}
            />
            <span
              className={cn(
                "text-[13px] lg:text-base font-bold text-grayDark w-[18px] text-center",
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
