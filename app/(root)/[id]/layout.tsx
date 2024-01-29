import React from "react";
import GoBackButton from "@/components/ui/GoBackButton";
import Button from "@/components/ui/Button";

const DetailsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-w-[375px] sm:max-w-[689px] lg:max-w-[730px] mx-auto flex flex-col gap-6 p-6 sm:p-0">
      <div className="flex justify-between items-center">
        <GoBackButton />
        <Button variant="blue" size="md">
          Edit Feedback
        </Button>
      </div>
      {children}
    </main>
  );
};

export default DetailsLayout;
