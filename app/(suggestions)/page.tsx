import Feedback from "./_components/Feedbacks/Feedback";

const SuggestionsPage = async () => {
  return (
    <section className="pt-8 sm:pt-6 px-6 sm:px-0 flex flex-col gap-4 lg:gap-5">
      <Feedback />
      <Feedback />
      <Feedback />
    </section>
  );
};

export default SuggestionsPage;
