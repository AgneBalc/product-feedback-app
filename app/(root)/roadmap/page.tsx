import { getAllNotSuggestions } from "@/lib/actions/feedback.actions";
import { notFound } from "next/navigation";
import GoBackButton from "@/components/shared/GoBackButton";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { statusList } from "@/constants";
import FeedbackListConatiner from "@/components/roadmap/FeedbackListConatiner";

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
    <div className="min-w-[375px] lg:max-w-[1100px] mx-auto">
      <header className="w-full h-[100px] sm:h-[113px] flex justify-between items-center bg-blueDark px-6 sm:px-8 sm:rounded-md">
        <div>
          <GoBackButton />
          <h1 className="text-head-3 sm:text-head-1 text-white">Roadmap</h1>
        </div>
        <Link href="/feedback/create">
          <Button variant="purple" size="md">
            + Add Feedback
          </Button>
        </Link>
      </header>
      <FeedbackListConatiner statusList={updatedStatusList} />
    </div>
  );
};

export default RoadmapPage;
