import { ExtendedFeedback } from "@/lib/types/db";
import FeedbackCard from "@/components/Feedback";
import { Suspense } from "react";

interface FeedbacksListProps {
  feedbacks: ExtendedFeedback[];
}

const FeedbacksList = ({ feedbacks }: FeedbacksListProps) => {
  return (
    <section className="pt-8 sm:pt-6 px-6 sm:px-0 flex flex-col gap-4 lg:gap-5">
      <Suspense fallback={<div>Loading...</div>}>
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback.id} feedback={feedback} />
        ))}
      </Suspense>
    </section>
  );
};

export default FeedbacksList;
