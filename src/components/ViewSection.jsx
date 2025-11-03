import useLocalStorage from "../hooks/useLocalStorage";
import SingleProduct from "./SingleProduct";

function ViewSection() {
  const { value: products, setValue: setProducts } = useLocalStorage(
    "products",
    []
  );

  const handleDelete = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };
  return (
    <div className="bg-secondary-0 p-5 rounded-xl shadow-md max-w-xl w-full mx-auto">
      <h2 className="font-semibold text-lg text-secondary-700 pb-4">
        Found {products?.length || "0"} products
      </h2>
      {products && (
        <div className="flex flex-col gap-2 justify-between shadow-sm shadow-secondary-200 bg-secondary-100 max-h-[80%] rounded-lg p-2 overflow-y-auto">
          {products.map((product) => (
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
