import React from "react";
import { cn } from "../../lib/utils";
import GoBackButton from "./GoBackButton";
import Image from "next/image";

export interface FormWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  image: string;
}

const FormWrapper = ({
  title,
  image,
  className,
  children,
  ...props
}: FormWrapperProps) => {
  return (
    <main className="max-w-[327px] mt-[34px] sm:mt-0 sm:max-w-[540px] mx-auto">
      <GoBackButton />
      <div
        className={cn(
          "bg-white rounded-md w-full px-6 sm:px-[42px] pt-11 sm:pt-[52px] pb-6 sm:pb-10 text-[13px] sm:text-sm relative mt-10 sm:mt-[68px]",
          className
        )}
        {...props}
      >
        <Image
          src={image}
          alt={`${title} icon`}
          width={40}
          height={40}
          className="absolute -top-5 sm:-top-7 sm:w-14 sm:h-14"
        />
        {title && (
          <h1 className="text-head-3 sm:text-head-1 mb-6 sm:mb-10">{title}</h1>
        )}
        {children}
      </div>
    </main>
  );
};

export default FormWrapper;
