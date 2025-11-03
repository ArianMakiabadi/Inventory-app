import { FiTrash } from "react-icons/fi";

function SingleProduct({ id, title, category, date, quantity, onDelete }) {
  return (
    <div className="grid grid-cols-3 items-center gap-x-2 py-2 px-4 rounded-lg bg-secondary-0">
      <div>
        <p className="text-secondary-800 font-medium">{title}</p>
        <p className="text-xs text-secondary-500">{category}</p>
      </div>
      <div className="flex flex-row items-center gap-4 justify-self-center ">
        <span className="badge text-xs badge--primary">
          {quantity} {quantity === "1" ? "piece" : "pieces"}
        </span>
      </div>
      <div className="flex gap-4">
        <p className="text-xs text-secondary-400">
          {new Date(date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <button onClick={() => onDelete(id)} className="justify-self-end">
          <FiTrash className="text-error" />
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
