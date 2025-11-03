import { Toaster } from "react-hot-toast";
import SubmitionSection from "./components/SubmitionSection";
import ViewSection from "./components/ViewSection";
import DarkModeToggle from "./components/DarkModeToggle";
import Providers from "./components/Providers";

function App() {
  return (
    <>
      <Toaster />
      <Providers>
        <div className="container grid grid-cols-2">
          <DarkModeToggle />
          <SubmitionSection />
          <ViewSection />
        </div>
      </Providers>
    </>
  );
}

export default App;
