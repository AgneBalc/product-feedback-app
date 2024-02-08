import Filter from "./Filter";
import RoadmapInfo from "./RoadmapInfo";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  return (
    <nav className="lg:absolute w-full lg:w-64 sm:grid h-[72px] sm:h-auto sm:grid-cols-3 sm:gap-[10px] lg:gap-6 lg:flex lg:flex-col z-50 lg:mr-[30px] sm:relative">
      <div className="lg:h-[137px] bg-mobile lg:bg-desktop sm:bg-tablet sm:rounded-md bg-cover w-full h-full flex justify-between items-center px-6 sm:pb-6">
        <div className="flex flex-col sm:justify-end justify-center h-full text-white">
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
      </div>
      <div className="sm:grid sm:grid-cols-2 sm:col-span-2 sm:gap-[10px] hidden lg:gap-6 lg:flex lg:flex-col">
        <Filter />
        <RoadmapInfo />
      </div>
    </nav>
  );
};

export default Navbar;
