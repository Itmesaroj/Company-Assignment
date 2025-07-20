import { useRecurrence } from "../context/RecurrenceContext";
import generateDates from "../utils/GenrateDate";

function SaveButton() {
  const {
    recurrenceType,
    customInterval,
    weekDays,
    pattern,
    dateRange,
    setGeneratedDates,
  } = useRecurrence();

  const handleClick = () => {
    const dates = generateDates({
      recurrenceType,
      customInterval,
      weekDays,
      pattern,
      dateRange,
    });
    setGeneratedDates(dates);
  };

  return (
    <div className="mt-4 flex gap-4">
      <button
        onClick={handleClick}
        className="bg-green-500 text-white py-2 px-5 rounded-lg hover:bg-green-600 shadow"
      >
        ✅ Save & Generate
      </button>
    </div>
  );
}

export default SaveButton;
