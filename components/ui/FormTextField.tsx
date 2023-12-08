import React from "react";
import { cn } from "@/lib/utils";
import Label from "./Label";
import { FieldError } from "react-hook-form";

export interface TextFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  description?: string;
  error?: FieldError;
}

const FormTextField = React.forwardRef<HTMLTextAreaElement, TextFieldProps>(
  ({ className, label, description, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-4 w-full">
        <Label label={label} description={description} />
        <textarea
          className={cn(
            "bg-grayLightest border-none rounded-sm h-[120px] flex items-center p-4 w-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue resize-none",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="text-[#D73737]">{error.message}</p>}
      </div>
    );
  }
);

export default FormTextField;
