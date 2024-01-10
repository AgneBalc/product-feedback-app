import React from "react";
import Header from "./_components/Header";

const DetailsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-[375px] p-6 mx-auto flex flex-col gap-6">
      <Header />
      {children}
    </main>
  );
};

export default DetailsLayout;
