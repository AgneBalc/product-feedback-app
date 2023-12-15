import React from "react";
import Header from "./_components/Header";

const DetailsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default DetailsLayout;
