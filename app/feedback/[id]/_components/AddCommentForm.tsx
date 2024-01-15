import React from "react";
import FormWrapper from "@/components/ui/Form";
import FormTextField from "@/components/ui/FormTextField";
import Button from "@/components/ui/Button";

const AddCommentForm = () => {
  return (
    <FormWrapper title="Add Comment" className="p-6">
      <form className="flex flex-col gap-4 w-full">
        <FormTextField
          name="comment"
          error={undefined}
          className="h-20 placeholder:text-[#8C92B3]"
          placeholder="Type your comment here"
        />
        <div className="flex justify-between items-center">
          <span className="text-gray">250 Characters left</span>
          <Button variant="purple" size="md">
            Post Comment
          </Button>
        </div>
      </form>
    </FormWrapper>
  );
};

export default AddCommentForm;
