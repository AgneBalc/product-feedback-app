import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";

const EmptySuggestions = () => {
  return (
    <section className="w-full rounded-md bg-white py-[76px] sm:py-28 px-6 flex flex-col items-center gap-10">
      <Image
        src={"/suggestions/illustration-empty.svg"}
        alt="illustration empty"
        width={102}
        height={108}
      />
      <div className="flex flex-col items-center gap-6 sm:w-[410px]">
        <div className="flex flex-col items-center text-center gap-[14px]">
          <h1 className="text-head-3">There is no feedback yet.</h1>
          <p className="text-gray text-[13px]">
            Got a suggestion? Found a bug that needs to be squashed? We love
            hearing about new ideas to improve our app.
          </p>
        </div>
        <Link href="/feedback/create">
          <Button variant="purple" size="md">
            + Add Feedback
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default EmptySuggestions;
