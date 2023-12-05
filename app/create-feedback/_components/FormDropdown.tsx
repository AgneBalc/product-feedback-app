"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import FormInput from "@/components/ui/FormInput";
import Image from "next/image";
import Dropdown from "@/components/ui/Dropdown";

interface FormDropdownProps {
  itemsList: string[];
  name: string;
}

const FormDropdown = ({ itemsList, name }: FormDropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [checked, setChecked] = useState(itemsList[0]);

  return (
    <div className="relative h-full flex items-center">
      <div className="relative text-sm flex gap-2 items-center w-full">
        <Button
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          type="button"
          className="w-full"
        >
          <FormInput
            type="text"
            readOnly
            value={checked}
            name={name}
            className="cursor-pointer"
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

export default FormDropdown;
