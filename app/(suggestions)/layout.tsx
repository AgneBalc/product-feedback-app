import Header from "./_components/Header/Header";
import Navbar from "./_components/NavBar/Navbar";

const SuggestionsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-w-[375px] sm:max-w-[689px] lg:max-w-[1100px] mx-auto sm:pt-14 lg:pt-24 sm:pb-28 lg:pb-32 sm:px-4 pb-14 relative">
      <Navbar />
      <div className="sm:mt-10 lg:mt-0 lg:ml-[286px]">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default SuggestionsLayout;
