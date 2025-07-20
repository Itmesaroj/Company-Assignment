import { useRecurrence } from "../context/RecurrenceContext";

export function ThemeToggle() {
  const { theme, setTheme } = useRecurrence();
  const isDark = theme === "dark";

  return (
    <div className="flex justify-end p-4">
      <div
        className={`relative w-20 h-9 rounded-full flex items-center transition-colors duration-300 cursor-pointer border-2 ${
          isDark ? "bg-purple-700 border-purple-400" : "bg-yellow-300 border-yellow-500"
        }`}
        onClick={() => setTheme(isDark ? "light" : "dark")}
      >
        <div
          className={`absolute top-0.5 left-0.5 w-7 h-7 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
            isDark ? "translate-x-11" : ""
          }`}
        />
        <span className="absolute left-2 text-xs">🌞</span>
        <span className="absolute right-2 text-xs">🌙</span>
      </div>
    </div>
  );
}
