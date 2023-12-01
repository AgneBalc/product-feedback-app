import { cn } from "../../lib/utils";

interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {}

const FormField = ({ children, className, ...props }: FormFieldProps) => {
  return (
    <div className={cn("flex flex-col gap-4 w-full", className)} {...props}>
      {children}
    </div>
  );
};

export default FormField;
