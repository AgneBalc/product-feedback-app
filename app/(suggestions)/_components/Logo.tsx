const Logo = () => {
  return (
    <div className="h-[72px] sm:w-56 sm:h-44 lg:w-64 lg:h-[137px] text-white w-full ">
      <div className="bg-mobile lg:bg-desktop sm:bg-tablet sm:rounded-md bg-cover w-full h-full flex flex-col sm:justify-end justify-center px-6 sm:pb-6">
        <h2>Frontend Mentor</h2>
        <span className="text-[13px] sm:text-base opacity-75">
          Feedback Board
        </span>
      </div>
    </div>
  );
};

export default Logo;
