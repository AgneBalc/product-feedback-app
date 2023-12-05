import FormWrapper from "@/components/ui/Form";
import Link from "next/link";
import CreateFeedbackForm from "./_components/CreateFeedbackForm";

const CreateFeedbackPage = () => {
  return (
    <FormWrapper title="Create New Feedback">
      <CreateFeedbackForm />
    </FormWrapper>
  );
};

export default CreateFeedbackPage;
