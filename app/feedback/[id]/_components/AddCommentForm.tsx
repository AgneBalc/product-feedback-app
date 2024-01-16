import React from "react";
import FormTextField from "@/components/ui/FormTextField";
import Button from "@/components/ui/Button";

const AddCommentForm = () => {
  return (
    <section className="bg-white rounded-md w-full p-6 text-[13px] flex flex-col gap-6 sm:text-body-2 sm:px-8 sm:pb-8">
      <h1 className="text-head-3 font-semibold">Add Comment</h1>
      <form className="flex flex-col gap-4 w-full">
        <FormTextField
          name="comment"
          error={undefined}
          className="h-20 placeholder:text-[#8C92B3] placeholder:font-light"
          placeholder="Type your comment here"
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
