"use client";

import FormInput from "@/components/ui/FormInput";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import FormDropdown from "@/components/ui/FormDropdown";
import { categories } from "@/constants";
import FormTextField from "@/components/ui/FormTextField";
import { createFeedback } from "@/lib/actions/createFeedback";
import { useFormState } from "react-dom";

const CreateFeedbackForm = () => {
  const router = useRouter();

  const [state, formAction] = useFormState(createFeedback, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-6 w-full">
      <FormInput
        type="text"
        label="Feedback Title"
        description="Add a short, descriptive headline"
        name="title"
        error={state?.fieldErrors?.title}
      />
      <FormDropdown
        itemsList={categories.slice(1)}
        label="Category"
        description="Choose a category for your feedback"
        name="category"
      />
      <FormTextField
        label="Feedback Detail"
        description="Include any specific comments on what should be improved, added, etc."
        name="description"
        error={state?.fieldErrors?.description}
      />
      {state?.error && <p className="text-[#D73737]">{state.error}</p>}
      <div className="flex flex-col sm:flex-row sm:justify-end gap-4 mt-4 sm:mt-2">
        <Button
          variant="purple"
          size="md"
          type="submit"
          // disabled={isSubmitting}
          className="sm:order-last"
        >
          Add Feedback
        </Button>
        <Button
          variant="cancel"
          size="md"
          type="button"
          // disabled={isSubmitting}
          onClick={() => router.back()}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default CreateFeedbackForm;
