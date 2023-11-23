import Image from "next/image";
import Filter from "./Filter";
import RoadmapInfo from "./RoadmapInfo";
import Logo from "./Logo";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  return (
    <nav className="relative sm:w-56 lg:w-64 w-full">
      <Logo />
      <MobileSidebar />
      <Filter />
      <RoadmapInfo />
    </nav>
  );
};

export default Navbar;
