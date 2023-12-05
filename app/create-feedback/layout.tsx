import GoBackButton from "@/components/ui/GoBackButton";

const CreateFeedbackLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[327px] mt-[34px] sm:mt-0 sm:max-w-[540px] mx-auto">
      <GoBackButton />
      {children}
    </div>
  );
};

export default CreateFeedbackLayout;
