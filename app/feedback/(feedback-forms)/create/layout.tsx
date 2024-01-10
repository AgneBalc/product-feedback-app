import GoBackButton from "@/components/ui/GoBackButton";

const FeedbackFormLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-[327px] mt-[34px] sm:mt-0 sm:max-w-[540px] mx-auto">
      <GoBackButton />
      {children}
    </main>
  );
};

export default FeedbackFormLayout;
