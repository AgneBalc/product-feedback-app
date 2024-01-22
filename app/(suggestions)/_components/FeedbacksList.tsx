import { ExtendedFeedback } from "@/lib/types/db";
import FeedbackCard from "@/components/Feedback";

interface FeedbacksListProps {
  feedbacks: ExtendedFeedback[];
}

const FeedbacksList = ({ feedbacks }: FeedbacksListProps) => {
  return (
    <section className="pt-8 sm:pt-6 px-6 sm:px-0 flex flex-col gap-4 lg:gap-5">
      {feedbacks.map((feedback) => (
        <FeedbackCard key={feedback.id} feedback={feedback} />
      ))}
    </section>
  );
};

export default FeedbacksList;
