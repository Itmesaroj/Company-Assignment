import { useRecurrence } from "../context/RecurrenceContext";

function DateRangeSelector() {
  const { dateRange, setDateRange } = useRecurrence();

  return (
    <div className="mb-6 p-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">📅 Date Range</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Start Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Start Date
          </label>
          <input
            type="date"
            value={dateRange.start}
            onChange={(e) =>
              setDateRange({ ...dateRange, start: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
        </div>

        {/* End Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            End Date (Optional)
          </label>
          <input
            type="date"
            value={dateRange.end}
            onChange={(e) =>
              setDateRange({ ...dateRange, end: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}

export default DateRangeSelector;
