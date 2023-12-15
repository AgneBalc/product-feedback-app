import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import Feedback from "@/components/Feedback";

interface FeedbackDetailPageProps {
  params: { id: string };
}

const FeedbackDetailPage = async ({ params }: FeedbackDetailPageProps) => {
  const { id } = params;

  const feedback = await db.post.findUnique({
    where: { id },
    include: {
      comments: true,
      author: true,
    },
  });

  if (!feedback) return notFound();

  return (
    <section className="my-6">
      <Feedback feedback={feedback} />
    </section>
  );
};

export default FeedbackDetailPage;
