import Navbar from "./_components/Navbar";

const SuggestionsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="sm:max-w-[689px] mx-auto sm:pt-14 sm:pb-28 pb-14 lg:flex lg:gap-[30px]">
      <Navbar />
      {children}
    </main>
  );
};

export default SuggestionsLayout;
