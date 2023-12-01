import ActionBar from "./_components/ActionBar/ActionBar";
import Navbar from "./_components/NavBar/Navbar";

const SuggestionsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <Navbar />
      <main className="sm:mt-10 lg:mt-0 lg:ml-[286px]">
        <ActionBar />
        {children}
      </main>
    </div>
  );
};

export default SuggestionsLayout;
