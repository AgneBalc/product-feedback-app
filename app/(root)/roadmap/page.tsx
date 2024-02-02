import { getAllNotSuggestions } from "@/lib/actions/feedback.actions";
import { notFound } from "next/navigation";
import ActionBar from "@/components/actionBar/ActionBar";
import { Suspense } from "react";
import EmptySuggestions from "@/components/shared/EmptySuggestions";
import FeedbackCard from "@/components/feedbacks/FeedbackCard";
import GoBackButton from "@/components/shared/GoBackButton";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { statusList } from "@/constants";
import MobileRoadmapTabs from "@/components/shared/MobileRoadmapTabs";
import { ExtendedFeedback } from "../../../lib/types/db";

const RoadmapPage = async () => {
  const feedbacks = await getAllNotSuggestions();

  if (!feedbacks) return notFound();

  const updatedStatusList = await Promise.all(
    statusList.slice(1).map(async (item) => ({
      ...item,
      feedbacks: feedbacks.filter((feedback) => feedback.status === item.key),
    }))
  );

  return (
    <div className="min-w-[375px] sm:max-w-[689px] lg:max-w-[1100px] mx-auto">
      <header className="w-full h-[100px] flex justify-between items-center bg-blueDark px-6">
        <div>
          <GoBackButton />
          <h2 className="text-head-3 text-white">Roadmap</h2>
        </div>
        <Link href="/feedback/create">
          <Button variant="purple" size="md">
            + Add Feedback
          </Button>
        </Link>
      </header>
      <main>
        <MobileRoadmapTabs statusList={updatedStatusList} />
        {/* <section className="pt-8 sm:pt-6 px-6 sm:px-0 flex flex-col gap-4 lg:gap-5">
          <Suspense fallback={<div>Loading...</div>}>
            {feedbacks.length === 0 ? (
              <EmptySuggestions />
            ) : (
              feedbacks.map((feedback) => (
                <FeedbackCard key={feedback.id} feedback={feedback} />
              ))
            )}
          </Suspense>
        </section> */}
      </main>
    </div>
  );
};

export default RoadmapPage;
