import { DateRange } from "react-day-picker";

interface DisabledDate {
  from: Date;
  to: Date;
}

/**
 * Creates a date selection handler for a date picker that handles disabled dates
 * @param {DisabledDate[]} disabledDates - Array of date ranges that should be disabled
 * @param {function} setTempDate - Function to set the temporary selected date range
 * @param {function} getTempDate - Function to get the current temporary date range
 * @returns {function} Handler function that manages date range selection
 * @example
 * const handleSelect = createOnSelectHandler(
 *   [{from: new Date(2024,0,1), to: new Date(2024,0,5)}],
 *   setDateRange,
 *   getDateRange
 * )
 */
export default function createOnSelectHandler(
  disabledDates: DisabledDate[],
  setTempDate: (date: DateRange | undefined) => void,
  getTempDate: () => DateRange | undefined
) {
  return (newRange: DateRange | undefined) => {
    if (newRange?.from && newRange?.to) {
      const [newFrom, newTo] = [newRange.from, newRange.to].sort(
        (a, b) => a.getTime() - b.getTime()
      );
      const hasDisabledDatesBetween = disabledDates.some(
        (range) => newFrom < range.from && newTo > range.to
      );

      if (hasDisabledDatesBetween) {
        const currentFrom = getTempDate()?.from;
        const newDate = currentFrom
          ? Math.abs(currentFrom.getTime() - newFrom.getTime()) >
            Math.abs(currentFrom.getTime() - newTo.getTime())
            ? newFrom
            : newTo
          : newTo;
        setTempDate({ from: newDate, to: undefined });
      } else {
        setTempDate({ from: newFrom, to: newTo });
      }
    } else {
      setTempDate(newRange);
    }
  };
}
