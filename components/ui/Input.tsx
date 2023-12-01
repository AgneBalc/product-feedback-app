import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ className, type, ...props }: InputProps) => {
  return (
    <input
      type={type}
      className={cn(
        "bg-grayLightest border-none rounded-sm h-12 flex items-center px-6 w-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue",
        className
      )}
      {...props}
    />
  );
};

export default Input;
