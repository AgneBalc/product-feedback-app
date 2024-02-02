import FormWrapper from "@/components/shared/FormWrapper";
import { getFeedbackById } from "@/lib/actions/feedback.actions";
import { notFound } from "next/navigation";
import EditFeedbackForm from "@/components/forms/EditFeedbackForm";

interface EditPageProps {
  params: { id: string };
}

const EditPage = async ({ params }: EditPageProps) => {
  const { id } = params;

  const feedback = await getFeedbackById(id);

  if (!feedback) return notFound();

  return (
    <FormWrapper
      title={`Editing '${feedback.title}'`}
      image="/shared/icon-edit-feedback.svg"
    >
      <EditFeedbackForm feedback={feedback} />
    </FormWrapper>
  );
};

export default EditPage;
