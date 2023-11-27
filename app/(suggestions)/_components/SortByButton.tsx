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
    <>
      <div className="text-sm flex gap-2 items-center">
        <Button
          onClick={() => setIsSortOpen((prev) => !prev)}
          className="hover:opacity-75"
        >
          <p className="font-light">
            Sort by : <span className="font-semibold">{checked}</span>
          </p>
        </Button>
        {isSortOpen ? (
          <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 6l4-4 4 4"
              stroke="#FFFFFF"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        ) : (
          <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 1l4 4 4-4"
              stroke="#FFFFFF"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        )}
      </div>
      {isSortOpen && (
        <Dropdown classes="top-14 rounded-md w-64 mt-4 shadow-3xl bg-white divide-y divide-[#e1e3ea]">
          {sortItems.map((item) => {
            return (
              <div
                onClick={() => setChecked(item)}
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
    </>
  );
};

export default SortByButton;
