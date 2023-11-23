import Image from "next/image";
import Button from "@/components/ui/Button";

const MobileSidebar = () => {
  return (
    <>
      <Button
        variant="ghost"
        className="block sm:hidden absolute right-6 top-7 hover:opacity-75"
      >
        <Image
          src="/shared/mobile/icon-hamburger.svg"
          alt="Menu button"
          width={20}
          height={17}
        />
      </Button>
    </>
  );
};

export default MobileSidebar;
