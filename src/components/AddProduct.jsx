import { useForm } from "react-hook-form";
import useLocalStorage from "../hooks/useLocalStorage";

function AddProduct({ setIsCategoryOpen }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      category: "",
    },
  });

  const onSubmit = (data) => {
    const newProduct = {
      ...data,
      date: new Date().toISOString(),
      id: new Date().toISOString(),
    };
    console.log(newProduct);
    setProduct((prev = []) => [...prev, newProduct]);
    reset();
  };

  const { value: categories } = useLocalStorage("category");
  const { setValue: setProduct } = useLocalStorage("products", []);
  return (
    <div className="bg-secondary-0 p-5 rounded-xl shadow-md max-w-xl w-full mx-auto">
      <h2 className="font-semibold text-lg text-secondary-700 text-center">
        Add a new product
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Please enter the title"
            {...register("title", { required: "Title is required!" })}
            className="w-full"
          />
          {errors.title && (
            <span className="text-error text-sm mt-1">
              {errors.title.message}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="quantity">quantity</label>
          <input
            id="quantity"
            type="number"
            placeholder="Please enter the quantity"
            {...register("quantity", {
              validate: (value) => Number(value) > 0 || "Quantity cannot be 0!",
            })}
            className="w-full"
          />
          {errors.quantity && (
            <span className="text-error text-sm mt-1">
              {errors.quantity.message}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            {...register("category", { required: "category is required!" })}
            className={`${watch("category") === "" && "text-secondary-400"}`}
          >
            <option value="" disabled hidden>
              Please select a category
            </option>
            {categories.map((category) => (
              <option key={category.title} value={category.title}>
                {category.title}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={() => setIsCategoryOpen(true)}
            className="text-xs text-secondary-400 pt-1 underline cursor-pointer self-start"
          >
            Add a new category?
          </button>
          {errors.category && (
            <span className="text-error text-sm mt-1">
              {errors.category.message}
            </span>
          )}
        </div>
        <button type="submit" className="btn btn--primary">
          submit
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
