import { LabelProps } from "@/lib/types";

const Label = ({ label, description }: LabelProps) => {
  return (
    <label>
      <h3 className="font-bold">{label}</h3>
      {description && <p className="text-gray">{description}</p>}
    </label>
  );
};

export default Label;
