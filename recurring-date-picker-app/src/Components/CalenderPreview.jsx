import { format } from "date-fns";
import { useRecurrence } from "../context/RecurrenceContext";
import { useState } from "react";

function CalendarPreview() {
  const { generatedDates, theme } = useRecurrence();
  const [visibleCount, setVisibleCount] = useState(10);

  const visibleDates = generatedDates.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <div
      className={`rounded-xl p-6 mt-6 transition-all duration-300 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white shadow"
      }`}
    >
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
        📅 Calendar Preview
      </h3>

      {generatedDates.length === 0 ? (
        <p className="italic text-gray-400">No dates generated yet.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {visibleDates.map((date, i) => (
              <div
                key={i}
                className={`rounded-lg px-4 py-3 shadow-md text-center text-sm font-medium transition-all duration-200 ${
                  theme === "dark"
                    ? "bg-blue-900 text-blue-100 hover:bg-blue-800"
                    : "bg-blue-100 text-blue-900 hover:shadow-lg"
                }`}
              >
                {format(new Date(date), "EEEE, MMM d yyyy")}
              </div>
            ))}
          </div>

          {visibleCount < generatedDates.length && (
            <div className="mt-6 text-center">
              <button
                onClick={handleLoadMore}
                className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                🔽 Load 10 More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default CalendarPreview;
