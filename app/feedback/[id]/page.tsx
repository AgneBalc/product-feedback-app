import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import FeedbackCard from "@/components/Feedback";
import CommentsSection from "./_components/CommentsSection";

interface FeedbackDetailPageProps {
  params: { id: string };
}

const FeedbackDetailPage = async ({ params }: FeedbackDetailPageProps) => {
  const { id } = params;

  const feedback = await db.feedback.findUnique({
    where: { id },
    include: {
      comments: true,
      upvotedBy: true,
    },
  });

  if (!feedback) return notFound();

  return (
    <section className="flex flex-col gap-6">
      <FeedbackCard feedback={feedback} />
      <CommentsSection feedbackId={feedback.id} />
    </section>
  );
};

export default FeedbackDetailPage;
