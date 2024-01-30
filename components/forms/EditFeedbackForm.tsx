"use client";

import FormInput from "@/components/ui/FormInput";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import FormDropdown from "@/components/ui/FormDropdown";
import { categories, status } from "@/constants";
import FormTextField from "@/components/ui/FormTextField";
import { useForm } from "react-hook-form";
import {
  EditFeedbackType,
  editFeedbackSchema,
} from "@/lib/validators/feedback";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFeedback } from "@/lib/actions/feedback.actions";
import { ExtendedFeedback } from "../../lib/types/db";

interface EditFeedbackForm {
  feedback: ExtendedFeedback;
}

const statusList = status.map((item) => item.name);

const EditFeedbackForm = ({ feedback }: EditFeedbackForm) => {
  const router = useRouter();

  const existingStatus = status.find(
    (stat) => stat.key === feedback.status
  )!.name;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    setError,
  } = useForm<EditFeedbackType>({
    resolver: zodResolver(editFeedbackSchema),
    defaultValues: {
      title: feedback.title,
      category: feedback.category,
      status: existingStatus,
      description: feedback.description,
    },
  });

  const onSubmit = async (data: EditFeedbackType) => {
    const response = await createFeedback(data);

    if (response?.error) {
      setError("root", {
        type: "server",
        message: response.error,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 w-full"
    >
      <FormInput
        type="text"
        label="Feedback Title"
        description="Add a short, descriptive headline"
        {...register("title")}
        error={errors.title}
      />
      <FormDropdown
        itemsList={categories.slice(1)}
        label="Category"
        description="Choose a category for your feedback"
        name="category"
        setValue={setValue}
        error={errors.category}
      />
      <FormDropdown
        itemsList={statusList}
        label="Update Status"
        description="Change feedback state"
        name="status"
        setValue={setValue}
        error={errors.category}
      />
      <FormTextField
        label="Feedback Detail"
        description="Include any specific comments on what should be improved, added, etc."
        className="h-[120px]"
        error={errors.description}
        {...register("description")}
      />
      {errors.root && <p className="text-[#D73737]">{errors.root.message}</p>}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mt-4 sm:mt-2">
        <div className="flex flex-col sm:flex-row sm:justify-end gap-4">
          <Button
            variant="purple"
            size="md"
            type="submit"
            disabled={isSubmitting}
            className="sm:order-last"
          >
            Save Changes
          </Button>
          <Button
            variant="cancel"
            size="md"
            type="button"
            disabled={isSubmitting}
            onClick={() => router.back()}
          >
            Cancel
          </Button>
        </div>
        <Button
          variant="red"
          size="md"
          type="submit"
          disabled={isSubmitting}
          className="sm:order-first"
        >
          Delete
        </Button>
      </div>
    </form>
  );
};

export default EditFeedbackForm;
