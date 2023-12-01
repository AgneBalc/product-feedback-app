import { cn } from "@/lib/utils";

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {}

const Dropdown = ({ children, className, ...props }: DropdownProps) => {
  return (
    <div
      className={cn("animate-in fade-in-25 absolute z-50", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Dropdown;
