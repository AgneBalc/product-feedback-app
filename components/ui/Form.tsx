import React from "react";
import { cn } from "../../lib/utils";
import { Form } from "formik";

export interface FormWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  error?: string;
}

const FormWrapper = ({
  title,
  className,
  children,
  error,
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
      {error && <p className="text-[#D73737] mb-4">{error}</p>}
      {children}
    </div>
  );
};

export default FormWrapper;
