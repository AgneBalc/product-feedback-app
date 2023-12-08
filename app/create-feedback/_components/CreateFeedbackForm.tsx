"use client";

import FormInput from "@/components/ui/FormInput";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import FormDropdown from "@/components/ui/FormDropdown";
import { categories } from "@/constants";
import FormTextField from "@/components/ui/FormTextField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createFeedbackSchema,
  CreateFeedbackSchemaType,
} from "@/lib/validators/feedback";

const CreateFeedbackForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<CreateFeedbackSchemaType>({
    resolver: zodResolver(createFeedbackSchema),
    mode: "onTouched",
  });

  const router = useRouter();

  const onSubmit = (data: CreateFeedbackSchemaType) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="flex flex-col gap-6 w-full"
    >
      <FormInput
        type="text"
        label="Feedback Title"
        description="Add a short, descriptive headline"
        error={errors.title}
        {...register("title")}
      />
      <FormDropdown
        itemsList={categories.slice(1)}
        label="Category"
        description="Choose a category for your feedback"
        error={errors.category}
        {...register("category")}
      />
      <FormTextField
        label="Feedback Detail"
        description="Include any specific comments on what should be improved, added, etc."
        error={errors.description}
        {...register("description")}
      />
      <div className="flex flex-col sm:flex-row sm:justify-end gap-4 mt-4 sm:mt-2">
        <Button variant="purple" size="md" type="submit">
          Add Feedback
        </Button>
        <Button
          variant="cancel"
          size="md"
          type="button"
          onClick={() => router.back()}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default CreateFeedbackForm;
