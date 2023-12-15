import GoBackButton from "@/components/ui/GoBackButton";
import Button from "@/components/ui/Button";

const Header = () => {
  return (
    <div className="flex justify-between items-center mt-[-10px]">
      <GoBackButton />
      <Button variant="blue" size="md">
        Edit Feedback
      </Button>
    </div>
  );
};

export default Header;
