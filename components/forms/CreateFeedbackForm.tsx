"use client";

import FormInput from "@/components/ui/FormInput";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import FormDropdown from "@/components/ui/FormDropdown";
import { categories } from "@/constants";
import FormTextField from "@/components/ui/FormTextField";
import { useForm } from "react-hook-form";
import {
  CreateFeedbackType,
  createFeedbackSchema,
} from "@/lib/validators/feedback";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFeedback } from "@/lib/actions/feedback.actions";

const CreateFeedbackForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    getValues,
    setError,
  } = useForm<CreateFeedbackType>({
    resolver: zodResolver(createFeedbackSchema),
    defaultValues: {
      title: "",
      category: "Feature",
      description: "",
    },
  });

  const onSubmit = async (data: CreateFeedbackType) => {
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
        getValues={getValues}
        {...register("category")}
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
      <div className="flex flex-col sm:flex-row sm:justify-end gap-4 mt-4 sm:mt-2">
        <Button
          variant="purple"
          size="md"
          type="submit"
          disabled={isSubmitting}
          className="sm:order-last"
        >
          Add Feedback
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
    </form>
  );
};

export default CreateFeedbackForm;
