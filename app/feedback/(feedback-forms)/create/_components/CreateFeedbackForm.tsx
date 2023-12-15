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
  CreateFeedbackType,
} from "@/lib/validators/feedback";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const CreateFeedbackForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    setError,
  } = useForm<CreateFeedbackType>({
    resolver: zodResolver(createFeedbackSchema),
    mode: "onTouched",
  });

  const router = useRouter();

  const { mutate: createFeedback } = useMutation({
    mutationFn: async ({
      title,
      category,
      description,
    }: CreateFeedbackType) => {
      const { data } = await axios.post("/api/create", {
        title,
        category,
        description,
      });
      return data;
    },
    onError: () => {
      setError("root", {
        type: "server",
        message:
          "Something went wrong! Your feedback was not published. Please try again.",
      });
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });

  const onSubmit = (data: CreateFeedbackType) => {
    createFeedback({
      title: data.title,
      category: data.category,
      description: data.description,
    });
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
        error={errors.title}
        {...register("title")}
      />
      <FormDropdown
        itemsList={categories.slice(1)}
        label="Category"
        description="Choose a category for your feedback"
        error={errors.category}
        setValue={setValue}
        name={"category"}
      />
      <FormTextField
        label="Feedback Detail"
        description="Include any specific comments on what should be improved, added, etc."
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
