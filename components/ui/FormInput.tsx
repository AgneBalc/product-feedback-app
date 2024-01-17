import React from "react";
import { cn } from "@/lib/utils";
import Label from "./Label";
import { FieldError } from "react-hook-form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  error?: FieldError;
}

const FormInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, description, error, ...props }, ref) => {
    return (
      <div>
        <div className="flex flex-col gap-4 w-full">
          <Label label={label} description={description} />
          <input
            className={cn(
              "bg-grayLightest rounded-sm h-12 flex items-center px-6 w-full focus-visible:outline-none",
              error
                ? "border border-[#D73737]"
                : "border-none focus-visible:ring-1 focus-visible:ring-blue",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        {error && <p className="text-[#D73737]">{error.message}</p>}
      </div>
    );
  }
);

export default FormInput;
