import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLocalStorageContext } from "../context/LocalStorageContext";

function Category({ onClose }) {
  const { setCategories } = useLocalStorageContext();

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
    setCategories((prev) => [...prev, data]);
    toast.success("Category added successfully!");
    reset();
    setTimeout(() => {
      onClose();
    }, 100);
  }

  return (
    <div className="relative bg-secondary-0 rounded-xl max-w-xl w-full mx-auto">
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
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <span className="text-error text-sm mt-1">
              {errors.title.message}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="desc">Description</label>
          <textarea
            id="desc"
            placeholder="Please enter the description"
            rows={4}
            {...register("desc")}
            className="resize-none"
          />
        </div>

        <div className="flex gap-3 items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="btn btn--secondary  px-4 py-2 rounded-xl"
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
