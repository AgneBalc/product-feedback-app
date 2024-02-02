"use client";

import Button from "../ui/Button";
import { Status } from "@/lib/types";
import { ExtendedFeedback } from "@/lib/types/db";

type StatusList = Status & {
  feedbacks: ExtendedFeedback[];
};

interface MobileRoadmapTabsProps {
  statusList: StatusList[];
}

const MobileRoadmapTabs = ({ statusList }: MobileRoadmapTabsProps) => {
  return (
    <div className="sm:hidden flex items-center h-14 border-b border-[#8C92B3] border-opacity-25">
      {statusList.map((status) => (
        <Button key={status.key} className="flex-1 text-center h-full">
          <h4 className="text-body-3">
            {status.name} <span>{`(${status.feedbacks.length})`}</span>
          </h4>
        </Button>
      ))}
    </div>
  );
};

export default MobileRoadmapTabs;
