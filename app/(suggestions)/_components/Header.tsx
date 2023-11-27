import Button from "@/components/ui/Button";
import SortByButton from "./SortByButton";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-blueDark w-full h-14 sm:h-[72px] flex items-center text-white px-6 sm:pr-3 justify-between sm:justify-start sm:gap-[38px] relative sm:rounded-md">
      <div className="sm:flex gap-4 hidden">
        <Image
          src="/suggestions/icon-suggestions.svg"
          alt="Bulb icon"
          width={23}
          height={24}
        />
        <h3>6 Suggestions</h3>
      </div>
      <SortByButton />
      <Button
        variant="purple"
        size="md"
        className="sm:absolute sm:right-3 lg:right-4"
      >
        <h4>+ Add Feedback</h4>
      </Button>
    </header>
  );
};

export default Header;
