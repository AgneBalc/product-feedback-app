"use client";

import { Formik, Form, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import FormField from "@/components/ui/FormField";
import Label from "@/components/ui/Label";
import FormInput from "@/components/ui/FormInput";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import FormDropdown from "./FormDropdown";
import { categories, status } from "@/constants";

const CreateFeedbackForm = () => {
  const router = useRouter();

  return (
    <Formik
      initialValues=""
      // validationSchema={toFormikValidationSchema(SignInFormValidator)}
      onSubmit={(values) => console.log(values)}
    >
      <Form className="flex flex-col gap-6 w-full">
        <FormField>
          <Label
            label="Feedback Title"
            description="Add a short, descriptive headline"
          />
          <FormInput type="text" name="title" />
          <ErrorMessage
            name="title"
            component="span"
            className="text-[#D73737]"
          />
        </FormField>
        <FormField>
          <Label
            label="Category"
            description="Choose a category for your feedback"
          />
          <FormDropdown itemsList={categories.slice(1)} name="category" />
        </FormField>
        <FormField>
          <Label label="Update Status" description="Change feature state" />
          <FormDropdown
            itemsList={status.map((item) => item.name)}
            name="status"
          />
        </FormField>
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
      </Form>
    </Formik>
  );
};

export default CreateFeedbackForm;
