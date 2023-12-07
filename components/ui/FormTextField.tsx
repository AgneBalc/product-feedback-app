import React from "react";
import { cn } from "@/lib/utils";
import { Field } from "formik";

export interface TextFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const FormTextField = React.forwardRef<HTMLTextAreaElement, TextFieldProps>(
  ({ className, name, ...props }, ref) => {
    return (
      <Field
        as="textarea"
        name={name}
        className={cn(
          "bg-grayLightest border-none rounded-sm h-[120px] flex items-center p-4 w-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue resize-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

export default FormTextField;
