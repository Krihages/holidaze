import DatePicker from "@/components/DatePicker";
import { DateRange } from "react-day-picker";
import { State, DateAction } from "@/types/filter";
import { useState, useEffect } from "react";

export default function SelectDates({
  date,
  dispatch,
}: {
  date: DateRange | undefined;
  dispatch: React.Dispatch<DateAction>;
}) {
  const [dates, setDates] = useState<DateRange | undefined>(date);

  useEffect(() => {
    dispatch({ type: "date", payload: dates });
  }, [dates]);

  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-semibold">Check in - Check out</h2>
      <DatePicker date={dates} setDate={setDates} className="w-full" />
    </div>
  );
}
