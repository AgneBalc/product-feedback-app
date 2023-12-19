import { useState } from "react";
import Button from "./ui/Button";
import Image from "next/image";

interface UserUpvotesProps {
  initialVotesAmount: number;
  feedbackId: string;
}

const UserUpvotes = ({ initialVotesAmount, feedbackId }: UserUpvotesProps) => {
  const [votesAmount, setVotesAmount] = useState<number>(initialVotesAmount);

  return (
    <Button
      // onClick={() => setIsVoted((prev) => !prev)}
      size="fixed"
      variant="light"
      // className={`flex sm:flex-col items-center gap-[10px] justify-start sm:justify-end sm:gap-2 absolute left-6 bottom-6 sm:left-8 sm:top-7
      // ${isVoted && "bg-blue"}`}
      className={`flex sm:flex-col items-center gap-[10px] justify-start sm:justify-end sm:gap-2 absolute left-6 bottom-6 sm:left-8 sm:top-7 `}
    >
      <Image
        // src={
        //   isVoted
        //     ? "/shared/icon-arrow-up-white.svg"
        //     : "/shared/icon-arrow-up-blue.svg"
        // }
        src="/shared/icon-arrow-up-white.svg"
        alt="Arrow up icon"
        width={10}
        height={7}
      />
      <span
        // className={`text-body-3 ${isVoted ? "text-white" : "text-grayDark"}`}
        className={`text-body-3 text-grayDark`}
      >
        {votesAmount}
      </span>
    </Button>
  );
};

export default UserUpvotes;
