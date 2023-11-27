"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { useState } from "react";
import Filter from "./Filter";
import RoadmapInfo from "./RoadmapInfo";
import Dropdown from "../../../../components/ui/Dropdown";

const MobileSidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleModal = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <Button
        variant="ghost"
        className="block sm:hidden absolute right-6 top-7 hover:opacity-75"
        onClick={toggleModal}
      >
        {isMenuOpen ? (
          <Image
            src="/shared/mobile/icon-close.svg"
            alt="Menu close button"
            width={16.263}
            height={16.263}
          />
        ) : (
          <Image
            src="/shared/mobile/icon-hamburger.svg"
            alt="Menu button"
            width={20}
            height={17}
          />
        )}
      </Button>
      {isMenuOpen && (
        <div className="bg-black bg-opacity-50 left-0 right-0 bottom-0 fixed top-[72px] animate-in fade-in-25">
          <Dropdown classes="right-0 w-[271px] h-full bg-grayLightest p-6 flex flex-col gap-6 top-0">
            <Filter onCloseMenu={handleCloseMenu} />
            <RoadmapInfo onCloseMenu={handleCloseMenu} />
          </Dropdown>
        </div>
      )}
    </>
  );
};

export default MobileSidebar;
