import { db } from "@/lib/db";
import FeedbackCard from "@/components/Feedback";
import { notFound } from "next/navigation";

const SuggestionsPage = async () => {
  const feedbacks = await db.feedback.findMany({
    where: { status: "SUGGESTIONS" },
    include: {
      comments: true,
      upvotedBy: true,
    },
  });

  if (!feedbacks) return notFound();

  return (
    <section className="pt-8 sm:pt-6 px-6 sm:px-0 flex flex-col gap-4 lg:gap-5">
      {feedbacks.map((feedback) => (
        <FeedbackCard key={feedback.id} feedback={feedback} />
      ))}
    </section>
  );
};

export default SuggestionsPage;
