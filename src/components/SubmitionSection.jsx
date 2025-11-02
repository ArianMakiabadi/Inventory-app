import { useState } from "react";
import Category from "./Category";
import AddProduct from "./AddProduct";
import Modal from "../ui/Modal";

function SubmitionSection() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <Modal
        open={isCategoryOpen}
        onClose={() => setIsCategoryOpen(false)}
        title="Add a new category"
      >
        <Category onClose={() => setIsCategoryOpen(false)} />
      </Modal>

      <AddProduct setIsCategoryOpen={setIsCategoryOpen} />
    </div>
  );
}

export default SubmitionSection;
