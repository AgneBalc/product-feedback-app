import { db } from "@/lib/db";
import Feedback from "@/components/Feedback";
import Link from "next/link";

const SuggestionsPage = async () => {
  const feedbacks = await db.post.findMany({
    where: { status: "SUGGESTIONS" },
    include: {
      comments: true,
    },
  });

  return (
    <section className="pt-8 sm:pt-6 px-6 sm:px-0 flex flex-col gap-4 lg:gap-5">
      {feedbacks.map((feedback) => (
        <Link href={`/feedback/${feedback.id}`} key={feedback.id}>
          <Feedback feedback={feedback} />
        </Link>
      ))}
    </section>
  );
};

export default SuggestionsPage;
