import DatePicker from "@/components/DatePicker";
import { DateRange } from "react-day-picker";

export default function Dates({
  dates,
  setDates,
  offset = 5,
}: {
  dates: DateRange | undefined;
  setDates: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
  offset?: number;
}) {
  return (
    <div>
      <DatePicker
        date={dates}
        setDate={setDates}
        initialText="Check in - Check out"
        className="rounded-full flex justify-center border-gray-400 py-5 px-8 "
        offset={offset}
      />
    </div>
  );
}
