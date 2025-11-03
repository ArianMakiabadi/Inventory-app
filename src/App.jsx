import { Toaster } from "react-hot-toast";
import SubmitionSection from "./components/SubmitionSection";
import ViewSection from "./components/ViewSection";
import { LocalStorageProvider } from "./context/LocalStorageContext";

function App() {
  return (
    <>
      <Toaster />
      <div className="container grid grid-cols-2">
        <LocalStorageProvider>
          <SubmitionSection />
          <ViewSection />
        </LocalStorageProvider>
      </div>
    </>
  );
}

export default App;
