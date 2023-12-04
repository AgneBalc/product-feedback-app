import React from "react";
import { cn } from "@/lib/utils";
import { Field } from "formik";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const FormInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, name, ...props }, ref) => {
    return (
      <Field
        type={type}
        name={name}
        className={cn(
          "bg-grayLightest border-none rounded-sm h-12 flex items-center px-6 w-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

export default FormInput;
