import { Toaster } from "react-hot-toast";
import SubmitionSection from "./components/SubmitionSection";

function App() {
  return (
    <div className="container grid grid-cols-2">
      <Toaster />
      <SubmitionSection />
    </div>
  );
}

export default App;
