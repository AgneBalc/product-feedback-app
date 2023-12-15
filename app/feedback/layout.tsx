const FeedbackLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-[327px] mt-[34px] sm:mt-0 sm:max-w-[540px] mx-auto">
      {children}
    </main>
  );
};

export default FeedbackLayout;
