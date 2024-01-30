import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "border-none inline-flex items-center justify-center transition ease-in-out duration-300 focus:outline-none rounded-md text-[13px] font-medium sm:text-head-4 tracking-[0.25px]",
  {
    variants: {
      variant: {
        light: "bg-grayLight text-blue hover:bg-[#CFD7FF] hover:text-blue",
        purple: "bg-purple text-white hover:bg-[#C75AF6]",
        blue: "bg-blue text-white hover:bg-[#7C91F9]",
        cancel: "bg-grayDark text-white hover:bg-[#656EA3]",
        red: "bg-[#D73737] text-white hover:bg-[#E98888]",
      },
      size: {
        sm: "h-[30px] px-4",
        md: "h-10 px-4 sm:h-11 sm:px-6",
        fixed: "w-[69px] h-8 pl-4 sm:pl-0 sm:h-[53px] sm:w-10 sm:pb-2",
      },
    },
  }
);

// It is our ButtonProps interafce it extends ButtonHTMLAttributes of HTMLButtonElement interface
// Also extends from class-variance-authority lastly we passed our forwarded Reference type
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  ref?: React.Ref<HTMLButtonElement>;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size, variant, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ className, variant, size }))}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
