import { notFound } from "next/navigation";
import { getAllSuggestions } from "@/lib/actions/feedback.actions";
import Navbar from "@/components/navBar/Navbar";
import ActionBar from "@/components/actionBar/ActionBar";
import { Suspense } from "react";
import EmptySuggestions from "@/components/shared/EmptySuggestions";
import FeedbackCard from "@/components/feedbacks/FeedbackCard";
import { SuggestionsPageProps } from "@/lib/types";

const SuggestionsPage = async ({ searchParams }: SuggestionsPageProps) => {
  const feedbacks = await getAllSuggestions(searchParams);

  if (!feedbacks) return notFound();

  return (
    <div className="relative min-w-[375px] max-w-[1100px] mx-auto">
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
