import { cn } from "../../lib/utils";

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  title?: string;
}

const Form = ({ title, className, children, ...props }: FormProps) => {
  return (
    <form
      className={cn("bg-white rounded-md w-full px-6 pt-11 pb-6", className)}
      {...props}
    >
      {title && <h1 className="text-head-3 mb-6">{title}</h1>}
      <div className="flex flex-col gap-6 w-full">{children}</div>
    </form>
  );
};

export default Form;
