import { Toaster } from "react-hot-toast";
import SubmitionSection from "./components/SubmitionSection";
import ViewSection from "./components/ViewSection";

function App() {
  return (
    <div className="container grid grid-cols-2">
      <Toaster />
      <SubmitionSection />
      <ViewSection />
    </div>
  );
}

export default App;
