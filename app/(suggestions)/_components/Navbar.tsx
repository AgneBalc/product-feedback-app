import Filter from "./Filter";
import RoadmapInfo from "./RoadmapInfo";
import Logo from "./Logo";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  return (
    <nav className="relative lg:w-64 w-full sm:grid h-[72px] sm:h-auto sm:grid-cols-3 sm:gap-[10px] lg:gap-6 lg:grid-flow-row z-50">
      <Logo />
      <MobileSidebar />
      <div className="sm:grid sm:grid-cols-2 sm:col-span-2 sm:gap-[10px] hidden lg:gap-6 lg:col-span-3 lg:grid-flow-row">
        <Filter />
        <RoadmapInfo />
      </div>
    </nav>
  );
};

export default Navbar;
