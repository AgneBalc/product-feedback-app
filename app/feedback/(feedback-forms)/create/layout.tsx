import GoBackButton from "@/components/ui/GoBackButton";

const FeedbackFormLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <GoBackButton />
      {children}
    </div>
  );
};

export default FeedbackFormLayout;
