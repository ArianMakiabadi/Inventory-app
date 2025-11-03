import { Toaster } from "react-hot-toast";
import SubmitionSection from "./components/SubmitionSection";
import ViewSection from "./components/ViewSection";
import { LocalStorageProvider } from "./context/LocalStorageContext";
import DarkModeToggle from "./components/DarkModeToggle";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <>
      <Toaster />
      <DarkModeProvider>
        <LocalStorageProvider>
          <div className="container grid grid-cols-2">
            <DarkModeToggle />
            <SubmitionSection />
            <ViewSection />
          </div>
        </LocalStorageProvider>
      </DarkModeProvider>
    </>
  );
}

export default App;
