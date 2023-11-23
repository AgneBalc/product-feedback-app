import { categories } from "@/constants/categories";
import Button from "@/components/ui/Button";

const Filter = () => {
  return (
    <div className="rounded-md bg-white p-6 flex gap-x-2 gap-y-3.5 flex-wrap">
      {categories.map((categoty) => (
        <Button key={categoty} size="sm" variant="light">
          <span className="text-body-3">{categoty}</span>
        </Button>
      ))}
    </div>
  );
};

export default Filter;
