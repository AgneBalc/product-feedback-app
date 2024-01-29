"use client";

import { categories } from "@/constants";
import Button from "@/components/ui/Button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { removeKeysFromQuery, updateQueryParams } from "@/lib/utils";

interface FilterProps {
  onCloseMenu?: () => void;
}

const Filter = ({ onCloseMenu }: FilterProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selected = searchParams.get("filter") || categories[0];

  const handleFilter = (category: string) => {
    if (onCloseMenu) {
      onCloseMenu();
    }
    let newParams = "";
    if (category !== "All") {
      newParams = updateQueryParams({
        params: searchParams.toString(),
        name: "filter",
        value: category,
      });
    } else {
      newParams = removeKeysFromQuery({
        params: searchParams.toString(),
        name: "filter",
      });
    }
    router.push(`${pathname}${newParams}`);
  };

  return (
    <div className="rounded-md bg-white p-6 flex gap-x-2 gap-y-3.5 flex-wrap">
      {categories.map((category) => (
        <Button
          key={category}
          size="sm"
          variant="light"
          onClick={() => handleFilter(category)}
          className={selected === category ? "text-white bg-blue" : ""}
        >
          <span className="text-body-3">{category}</span>
        </Button>
      ))}
    </div>
  );
};

export default Filter;
