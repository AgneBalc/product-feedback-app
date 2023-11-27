import Button from "@/components/ui/Button";
import Image from "next/image";

const Feedback = () => {
  return (
    <div className="relative w-full rounded-md bg-white p-6 sm:px-8 sm:py-7 flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0">
      <div className="flex flex-col gap-2 sm:gap-1 sm:pl-20 hover:text-blue">
        <h2 className="text-[13px] font-bold tracking-[-0.1181px] sm:text-head-3">
          Add tags for solutions
        </h2>
        <p className="text-gray text-[13px] sm:text-base">
          Easier to search for solutions based on a specific stack.
        </p>
        <Button size="sm" variant="light" className="self-start mt-2">
          <span className="text-body-3">Enhancement</span>
        </Button>
      </div>
      <Button
        size="fixed"
        variant="light"
        className="flex sm:flex-col items-center gap-[10px] sm:justify-between sm:gap-2 absolute left-6 bottom-6 sm:left-8 sm:top-7"
      >
        <Image
          src="/shared/icon-arrow-up.svg"
          alt="Arrow up icon"
          width={8}
          height={4}
        />
        <span className="text-body-3 text-grayDark active:text-white">112</span>
      </Button>
      <div className="flex justify-end items-center">
        <Button className="flex gap-1 h-8 sm:gap-2">
          <Image
            src="/shared/icon-comments.svg"
            alt="Comments icon"
            width={18}
            height={16}
          />
          <span className="text-body-3 sm:text-base text-grayDark">2</span>
        </Button>
      </div>
    </div>
  );
};

export default Feedback;
