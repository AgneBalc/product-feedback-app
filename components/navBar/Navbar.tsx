import Filter from "./Filter";
import RoadmapInfo from "./RoadmapInfo";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  return (
    <nav className="lg:absolute w-full sm:max-w-[689px] lg:w-64 sm:grid h-[72px] sm:h-auto sm:grid-cols-3 sm:gap-[10px] lg:gap-6 lg:flex lg:flex-col z-50 lg:mr-[30px] relative">
      <div className="lg:h-[137px] text-white bg-mobile lg:bg-desktop sm:bg-tablet sm:rounded-md bg-cover w-full flex flex-col sm:justify-end justify-center px-6 sm:pb-6 h-full">
        <h1 className="text-[15px] font-semibold -tracking-[.187px] sm:text-head-2">
          Frontend Mentor
        </h1>
        <span className="text-[13px] sm:text-base opacity-75">
          Feedback Board
        </span>
      </div>
      <MobileSidebar>
        <RoadmapInfo />
      </MobileSidebar>
      <div className="sm:grid sm:grid-cols-2 sm:col-span-2 sm:gap-[10px] hidden lg:gap-6 lg:flex lg:flex-col">
        <Filter />
        <RoadmapInfo />
      </div>
    </nav>
  );
};

export default Navbar;
