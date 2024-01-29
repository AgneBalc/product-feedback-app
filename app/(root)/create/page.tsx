import FormWrapper from "@/components/ui/Form";
import CreateFeedbackForm from "../../../components/forms/CreateFeedbackForm";

const CreateFeedbackPage = async () => {
  return (
    <FormWrapper
      title="Create New Feedback"
      image="/shared/icon-new-feedback.svg"
    >
      <CreateFeedbackForm />
    </FormWrapper>
  );
};

export default CreateFeedbackPage;
