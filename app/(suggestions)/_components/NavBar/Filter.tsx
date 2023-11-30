"use client";

import { categories } from "@/constants";
import Button from "@/components/ui/Button";
import { useState } from "react";

interface FilterProps {
  onCloseMenu?: () => void;
}

const Filter = ({ onCloseMenu }: FilterProps) => {
  const [selected, setSelected] = useState(categories[0]);

  return (
    <div className="rounded-md bg-white p-6 flex gap-x-2 gap-y-3.5 flex-wrap">
      {categories.map((category) => (
        <Button
          key={category}
          size="sm"
          variant="light"
          onClick={() => {
            setSelected(category);
            if (onCloseMenu) {
              onCloseMenu();
            }
          }}
          className={selected === category ? "text-white bg-blue" : ""}
        >
          <span className="text-body-3">{category}</span>
        </Button>
      ))}
    </div>
  );
};

export default Filter;
