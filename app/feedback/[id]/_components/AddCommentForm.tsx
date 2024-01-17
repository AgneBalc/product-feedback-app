"use client";

import React from "react";
import FormTextField from "@/components/ui/FormTextField";
import Button from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateCommentType,
  createCommentSchema,
} from "@/lib/validators/comment";
import { createComment } from "@/lib/actions/createComment";

interface AddCommentForm {
  feedbackId: string;
  replyToId?: string;
}

const AddCommentForm = ({ feedbackId, replyToId }: AddCommentForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<CreateCommentType>({
    resolver: zodResolver(createCommentSchema),
  });

  const onSubmit = async (data: CreateCommentType) => {
    // console.log(data);
    const response = await createComment({
      formData: data,
      feedbackId,
      replyToId,
    });

    if (response?.error) {
      setError("root", {
        type: "server",
        message: response.error,
      });
    }
    reset();
  };

  return (
    <section className="bg-white rounded-md w-full p-6 text-[13px] flex flex-col gap-6 sm:text-body-2 sm:px-8 sm:pb-8">
      <h1 className="text-head-3 font-semibold">Add Comment</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full"
      >
        <FormTextField
          className="h-20 placeholder:text-[#8C92B3] placeholder:font-light"
          placeholder="Type your comment here"
          {...register("content")}
          error={errors.content}
        />
        <div className="flex justify-between items-center">
          <span className="text-gray">250 Characters left</span>
          <Button variant="purple" size="md">
            Post Comment
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddCommentForm;
