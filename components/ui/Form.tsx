import { cn } from "../../lib/utils";

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  title?: string;
}

const Form = ({ title, className, children, ...props }: FormProps) => {
  return (
    <form
      className={cn(
        "bg-white rounded-md w-full px-6 sm:px-[42px] pt-11 sm:pt-[52px] pb-6 sm:pb-10",
        className
      )}
      {...props}
    >
      {title && (
        <h1 className="text-head-3 sm:text-head-1 mb-6 sm:mb-10">{title}</h1>
      )}
      <div className="flex flex-col gap-6 w-full">{children}</div>
    </form>
  );
};

export default Form;
