"use client";

import { FeedbackListConatinerProps } from "@/lib/types";
import RoadmapFeedbackCard from "./RoadmapFeedbackCard";
import { useState } from "react";
import { cn } from "@/lib/utils";

const FeedbackListConatiner = ({ statusList }: FeedbackListConatinerProps) => {
  const [selectedTab, setSelectedTab] = useState(statusList[0].name);

  const currentStatus = statusList.find((item) => item.name === selectedTab);

  return (
    <main className="px-6 sm:px-0 sm:py-8 lg:pt-12 sm:flex sm:gap-[10px] sm:justify-evenly">
      {/* Mobile Tabs */}
      <div className="flex border-b border-[#8C92B3] border-opacity-25 -mx-6 sm:hidden">
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

      {/* List Container */}
      {statusList.map((status) => (
        <section
          key={status.name}
          className={cn(
            "py-6 sm:py-0 sm:flex flex-col gap-6 lg:gap-8 max-w-[350px] mx-auto sm:flex-1",
            currentStatus === status ? "flex" : "hidden"
          )}
        >
          {/* Column Header */}
          <div className="flex flex-col gap-1">
            <h3 className="text-head-3 sm:text-sm lg:text-head-3">
              {status.name} <span>{`(${status.feedbacks.length})`}</span>
            </h3>
            <span className="text-gray text-[13px] sm:text-sm lg:text-base">
              {status.description}
            </span>
          </div>

          {/* Feedbacks list */}
          <ul className="grid auto-rows-fr gap-4 lg:gap-6">
            {status.feedbacks.map((feedback) => (
              <RoadmapFeedbackCard
                key={feedback.id}
                feedback={feedback}
                status={status}
              />
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
};

export default FeedbackListConatiner;
