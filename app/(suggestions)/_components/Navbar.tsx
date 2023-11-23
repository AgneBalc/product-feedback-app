import Image from "next/image";
import Filter from "./Filter";
import RoadmapInfo from "./RoadmapInfo";
import Logo from "./Logo";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  return (
    <nav className="relative">
      <Logo />
      <MobileSidebar />
      <Filter />
      <RoadmapInfo />
    </nav>
  );
};

export default Navbar;
