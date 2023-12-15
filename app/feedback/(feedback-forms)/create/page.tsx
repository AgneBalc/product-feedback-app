import FormWrapper from "@/components/ui/Form";
import Link from "next/link";
import CreateFeedbackForm from "./_components/CreateFeedbackForm";
import Image from "next/image";
import { db } from "../../../../lib/db";

const CreateFeedbackPage = async () => {
  return (
    <FormWrapper title="Create New Feedback" className="relative mt-10">
      <Image
        src="/shared/icon-new-feedback.svg"
        alt="New feedback icon"
        width={40}
        height={40}
        className="absolute -top-5"
      />
      <CreateFeedbackForm />
    </FormWrapper>
  );
};

export default CreateFeedbackPage;
