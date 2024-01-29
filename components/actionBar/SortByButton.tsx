"use client";

import Button from "@/components/ui/Button";
import { useState } from "react";
import { sortOrderList } from "@/constants";
import Dropdown from "@/components/ui/Dropdown";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SortOrderList } from "@/lib/types";
import { updateQueryParams } from "@/lib/utils";

interface SortByButtonProps {
  noSuggestions: boolean;
}

const SortByButton = ({ noSuggestions }: SortByButtonProps) => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const sortBy = searchParams.get("sort") || sortOrderList[0].name;
  const existingSortItem = sortOrderList.find((item) => item.name === sortBy);

  const handleSort = (item: SortOrderList) => {
    setIsSortOpen(false);
    const newParams = updateQueryParams({
      params: searchParams.toString(),
      name: "sort",
      value: item.name,
    });
    router.push(`${pathname}${newParams}`);
  };

  return (
    <div className="relative h-full flex items-center">
      <div className="flex gap-2 items-center">
        <Button
          onClick={() => setIsSortOpen((prev) => !prev)}
          className={noSuggestions ? "opacity-45" : "hover:opacity-75"}
          disabled={noSuggestions}
        >
          <p className="font-light">
            Sort by :{" "}
            <span className="font-semibold">
              {!existingSortItem ? sortOrderList[0].name : sortBy}
            </span>
          </p>
        </Button>
        <Image
          src={
            isSortOpen
              ? "/shared/icon-arrow-up-white.svg"
              : "/shared/icon-arrow-down-white.svg"
          }
          alt="Arrow icon"
          width={10}
          height={7}
          className={noSuggestions ? "opacity-45" : ""}
        />
      </div>
      {isSortOpen && (
        <Dropdown className="top-14 sm:top-[72px] rounded-md w-64 mt-4 shadow-3xl bg-white divide-y divide-[#e1e3ea]">
          {sortOrderList.map((item) => {
            return (
              <div
                key={item.name}
                onClick={() => handleSort(item)}
                className="text-gray text-base w-full text-left px-6 py-3 cursor-pointer hover:text-purple flex items-center justify-between"
              >
                <span>{item.name}</span>
                {sortBy === item.name && (
                  <Image
                    src="/shared/icon-check.svg"
                    alt="Check Icon"
                    width={11.032}
                    height={7.5}
                  />
                )}
              </div>
            );
          })}
        </Dropdown>
      )}
    </div>
  );
};

export default SortByButton;
