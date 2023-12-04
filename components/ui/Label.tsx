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
      <h3 className="font-bold">{label}</h3>
      {description && <p className="text-gray">{description}</p>}
    </label>
  );
};

export default Label;
