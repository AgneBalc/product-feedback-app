import Image from "next/image";

const MobileSidebar = () => {
  return (
    <>
      <Image
        src="/shared/mobile/icon-hamburger.svg"
        alt="Menu button"
        width={20}
        height={17}
        className="block sm:hidden cursor-pointer hover:opacity-75"
      />
    </>
  );
};

export default MobileSidebar;
