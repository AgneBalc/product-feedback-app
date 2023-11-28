"use client";

import Button from "@/components/ui/Button";
import { useState } from "react";
import { sortItems } from "@/constants/categories";
import Dropdown from "@/components/ui/Dropdown";
import Image from "next/image";

const SortByButton = () => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [checked, setChecked] = useState("Most Upvotes");

  return (
    <div className="relative h-full flex items-center">
      <div className="text-sm flex gap-2 items-center">
        <Button
          onClick={() => setIsSortOpen((prev) => !prev)}
          className="hover:opacity-75"
        >
          <p className="font-light">
            Sort by : <span className="font-semibold">{checked}</span>
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
        />
      </div>
      {isSortOpen && (
        <Dropdown classes="top-14 sm:top-[72px] rounded-md w-64 mt-4 shadow-3xl bg-white divide-y divide-[#e1e3ea]">
          {sortItems.map((item) => {
            return (
              <div
                key={item}
                onClick={() => {
                  setChecked(item);
                  setIsSortOpen(false);
                }}
                className="text-gray text-base w-full text-left px-6 py-3 cursor-pointer hover:text-purple flex items-center justify-between"
              >
                <span>{item}</span>
                {checked === item && (
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
