import React from "react";
import Header from "./_components/Header";

const DetailsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-w-[375px] sm:max-w-[689px] lg:max-w-[730px] mx-auto flex flex-col gap-6 p-6 sm:p-0">
      <Header />
      {children}
    </main>
  );
};

export default DetailsLayout;
