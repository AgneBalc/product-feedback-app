"use client";

import { Status } from "@/lib/types";
import RoadmapFeedbackCard from "./RoadmapFeedbackCard";
import { ExtendedFeedback } from "@/lib/types/db";
import { useState } from "react";
import { cn } from "@/lib/utils";

export type StatusList = Status & {
  feedbacks: ExtendedFeedback[];
};

interface FeedbackListConatinerProps {
  statusList: StatusList[];
}

const FeedbackListConatiner = ({ statusList }: FeedbackListConatinerProps) => {
  const [selectedTab, setSelectedTab] = useState(statusList[0].name);

  const currentStatus = statusList.find((item) => item.name === selectedTab);

  return (
    <section>
      <div className="flex border-b border-[#8C92B3] border-opacity-25">
        {statusList.map((status) => (
          <button
            key={status.key}
            className={cn(
              "flex-1 text-center py-5 transition ease-in-out duration-300",
              selectedTab === status.name
                ? `border-b-4 ${status.borderColor}`
                : `opacity-40 hover:opacity-100 hover:border-b-4 ${status.hover}`
            )}
            onClick={() => setSelectedTab(status.name)}
          >
            <h4 className="text-body-3 h-full">
              {status.name} <span>{`(${status.feedbacks.length})`}</span>
            </h4>
          </button>
        ))}
      </div>
      {statusList.map((status) => (
        <article
          key={status.name}
          className={cn(
            "p-6 md:flex flex-col gap-6",
            currentStatus === status ? "flex" : "hidden"
          )}
        >
          <div className="flex flex-col gap-1">
            <h3 className="text-head-3">
              {status.name} <span>{`(${status.feedbacks.length})`}</span>
            </h3>
            <span className="text-gray text-[13px]">{status.description}</span>
          </div>
          <ul className="flex flex-col gap-4">
            {status.feedbacks.map((feedback) => (
              <RoadmapFeedbackCard
                key={feedback.id}
                feedback={feedback}
                status={status}
              />
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
};

export default FeedbackListConatiner;
