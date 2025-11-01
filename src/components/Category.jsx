import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FiX } from "react-icons/fi";
import useLocalStorage from "../hooks/useLocalStorage";

function Category({ onClose }) {
  const { setValue: setCategory } = useLocalStorage("category");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      desc: "",
    },
  });

  function onSubmit(data) {
    if (!data.title.trim()) {
      return;
    }
    setCategory(data);
    toast.success("Category added successfully!");
    reset();
  }

  return (
    <div className="relative bg-secondary-0 p-5 rounded-xl shadow-md max-w-xl w-full mx-auto">
      <header className="flex items-start justify-between mb-4">
        <h2 className="text-lg font-semibold text-secondary-700 mx-auto">
          Add a new category
        </h2>
        <button
          onClick={onClose}
          className="text-secondary-400 hover:text-secondary-600 rounded-md p-1"
        >
          <FiX />
        </button>
      </header>

      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col">
          <label htmlFor="title" className="text-sm text-secondary-600 mb-2">
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Please enter the title"
            {...register("title", { required: "Title is required" })}
            className="w-full bg-secondary-100 border border-secondary-200 focus:outline-none focus:ring-2 focus:ring-primary-300 p-3 rounded-lg"
          />
          {errors.title && (
            <span className="text-error text-sm mt-1">
              {errors.title.message}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="desc" className="text-sm text-secondary-600 mb-2">
            Description
          </label>
          <textarea
            id="desc"
            placeholder="Please enter the description"
            rows={4}
            {...register("desc")}
            className="w-full bg-secondary-100 border border-secondary-200 focus:outline-none focus:ring-2 focus:ring-primary-300 p-3 rounded-lg resize-none"
          />
        </div>

        <div className="flex gap-3 items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="btn bg-secondary-200 text-secondary-800 px-4 py-2 rounded-xl hover:opacity-90"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="btn btn--primary px-4 py-2 rounded-xl"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Category;
