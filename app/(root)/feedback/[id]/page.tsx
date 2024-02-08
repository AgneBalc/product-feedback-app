import { notFound } from "next/navigation";
import FeedbackCard from "@/components/feedbacks/FeedbackCard";
import CommentsSection from "@/components/comments/CommentsSection";
import AddCommentForm from "@/components/forms/AddCommentForm";
import GoBackButton from "@/components/shared/GoBackButton";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { getFeedbackById } from "@/lib/actions/feedback.actions";
import { FeedbackPageProps } from "@/lib/types";

const FeedbackDetailPage = async ({ params }: FeedbackPageProps) => {
  const { id } = params;

  const feedback = await getFeedbackById(id);

  if (!feedback) return notFound();

  return (
    <main className="min-w-[327px] max-w-[730px] mx-auto flex flex-col gap-6 p-6 sm:p-0">
      <div className="flex justify-between items-center">
        <GoBackButton />
        <Link href={`/feedback/${feedback.id}/edit`}>
          <Button variant="blue" size="md">
            Edit Feedback
          </Button>
        </Link>
      </div>
      <section className="flex flex-col gap-6">
        <FeedbackCard feedback={feedback} isDetailPage={!!id} />
        {feedback.comments.length > 0 && (
          <section className="w-full rounded-md bg-white px-6 sm:px-8 pt-6 lg:pb-4">
            <h1 className="text-head-3 sm:-mb-1">
              {feedback.comments.length} Comment
              {feedback.comments.length > 1 && "s"}
            </h1>
            <div className="divide-y divide-[#8C92B3] divide-opacity-25">
              <CommentsSection feedbackId={feedback.id} />
            </div>
          </section>
        )}
        <AddCommentForm feedbackId={feedback.id} />
      </section>
    </main>
  );
};

export default FeedbackDetailPage;
