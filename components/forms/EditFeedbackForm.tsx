"use client";

import FormInput from "@/components/ui/FormInput";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import FormDropdown from "@/components/ui/FormDropdown";
import { categories, statusList } from "@/constants";
import FormTextField from "@/components/ui/FormTextField";
import { useForm } from "react-hook-form";
import {
  EditFeedbackType,
  editFeedbackSchema,
} from "@/lib/validators/feedback";
import { zodResolver } from "@hookform/resolvers/zod";
import { ExtendedFeedback } from "@/lib/types/db";
import { deleteFeedback, updateFeedback } from "@/lib/actions/feedback.actions";
import { useTransition } from "react";

interface EditFeedbackForm {
  feedback: ExtendedFeedback;
}

const statusNamesList = statusList.map((item) => item.name);

const EditFeedbackForm = ({ feedback }: EditFeedbackForm) => {
  const router = useRouter();
  let [isPending, startTransition] = useTransition();

  const existingStatus = statusList.find(
    (stat) => stat.key === feedback.status
  )!.name;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    setError,
    getValues,
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
    const response = await updateFeedback(data, feedback.id);

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
      className="flex flex-col gap-6 w-full sm:pt-9"
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
        setValue={setValue}
        getValues={getValues}
        {...register("category")}
        error={errors.category}
      />
      <FormDropdown
        itemsList={statusNamesList}
        label="Update Status"
        description="Change feedback state"
        setValue={setValue}
        getValues={getValues}
        {...register("status")}
        error={errors.status}
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
          type="button"
          disabled={isSubmitting}
          className="sm:order-first"
          onClick={() =>
            startTransition(async () => {
              await deleteFeedback(feedback.id);
            })
          }
        >
          {isPending ? "Deleting..." : "Delete"}
        </Button>
      </div>
    </form>
  );
};

export default EditFeedbackForm;
