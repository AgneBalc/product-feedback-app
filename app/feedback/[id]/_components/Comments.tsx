import Image from "next/image";
import React from "react";
import Button from "@/components/ui/Button";

const Comments = () => {
  return (
    <div className="w-full rounded-md bg-white p-6">
      <h1 className="text-head-3">Comments</h1>
      <div className="flex flex-col gap-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <Image
              src="/user-images/image-elijah.jpg"
              alt="image-elijah"
              width={40}
              height={40}
              className="rounded-[40px]"
            />
            <div className="text-[13px]">
              <h4 className="font-bold">Elijah Moss</h4>
              <span className="text-gray">@hexagon.bestagon</span>
            </div>
          </div>
          <Button className="text-blue hover:underline">Reply</Button>
        </div>
        <p className="text-gray text-[13px]">
          Also, please allow styles to be applied based on system preferences. I
          would love to be able to browse Frontend Mentor in the evening after
          my device’s dark mode turns on without the bright background it
          currently has.
        </p>
      </div>
    </div>
  );
};

export default Comments;
