"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Button from "../ui/Button";

const GoBackButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleGoBack = () => {
    const splitedPath = pathname.split("/");
    if (splitedPath.length === 2) {
      return router.push("/");
    } else if (splitedPath.length > 2) {
      return router.back();
    }
  };

  return (
    <Button onClick={handleGoBack} className="items-center gap-[15.666px]">
      <Image
        src="/shared/icon-arrow-left.svg"
        alt="Arrow left icon"
        width={7}
        height={10}
      />
      <span className="font-semibold text-gray hover:underline">Go Back</span>
    </Button>
  );
};

export default GoBackButton;
