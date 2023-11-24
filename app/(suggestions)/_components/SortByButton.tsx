"use client";

import Button from "@/components/ui/Button";

const SortByButton = () => {
  return (
    <div className="text-sm flex gap-2 items-center">
      <Button className="hover:opacity-75">
        <p className="font-light">
          Sort by : <span className="font-semibold">Most Upvotes</span>
        </p>
      </Button>
      <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 1l4 4 4-4"
          stroke="#FFFFFF"
          stroke-width="2"
          fill="none"
          fill-rule="evenodd"
        />
      </svg>
    </div>
  );
};

export default SortByButton;
