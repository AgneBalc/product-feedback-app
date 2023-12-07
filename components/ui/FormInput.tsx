import React from "react";
import { cn } from "@/lib/utils";
import { FieldError } from "react-hook-form";
import Label from "./Label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  description?: string;
  error?: FieldError;
}

const FormInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, description, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-4 w-full">
        <Label label={label} description={description} />
        <input
          type={type}
          className={cn(
            "bg-grayLightest border-none rounded-sm h-12 flex items-center px-6 w-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue",
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

export default FormInput;
