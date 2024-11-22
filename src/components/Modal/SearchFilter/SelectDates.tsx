import DatePicker from "@/components/DatePicker";
import { DateRange } from "react-day-picker";
import { DateAction } from "@/types/filter";
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
    // only updates if the dates from useState changes, since this is a separate state that is passed to the datePicker component and will be updated there
    // if the date from props changes, the datePicker component will update the dates state and this effect will trigger again
  }, [dates]);

  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-semibold">Check in - Check out</h2>
      <DatePicker
        date={dates}
        setDate={setDates}
        className="w-full "
        offset={-330}
      />
    </div>
  );
}
