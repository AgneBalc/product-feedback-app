import { notFound } from "next/navigation";
import { getAllFeedbacks } from "@/lib/actions/feedback.actions";
import Navbar from "../../components/navBar/Navbar";
import ActionBar from "../../components/actionBar/ActionBar";
import { Suspense } from "react";
import EmptySuggestions from "@/components/shared/EmptySuggestions";
import FeedbackCard from "@/components/feedbacks/FeedbackCard";

const SuggestionsPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const feedbacks = await getAllFeedbacks(
    searchParams.sort,
    searchParams.filter
  );

  if (!feedbacks) return notFound();

  return (
    <div className="relative min-w-[375px] sm:max-w-[689px] lg:max-w-[1100px] mx-auto">
      <Navbar />
      <main className="sm:mt-10 lg:mt-0 lg:ml-[286px]">
        <ActionBar totalFeedbacks={feedbacks.length} />
        <section className="pt-8 sm:pt-6 px-6 sm:px-0 flex flex-col gap-4 lg:gap-5">
          <Suspense fallback={<div>Loading...</div>}>
            {feedbacks.length === 0 ? (
              <EmptySuggestions />
            ) : (
              feedbacks.map((feedback) => (
                <FeedbackCard key={feedback.id} feedback={feedback} />
              ))
            )}
          </Suspense>
        </section>
      </main>
    </div>
  );
};

export default SuggestionsPage;
