import { DateRange } from "react-day-picker";

interface DisabledDate {
  from: Date;
  to: Date;
}

/* 
- This is a helper function that handles the date selection for the date picker.
- It checks if the selected dates are within any disabled dates and adjusts the selection accordingly.
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
