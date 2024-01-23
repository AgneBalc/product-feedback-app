import Button from "@/components/ui/Button";
import SortByButton from "./SortByButton";
import Image from "next/image";
import Link from "next/link";

interface ActionBarProps {
  totalFeedbacks: number;
}

const ActionBar = ({ totalFeedbacks }: ActionBarProps) => {
  return (
    <header className="bg-blueDark w-full h-14 sm:h-[72px] flex items-center text-white px-6 sm:pr-3 lg:pr-4 justify-between sm:rounded-md">
      <div className="flex gap-[38px] items-center">
        <div className="sm:flex gap-4 hidden items-center">
          <Image
            src="/suggestions/icon-suggestions.svg"
            alt="Bulb icon"
            width={23}
            height={24}
          />
          <h3 className="text-head-3">
            {totalFeedbacks} Suggestion{totalFeedbacks !== 1 && "s"}
          </h3>
        </div>
        <SortByButton />
      </div>
      <Link href="/feedback/create">
        <Button variant="purple" size="md">
          + Add Feedback
        </Button>
      </Link>
    </header>
  );
};

export default ActionBar;
