// __tests__/GenerateDate.test.js
import generateDates from "../src/utils/GenrateDate";

describe("generateDates()", () => {
  it("generates daily recurring dates", () => {
    const dates = generateDates({
      recurrenceType: "daily",
      customInterval: 2,
      weekDays: [],
      pattern: {},
      dateRange: { start: "2025-07-01", end: "2025-07-07" },
    });

    expect(dates).toEqual([
      "2025-07-01",
      "2025-07-03",
      "2025-07-05",
      "2025-07-07",
    ]);
  });

  it("generates weekly recurring dates on specific days", () => {
    const dates = generateDates({
      recurrenceType: "weekly",
      customInterval: 1,
      weekDays: ["Monday", "Wednesday"],
      pattern: {},
      dateRange: { start: "2025-07-01", end: "2025-07-10" },
    });

    expect(dates).toContain("2025-07-02"); // Wednesday
    expect(dates).toContain("2025-07-07"); // Monday
  });

  it("generates monthly recurring dates for the second Tuesday", () => {
    const dates = generateDates({
      recurrenceType: "monthly",
      customInterval: 1,
      weekDays: [],
      pattern: { week: 2, day: "Tuesday" },
      dateRange: { start: "2025-07-01", end: "2025-09-30" },
    });

    expect(dates).toEqual([
      "2025-07-08",
      "2025-08-12",
      "2025-09-09",
    ]);
  });

  it("generates yearly recurring dates", () => {
    const dates = generateDates({
      recurrenceType: "yearly",
      customInterval: 1,
      weekDays: [],
      pattern: {},
      dateRange: { start: "2025-01-01", end: "2027-01-01" },
    });

    expect(dates).toEqual([
      "2025-01-01",
      "2026-01-01",
      "2027-01-01",
    ]);
  });
});
