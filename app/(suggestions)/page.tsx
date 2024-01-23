import { notFound } from "next/navigation";
import { getAllFeedbacks } from "@/lib/actions/feedback.actions";
import Navbar from "./_components/NavBar/Navbar";
import ActionBar from "./_components/ActionBar/ActionBar";
import FeedbacksList from "./_components/FeedbacksList";

const SuggestionsPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const feedbacks = await getAllFeedbacks(searchParams.sort);

  if (!feedbacks) return notFound();

  return (
    <div className="relative min-w-[375px] sm:max-w-[689px] lg:max-w-[1100px] mx-auto ">
      <Navbar />
      <main className="sm:mt-10 lg:mt-0 lg:ml-[286px]">
        <ActionBar />
        <FeedbacksList feedbacks={feedbacks} />
      </main>
    </div>
  );
};

export default SuggestionsPage;
