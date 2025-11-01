import { useState } from "react";
import Category from "./Category";

function SubmitionSection() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsCategoryOpen(true)}
        className={`bg-primary-500 text-secondary-0 px-4 py-2 rounded-lg hover:bg-primary-400 ${
          isCategoryOpen && "hidden"
        }`}
      >
        Add a new category
      </button>

      {isCategoryOpen && <Category onClose={() => setIsCategoryOpen(false)} />}
    </div>
  );
}

export default SubmitionSection;
