"use client";

import Button from "@/components/ui/Button";
import { useCallback, useState } from "react";
import { sortItems } from "@/constants";
import Dropdown from "@/components/ui/Dropdown";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SortByButton = () => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [checked, setChecked] = useState(sortItems[0]);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("sortOrder", value);

      return params.toString();
    },
    [searchParams]
  );

  const handleSort = (item: any) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("sortOrder", item.name);

    // return params.toString();
    // router.push(pathname + "?" + createQueryString(item.name))
    router.push(`${pathname}?${newParams.toString()}`);
    setChecked(item);
    setIsSortOpen(false);
  };

  return (
    <div className="relative h-full flex items-center">
      <div className="flex gap-2 items-center">
        <Button
          onClick={() => setIsSortOpen((prev) => !prev)}
          className="hover:opacity-75"
        >
          <p className="font-light">
            Sort by : <span className="font-semibold">{checked.name}</span>
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
        <Dropdown className="top-14 sm:top-[72px] rounded-md w-64 mt-4 shadow-3xl bg-white divide-y divide-[#e1e3ea]">
          {sortItems.map((item) => {
            return (
              <div
                key={item.name}
                onClick={() => handleSort(item)}
                className="text-gray text-base w-full text-left px-6 py-3 cursor-pointer hover:text-purple flex items-center justify-between"
              >
                <span>{item.name}</span>
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
