"use client";

import React, { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Dropdown from "@/components/ui/Dropdown";
import Label from "./Label";
import { FieldError, UseFormSetValue } from "react-hook-form";

interface FormDropdownProps {
  itemsList: string[];
  label: string;
  description?: string;
  error?: FieldError;
  name: string;
  setValue: UseFormSetValue<any>;
}

const FormDropdown = React.forwardRef<HTMLDivElement, FormDropdownProps>(
  ({ itemsList, label, description, error, setValue, name }, ref) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [checked, setChecked] = useState(itemsList[0]);

    useEffect(() => {
      setValue(name, checked);
    }, [name, checked, setValue]);

    return (
      <div className="flex flex-col gap-4 w-full" ref={ref}>
        <Label label={label} description={description} />
        <div className="relative h-full flex items-center">
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
                value={checked}
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
                      setChecked(item);
                      setIsDropdownOpen(false);
                    }}
                    className="text-gray sm:text-base w-full text-left px-6 py-3 cursor-pointer hover:text-purple flex items-center justify-between"
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
        {error && <p className="text-[#D73737]">{error.message}</p>}
      </div>
    );
  }
);

export default FormDropdown;
