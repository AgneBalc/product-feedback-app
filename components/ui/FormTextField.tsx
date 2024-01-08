import React from "react";
import { cn } from "@/lib/utils";
import Label from "./Label";

export interface TextFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  description?: string;
  error: string[] | undefined;
  name: string;
}

const FormTextField = React.forwardRef<HTMLTextAreaElement, TextFieldProps>(
  ({ className, label, name, description, error, ...props }, ref) => {
    return (
      <div>
        <div className="flex flex-col gap-4 w-full">
          <Label label={label} description={description} />
          <textarea
            name={name}
            className={cn(
              "bg-grayLightest rounded-sm h-[120px] flex items-center p-4 w-full focus-visible:outline-none resize-none",
              error
                ? "border border-[#D73737]"
                : "border-none focus-visible:ring-1 focus-visible:ring-blue",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        {error && <p className="text-[#D73737]">{error}</p>}
      </div>
    );
  }
);

export default FormTextField;
