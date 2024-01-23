import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type UpdateQueryParamsParams = {
  params: string;
  name: string;
  value: string;
};

export const updateQueryParams = ({
  params,
  name,
  value,
}: UpdateQueryParamsParams) => {
  const currentParams = new URLSearchParams(params);
  currentParams.set(name, value);

  return `?${currentParams.toString()}`;
};
