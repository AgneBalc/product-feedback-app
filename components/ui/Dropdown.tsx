import { cn } from "../../lib/utils";

interface DropdownProps {
  children: React.ReactNode;
  classes?: string;
}

const Dropdown = ({ children, classes, ...props }: DropdownProps) => {
  return (
    <div
      className={cn("animate-in fade-in-25 absolute z-50", classes)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Dropdown;
