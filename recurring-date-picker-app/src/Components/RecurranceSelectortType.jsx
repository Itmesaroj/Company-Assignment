import { useRecurrence } from "../context/RecurrenceContext";

const options = ["daily", "weekly", "monthly", "yearly"];

function RecurranceSelectortType() {
  const { recurrenceType, setRecurrenceType } = useRecurrence();

  return (
    <div className="mb-6 p-4">
      <h2 className="text-xl font-semibold mb-4">📅 Recurrence Type</h2>
      <div className="flex flex-wrap gap-3">
        {options.map((type) => (
          <button
            key={type}
            onClick={() => setRecurrenceType(type)}
            className={`capitalize px-6 py-2 rounded-full font-medium shadow-md transition-all duration-300 ease-in-out
              ${
                recurrenceType === type
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }
            `}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RecurranceSelectortType;
