import FormWrapper from "@/components/ui/Form";
import CreateFeedbackForm from "./_components/CreateFeedbackForm";
import Image from "next/image";

const CreateFeedbackPage = async () => {
  return (
    <FormWrapper
      title="Create New Feedback"
      className="relative mt-10 sm:mt-[68px]"
    >
      <Image
        src="/shared/icon-new-feedback.svg"
        alt="New feedback icon"
        width={40}
        height={40}
        className="absolute -top-5 sm:-top-7 sm:w-14 sm:h-14"
      />
      <CreateFeedbackForm />
    </FormWrapper>
  );
};

export default CreateFeedbackPage;
