import CalendarPreview from "./Components/CalenderPreview";
import CustomOptions from "./Components/CustomOptions";
import DateRangeSelector from "./Components/DateRangeSelector";
import RecurrenceSelectorType from "./Components/RecurranceSelectortType";
import SaveButton from "./Components/SaveButton";
import { ThemeToggle } from "./Components/ThemeToggle";
import { RecurrenceProvider, useRecurrence } from "./context/RecurrenceContext";

function AppContainer() {
  const { clearAll, theme } = useRecurrence();

  return (
    <div className={`${theme === "dark" ? "dark bg-gradient-to-br from-gray-900 to-gray-800 text-white" : "bg-gradient-to-br from-blue-50 to-purple-100 text-gray-900"} min-h-screen font-[Inter]`}>
      <div className="max-w-4xl mx-auto p-6">
        <ThemeToggle />
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
          <h1 className="text-3xl font-bold text-center mb-6">🔁 Recurring Date Picker</h1>
          <RecurrenceSelectorType />
          <CustomOptions />
          <DateRangeSelector />
          <SaveButton />
          <CalendarPreview />
          <button
            onClick={clearAll}
            className="mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
          >
            🔄 Clear All
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <RecurrenceProvider>
      <AppContainer />
    </RecurrenceProvider>
  );
}

export default App;
