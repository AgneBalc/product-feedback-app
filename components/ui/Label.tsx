import React from "react";
import { cn } from "@/lib/utils";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  label: string;
  description?: string;
}

const Label = ({ className, label, description, ...props }: LabelProps) => {
  return (
    <label className={cn("", className)} {...props}>
      <h3 className="text-[13px] font-bold sm:text-sm">{label}</h3>
      {description && (
        <p className="text-gray text-[13px] sm:text-sm">{description}</p>
      )}
    </label>
  );
};

export default Label;
