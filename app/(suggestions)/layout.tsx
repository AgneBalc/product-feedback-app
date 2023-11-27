import Navbar from "./_components/Navbar";

const SuggestionsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-w-[375px] sm:max-w-[689px] lg:max-w-[1100px] mx-auto sm:pt-14 sm:pb-28 sm:px-4 pb-14 relative">
      <Navbar />
      <div className="sm:mt-10 lg:mt-0 lg:ml-[286px]">{children}</div>
    </main>
  );
};

export default SuggestionsLayout;
