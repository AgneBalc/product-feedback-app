"use client";

import React, { useRef, useState } from "react";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Dropdown from "@/components/ui/Dropdown";
import Label from "./Label";
import { FormDropdownProps } from "@/lib/types";
import useOnClickOutsite from "@/hooks/useOnClickOutsite";

const FormDropdown = React.forwardRef<HTMLInputElement, FormDropdownProps>(
  (
    { itemsList, label, description, error, setValue, name, getValues },
    ref
  ) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useOnClickOutsite(dropdownRef, () => {
      setIsDropdownOpen(false);
    });

    const selectedValue = getValues(name);

    return (
      <div className="flex flex-col gap-4 w-full">
        <Label label={label} description={description} />
        <div className="relative h-full flex items-center" ref={dropdownRef}>
          <div className="relative flex gap-2 items-center w-full">
            <Button
              onClick={() => {
                setIsDropdownOpen((prev) => !prev);
              }}
              type="button"
              className="w-full font-normal sm:font-normal sm:sm:text-body-2"
            >
              <input
                type="text"
                readOnly
                value={selectedValue}
                ref={ref}
                className="cursor-pointer bg-grayLightest border-none rounded-sm h-12 flex items-center px-6 w-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue"
              />
              <Image
                src={
                  isDropdownOpen
                    ? "/shared/icon-arrow-up-blue.svg"
                    : "/shared/icon-arrow-down-blue.svg"
                }
                alt="Arrow icon"
                width={10}
                height={7}
                className="absolute right-6"
              />
            </Button>
          </div>
          {isDropdownOpen && (
            <Dropdown className="rounded-md top-16 w-full shadow-3xl bg-white divide-y divide-[#e1e3ea]">
              {itemsList.map((item) => {
                return (
                  <div
                    key={item}
                    onClick={() => {
                      setValue(name, item);
                      setIsDropdownOpen(false);
                    }}
                    className="text-gray sm:text-base w-full text-left px-6 py-3 cursor-pointer hover:text-purple flex items-center justify-between"
                  >
                    <span>{item}</span>
                    {selectedValue === item && (
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
        {error && <p className="text-[#D73737]">{error.message}</p>}
      </div>
    );
  }
);

FormDropdown.displayName = "FormDropdown";

export default FormDropdown;
