"use client";

import Link from "next/link";
import { status } from "@/constants";
import Button from "@/components/ui/Button";

interface RoadmapInfoProps {
  onCloseMenu?: () => void;
}

const statusList = status.slice(1);

const RoadmapInfo = ({ onCloseMenu }: RoadmapInfoProps) => {
  const isDisabled = false;
  return (
    <div className="bg-white rounded-md px-6 pb-6 pt-[19px] flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h3 className="text-head-3">Roadmap</h3>
        <Button
          onClick={onCloseMenu}
          disabled={isDisabled}
          className={isDisabled ? "opacity-25 cursor-default" : ""}
        >
          <Link
            href="/"
            className={`text-blue text-body-3 underline ${
              !isDisabled && "hover:text-[#8397F8]"
            } ${isDisabled && "cursor-default"}`}
          >
            View
          </Link>
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        {statusList.map((stat) => (
          <div key={stat.name} className="text-gray flex justify-between">
            <div className="flex gap-4 items-center">
              <div className={`${stat.bgColor} w-2 h-2 rounded-full`} />
              <span className="text-base">{stat.name}</span>
            </div>
            <span className="text-base font-bold">2</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapInfo;
