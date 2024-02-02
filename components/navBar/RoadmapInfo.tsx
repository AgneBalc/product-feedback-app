import Link from "next/link";
import { statusList } from "@/constants";
import { cn } from "@/lib/utils";
import { getFeedbacksTotal } from "@/lib/actions/feedback.actions";

const RoadmapInfo = async () => {
  const updatedStatusList = await Promise.all(
    statusList.slice(1).map(async (item) => ({
      ...item,
      total: await getFeedbacksTotal(item.key),
    }))
  );

  const isDisabled = updatedStatusList.every((item) => item.total === 0);

  return (
    <div className="bg-white rounded-md px-6 pb-6 pt-[19px] flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h3 className="text-head-3">Roadmap</h3>
        <Link
          href="/roadmap"
          className={cn(
            "text-blue underline transition ease-in-out duration-300",
            isDisabled ? "cursor-default opacity-25" : "hover:text-[#8397F8]"
          )}
        >
          <span className="text-body-3">View</span>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        {updatedStatusList.map((stat) => (
          <div key={stat.name} className="text-gray flex justify-between">
            <div className="flex gap-4 items-center">
              <div className={`${stat.bgColor} w-2 h-2 rounded-full`} />
              <span className="text-base">{stat.name}</span>
            </div>
            <span className="text-base font-bold">{stat.total}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapInfo;
