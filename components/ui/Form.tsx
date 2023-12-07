import React from "react";
import { cn } from "../../lib/utils";

export interface FormWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

const FormWrapper = ({
  title,
  className,
  children,
  ...props
}: FormWrapperProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-md w-full px-6 sm:px-[42px] pt-11 sm:pt-[52px] pb-6 sm:pb-10 text-[13px] sm:text-sm",
        className
      )}
      {...props}
    >
      {title && (
        <h1 className="text-head-3 sm:text-head-1 mb-6 sm:mb-10">{title}</h1>
      )}
      {children}
    </div>
  );
};

export default FormWrapper;
