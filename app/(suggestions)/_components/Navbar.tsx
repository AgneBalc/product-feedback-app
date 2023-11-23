import Image from "next/image";
import Filter from "./Filter";
import RoadmapInfo from "./RoadmapInfo";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="relative">
      <Logo />
      {/* <div className="h-[72px] sm:w-56 sm:h-44 lg:w-64 lg:h-[137px] text-white w-full">
        <div className="bg-mobile lg:bg-desktop sm:bg-tablet sm:rounded-md bg-cover w-full h-full flex justify-between sm:items-end items-center px-6 sm:pb-6">
          <div>
            <h2>Frontend Mentor</h2>
            <span className="text-[13px] sm:text-base opacity-75">
              Feedback Board
            </span>
          </div>
          <Image
            src="/shared/mobile/icon-hamburger.svg"
            alt="Menu button"
            width={20}
            height={17}
            className="block sm:hidden cursor-pointer hover:opacity-75"
          />
        </div>
      </div> */}
      <Filter />
      <RoadmapInfo />
    </nav>
  );
};

export default Navbar;
