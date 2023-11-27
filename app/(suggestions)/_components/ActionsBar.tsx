import Button from "@/components/ui/Button";
import SortByButton from "./SortByButton";

const ActionsBar = () => {
  return (
    <header className="bg-blueDark w-full h-14 flex items-center text-white px-6 justify-between relative">
      <SortByButton />
      <Button variant="purple" size="md" className="text-sm font-semibold">
        + Add Feedback
      </Button>
    </header>
  );
};

export default ActionsBar;
