import { useState } from "react";
import { useLocalStorageContext } from "../context/LocalStorageContext";
import SingleProduct from "./SingleProduct";
import Filters from "./Filters";

function ViewSection() {
  const { products, setProducts } = useLocalStorageContext();
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleDelete = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };
  return (
    <div className="bg-secondary-0 p-5 rounded-xl shadow-md max-w-xl w-full mx-auto">
      <Filters setFilteredProducts={setFilteredProducts} />
      <h2 className="font-semibold text-lg text-secondary-700 pb-4">
        Found {filteredProducts?.length || "0"} products
      </h2>
      {filteredProducts.length !== 0 && (
        <div className="flex flex-col gap-2 justify-between shadow-sm shadow-secondary-200 bg-secondary-100 max-h-[80%] rounded-lg p-2 overflow-y-auto">
          {filteredProducts.map((product) => (
            <SingleProduct
              key={product.id}
              id={product.id}
              title={product.title}
              category={product.category}
              quantity={product.quantity}
              date={product.date}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewSection;
