import { FiX } from "react-icons/fi";
import useOutsideClick from "../hooks/useOutsideClick";

function Modal({ open, onClose, title, children }) {
  const ref = useOutsideClick(onClose);
  return (
    open && (
      <div
        className="backdrop-blur-sm fixed top-0 left-0
        w-full h-screen bg-secondary-800 bg-opacity-30 z-50"
      >
        <div
          ref={ref}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-96 md:w-full md:max-w-lg
                     rounded-xl bg-secondary-0 p-4 shadow-lg transition-all duration-300 ease-out text-base
                     "
        >
          <div className="flex items-center justify-between pb-2 mb-4">
            <h2 className="text-lg font-semibold text-secondary-700 mx-auto">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="text-secondary-400 hover:text-error rounded-md p-1"
            >
              <FiX />
            </button>
          </div>
          <div className="whitespace-normal break-words px-2 text-left">
            {children}
          </div>
        </div>
      </div>
    )
  );
}

export default Modal;
