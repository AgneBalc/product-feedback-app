// "use client";

// import { Status } from "@/lib/types";
// import { ExtendedFeedback } from "@/lib/types/db";
// import { useState } from "react";
// import { cn } from "@/lib/utils";
// import FeedbackListConatiner from "../roadmap/FeedbackListConatiner";

// export type StatusList = Status & {
//   feedbacks: ExtendedFeedback[];
// };

// interface MobileRoadmapTabsProps {
//   statusList: StatusList[];
// }

// const MobileRoadmapTabs = ({ statusList }: MobileRoadmapTabsProps) => {

//   return (
//     <section className="sm:hidden">
//       <div className="flex border-b border-[#8C92B3] border-opacity-25">
//         {statusList.map((status) => (
//           <button
//             key={status.key}
//             className={cn(
//               "flex-1 text-center py-5 transition ease-in-out duration-300",
//               selectedTab === status.name
//                 ? `border-b-4 ${status.borderColor}`
//                 : `opacity-40 hover:opacity-100 hover:border-b-4 ${status.hover}`
//             )}
//             onClick={() => setSelectedTab(status.name)}
//           >
//             <h4 className="text-body-3 h-full">
//               {status.name} <span>{`(${status.feedbacks.length})`}</span>
//             </h4>
//           </button>
//         ))}
//       </div>
//       {currentStatus && <FeedbackListConatiner status={currentStatus} />}
//     </section>
//   );
// };

// export default MobileRoadmapTabs;
