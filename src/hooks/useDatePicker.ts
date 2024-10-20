import { useState, useCallback } from "react";
import { DateRange } from "react-day-picker";
import {
  isBefore,
  isWithinInterval,
  startOfDay,
  differenceInDays,
} from "date-fns";

type UseDatePickerProps = {
  disabledDates: { from: Date; to: Date }[];
  initialDate?: DateRange;
  setDate?: (date: DateRange | undefined) => void;
};

/* 
Logic 
*/

export default function useDatePicker({
  disabledDates,
  initialDate,
  setDate,
}: UseDatePickerProps) {
  const today = startOfDay(new Date());
  const [tempDate, setTempDate] = useState<DateRange | undefined>(initialDate);
  const [open, setOpen] = useState(false);

  const disabledDays = useCallback(
    (day: Date) => {
      if (isBefore(day, today)) {
        return true;
      }
      return disabledDates.some((range) =>
        isWithinInterval(day, { start: range.from, end: range.to })
      );
    },
    [disabledDates]
  );

  const handleApply = () => {
    if (setDate) setDate(tempDate);
    setOpen(false);
  };
  const handleClear = () => {
    if (setDate) setDate(undefined);

    setTempDate(undefined);
    setOpen(false);
  };

  const getDays = (range: DateRange | undefined) =>
    range?.from && range?.to ? differenceInDays(range.to, range.from) : 0;

  return {
    tempDate,
    setTempDate,
    open,
    setOpen,
    disabledDays,
    handleApply,
    handleClear,
    getDays,
  };
}
