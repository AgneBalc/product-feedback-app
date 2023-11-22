import Sidebar from "./_components/Sidebar";

const SuggestionsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Sidebar />
      {children}
    </main>
  );
};

export default SuggestionsLayout;
