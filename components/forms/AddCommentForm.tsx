"use client";

import FormTextField from "@/components/ui/FormTextField";
import Button from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateCommentType,
  createCommentSchema,
} from "@/lib/validators/comment";
import { createComment } from "@/lib/actions/comments.actions";
import { cn } from "@/lib/utils";
import { AddCommentFormProps } from "@/lib/types";

const initialCommentLength = 250;

const AddCommentForm = ({
  feedbackId,
  replyToId,
  onReply,
}: AddCommentFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    watch,
    reset,
  } = useForm<CreateCommentType>({
    resolver: zodResolver(createCommentSchema),
  });

  const commentLength = watch("content", "").trim().length;

  let charsLeft = initialCommentLength - commentLength;
  if (charsLeft < 0) {
    charsLeft = 0;
  }

  const onSubmit = async (data: CreateCommentType) => {
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

    if (replyToId) return onReply!();
  };

  return (
    <section
      className={cn(
        "w-full",
        !replyToId &&
          "bg-white rounded-md w-full p-6 text-[13px] flex flex-col gap-6 sm:text-body-2 sm:px-8 sm:pb-8"
      )}
    >
      {!replyToId && <h1 className="text-head-3 font-semibold">Add Comment</h1>}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn(
          "flex w-full gap-4",
          replyToId ? "items-start" : "flex-col"
        )}
      >
        <FormTextField
          className="h-20 placeholder:text-[#8C92B3] placeholder:font-light text-[13px] sm:text-body-2"
          placeholder="Type your comment here"
          {...register("content")}
          error={errors.content}
        />
        <div className="flex justify-between items-center">
          {!replyToId && (
            <span className="text-gray">
              {charsLeft} Character{charsLeft === 1 ? "" : "s"} left
            </span>
          )}
          <Button
            variant="purple"
            size="md"
            disabled={isSubmitting}
            className="text-nowrap"
          >
            {isSubmitting ? "..." : replyToId ? "Post Reply" : "Post Comment"}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddCommentForm;
