import { useDarkMode } from "../context/DarkModeContext";

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="fixed top-0 right-5 -translate-x-1/2 z-50 flex flex-col items-center">
      {/* The entire lamp group swings together */}
      <div className="animate-swing transform-origin-top-center">
        {/* Cord */}
        <div className="w-1 h-28 bg-gray-500 dark:bg-gray-700 mx-auto"></div>

        {/* Lamp assembly */}
        <button
          onClick={toggleDarkMode}
          className="relative flex flex-col items-center"
        >
          {/* Triangular cap */}
          <div
            className={`w-0 h-0 border-l-[18px] border-r-[18px] border-b-[14px] ${
              isDarkMode
                ? "border-l-transparent border-r-transparent border-b-gray-700"
                : "border-l-transparent border-r-transparent border-b-gray-400"
            }`}
          ></div>

          {/* Lamp shade (main bulb housing) */}
          <div
            className={`relative w-20 h-12 mt-[2px] rounded-full transition-all duration-500 shadow-md ${
              isDarkMode
                ? "bg-gray-700 shadow-gray-900"
                : "bg-yellow-300 shadow-yellow-500"
            }`}
          >
            {/* Light glow & cone when ON */}
            {!isDarkMode && (
              <>
                {/* Inner glow */}
                <div className="absolute inset-0 blur-2xl bg-yellow-200 opacity-60 rounded-b-full"></div>
                {/* Downward cone of light */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 h-80 bg-gradient-to-b from-yellow-200/50 to-transparent blur-3xl"></div>
              </>
            )}
          </div>

          {/* Small bottom rim */}
          <div
            className={`w-8 h-[4px] mt-[2px] rounded-b-md ${
              isDarkMode ? "bg-gray-600" : "bg-yellow-400"
            }`}
          ></div>
        </button>
      </div>
    </div>
  );
}
