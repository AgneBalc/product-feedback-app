import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "border-none inline-flex justify-center items-center transition ease-in-out duration-300 focus:outline-none rounded-md",
  {
    variants: {
      variant: {
        ghost: "bg-transparent",
        light:
          "bg-grayLight text-blue hover:bg-[#CFD7FF] active:bg-blue active:text-white",
        purple: "bg-purple text-white hover:bg-[#C75AF6]",
      },
      size: {
        sm: "h-[30px] px-4",
        md: "rounded-md h-10 px-4",
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

export default Button;
