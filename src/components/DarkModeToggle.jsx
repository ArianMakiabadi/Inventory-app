import { useDarkMode } from "../context/DarkModeContext";

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="fixed top-0 right-20 z-50 flex flex-col items-center">
      {/* Swinging lamp */}
      <div className="animate-swing transform-origin-top-center">
        {/* Cord */}
        <div className="w-1 h-28 bg-gray-500 dark:bg-gray-700 mx-auto"></div>

        {/* Lamp */}
        <button
          onClick={toggleDarkMode}
          className="relative flex flex-col items-center"
        >
          {/* Screw base */}
          <div
            className={`w-8 h-2 rounded-t-md ${
              isDarkMode ? "bg-gray-700" : "bg-gray-500"
            }`}
          ></div>

          {/* Socket cap */}
          <div
            className={`w-8 h-3 ${isDarkMode ? "bg-gray-700" : "bg-gray-400"}`}
          ></div>

          {/* Bulb */}
          <div
            className={`relative w-12 h-16 rounded-full transition-all duration-500 ${
              isDarkMode
                ? "bg-transparent border border-gray-600"
                : "bg-yellow-300 shadow-[0_0_20px_6px_rgba(255,220,120,0.3)]"
            }`}
          >
            {/* Gentle glow */}
            {!isDarkMode && (
              <div className="absolute inset-0 rounded-full bg-yellow-200 opacity-40 blur-md"></div>
            )}
          </div>

          {/* Light cone */}
          {!isDarkMode && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-40 h-48 bg-yellow-200/30 blur-2xl"></div>
          )}
        </button>
      </div>
    </div>
  );
}
