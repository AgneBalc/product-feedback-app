import { categories } from "@/constants/categories";
import Button from "@/components/ui/Button";

interface FilterProps {
  onCloseMenu?: () => void;
}

const Filter = ({ onCloseMenu }: FilterProps) => {
  return (
    <div className="rounded-md bg-white p-6 flex gap-x-2 gap-y-3.5 flex-wrap lg:col-span-3">
      {categories.map((categoty) => (
        <Button key={categoty} size="sm" variant="light" onClick={onCloseMenu}>
          <span className="text-body-3">{categoty}</span>
        </Button>
      ))}
    </div>
  );
};

export default Filter;
