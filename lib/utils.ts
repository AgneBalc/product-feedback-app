import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type UpdateQueryParamsProps = {
  params: string;
  name: string;
  value: string;
};

export const updateQueryParams = ({
  params,
  name,
  value,
}: UpdateQueryParamsProps) => {
  const currentParams = new URLSearchParams(params);
  currentParams.set(name, value);

  return `?${currentParams.toString()}`;
};

type RemoveKeysFromQueryProps = {
  params: string;
  name: string;
};

export function removeKeysFromQuery({
  params,
  name,
}: RemoveKeysFromQueryProps) {
  const currentParams = new URLSearchParams(params);
  currentParams.delete(name);

  return `?${currentParams.toString()}`;
}
