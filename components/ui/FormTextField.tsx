import React from "react";
import { cn } from "@/lib/utils";
import Label from "./Label";
import { TextFieldProps } from "@/lib/types";

const FormTextField = React.forwardRef<HTMLTextAreaElement, TextFieldProps>(
  ({ className, label, name, description, error, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-2">
        <div className="flex flex-col gap-4 w-full">
          {label && <Label label={label} description={description} />}
          <textarea
            name={name}
            className={cn(
              "bg-grayLightest rounded-sm flex items-center p-4 w-full focus-visible:outline-none resize-none",
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

FormTextField.displayName = "FormTextField";

export default FormTextField;
