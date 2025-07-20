// CustomOptions.jsx
import { useRecurrence } from "../context/RecurrenceContext";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function CustomOptions() {
  const {
    recurrenceType,
    customInterval,
    setCustomInterval,
    weekDays,
    setWeekDays,
    pattern,
    setPattern,
  } = useRecurrence();

  function toggleDay(day) {
    setWeekDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  }

  return (
    <div className="mb-6 bg-white rounded-xl p-6 shadow-md">
      <div className="mb-4">
        <label className="block text-lg font-semibold text-black-700 mb-2">
          ⏱️ Repeat Every
        </label>
        <input
          type="number"
          value={customInterval}
          min={1}
          onChange={(e) => setCustomInterval(Number(e.target.value))}
          className="border border-blue-300 bg-blue-50 rounded-lg p-2 w-24 text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="ml-2 text-gray-600">
          {recurrenceType.charAt(0).toUpperCase() + recurrenceType.slice(1)}
        </span>
      </div>

      {recurrenceType === "weekly" && (
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2 text-gray-700">📅 Select Days</h3>
          <div className="flex flex-wrap gap-2">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => toggleDay(day)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200
                  ${
                    weekDays.includes(day)
                      ? "bg-gradient-to-r from-blue-600 to-purple-500 text-white shadow"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }
                `}
              >
                {day.slice(0, 3)}
              </button>
            ))}
          </div>
        </div>
      )}

      {recurrenceType === "monthly" && (
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-700 mb-3">📆 Monthly Pattern</h3>
          <div className="flex items-center gap-3 flex-wrap">
            <label className="flex items-center gap-2">
              <span className="text-gray-600">The</span>
              <input
                type="number"
                value={pattern.week}
                min={1}
                max={4}
                onChange={(e) =>
                  setPattern({ ...pattern, week: Number(e.target.value) })
                }
                className="border border-gray-300 rounded-md p-2 w-16 focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-gray-600">week on</span>
            </label>
            <select
              value={pattern.day}
              onChange={(e) => setPattern({ ...pattern, day: e.target.value })}
              className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            >
              {days.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
            <span className="text-gray-600">of every month</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomOptions;
