"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "./Button";

const GoBackButton = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      className="items-center gap-[15.666px]"
    >
      <Image
        src="/shared/icon-arrow-left.svg"
        alt="Arrow left icon"
        width={7}
        height={10}
      />
      <span className="text-sm font-semibold text-gray hover:underline">
        Go Back
      </span>
    </Button>
  );
};

export default GoBackButton;
