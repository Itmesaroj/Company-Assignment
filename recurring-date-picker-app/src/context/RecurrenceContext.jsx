import { createContext, useContext, useState } from "react";

const RecurrenceContext = createContext();

export function RecurrenceProvider({ children }) {
  const [recurrenceType, setRecurrenceType] = useState("daily");
  const [customInterval, setCustomInterval] = useState(1);
  const [weekDays, setWeekDays] = useState([]);
  const [pattern, setPattern] = useState({ week: 2, day: "Tuesday" });
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [generatedDates, setGeneratedDates] = useState([]);
  const [theme, setTheme] = useState("light");

  const clearAll = () => {
    setRecurrenceType("daily");
    setCustomInterval(1);
    setWeekDays([]);
    setPattern({ week: 2, day: "Tuesday" });
    setDateRange({ start: "", end: "" });
    setGeneratedDates([]);
  };

  return (
    <RecurrenceContext.Provider
      value={{
        recurrenceType,
        setRecurrenceType,
        customInterval,
        setCustomInterval,
        weekDays,
        setWeekDays,
        pattern,
        setPattern,
        dateRange,
        setDateRange,
        generatedDates,
        setGeneratedDates,
        clearAll,
        theme,
        setTheme,
      }}
    >
      {children}
    </RecurrenceContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useRecurrence = () => useContext(RecurrenceContext);
