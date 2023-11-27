import Filter from "./Filter";
import RoadmapInfo from "./RoadmapInfo";
import Logo from "./Logo";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  return (
    <nav className="lg:fixed w-full sm:max-w-[689px] lg:w-64 sm:grid h-[72px] sm:h-auto sm:grid-cols-3 sm:gap-[10px] lg:gap-6 lg:flex lg:flex-col z-50 lg:mr-[30px] relative">
      <Logo />
      <MobileSidebar />
      <div className="sm:grid sm:grid-cols-2 sm:col-span-2 sm:gap-[10px] hidden lg:gap-6 lg:flex lg:flex-col">
        <Filter />
        <RoadmapInfo />
      </div>
    </nav>
  );
};

export default Navbar;
